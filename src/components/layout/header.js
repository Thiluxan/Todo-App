import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={LinkStyle} to="/">Home</Link> | <Link style={LinkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle ={
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    padding:'10px'
}

const LinkStyle = {
    color:'white',
    textDecoration:'none'
}