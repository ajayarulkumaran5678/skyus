import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'

// Routes

const app = express();


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
  .connect("mongodb+srv://ajay10:Mysql123@cluster0.eg8a3r2.mongodb.net/SocialMedia_Youtube?retryWrites=true&w=majority")
  .then(() =>
    app.listen(5000, () =>
      console.log(`Listening at ${5000}`)
    )
  )
  .catch((error) => console.log(error));


  // usage of routes
  app.use('/auth', AuthRoute)
  app.use('/user', UserRoute)
  app.use('/post', PostRoute)
