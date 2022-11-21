import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import Navbar from './components/Navbar'
import Store from './components/Store';
import Team from './components/Team'

function App() {
  const [ team, setTeam ] = useState([])
  return (
    <div className="App">
      <Header />
      <Navbar />
        <Routes>
          <Route path={'/'} element={<Team setTeam={setTeam} team={team}/>}/>
          <Route path={'/about'} />
          <Route path={'/store'} element={<Store />}/>
        </Routes>
      
   </div>
  );
}

export default App
