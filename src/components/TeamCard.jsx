const TeamCard = ({ index, team, setTeam, pokemon, pk }) => {
    const handleClick = () => {
        const newTeam = [...team]
        newTeam[index] = pokemon
        setTeam(newTeam)
    }
    const handleDelete =() => {
        const newTeam = [...team]
        newTeam[index] = null
        setTeam(newTeam)
    }
    return (
        <div className="card">
            <button className="cardDelete" onClick={handleDelete}>X</button>
            <h1>{pk.name}</h1>
            <img src={pk.sprites.front_default} placeholder="no image found"></img>
            <button onClick={handleClick}>Replace</button>
        </div>
    )
}

export default TeamCard