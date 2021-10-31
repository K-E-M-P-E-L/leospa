import React, {useState, useEffect} from 'react'
import "./team.scss"

function Team() {
    const [teamText, setTeamText] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5029/team")
        .then(res => res.json())
        .then(response => {
            setTeamText(response);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <div className="team">
            <div className="teamContainer">
                <div className="teamMainText">
                    <div>
                        <h2>Experienced Team</h2>
                        <p>
                            To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein <br />  
                            were meat kind wherein and martcin
                        </p>
                    </div>
                </div>
                <div>
                    <div className="oteam"> 
                    <div className="theTeam">
                        {teamText.map((team, index) => (
                            <div className="teamCard">
                            <img className="teamBox" src={"./images/team/" + team.image} alt="" />
                            <div className="teamName">
                                <h5>{team.firstname + " " + team.lastname}</h5>
                                <p>{team.role}</p>
                                <div>
                                    
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div id="Contact"></div>
        </div>
    )
}

export default Team
