import React, { useState, useEffect } from 'react'
import "./review.scss"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import quoteSymbol from "../../Picture/quote.png"


const handleDragStart = (e) => e.preventDefault();


function Review() {

    const [reviewText, setReviewText] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5029/recommendation")
        .then(res => res.json())
        .then(response => {
            setReviewText(response);
        })
        .catch(error => console.log(error));
    }, []);



    const itemsLoad = reviewText.map((loot, index) => {
        var demon = []

        demon = [
            <div onDragStart={handleDragStart} className="sliderContentReview">
            <div className="reviewCon">
                <img src={quoteSymbol} alt="" />
                <p className="reviewText">
                    {loot.content}
                </p>
                <img className="profilePicture" src={"./images/recommendation/"+ loot.image} alt="" />
                    <p className="profileText">{loot.name}, <span>{loot.title}</span></p>
                    {/* <p>{loot.created}</p> */}
                </div>
            </div>,
        ]

        return demon 
    })


    return (
        <div className="review">
            {/* Slider er fra https://www.npmjs.com/package/react-alice-carousel */}
            <AliceCarousel 
            autoPlay={true} 
            autoPlayInterval={4000} 
            mouseTracking items={itemsLoad} 
            disableButtonsControls={true}
            fadeOutAnimation={true}
            mouseTrackingEnabled={true}
            disableAutoPlayOnAction={true}
            infinite={true}
            />
        </div>
    )
}

export default Review
