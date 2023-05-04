import React from 'react';
import {FunctionNavBar} from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { MdOutlineGroups } from 'react-icons/md'
import { MdOutlineAccountCircle } from 'react-icons/md'
import './Home.css'

export function Feature1() {
    return (
        <div>
            <FunctionNavBar />
            <main className="main">
                <Container>
                    <Row>
                        <div style={{ paddingBottom: '20px' }}>
                            <h1 style={{ fontWeight: 'semiBold', fontSize: '54.69px', color: '#00ADB5', paddingTop: '0px' }}> So sánh với 1 đối tượng</h1>
                        </div>
                    </Row>
                </Container>
            </main>
        </div>
    );
}

export default Feature1;
