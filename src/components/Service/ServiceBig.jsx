import React, { useEffect, useState } from 'react'
import "./service.scss"
import { HashLink} from 'react-router-hash-link';

function ServiceBig() {
    const [serviceText, setServiceText] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5029/treatment")
          .then(res => res.json())
          .then(response => {
            setServiceText(response);
          })
          .catch(error => console.log(error));
      }, []);


    return (
        <div className="services">
            <div>
                <div className="servisPopProHead">
                    <div>
                        <h1>Our Procedures</h1>
                        <p>To doesn't his appear replenish together called he of mad place won't wherein <br /> blessed second every wherein were meat kind wherein and martcin</p>
                    </div>
                </div>
                <div className="cardContainer">
                    {serviceText.map((service, index) => (
                        <div className="cardStuff">
                            <div className="card">
                                <img src={"./images/treatment/" + service.image} alt="" />
                                <h3>{service.title}</h3>
                                <p dangerouslySetInnerHTML={{__html: service.content}}></p>
                                <div className="cardLink">
                                    <HashLink to="#BigContact">Get a time now</HashLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="BigContact"></div>
        </div>
    )
}

export default ServiceBig
