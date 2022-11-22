import { useState } from 'react';
import TeamResult from './TeamResult';
import TeamCard from './TeamCard';
import Placeholder from './Placeholder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Team = ({ setTeam, team }) => {
    const message = () => toast.error("INVALID POKEMON")
    const [ pokemon, setPokemon ] = useState(null);
    const getPokemon = async (name) => {
        let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        req.json().then(pk => {
            setPokemon(pk);
        }).catch(error => {
            message();
            setPokemon(null);
        });
        console.log(pokemon);
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
            <div className="row">
                <div className="search">
                    <h2>Search for your next Pokemon!</h2>
                    <form onSubmit={handleSubmit}>
                        <input className="input" type="text" name="name" placeholder="name"required/>
                        <button className="submit" type="submit">Submit</button>
                        <ToastContainer />
                    </form>
                    {!pokemon ? (<div></div>) : (
                        <TeamResult setTeam={setTeam} team={team} pokemon={pokemon} />
                    )}
                </div>
                <div className="displayCard">
                    {!pokemon ? (
                        <div>
                            <h1><u>Stats</u></h1>
                            <h2>Empty</h2>
                        </div>
                    ) : (<table>
                            <thead>
                                <tr>
                                    <th><h1><u>Stats</u></h1></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Name:</th>
                                    <th>Base:</th>
                                    <th>Effort:</th>
                                </tr>
                                <tr>
                                    <td>{pokemon.stats[0].stat.name}</td>
                                    <td>{pokemon.stats[0].base_stat}</td>
                                    <td>{pokemon.stats[0].effort}</td>
                                </tr>
                                <tr>
                                    <td>{pokemon.stats[1].stat.name}</td>
                                    <td>{pokemon.stats[1].base_stat}</td>
                                    <td>{pokemon.stats[1].effort}</td>
                                </tr>
                                <tr>
                                    <td>{pokemon.stats[2].stat.name}</td>
                                    <td>{pokemon.stats[2].base_stat}</td>
                                    <td>{pokemon.stats[2].effort}</td>
                                </tr>
                                <tr>
                                    <td>{pokemon.stats[3].stat.name}</td>
                                    <td>{pokemon.stats[3].base_stat}</td>
                                    <td>{pokemon.stats[3].effort}</td>
                                </tr>
                                <tr>
                                    <td>{pokemon.stats[4].stat.name}</td>
                                    <td>{pokemon.stats[4].base_stat}</td>
                                    <td>{pokemon.stats[4].effort}</td>
                                </tr>
                                <tr>
                                    <td>{pokemon.stats[5].stat.name}</td>
                                    <td>{pokemon.stats[5].base_stat}</td>
                                    <td>{pokemon.stats[5].effort}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Team