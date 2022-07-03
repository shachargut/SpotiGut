import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { searchContext } from './Layout'


function Search() {
  const [input,setInput] = useState("")
  const [search, setSearch] = useContext(searchContext)
  return (
    <div>
      <input onChange={(e)=>setInput(e.target.value)}></input>
      <Link to="/result"><button onClick={()=>setSearch(input)}>Search</button></Link>
    </div>
  )
}

export default Search
{/* <input onChange={(e)=>setInput(e.target.value)}></input> */}