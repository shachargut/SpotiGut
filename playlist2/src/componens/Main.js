import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import MainSearch from './MainSearch'
import Player from './Player'
import PlayList from './PlayList'

function Main() {

  return (
    
    <main>  
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/playlist' element={<PlayList/>}/>
        <Route path='/result' element={<MainSearch/>}/>
        {/* <Route path='/player' element={ <Player/>}/> */}
      </Routes>
    </main>
     
   
  )
}

export default Main