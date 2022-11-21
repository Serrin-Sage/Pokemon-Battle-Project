import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeamCard = ({ setTeam, team, pokemon }) => {
    const errorMessage = () => toast.error('TEAM IS FULL');

    const handleSubmit = () => {
        if (team.length >= 5) {
            errorMessage();
        }
        else {
            setTeam([...team, pokemon])
            console.log(team)
        }
    }

    return (
        <div className="resultCard"> 
            <ToastContainer />
            <h1>Name: {pokemon.name}</h1>
            <button onClick={handleSubmit}>Add to Team</button>
        </div>
    )
}

export default TeamCard