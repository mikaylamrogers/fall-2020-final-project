const express = require('express');
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const db = firebase.firestore();
const listings = db.collection('listings');

router.get("/listings/:id", (req, res) => {
    const listingsArray = [];

    const queryId = req.params.id;


    listings
        .where("listingAuthorId", "==", queryId)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listingsArray.push(doc.data());
            });
            return res.send(listingsArray);
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        });
});

router.get("/all-listings", (req, res) => {
    const listingsArray = [];
    listings
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listingsArray.push(doc.data());
            });
            return res.send(listingsArray);
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        });
});

module.exports = router;