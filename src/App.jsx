import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import Navbar from './components/Navbar'
function App() {
  const [page, setPage] = useState("/")
  return (
    <div className="App">
      <Header />
      <Navbar onChangePage={setPage}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' />
          <Route path='/battle' />
          <Route path='/store' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
