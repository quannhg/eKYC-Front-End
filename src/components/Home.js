import React from 'react';
import HomeNavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { MdOutlineGroups } from 'react-icons/md'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './Home.css'

export function HomePage() {
    return (
        <div>
            <HomeNavBar />
            <main className='main'>
                <Container>
                    <Row>
                        <Col style={{ paddingRight: '100px', alignItems: 'center' }}>
                            <div style={{ paddingBottom: '20px' }}>
                                <h1 style={{ fontWeight: 'semiBold', fontSize: '54.69px', color: '#00ADB5', paddingTop: '0px' }}> Hệ thống nhận diện gương mặt</h1>
                                <p style={{ fontSize: '22.4px', color: '#EEEEEE', marginTop: '15px' }}>Tải lên các bức ảnh gương mặt và xác định độ trùng khớp</p>
                            </div>
                            <div className="d-grid gap-2 mt-5">
                                <Link to="./feature1" style={{ padding: "0px", margin: "0px" }}>
                                    <Button size="lg" className="custom-button" style={{ backgroundColor: "#00ADC6", border: "0px" }}>
                                        <div style={{ width: '554.4px', textAlign: 'left', padding: "0px 100px" }}>
                                            <MdOutlineAccountCircle style={{ marginRight: '30px', height: '50px', fontSize: '50px', marginBottom: '5px' }} />
                                            So sánh với 1 đối tượng
                                        </div>
                                    </Button>
                                </Link>
                                <Link to="./feature1" style={{ padding: "0px", margin: "0px" }}>
                                    <Button size="lg" className="custom-button" style={{ backgroundColor: "#00ADC6", border: "0px" }}>
                                        <div style={{ width: '554.4px', textAlign: 'left', padding: "0px 100px" }}>
                                            <MdOutlineGroups style={{ marginRight: '30px', height: '50px', fontSize: '50px', marginBottom: '5px' }} />
                                            So sánh với nhiều đối tượng
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="d-none d-lg-block" style={{ alignItems: 'center' }} >
                            <Image src="/images/facial-recognition.jpg" height={451.85} rounded />
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}

export default HomePage;
