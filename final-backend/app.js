// Backend Application for Final Project
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Require Firebase
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "final-final-836bd.firebaseapp.com",
  projectId: "final-final-836bd",
  storageBucket: "final-final-836bd.appspot.com",
  messagingSenderId: "290067925562",
  appId: "1:290067925562:web:dc00a552ccd71637960303"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", indexRoute);
app.listen(port, () => console.log(`Backend is running at port:${port}`));