const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");
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
  const { term = "", ...filters } = req.query;
  const location = "Orlando"; // You might want to make this dynamic based on user location

  // Dynamically construct the term based on the selected filters
  let modifiedTerm = term;
  Object.entries(filters).forEach(([key, value]) => {
    if (value === "true" && key.startsWith("is")) {
      // Extract the filter name (e.g., "Deli" from "isDeli")
      const filterName = key.slice(2);
      // Append the filter name to the term, separated by commas
      modifiedTerm += `,${filterName.toLowerCase()}`;
    }
  });

  modifiedTerm += ",food";
  console.log("Searching for: ", modifiedTerm);

  try {
    const response = await axios.get(
      "https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=50",
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
        params: {
          term: modifiedTerm,
          location,
          // Note: Other filters are not directly supported by the Yelp API in this manner
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

//LOGIN
app.get("/api/login", async (req, res) => {
  const { email, password } = req.query;

  try {
    const user = await collection.findOne({ email, password });

    if (user) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET PROFILES
app.get("/api/fakeProfiles", async (req, res) => {
  const fakeProfiles = await collection.find({}).toArray();
  res.json(fakeProfiles);
});

// GET USER PROFILE PICTURE
app.get("/api/profilePicture/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail;
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
  const { email } = req.query;
  const user = await collection.findOne({ email });
  if (user) {
    res.json({ _id: user._id });
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
      { returnOriginal: false }
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
//UPDATE PROFILE PICTURE

app.put("/profilePicture/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail;

  const newProfilePicture = req.body.profilePicture;

  try {
    const result = await collection.findOneAndUpdate(
      { email: userEmail },

      { $set: { profilePicture: newProfilePicture } },

      { returnOriginal: false }
    );

    if (result.value) {
      res.json(result.value);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating profile picture:", error);

    res.status(500).json({ error: "Internal server error" });
  }
});

//SAVE RESTAURANT
app.post("/api/saveRestaurant/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail;
  const savedRestaurant = req.body.savedRestaurant;

  try {
    const result = await collection.findOneAndUpdate(
      { email: userEmail },
      { $push: { savedRestaurants: savedRestaurant } },
      { returnOriginal: false }
    );

    if (result.value) {
      res
        .status(200)
        .json({ message: "Restaurant saved successfully", user: result.value });
    }
  } catch (error) {
    console.log("Error saving restaurant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UNSAVE RESTAURANT
app.delete(
  "/api/unsaveRestaurant/:userEmail/:restaurantId",
  async (req, res) => {
    const userEmail = req.params.userEmail;
    const restaurantId = req.params.restaurantId;

    try {
      const result = await collection.findOneAndUpdate(
        { email: userEmail },
        { $pull: { savedRestaurants: { restaurantId: restaurantId } } },
        { returnOriginal: false }
      );

      if (result.value) {
        res
          .status(200)
          .json({
            message: "Restaurant unsaved successfully",
            user: result.value,
          });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.log("Error unsaving restaurant:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// CHECK IF RESTAURANT IS SAVED
app.get(
  "/api/checkSavedRestaurant/:userEmail/:restaurantId",
  async (req, res) => {
    const userEmail = req.params.userEmail;
    const restaurantId = req.params.restaurantId;

    try {
      const user = await collection.findOne({ email: userEmail });
      if (user) {
        const savedRestaurant = user.savedRestaurants.find(
          (restaurant) => restaurant.restaurantId === restaurantId
        );
        const saved = savedRestaurant ? true : false;
        res.json({ saved: saved });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.log("Error checking saved restaurant:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

//SAVE FOOD TOUR
app.post("/api/:userEmail/:savedTours", async (req, res) => {
  const userEmail = req.params.userEmail;
  const savedTours = req.body.savedTours;

  try {
    // Generate a unique ObjectId for the food tour
    const tourId = new ObjectId();

    const result = await collection.findOneAndUpdate(
      { email: userEmail },
      { $push: { savedTours: { _id: tourId, ...savedTours } } }, // Include the generated ObjectId in the saved tour document
      { returnOriginal: false }
    );

    if (result.value) {
      res
        .status(200)
        .json({ message: "Tours saved successfully", user: result.value });
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.log("Error saving tours:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//FIND SAVED FOOD TOURS
app.get("/api/:userEmail/savedTours", async (req, res) => {
  const userEmail = req.params.userEmail;

  try {
    const user = await collection.findOne({ email: userEmail });

    if (user) {
      res.status(200).json({ savedTours: user.savedTours });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log("Error fetching saved tours:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
