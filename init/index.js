const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({}); //clear existing listings
  // initData.data = initData.data.map((obj) => ({
  //   ...obj,
  //   owner: "68170a8e0983c60bc6f9b550",
  // }));
  await Listing.insertMany(initData.data); // Insert new listings
  console.log("data was initialized");
};

initDB();
