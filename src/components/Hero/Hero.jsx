import "./hero.scss"
import leaf from "../../Picture/leaf.png"
import spa from "../../Picture/spa.png"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'

function Hero() {
    const [heroText, setHeroText] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5029/hero")
          .then(res => res.json())
          .then(response => {
            setHeroText(response);
          })
          .catch(error => console.log(error));
      }, []);



    return (
        <section className="hero">
            <div className="heroContainer">
                {/* heroLeafImg Con = Container */}
                <div className="heroLeafImgCon">
                    <img src={leaf} alt="" />
                </div>
                {  
                    heroText.filter(hero => hero.show === true).map(trueHero => (
                        <div className="heroTextCon">
                        <h2 className="heroH2">{trueHero.title1}</h2>
                        <h1 className="heroH1">{trueHero.title2}</h1>
                        <p className="heroP">{trueHero.content}</p>
                        <div className="heroButtoCon">
                            <Link to="" className="heroButton">Reserve now</Link>
                            <div>
                                <Link to={trueHero.link} className="heroVideo"><p className="heroThing">&#x25B7;</p><p className="heroVideoText">Watch our story</p></Link>
                            </div>                        
                        </div>
                    </div>
                )
            )}
                <div className="heroSpaImgCon">
                    <img className="SpaImg" src={spa} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero
