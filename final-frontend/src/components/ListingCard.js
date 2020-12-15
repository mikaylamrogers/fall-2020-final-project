import React from 'react';

function ListingCard({ listingData }) {
    return (
        <div className="ListingCard">
            <img src={listingData.imageUrl} />
            <p><span class="Title">item: </span>{listingData.listingName}</p>
            <p><span class="Title">condition: </span>{listingData.listingCondition}</p>
            <p><span class="Title">description: </span>{listingData.listingDescription}</p>
            <p><span class="Title">pick-up location: </span>{listingData.listingLocation}</p>
            <p><span class="Title">pick-up timeframe: </span>{listingData.listingTimeframe}</p>
            <p><span class="Title">contact: </span><a href="mailto:someone@example.com">{listingData.listingAuthor}</a></p>
        </div>
    );
}

export default ListingCard;