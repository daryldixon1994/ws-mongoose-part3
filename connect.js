const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gomycode:gomycode2023@cluster0.xu8jhiq.mongodb.net/company?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};
