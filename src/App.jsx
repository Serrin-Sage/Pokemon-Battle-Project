import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import Navbar from './components/Navbar'
import Store from './components/Store';
import Team from './components/Team'

function App() {
  const [ team, setTeam ] = useState([null, null, null, null, null, null])
  const [potionTotal, setPotionTotal] = useState(0)
  const [money, setMoney] = useState(20)
  return (
    <div className="App">
      <Header />
      <Navbar />
        <Routes>
          <Route path={'/'} element={<Team setTeam={setTeam} team={team}/>}/>
          <Route path={'/about'} />
          <Route path={'/store'} element={<Store money={money} setMoney={setMoney} potionTotal={potionTotal} setPotionTotal={setPotionTotal}/>}/>
        </Routes>
      
   </div>
  );
}

export default App
