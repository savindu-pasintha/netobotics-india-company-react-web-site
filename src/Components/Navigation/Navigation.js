import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter,
    Route,
    Link,
    NavLink,
    Router,
    Routes,
} from "react-router-dom";
import './Navigation.css';
export default function Navigation() {
    const styles = { backgroundColor: "black" }
    return (
        <Container fluid className="Navigation-container" style={styles}>
            <Row>
                <Col><Link to="/logo" className='Link-text' ><h1 className='Link-text'></h1></Link></Col>
                <Col><Link to="/about" className='Link-text'><h1 className='Link-text'>About</h1></Link></Col>
                <Col><Link to="/product_services" className='Link-text'><h1 className='Link-text'>product & Services</h1></Link></Col>
                <Col><Link to="/capalilities" className='Link-text'><h1 className='Link-text'>Capabilities</h1></Link></Col>
                <Col><Link to="/innovation" className='Link-text'><h1 className='Link-text'>Innovation</h1></Link></Col>
                <Col><Link to="/partners" className='Link-text'><h1 className='Link-text'>Partners</h1></Link></Col>
                <Col><Link to="/carrer" className='Link-text'><h1 className='Link-text'>Carrer</h1></Link></Col>
            </Row>
        </Container>
    )
}
