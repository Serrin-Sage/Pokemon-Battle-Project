const TeamResult = ({ pokemon }) => {
    return (
        <div className="resultCard"> 
            <img src={pokemon.sprites.front_default}></img>
            <h3>#{pokemon.id} {pokemon.name}</h3>
        </div>
    )
}

export default TeamResult