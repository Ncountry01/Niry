import React from 'react'
import { Link } from 'react-router-dom'
import {Nav, Navbar, Container} from 'react-bootstrap'




const AppNavBar =() => {

    return(
        <>
     <Navbar bg="primary" variant="primary" >
    <Container>
    <Link to="/" style={{color:'white',textDecoration:'none', padding:'10px'}}>Employee Management</Link>
    <Nav className="me-auto" sx={{color:'white'}} >
      <Link to="/" 
      style={{color:'white', padding:'10px 10px 10px 0', textDecoration:'none'}}>
      Home</Link>
      <Link to="/list" style={{color:'white',textDecoration:'none', padding:'10px 10px 10px 0'}}>
      Employee List</Link>
      <Link to="/add" style={{color:'white',textDecoration:'none', padding:'10px 10px 10px 0'}}>
      Add Employee</Link>
    </Nav>
    </Container>
  </Navbar>       
        </>
    )

}

export default AppNavBar
