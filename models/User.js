// required, default, minLength, maxLength, min, max, enum, type
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Firstname is required"],
      minLength: [3, "Minumum 3 characters is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Lastname is required"],
      minLength: [4, "Minumum 4 characters is required"],
      trim: true,
    },
    phone: {
      type: String,
      immutable: true,
    },
    userName: {
      type: String,
      minLength: [7, "Minumum 7 characters is required"],
      required: [true, "Username is required field"],
      lowercase: true,
      // uppercase : true |false
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already in use"],
      // validate : function
      //   match : RegEx
      //   validate: {
      //     validator: function (v) {
      //       const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      //       return regex.test(v);
      //     },
      //     message: "Invalid Email",
      //   },
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid Email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: function (v) {
          const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
          return regex.test(v);
        },
        message:
          "Password must contain at least One Uppercase, one lowercase, one digits and 8 characters long",
      },
      select: "no",
    },
    fullName: {
      type: String,
      get: function () {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      expires: 60,
    },
  },

  {
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

userSchema.pre("save", function (next) {
  this.phone = `+216 ${this.phone}`
  console.log("User schema pre middleware is triggered");
  next();
});

userSchema.post("save", (docs) => {
  console.log(docs);
  console.log("User was created");
});

module.exports = User = mongoose.model("User", userSchema);
