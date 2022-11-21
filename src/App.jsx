import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import Navbar from './components/Navbar'
import Team from './components/Team'
function App() {
  const [page, setPage] = useState("/")
  const [ team, setTeam ] = useState([])
  return (
    <div className="App">
      <Header />
      <Navbar onChangePage={setPage}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Team setTeam={setTeam} team={team}/>}/>
          <Route path='/battle' />
          
          <Route path='/store' />
        </Routes>
      </BrowserRouter>
      
   </div>
  );
}

export default App
