import stream from "getstream";
import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = 3001;
const app = express();
app.use(cors());

const client = stream.connect(
  process.env.API_KEY,
  process.env.API_SECRET,
  process.env.API_ID
);

const token = client.createUserToken("user:1");
const user1 = client.feed("user");
let activity = { actor: 1, verb: "tweet", object: 1, foreign_id: "tweet:1" };

app.get("/token", (req, res) => {
  res.json({ token });
});

app.get("/addActivity1", (req, res) => {
  user1.addActivity(activity);
  res.send("succes");
});

app.get("/addActivity2", (req, res) => {
  activity = {
    actor: 1,
    verb: "run",
    object: 1,
    foreign_id: "run:1",
    course: { name: "Golden Gate park", distance: 10 },
    participants: ["Thierry", "Tommaso"],
    started_at: new Date()
  };
  user1.addActivity(activity);
  res.send("succes");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
