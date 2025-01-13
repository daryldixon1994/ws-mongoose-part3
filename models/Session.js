const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  sessionName: String,
  sessionNbr: Number,
  users: {
    type: [mongoose.Types.ObjectId],
    ref: "User",
  },
});

module.exports = Session = mongoose.model("sessions", sessionSchema);
