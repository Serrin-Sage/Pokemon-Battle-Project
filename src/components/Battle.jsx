import BattleCard from "./BattleCard"
import { useState } from 'react';

const Battle = ({ team }) => {
    const [ currentPk, setCurrentPk ] = useState(team[0])
    const handleClick = (poke) => {
        setCurrentPk(poke)
    }
    return (
        <div className="battle-container">
            <div className="battle-area" id="team-area">
                <div className="list-column" id="team-list">
                    {
                        team.map((pk, i) => {
                            return(
                                <div key={i}>
                                    {pk ? (<div onClick={() => handleClick(pk)}className="battleTeamCard">
                                        <img src={pk.sprites.front_default} height={'50px'}></img>
                                        <h2>{pk.name}</h2>
                                        </div>) :
                                    (<div className="battleTeamCard"><h3>...</h3></div>)}
                                </div>
                            )
                        })
                    }
                </div>
                <BattleCard className={"selected-card"} id={"displayed-team"} currentPk={currentPk}/>
            </div>

            <div className="battle-area" id="enemy-area">
                <BattleCard />
                <div className="list-column" id="enemy-list">
                    <p>Poke 1</p>
                    <p>Poke 2</p>
                    <p>Poke 3</p>
                    <p>Poke 4</p>
                    <p>Poke 5</p>
                    <p>Poke 6</p>
                </div>
            </div>
        </div>
    )
}

export default Battle