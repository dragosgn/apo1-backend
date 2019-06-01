import stream from "getstream";
import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = 3001;

const client = stream.connect(
  process.env.API_KEY,
  process.env.API_SECRET,
  process.env.API_ID
);

const userToken = client.createUserToken("user1");

const app = express();

app.use(cors());

app.get("/token", (req, res) => {
  res.json({ userToken });
});

app.get("/addUser", () => {
  user1 = client.feed("user", "1");
  activity = { actor: 1, verb: "tweet", object: 1, foreign_id: "tweet:1" };
  user1.addActivity(activity);

  res.send("succes");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
