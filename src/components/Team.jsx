import { useState } from 'react';

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
        console.log(pokemon);
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Search for your team!</h4>
                <input type="text" name="name"/>
                <button type="submit">Submit</button>
            </form>
            {!pokemon ? (<div><h1>No Pokemon</h1></div>) : (
                <div> 
                    <h1>Name: {pokemon.name}</h1>
                    <button type="submit" onSubmit={() => setTeam([...team], pokemon)}>Add to Team</button>
                </div>
            )}
        </div>
    )
}

export default Team