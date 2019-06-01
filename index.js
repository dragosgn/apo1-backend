import stream from "getstream";
import "dotenv/config";
import express from "express";
import cors from "cors";

console.log(process.env.API_KEY, process.env.API_SECRET, process.env.API_ID);

const getToken = async () => {
  const client = await stream.connect(
    process.env.API_KEY,
    process.env.API_SECRET,
    process.env.API_ID
  );

  const userToken = client.createUserToken("user-one");

  return userToken;
};

console.log("this isi the user token", getToken());

const app = express();

app.use(cors());

app.listen(3000, () => console.log("Example app listening on port 3000!"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
