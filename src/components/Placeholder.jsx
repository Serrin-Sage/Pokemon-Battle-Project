const Placeholder = ({ team, setTeam, index, pokemon}) => {
    const handleClick = () => {
        const newTeam = [...team]
        newTeam[index] = pokemon
        setTeam(newTeam)
    }
    return (
        <div className="card">
            <h1>Add Pokemon!</h1>
            <button className="cardUpdate" onClick={handleClick}>Add</button>
        </div>
    )
}

export default Placeholder