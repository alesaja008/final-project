import { Button } from 'react-bootstrap'
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import HeaderMenu from '../../components/Navbar';
import Footer from '../../components/Footer';




const HomeYa = () => {
  const navigate = useNavigate();

  return (
    <>
    <HeaderMenu />

    <Footer />
    <div style={ {display: "flex", gap: "10px"} }>
    {/* <Button variant="primary" onClick={() => navigate("/")}>Product</Button>
    <Button variant="primary" onClick={() => navigate("/checkout")}><FaShoppingBag/></Button> */}
    </div>
    </>
  )
}

export default HomeYa