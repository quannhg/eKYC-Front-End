import React, { useState } from 'react';
import { FunctionNavBar } from './NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProcessButton from './LoadingButton';
import { MdOutlineChangeCircle } from 'react-icons/md'
import { MdOutlineAddBox } from 'react-icons/md'

import './Feature1.css';


function UploadCard({ text, onFileChange }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.type.split('/')[0] === 'image' && selectedFile.size <= 2 * 1024 * 1024) {
            setFile(selectedFile);
            onFileChange(selectedFile);
        } else if (selectedFile.size > 2 * 1024 * 1024) {
            window.alert('File size exceeds 2MB limit');
        } else if (selectedFile.type.split('/')[0] !== 'image') {
            window.alert('Selected file is not an image');
        }
    };

    const handleUploadClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.addEventListener('change', handleFileChange);
        input.click();
    };

    return (
        <Card className='d-flex justify-content-center align-items-center m-0 border border-1 border-secondary w-200 h-100'>
            <Card.Body >
                {(!file) && (
                    <Button variant="primary" onClick={handleUploadClick} className="d-flex justify-content-center align-items-center">
                        <MdOutlineAddBox className="ms1 me-2"/>
                        {text}
                    </Button>
                )}
                {file && (
                    <div>
                        <img
                            id="image-preview"
                            src={file && URL.createObjectURL(file)}
                            alt="uploaded file"
                            style={{
                                maxWidth: '200px',
                                maxHeight: '100%',
                            }}
                        />

                        <MdOutlineChangeCircle style={{ fontSize: '30px', color: '#00ADC6' }} onClick={handleUploadClick} />
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}



function Feature1() {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);

    const handleFile1Change = (file) => {
        setFile1(file);
    };

    const handleFile2Change = (file) => {
        setFile2(file);
    };

    return (
        <div className="main">
            <Container className="vh-100 vw-100 p-0 m-0">
                <Row>
                    <FunctionNavBar />
                </Row>

                <Row className="main p-3 m-0">
                    <Col className="d-flex flex-column justify-content-center align-items-center p-0 m-0">
                        <Row className='mb-5 flex-grow-1'>
                            <h2 style={{ fontWeight: 'semiBold', fontSize: '54.69px', color: '#00ADB5', paddingTop: '0px' }}>
                                So sánh với 1 đối tượng
                            </h2>
                        </Row>
                        <Row>
                            <Col>
                                <UploadCard text='Tải lên ảnh kiểm tra' onFileChange={handleFile1Change} />
                            </Col>
                            <Col>
                                <UploadCard text='Tải lên ảnh đối chiếu' onFileChange={handleFile2Change} />
                            </Col>
                        </Row>
                        <Row className='mt-5 mb-0' style={{ width: '10%' }} >
                            <ProcessButton image1={file1} image2={file2} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Feature1;
