import React from 'react'
import {Link,useNavigate} from "react-router-dom"
function Navbar() {
    const navigate = useNavigate();
    const handleHome = ()=>{
        navigate("/")
    }
  return (
    <div>
        <Link to="/" onClick={handleHome}>Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contact</Link>
        
    </div>
  )
}

export default Navbar