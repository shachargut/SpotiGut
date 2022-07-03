import React from 'react'
import {useNavigate } from 'react-router-dom';
function Login() {
  let navigate = useNavigate();
  function moveTOsite(){
    navigate( '/playlist');
  }
  
  return (
    <><form>
    <div>Login</div>
    <input></input>
    <button onClick={()=>moveTOsite()}>login</button>
    </form></>
  )
}

export default Login