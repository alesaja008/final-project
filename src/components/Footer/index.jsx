import React from 'react'
import './styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FcLike } from "react-icons/fc";

function Footer () {

    return (

    <section>
        <Container className='mt-5 container-footer'>
        <Row>
            <Col xs={6} lg={6}>
            <h4 className='tittle-footer'>Bidang ilmu</h4>
                    <ul className='links-footer-ul'>
                        <li>Digital marketing</li>
                        <li>Product management</li>
                        <li>English</li>
                        <li>Programming</li>
                    </ul>
            </Col>
            <Col xs={6} lg={6}>
            <h4 className='tittle-footer'>Progam</h4>
                     <ul className='links-footer-ul'>
                         <li>Bantuan</li>
                         <li>Kontak kami</li>
                         <li>Media sosial</li>
                     </ul>
            </Col>

            <Col className='mb-5'>
            <div className='tittle-bottom-footer'>
                 <div className='tittle-copyright'>
                     <h4>© 2023 | made with <FcLike/> | Ales Pixie </h4>
                 </div>
             </div>
            </Col>
        </Row>
        </Container>
    </section>
 
  )
}

export default Footer 
