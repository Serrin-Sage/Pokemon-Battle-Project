import { useState } from 'react';
import TeamResult from './TeamResult';
import TeamCard from './TeamCard';
import Placeholder from './Placeholder';

const Team = ({ setTeam, team }) => {
    const [ pokemon, setPokemon ] = useState(null);
    const getPokemon = async (name) => {
        let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        req.json().then(pk => {
            setPokemon(pk);
        }).catch(error => {
            setPokemon(null);
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
                {team.map((pk, i) => {
                    return (pk ? (<TeamCard key={i} index={i} team={team} setTeam={setTeam} pk={pk} pokemon={pokemon}/>) : (<Placeholder key={i} index={i} team={team} setTeam={setTeam} pokemon={pokemon}/>)
                    )
                })}
            </div>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <h4>Search for your next Pokemon!</h4>
                    <input type="text" name="name" placeholder="name"required/>
                    <button type="submit">Submit</button>
                </form>
                {!pokemon ? (<div><h1>...</h1></div>) : (
                    <TeamResult setTeam={setTeam} team={team} pokemon={pokemon} />
                )}
            </div>
        </div>
    )
}

export default Team