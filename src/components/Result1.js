import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import "./Result1.css"

export default function Result1(props) {
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col md="9">
                            <Row>
                                <h3> Độ trùng khớp</h3>
                            </Row>
                            <Row>
                                <Col>
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Title>Ảnh kiểm tra</Card.Title>
                                        <Card.Img className="custom-card-image" variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Text>
                                                100%
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '10rem' }}>
                                        <Card.Title>Ảnh kiểm tra</Card.Title>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Text>
                                                100%
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                        </Col>

                        <Col>

                            <Card style={{ width: '10rem' }}>
                                <Card.Body>
                                    <Card.Title>Kết quả</Card.Title>
                                    <Card.Text>
                                        2 ảnh là cùng một người
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '10rem' }}>
                                <Card.Body>
                                    <Card.Title>Nhận xét</Card.Title>
                                </Card.Body>
                                <Container>
                                    <Col>
                                        <Button> Đúng </Button>
                                        <Button> Sai </Button>
                                    </Col>
                                </Container>

                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
