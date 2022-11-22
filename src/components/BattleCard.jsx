const BattleCard = ({ className, id, currentPk }) => {

    return (
        <div className="card-display">
            <div className={className} id={id}>
                {currentPk ? (
                    <div className="selected-card">
                        <h1>#{currentPk.id}</h1>
                        <h2>{currentPk.name}</h2>
                        <img src={currentPk.sprites.front_default}></img>
                    </div>
                ) : (
                    <h1>Choose a Pokemon</h1>
                )}
            </div>
        </div>
    )
}

export default BattleCard