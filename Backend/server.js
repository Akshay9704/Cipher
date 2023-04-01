import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const uri = "mongodb+srv://Cipher123:cipher321@cluster0.ki9x8gl.mongodb.net/cipher?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        const conn=await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser:true
        })
        console.log(`DB Connected ${conn}`);
    } catch (error) {
        console.log("Error connecting to DB:", error);
    }
};

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
});

userSchema.pre('save', async function (next){
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        return next();
    } catch (error) {
        return next(error);
    }
})

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/Signin", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        const isMatch = await user.matchPassword(password);
        if (isMatch) {
          res.send({ message: "Signin Successfull", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send("User not registered");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
});

  app.post("/Signup", async (req, res) => {
    const { fname, lname, email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new User({
          fname,
          lname,
          email,
          password,
        });
        await newUser.save();
        res.send({ message: "Registered" });
      }
    } catch (err) {
      res.send(err);
    }
  });
  
  
connectDB()
app.listen(5000, () => {
    console.log("Port 5000");
});
