import React from 'react';
import Button from '@mui/material/Button';
import Navbar from './component/Navbar';
import './App.css'
import Home from './pages/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Unit_Convertor from './pages/unit-convertor';
import Game from './component/Game';
import GameWithPC from './component/GameWithPC'
import Play from './MUI-Playground'
import UnitConvertor from './component/UnitConvertor';
function App() {

  return (
<>
<Router>

<Navbar/>

<Routes>

<Route path={'/'}  element={<Home/>}/>

<Route path={'/unit-convertor'} element={<UnitConvertor/>} />

<Route path={'/tic-tac-toe'}  element={<Game />} />
<Route path={'/tic-tac-toe/computer'}  element={<GameWithPC />} />


</Routes>


</Router>
</>
  )
}

export default App
