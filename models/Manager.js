const mongoose = require("mongoose");

const bankaccountSchema = mongoose.Schema([
  {
    bank: { type: String, required: true, unique: false },
    account: { type: String, required: false, unique: false },
  },
]);
const salarySchema = mongoose.Schema([
  {
    position: { type: String, required: false, unique: false },
    salary: { type: String, required: false, unique: false },
    department: { type: String, default: "Maintenance" },
    bankaccount: [bankaccountSchema],
  },
]);

const MaintenanceSchema = mongoose.Schema([
  {
    name: { type: String, required: false, unique: false },
    lastname: { type: String, required: false, unique: false },
    salary: [salarySchema],
    createDate: {
      type: Date,
      default: Date.now(),
    },
  },
]);

module.exports = mongoose.model("Maintenance", MaintenanceSchema);
