import React from 'react';
import './styles.css';
import {Container, Navbar} from 'react-bootstrap';
import LogoHeader from "../../assets/img/photo.png"
import { FaShoppingBag } from "react-icons/fa";
import { Outlet, useNavigate } from 'react-router-dom'




function HeaderMenu () {
  const navigate = useNavigate();
  return (
    <>
  <Navbar bg="dark" variant="dark">

    <Container className='Width-desktop'>
      <Navbar.Brand onClick={() => navigate("/")}>
        <img
          alt=""
          src={LogoHeader}
          width="30"
          height="30"
          className="d-inline-block align-top"
           /> Tokoto
        
      </Navbar.Brand>
          <Navbar.Text>
            <FaShoppingBag onClick={() => navigate("/checkout")}/>
          </Navbar.Text>
    </Container>
  </Navbar>

 
  <Outlet />
    </>
  )
}

export default HeaderMenu