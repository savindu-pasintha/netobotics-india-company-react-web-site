import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutItem from '../CommonComponets/AboutItem';
import DotImage from './dots1.png'
import './About.css';

export default function About() {
    //sm, md, lg, xl, xxl={count_of_column}
    const styles = {
        container: { backgroundColor: '#031E23', },
        left: { backgroundColor: '#031E23', },
        img: { width: 'auto',height:"50%", paddingLeft: "20%", paddingTop: "0%" },
        right: { backgroundColor: '#031E23' },
        row: { backgroundColor: '#031E23' },
        col: { color: "white", backgroundColor: '#031E23' },
        input: { width: '250px', height: '50px', borderRadius: '10px', backgroundColor: "#E5E5E5", },
        h: { fontSize: '45px', paddingLeft: "20%", paddingTop: "0%",
         color: "white", fontWeight: 300, fontFamily: 'Roboto', fontStyle: 'normal' },
        p: { paddingLeft: "20%", color: "white" }
    }
    return (
        <Container fluid className="Navigation-container" style={styles.container}>
            <Row style={styles.row}>
                <Col style={styles.col}>
                </Col>
            </Row>
            <Container fluid>
                <Row>
                    <Col md={5} style={styles.left} >
                        <h style={styles.h}>About us</h> <br /> <p style={styles.p}>WHAT WE DO</p>
                        <br />
                        <img src={DotImage} style={styles.img} />
                    </Col>
                    <Col md={2} style={styles.left} ></Col>
                    <Col md={5} style={styles.right}>
                        <Container fluid>
                            <Row>
                                <AboutItem key="l" title="Who we are" discription="Clean birth consciousness cosmic ocean citizens of distant epochs" />
                            </Row>
                            <Row>
                                <AboutItem key="ll" title="Why us" discription="Kindling the energy hidden in matter a mote of dust suspended blues" />
                            </Row>
                            <Row>
                                <AboutItem key="lll" title="Our Team" discription="Extraplanetary how far away equation with pretty stories for little good" />
                                <br />
                                <input type="email" placeholder="Your email address" style={styles.input} />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
