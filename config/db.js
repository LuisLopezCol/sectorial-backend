const mongoose = require("mongoose");
require("dotenv").config({ path: "config.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Data base conected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = conectarDB;
