import React,{useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  let location=useLocation();
  useEffect(()=>{
    console.log(location)
  },[location])
  const handleClick=()=>{
    localStorage.removeItem("auth-token")
  }
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-danger">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">iNotebook</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
        {/* location contains an object of all the details of current page and pathname is one of its values */}
          <li className="nav-item"><Link className={`nav-link ${location.pathname==="/" ? "active" : " "}`} aria-current="page" to="/">Home</Link></li>
          <li className="nav-item"><Link className={`nav-link ${location.pathname==="/about" ? "active" : " "}`} to="/about">About</Link></li>  
          <form className="d-flex">
          {!localStorage.getItem("auth-token") && <><Link className="btn btn-secondary mx-1" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-secondary mx-1" to="/signup" role="button">
              Signup
            </Link></> }
          {localStorage.getItem("auth-token") && <button className="btn btn-secondary mx-1" onClick={handleClick}>Log Out</button> } 
          </form>
        </ul>
      </div>
    </div>
  </nav> 
  )
}

export default Navbar
