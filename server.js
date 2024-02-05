import express from "express";
import profileData from "./data/fakeProfile.json" assert { type: "json" };
import fs from "fs";
const app = express();
app.use(express.json());
const PORT = 3000;

//do node server.js to start the server
app.listen(PORT, () => {
  console.log("The server is running on port" + " " + PORT);
});
