var stream = require("getstream");
// Instantiate a new client (server side)

const getToken = async () => {
  const client = stream.connect(
    process.env.API_KEY,
    process.env.API_SECRET,
    process.env.API_ID
  );
  let userToken = await client.createUserToken("user-one");
};

console.log("this isi the user token", getToken());
