import React, { createContext, useEffect, useState } from 'react'
import Header from './Header'
import Main from './Main'
import Player from './Player';
export const searchContext = createContext();
export const playListContext = createContext();
export const playerContext = createContext();


function Layout() {
   const searchState = useState('');
   const playListState = useState([]);
   const playerState = useState("");
   
  return (
    <div>
        <playerContext.Provider value={playerState}>
        <playListContext.Provider value={playListState}>
        <searchContext.Provider value={searchState}>
           <Header/>
           <Player/>
           <Main/>
        </searchContext.Provider>
        </playListContext.Provider>
        </playerContext.Provider>
    </div>
  )
}

export default Layout