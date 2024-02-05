const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Allow requests only from the specified origin
const corsOptions = {
  origin: "http://localhost:19006",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get(".", (req, res) => {
  fs.readFile("./data/fakeProfile.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.post("/api/fakeProfiles", (req, res) => {
  console.log("Received POST request:", req.body);
  fs.readFile("./data/fakeProfile.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);

    const newUser = req.body;
    newUser.id = jsonData.length + 1;

    jsonData.push(newUser);

    fs.writeFile(
      "./data/fakeProfile.json",
      JSON.stringify(jsonData, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }

        res.json(newUser);
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
