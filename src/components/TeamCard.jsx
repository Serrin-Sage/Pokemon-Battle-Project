const TeamCard = ({ pokemon }) => {
    return (
        <div> 
            <h1>Name: {pokemon.name}</h1>
            <button type="submit" onSubmit={() => setTeam([...team], pokemon)}>Add to Team</button>
        </div>
    )
}

export default TeamCard