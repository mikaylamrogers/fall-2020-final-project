import React, { useState } from 'react';
import { render } from "react-dom";
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/storage';
import { storage } from 'firebase/app';

function CreateListing({ userAuthInfo }) {
    const storage = firebase.storage()
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(
          e.target.files[0]
        );
      }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {  
                        console.log(url);
                    });
            }
        );
    };

    function submitListing(e) {
        e.preventDefault(); // so it doesn't submit an actual form
        const listingName = e.currentTarget.listingName.value;
        const listingAuthor = e.currentTarget.listingAuthor.value;
        const listingAuthorId = userAuthInfo.uid;
        const listingCondition = e.currentTarget.listingCondition.value;
        const listingDescription = e.currentTarget.listingDescription.value;
        const listingLocation = e.currentTarget.listingLocation.value;
        const listingTimeframe = e.currentTarget.listingTimeframe.value;
        const imageUrl = url;

        axios
            .get(`http://localhost:4000/create?listingName=${listingName}&listingAuthor=${listingAuthor}&listingAuthorId=${listingAuthorId}&listingCondition=${listingCondition}&listingDescription=${listingDescription}&listingLocation=${listingLocation}&listingTimeframe=${listingTimeframe}&imageUrl=${imageUrl}&`)
            .then(function (response) {
                console.log({ SUCCESS: response });
            })
            .catch(function (error) {
                console.log('ERROR_CREATING_POST', error);
            });
            window.location.replace("/");
    }

    return (
        <div className="Listing">
            <h1>list something up for grabs!</h1>

            <br></br><br></br><br></br>
            
            <span class="upload"><input type="file" name="imageUrl" onChange={handleChange} /></span>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <button onClick={handleUpload}>upload</button>

            <br></br><br></br><br></br>
            
            <form onSubmit={(e) => submitListing(e)}>  
            
                <label>
                    <span class="Title">item name</span>
                    <input type="text" name="listingName" />
                </label>
                
                <br></br><br></br>
                <label>
                    <span class="Title">item condition</span>
                    <input type="text" name="listingCondition" />
                </label>

                <br></br><br></br>
                <label>
                    <span class="Title">description</span>
                    <input type="text" name="listingDescription" />
                </label>

                <br></br><br></br>
                <label>
                    <span class="Title">pick-up location</span>
                    <input type="text" name="listingLocation" />
                </label>

                <br></br><br></br>
                <label>
                    <span class="Title">pick-up timeframe</span>
                    <input type="text" name="listingTimeframe" />
                </label>

                <br></br><br></br>
                <label>
                    <span class="Title">contact</span>
                    <input type="text" name="listingAuthor" />
                </label>

                <br></br><br></br><br></br><br></br><br></br>
                <button onClick={handleUpload}>publish</button>
            </form>

        </div>
    );
}

export default CreateListing;