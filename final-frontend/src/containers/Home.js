import React, { useState, useEffect } from "react";
import axios from "axios";
import ListingCard from "../components/ListingCard";

function Home() {
    const [sampleAPIData, setSampleAPIData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://still-cliffs-19081.herokuapp.com/all-listings`)
            .then(function (response) {
                if (response.data) {
                    setSampleAPIData(response.data);
                }
            })
            .catch(function (error) {
                console.log("error", error);
            });
    }, []);

    console.log({sampleAPIData});

    return (
        <div className="ListingBox">
            <h1>all listings</h1>
            {sampleAPIData.map((listing, i) => (
                <ListingCard listingData={listing} key={i}  />
            ))}
        </div>
    );
}

export default Home;