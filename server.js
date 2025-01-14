const connect = require("./connect");
// const Session = require("./models/Session");
const app = require("express")();
const User = require("./models/User");
connect();

const createUser = async () => {
  try {
    await User.create({
      firstName: "Mario",
      lastName: "Paulista",
      userName: "julioBarca10",
      email: "mario@gmail.com",
      phone: "111111111",
      password: "Barça1234",
    });
    
  } catch (error) {
    console.log(error.message);
  }
};

createUser();

const getUsers = async () => {
  try {
    const data = await User.find();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// getUsers();

const updateUser = async () => {
  try {
    const result = await User.findByIdAndUpdate("67853d01cc6b5cc9ebb1fc19", {
      $set: {
        phone: "5555555555",
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};
// updateUser();

const createSession = async () => {
  try {
    await Session.create({
      sessionName: "Session 1",
      sessionNbr: 1,
      users: [
        "67852dfa0bfbdd1e36431b79",
        "67852f6a2a0cc62e38580dfb",
        "678539bd8a9e756e1f5d8432",
      ],
    });
    console.log("Session was created");
  } catch (error) {
    console.log(error.message);
  }
};
// createSession();

const getSessions = async () => {
  try {
    const data = await Session.find().populate("users");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// getSessions();
// app.get("/", async (req, res) => {
//   try {
//     const data = await Session.find().populate("users");
//     // console.log(data);
//     res.json({ data });
//   } catch (error) {
//     console.log(error.message);
//   }
// });
// app.listen(5000);

// mongoose middleware :
// Document middlewares : save, remove, validate
// Query middlewares: find, findOne, updateOne, updateMany....

// pre middleware : 