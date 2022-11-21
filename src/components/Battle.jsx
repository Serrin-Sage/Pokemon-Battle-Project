import BattleCard from "./BattleCard"

const Battle = () => {

    return (
        <div className="battle-container">
            <div className="battle-area" id="team-area">
                <div className="list-column" id="team-list">
                    <p>Poke 1</p>
                    <p>Poke 2</p>
                    <p>Poke 3</p>
                    <p>Poke 4</p>
                    <p>Poke 5</p>
                    <p>Poke 6</p>
                </div>
                <BattleCard />
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