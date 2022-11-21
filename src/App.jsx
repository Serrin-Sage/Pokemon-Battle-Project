import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Team from './components/Team'
function App() {
  const [ team, setTeam ] = useState([])
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Team setTeam={setTeam} team={team}/>
    </div>
  )
}

export default App
