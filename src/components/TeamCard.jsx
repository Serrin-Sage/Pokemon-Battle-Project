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
            <h1>#{pk.id}</h1>
            <h2>{pk.name}</h2>
            <img src={pk.sprites.front_default} placeholder="no image found"></img>
            <div className="btnDiv">
                <button className="cardUpdate" onClick={handleClick}>Update</button>
                <button className="cardDelete" onClick={handleDelete}>Remove</button>
            </div>
        </div>
    )
}

export default TeamCard