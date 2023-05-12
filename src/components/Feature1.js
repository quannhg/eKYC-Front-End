import React, { useState } from 'react';
import { FunctionNavBar } from './NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProcessButton from './LoadingButton';
import {MdOutlineChangeCircle} from 'react-icons/md'

import './Home.css';


function UploadCard(text) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.type.split('/')[0] === 'image' && selectedFile.size <= 2 * 1024 * 1024) {
            setFile(selectedFile);
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
        <Card style={{ width: '450px', height: '300px', alignItems: 'center' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>    
                {(!file) && (
                    <Button variant="primary" onClick={handleUploadClick}>
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
                                marginTop: '10px',
                                maxWidth: '200px',
                                maxHeight: '100%',
                            }}
                        />

                        <MdOutlineChangeCircle style={{ fontSize: '30px', color: '#00ADC6'}} onClick ={handleUploadClick} />
                    </div>
                )}
            </Card.Body>
        </Card >
    );
}


function Feature1() {
    return (
        <div>
            <div>
                <FunctionNavBar />
                <main className="main">
                    <Container>
                        <Row style={{ paddingBottom: '20px' }}>
                            <h1 style={{ fontWeight: 'semiBold', fontSize: '54.69px', color: '#00ADB5', paddingTop: '0px' }}>
                                So sánh với 1 đối tượng
                            </h1>
                        </Row>
                        <Row>
                            <Col>
                                {UploadCard('Tải lên ảnh kiểm tra')}
                            </Col>
                            <Col>
                                {UploadCard('Tải lên ảnh đối chiếu')}
                            </Col>
                        </Row>
                        <Row>
                            <ProcessButton />
                        </Row>
                    </Container>
                </main>
            </div>
        </div>
    );
}

export default Feature1;
