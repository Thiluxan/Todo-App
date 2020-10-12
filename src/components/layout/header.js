import React from 'react'

export default function header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>

        </header>
    )
}

const headerStyle ={
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    padding:'10px'
}