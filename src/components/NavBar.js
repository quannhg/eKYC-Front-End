import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    Route,
    Link
} from "react-router-dom";

export default function HomeNavBar() {
    return (
        <>
            <Navbar style={{ backgroundColor: '#393E46', maxHeight: '5.4em', minHeight: '5.4em' }}>
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
        <Navbar style={{ backgroundColor: '#393E46', maxHeight: '5.4em', minHeight: '5.4em'}}>
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
    );
}
