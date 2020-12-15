const express = require('express');
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const db = firebase.firestore();
const listings = db.collection('listings');

router.get("/", (req, res) => {
    const queryParams = req.query;

    listings
        .doc()
        .set(queryParams)
        .then(function (doc) {
            res.send('success');
        })
        .catch(function (e) {
            console.log('ERROR', e);
            res.send([{ ERROR_SUBMITTING: e.toString() }]);
        });
});

module.exports = router;