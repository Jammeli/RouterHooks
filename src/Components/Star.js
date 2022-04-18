import '../App.css';
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Star({movieList}) {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    console.log(rating);
  }
  return (
      <div>
    <div className={rating == 0 ? "" : "active"}>
      <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
    </div>
      <br></br>
      <div>
      <p className="card-text">
            <span style={{ color: "green" }}>Rating : </span>
            {rating}
          </p>
          
    </div>
    <br></br>
    </div>
    
  )
}