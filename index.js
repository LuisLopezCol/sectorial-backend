console.log("Sectorial is running");

const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

// 1) ----------- Project SECTORIAL
app.use("/manager", require("./routes/Manager"));

const host = "0.0.0.0";
app.listen(process.env.PORT || 5555, () => {
  console.log("App listening on port 5555!");
});
