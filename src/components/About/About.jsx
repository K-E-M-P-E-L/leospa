import React, { useState, useEffect } from 'react'
import "./about.scss"
import Flower from "../../Picture/china-rose.png"
import smallFlower from "../../Picture/jasmine.png"
import smallLogo from "../../Picture/butterfly.png"
import { Link } from "react-router-dom"
import img1 from "../../Picture/extra_procedures_etc/5.jpg"
import img2 from "../../Picture/extra_procedures_etc/4.jpg"
import img3 from "../../Picture/extra_procedures_etc/6.jpg"
import img4 from "../../Picture/extra_procedures_etc/7.jpg"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={img1} alt="" onDragStart={handleDragStart} />,
    <img src={img2} alt="" onDragStart={handleDragStart} />,
    <img src={img3} alt="" onDragStart={handleDragStart} />,
    <img src={img4} alt="" onDragStart={handleDragStart} />
]

const responsive = {
    0: { items: 1 },
    1024: { items: 4 },
  }

function About() {
    const [aboutText, setAboutText] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5029/about")
          .then(res => res.json())
          .then(response => {
            setAboutText(response);
          })
          .catch(error => console.log(error));
      }, []);


    return (
        <div className="about">
            {console.log(aboutText)}            
            <div className="flower2">
                <img src={smallFlower} alt="" />
            </div>
            <div className="flower1">
                <img src={Flower} alt="" />
            </div>

            <div className="aboutCon">
                <div id="About">
                    <div>
                        <img src={smallLogo} alt="" />
                        <h2>About our spa center</h2>
                    </div>
                    <div>
                        <h1>{aboutText.title}</h1>
                        <p dangerouslySetInnerHTML={{__html: aboutText.content}}>
                        </p>
                    </div>            

                    <div className="aboutButton">
                        <Link to="">Read more</Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="aboutImgCon">
                    {/* Slider er fra https://www.npmjs.com/package/react-alice-carousel */}
                    <AliceCarousel 
                    autoPlay={true} 
                    autoPlayInterval={10000} 
                    items={items} 
                    disableButtonsControls={true}
                    disableDotsControls={true}
                    fadeOutAnimation={true}
                    mouseTrackingEnabled={true}
                    disableAutoPlayOnAction={true}
                    infinite={true}
                    responsive={responsive}
                    />
                </div>
            </div>
        </div>
    )
}

export default About
