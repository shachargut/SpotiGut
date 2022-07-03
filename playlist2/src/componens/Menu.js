import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
    <div>Menu</div>
    <Link to='/playlist'><button>playList</button></Link>
   
    </>
  )
}

export default Menu