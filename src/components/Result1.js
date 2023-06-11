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

export default function Result1(props) {
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Body className="show-grid p-0">
                <Container>
                    <Row >
                        <Col className='d-flex flex-column align-items-center justify-content-center p-0' sm="12" md="8">
                            <Row className="flex-grow-1 header border border-secondary w-100 rounded-start rounded-1">
                                <Modal.Title className="d-flex justify-content-center align-items-center fs-2">Độ trùng khớp</Modal.Title>
                            </Row>
                            <Row className="result-detail w-100 flex-grow-1 d-flex align-items-center justify-content-center">
                                <Col className='col-5 h-100 d-flex align-items-center justify-content-center'>
                                    <Card className='border border-0' style={{ width: '85%', height: '100%' }}>
                                        <div className="ref-img-card">
                                            <h4 className='' >Ảnh kiểm tra</h4>
                                            <Image className="image border border-secondary border-2 rounded-1 p-2 bg-white" alt="reference image" src={props.image1 && URL.createObjectURL(props.image1)} />
                                        </div>
                                    </Card>
                                </Col>
                                <Col className='col-5 h-100 d-flex align-items-center justify-content-center'>
                                    <Card className='border border-0' style={{width:'85%', height:'100%'}}>
                                        <div className="query-img-card">
                                            <Image className="image border border-secondary border-2 rounded-1 p-2 my-3 bg-white" alt="query image" src={props.image2 && URL.createObjectURL(props.image2)} />
                                            <h5 style={{ color: "#36B943" }}>100%</h5>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='p-0 border border-secondary rounded-1' sm="8" md="4">
                            <div className="result-consult">
                                <Card className='result-consult-cardborder border-secondary border-1'>
                                    <Card.Header className='border border-0' style={{ backgroundColor: '#fff' }}>
                                        <h4 className="sub-header">Kết quả</h4>
                                    </Card.Header>
                                    <MdCheckCircleOutline style={{ color: "#36B943", fontSize: "2em" }} />
                                    <Card.Text className='m-3'>
                                        2 ảnh là cùng một người
                                    </Card.Text>

                                </Card>

                                <Card className='border border-secondary border-1 comment-card'>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaRegCommentDots style={{ marginRight: '5px' }} />
                                        <h4 className="sub-header">Nhận xét</h4>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Col>
                                            <Button style={{ marginRight: '0.5em', width: "5rem", backgroundColor: '#36B943', border: '0' }}>Đúng</Button>
                                            <Button style={{ marginLeft: '0.5em', width: "5rem", backgroundColor: '#EC4700', border: '0' }}>Sai</Button>
                                        </Col>
                                    </div>

                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer className='p-1'>
                <Button className="btn btn-light btn-outline-secondary" onClick={props.onHide}>Thoát</Button>
            </Modal.Footer>
        </Modal>
    );
}
