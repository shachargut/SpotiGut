import React, { useContext, useEffect, useState } from 'react'
import {playerContext} from './Layout'
import ReactPlayer from 'react-player'
import PlayList from './PlayList'
import { Button } from 'react-bootstrap'

function Player() {
  const[player,setPlayer] = useContext(playerContext)
  // שימוש ברידקס במקום קונטקסט
  
  const [ix,setIx] = useState();
  function remove(){
    setPlayer('')
  }
  useEffect(()=>{
    if(player){
    setIx('X')}
    else{setIx('')}
  },[player])
  return (
  
    <div className='player'>
          <div className='btnX'><Button onClick={()=>remove()} variant="outline-danger">{ix}</Button></div>
           <ReactPlayer className="react-player" controls={true} url={player.url} playing={true} width="500px" height="281.25px"/>
          <h5>{player.title}</h5>
          </div>
    
    
  )
}

export default Player