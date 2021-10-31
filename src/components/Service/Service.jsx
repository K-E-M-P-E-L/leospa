import React from 'react'
import "./service.scss"
import { Link } from 'react-router-dom'
import Simg1 from "../../Picture/extra_procedures_etc/1.jpg"
import Simg2 from "../../Picture/extra_procedures_etc/2.jpg"
import Simg3 from "../../Picture/extra_procedures_etc/3.jpg"

function Service() {
    return (
        <div className="service">
            <div>
                <div className="servisPopProHead" id="Service">
                    <div>
                        <h1>Popular Procedures</h1>
                        <p>To doesn't his appear replenish together called he of mad place won't wherein <br /> blessed second every wherein were meat kind wherein and martcin</p>
                    </div>
                </div>
                <div className="cardContainer">
                    <div className="cardStuff">
                        <div className="card">
                            <img src={Simg1} alt="" />
                            <h3>Massage Therapy</h3>
                            <p>Living winged said you darkness you're divide <br /> gathered and bring one seasons face great dr <br /> Waters firmament place which.</p>
                            <div className="cardLink">
                                <Link to="/Services">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="cardStuff">
                        <div className="card">
                            <img src={Simg2} alt="" />
                            <h3>Beauty Care</h3>
                            <p>Living winged said you darkness you're divide <br /> gathered and bring one seasons face great dr <br /> Waters firmament place which.</p>
                            <div className="cardLink">
                                <Link to="/Services">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="cardStuff">
                        <div className="card">
                            <img src={Simg3} alt="" />
                            <h3>Executive Reflexology</h3>
                            <p>Living winged said you darkness you're divide <br /> gathered and bring one seasons face great dr <br /> Waters firmament place which.</p>
                            <div className="cardLink">
                                <Link to="/Services">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
