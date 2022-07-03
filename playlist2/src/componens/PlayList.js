import React, { useContext, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {playListContext} from './Layout'
import { playerContext } from './Layout'
import Player from './Player'

function PlayList() {
    const playList = useSelector((state)=> state.playList)
    //const [playList,setPlayList] = useContext(playListContext)
    const[player,setPlayer] = useContext(playerContext)
    let removeFromPL = function(v){
        //setPlayList(playList.filter((item)=>item.id!==v.id))
    }
    useEffect(()=>{
        let a = localStorage.getItem("playList")
         let jplayList= JSON.parse(a)
        //setPlayList(jplayList)
      },[])
  return (
      <div className='playlist'>
    <h3>PlayList</h3> 
     {playList?.map((v)=>
                {return(
                    <>
                <div key={Math.random()} className="cardSearch">
                <img className="imgSong" onClick={()=>setPlayer(v)} src={v.thumbnail.url} height="200px" alt="avazar"/>
                <div className='description'>
                <div><h5>{v.title}</h5></div>
                <span>{v.views} views </span>
                <div className='channelDiv'><p>🎵{v.channel.name}</p>
                <img className='channelImg' src={v.channel.icon} height="20px" alt="avazar"/>
                </div></div>
                <div className='addPL'>
                <Button variant="outline-secondary" onClick={()=>removeFromPL(v)}>הסר</Button></div>
                </div>
                </>
                )})}
                </div>
  )
}

export default PlayList