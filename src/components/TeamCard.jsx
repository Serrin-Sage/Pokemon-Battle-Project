const TeamCard = ({ setTeam, team, pokemon }) => {
    const handleSubmit = () => {
        if (team.length >= 5) {
            const err = document.getElementById('error');
            err.innerText = 'Team is Full';
        }
        else {
            setTeam([...team], pokemon)
        }
    }

    return (
        <div> 
            <p id="error"></p>
            <h1>Name: {pokemon.name}</h1>
            <button type="submit" onSubmit={handleSubmit}>Add to Team</button>
        </div>
    )
}

export default TeamCard