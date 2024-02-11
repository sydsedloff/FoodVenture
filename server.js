const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");
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

// HTTP REQUESTS

// GET PROFILES
app.get("/api/fakeProfiles", async (req, res) => {
  const fakeProfiles = await collection.find({}).toArray();
  res.json(fakeProfiles);
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
app.post("/dietRestrictions/:userEmail", (req, res) => {
  collection
    .findOneAndUpdate(
      { email: req.params.userEmail },
      {
        $set: {
          dietaryRestrictions: req.body.dietaryRestrictions,
        },
      }
    )
    .then((result) => {
      res.json(result);
    });
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
