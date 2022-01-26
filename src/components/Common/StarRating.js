import React from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRating = ({ rating, setRating}) => {
    return (
        <Rating 
            onClick={setRating} 
            ratingValue={rating} 
            iconsCount={rating} 
            readonly={true} 
            emptyColor="#f1a545" 
            size={20}
        />
    )
}

export default StarRating
