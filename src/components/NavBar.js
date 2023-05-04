import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    Route,
    Link
} from "react-router-dom";
import HomePage from './Home';

export default function HomeNavBar() {
    return (
        <>
            <Navbar style={{ backgroundColor: '#393E46' }}>
                <Container>
                    <Navbar.Brand href="https://ticklab.vn" target="_blank">
                        <img
                            src="/images/logoTL.png"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    );
}

export function FunctionNavBar() {
    return (
        <>
            <div>
                <Navbar style={{ backgroundColor: '#393E46' }}>
                    <Container>
                        <Navbar.Brand href="https://ticklab.vn" target="_blank">
                            <img
                                src="/images/logoTL.png"
                                height="60"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />

                        </Navbar.Brand>
                        <Nav.Link as={Link} to="/" style={{ color: "#FFFFFF", fontSize: '17.92px' }}>Trang chủ</Nav.Link>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}
