const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

app.use(bodyParser.json());

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

const db = client.db("FoodVenture"); // Replace "yourDatabaseName" with your actual database name
const collection = db.collection("Profiles");

// Allow requests only from the specified origin
const corsOptions = {
  origin: "http://localhost:19006",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/api/fakeProfiles", async (req, res) => {
  try {
    const fakeProfiles = await collection.find({}).toArray();
    res.json(fakeProfiles);
  } catch (err) {
    console.error("Error fetching fake profiles:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/fakeProfiles", async (req, res) => {
  try {
    const newUser = req.body;
    const result = await collection.insertOne(newUser);
    if (result.ops && result.ops.length > 0) {
      res.json(result.ops[0]);
    } else {
      throw new Error("Failed to add profile");
    }
  } catch (err) {
    console.error("Error adding profile:", err);
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
