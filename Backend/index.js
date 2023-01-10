const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./authentication/authentication-service")
const deleteUser = require("./userController/delete-user")
const updateUser = require("./userController/update-user")
dotenv.config();

app.listen(process.env.PORT , () => {
    console.log("backend is running in on port",process.env.PORT)
})
mongoose.set("strictQuery", false);

mongoose
.connect(
  process.env.MONGO_DB_URL ,
  // useNewUrlParser: true,
  // useUnifiedTopology: true
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    
  })
  .catch(err => {
    console.error("Connection error", err);
  });
app.use(cors())
app.use(express.json())
app.use("/api/auth" , authRoute);
app.use("/api/user" , deleteUser);
app.use("/api/user" , updateUser);

