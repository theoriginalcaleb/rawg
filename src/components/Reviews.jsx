import React from 'react'
import { StateContextCustom } from '../context/StateContext';

const Reviews = () => {
    const {state:{reviews}} = StateContextCustom(); 
    // console.log(reviews)
  return (
    <div>
        {/* {
            reviews.map(review=>{
                return(
                    // console.log(review)
                )
            })
        } */}
    </div>
  )
}

export default Reviews