const express = require('express');
const router = express.Router();

const sampleJSON = [
    {
        name: "Mik",
        role: "friend",
        pet: "dog",
    },
    {
        name: "yo",
        role: "hate",
        pet: "ugh",
    },
];

router.get("/", (req, res) => res.send(sampleJSON));

module.exports = router;