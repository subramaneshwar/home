import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
function Navs() {
  return (
    <div style={{height:"10vh",width:"100%",backgroundColor:"red",margin:"2px 0",fontSize:"1.3rem",display:"flex",alignItems:"center",color:"white"}}>
       <nav style={{width:"100%",display:"flex",alignItems:"center",padding:"0 30px",justifyContent:"space-between"}} >
        <div className="logo">
            <h1> Koding Made Simple </h1> 
        </div>
        <ul style={{display:"flex",gap:"50px",alignItems:"center",justifyContent:"space-between",paddingRight:"60px"}}>
            <li style={{listStyle:"none"}} >Bootstrap</li>
            <li style={{listStyle:"none"}} >Themes</li>
            <li style={{listStyle:"none"}} >Blog</li>
        </ul>
       </nav>
    </div>
  )
}

export default Navs