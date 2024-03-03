const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const axios = require("axios");
require("dotenv").config(); //get api key from .env
const app = express();
const port = 3000;
app.use(bodyParser.json());

//EXPRESS SERVER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// MONGODB SETUP
const uri =
  "mongodb+srv://sydsedloff:4IEmnJKSndMy3akX@cluster0.4xnd6vq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
run();
const db = client.db("FoodVenture");
const collection = db.collection("Profiles");

// Allow requests only from the specified origin/Port issues
const corsOptions = {
  origin: "http://localhost:19006",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// API
app.get("/api/searchRestaurants", async (req, res) => {
  const term = req.query.term;
  const location = "Orlando";

  try {
    const response = await axios.get(
      "https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20",
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
        params: {
          term,
          location,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error searching restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/searchRestaurants/:userSearch", async (req, res) => {
  const term = req.query.term;
  const location = "Orlando";

  try {
    const response = await axios.get(
      "https://api.yelp.com/v3/businesses/search",
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
        params: {
          term,
          location,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error searching restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/*
 HTTP REQUESTS
*/

// GET PROFILES
app.get("/api/fakeProfiles", async (req, res) => {
  const fakeProfiles = await collection.find({}).toArray();
  res.json(fakeProfiles);
});
// GET USER PROFILE PICTURE
app.get("/api/profilePicture/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail; // Extract userEmail from request parameters
  const user = await collection.findOne({ email: userEmail });
  if (user && user.profilePicture) {
    res.json({ profilePicture: user.profilePicture });
  } else {
    console.log("Profile picture not found for user:", userEmail);
    res.status(404).json({ error: "Profile picture not found" });
  }
});

//GET USER ID
app.get("/api/userID", async (req, res) => {
  const { email } = req.query; // Assuming you're fetching the user ID based on email
  const user = await collection.findOne({ email }); // Query the database based on email
  if (user) {
    res.json({ _id: user._id }); // Respond with the user ID if found
  } else {
    console.log("User not found");
  }
});

//UPDATE DIETARY RESTRICTIONS
app.put("/dietaryRestrictions/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail;
  const newDietaryRestrictions = req.body.dietaryRestrictions;

  try {
    const result = await collection.findOneAndUpdate(
      { email: userEmail },
      { $set: { dietaryRestrictions: newDietaryRestrictions } },
      { returnOriginal: false } // To return the updated document
    );

    if (result.value) {
      res.json(result.value);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating dietary restrictions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/fakeProfiles", async (req, res) => {
  const newUser = req.body;
  const result = await collection.insertOne(newUser);
  if (result.ops && result.ops.length > 0) {
    res.json(result.ops[0]);
  } else {
    console.log("Failed to add profile at POST /api/fakeProfiles");
  }
});

//GET USER DATA BASED ON EMAIL
app.get("/api/userData/:email", async (req, res) => {
  const userEmail = req.params.email;
  try {
    const user = await collection.findOne({ email: userEmail });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// UPDATE USER DATA
app.put("/api/userData/:email", async (req, res) => {
  const userEmail = req.params.email;
  const updatedUserData = req.body;

  try {
    const result = await collection.findOneAndUpdate(
      { email: userEmail },
      { $set: updatedUserData }
    );

    if (result.value) {
      res.json(result.value);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user data:", error);
  }
});
