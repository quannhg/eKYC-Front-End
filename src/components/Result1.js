import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { MdCheckCircleOutline } from 'react-icons/md'
import { FaRegCommentDots } from 'react-icons/fa'
import "./Result1.css"

export default function Result1(props, image1, image2) {
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col md="8">
                            <Row>
                                <h1 className="header"> Độ trùng khớp</h1>
                            </Row>
                            <Row class="result-detail" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Col xs={4}>
                                    <div class="ref-img-card">
                                        <h4 >Ảnh kiểm tra</h4>
                                        <Image className="image" alt="reference image" src={image1} />
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div class="query-img-card">
                                        <Image className="image" alt="query image" src={image2} />
                                        <h5 style={{ color: "#36B943" }}>100%</h5>
                                    </div>
                                </Col>
                            </Row>

                        </Col>

                        <Col md="4">
                            <div class="result-consult">
                                <div class="result-consult-card">
                                    <h4 class="sub-header">Kết quả</h4>
                                    <MdCheckCircleOutline style={{ color: "#36B943", fontSize:"2em"}}/>
                                    <Card.Text>
                                        2 ảnh là cùng một người
                                    </Card.Text>

                                </div>

                                <div class="comment-card">
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaRegCommentDots style={{ marginRight: '5px' }} />
                                        <h4 className="sub-header">Nhận xét</h4>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Col>
                                            <Button style={{ marginRight: '0.5em', width:"5rem"}}>Đúng</Button>
                                            <Button style={{ marginLeft: '0.5em', width: "5rem" }}>Sai</Button>
                                        </Col>
                                    </div>

                                </div>
                            </div>
                        </Col>




                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Thoát</Button>
            </Modal.Footer>
        </Modal>
    );
}
