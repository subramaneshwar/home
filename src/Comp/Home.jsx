import React from 'react'
import Navs from './Nav'
function Home() {
  return (
    <div>
        <Navs/>
        <div style={{width:"100%",height:"500px",margin:"30px 0",backgroundColor:"#9E9E9E",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}> 
            <h1>Customize Bootstrap Navbar</h1>
            <p>easy way to change navbar background,text and hover link color in bootstrap</p>
        </div>
    </div>
  )
}

export default Home