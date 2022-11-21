import { useState } from 'react';
import TeamCard from './TeamCard';

const Team = ({ setTeam, team }) => {
    const [ pokemon, setPokemon ] = useState(null);
    const getPokemon = async (name) => {
        let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        req.json().then(pk => {
            setPokemon(pk);
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getPokemon(e.target.name.value);
        e.target.reset();
    }

    return (
        <div>
            <div className="teamDisplay">
                {team.map(pokemon => {
                    return (
                        <div className="card" key={pokemon.id}>
                            <h1>{pokemon.name}</h1>
                        </div>
                    )
                })}
            </div>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <h4>Search for your next Pokemon!</h4>
                    <input type="text" name="name"/>
                    <button type="submit">Submit</button>
                </form>
                {!pokemon ? (<div><h1>No Pokemon</h1></div>) : (
                    <TeamCard setTeam={setTeam} team={team} pokemon={pokemon} />
                )}
            </div>
        </div>
    )
}

export default Team