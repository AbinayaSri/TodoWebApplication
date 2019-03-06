import React from 'react';
import {Link} from 'react-router-dom';
function Header()
{
  return (
    <header style={headerStyle}>
    <h1>TodoList</h1>
    <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}
const headerStyle={
  background:'#bdc3c7',
  textAlign:'center',
  padding:'5px'
}
const linkStyle={
  textDecoration:'none',
  color:'black'
}
export default Header;
