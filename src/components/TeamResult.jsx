const TeamResult = ({ pokemon }) => {
    return (
        <div className="resultCard"> 
            <img src={pokemon.sprites.front_default}></img>
        </div>
    )
}

export default TeamResult