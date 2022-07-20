import { Button} from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux' 
import { Link, useSearchParams } from 'react-router-dom'
import { searchContext } from './Layout'
import {playListContext} from './Layout'
import { playerContext } from './Layout'
import Player from './Player'
import { addToPlaylist1 } from '../redux/action'


export default function MainSearch() {
  //const [search,setSearch] = useContext(searchContext)
  const [search, setSearch] = useSearchParams();
  const [playList,setPlayList] = useContext(playListContext)
  const [player,  setPlayer] = useContext(playerContext)
  const [result, setResult] = useState([]);
  const NewPL = useSelector((state)=>state.playList)
  const dispatch = useDispatch();
  console.log("NewPL",NewPL);
  let addToPlaylist = function(v){
    let a = NewPL.find((item)=>v.id===item.id)
    if(a){return}
    console.log(playList);
    dispatch(addToPlaylist1(v));
    //setPlayList([...playList,v])
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
      'X-RapidAPI-Key': 'aa672e14d5msh21c8a1096ae2785p159464jsn93c036a8798f'
    }
  };

  useEffect(() => {
    fetch(
      'https://simple-youtube-search.p.rapidapi.com/search?query=' +
        search +
        '&safesearch=false',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResult(response.results);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, [search]);

  useEffect(()=>{
    // let a = JSON.stringify(NewPL)
    // localStorage.setItem("NewPL",a)
    console.log("useEffect occoured");
  },[NewPL])

  
  if (!result) {
    return <p>Data is loading...</p>;
  }   
  
  return (
    <div className='playlist'>
    {result?.map((v)=>{
      return(
       <div  key={Math.random()} className="cardSearch">
     <img className='imgSong' onClick={()=>setPlayer(v)} src={v.thumbnail.url} height="200px" alt="avazar"/>
      <div className='description'>
      <div className='titleSong' onClick={()=>setPlayer(v)}><h5>{v.title}</h5></div>
      <span>{v.views} views • {v.uploadedAt}</span>
      <br/>
      <div className='channelDiv'><p>🎵{v.channel.name}</p>
      <img className='channelImg' src={v.channel.icon} height="20px" alt="avazar"/>
      </div></div>
      <div className='addPL'>
      <Button variant="outline-secondary" onClick={()=>addToPlaylist(v)}>add to playList</Button></div>
      </div>
      )})}
    </div>
  )
}

// function PlayerOpen(props){
//   const { v } = props

//   return <div className='countryOpen'>
//    {v.id}
//   </div>
// }

{/* <Button className='btnP'  ></Button> */}