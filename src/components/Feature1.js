import React from 'react';
import { FunctionNavBar } from './NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProcessButton from './LoadingButton'

import './Home.css'

export function Feature1() {
    return (
        <div>
            <div>
                <FunctionNavBar />
                <main className="main">
                    <Container>
                        <Row style={{ paddingBottom: '20px' }}>
                            <h1 style={{ fontWeight: 'semiBold', fontSize: '54.69px', color: '#00ADB5', paddingTop: '0px' }}> So sánh với 1 đối tượng</h1>
                        </Row>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Button
                                            variant="primary"
                                        >
                                            {'Tải lên ảnh kiểm tra'}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Button
                                            variant="primary"
                                        >
                                            {'Tải lên ảnh kiểm tra'}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <ProcessButton/>
                        </Row>
                    </Container>
                </main>
            </div>
        </div>
    );
}

export default Feature1;
