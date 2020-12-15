import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//Components
import ListingCard from '../components/ListingCard';

function UserProfile({}) {
    const [userProfileData, setUserProfileData] = useState({});
    const [userListingData, setUserListingData] = useState([]);

    const { id } = useParams();  

    useEffect(() => {
        axios
            .get(`http://localhost:4000/listings/${id}`)
            .then(function (response) {
                if (response.data) {
                    setUserListingData(response.data);
                }
            })
            .catch(function (error) {
                console.log("error", error);
            });
    }, []);
        
    return (
        <div>
            <h1>your listings</h1>
            {userListingData.map((listing, i) => (
                <ListingCard listingData={listing} key={i}  />
            ))}
        </div>
    );

}

export default UserProfile;