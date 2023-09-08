import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Link } from "react-router-dom";

export default function HomeNavBar() {
  return (
    <Navbar style={{ backgroundColor: "#393E46", height: "10vh" }}>
      <Navbar.Brand
        href="https://ticklab.vn"
        target="_blank"
        className="h-100 px-2 px-sm-4 px-xl-5"
      >
        <img
          src="/images/logoTL.png"
          className="d-inline-block align-top h-100"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
}

export function FunctionNavBar() {
  return (
    <Navbar
      className="flex justify-content-between w-100"
      style={{
        backgroundColor: "#393E46",
        height: "10vh",
      }}
    >
      <Navbar.Brand
        href="https://ticklab.vn"
        target="_blank"
        className="h-100 px-2 px-sm-4 px-xl-5"
      >
        <img
          src="/images/logoTL.png"
          className="d-inline-block align-top h-100"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav.Link as={Link} to="/" className="text-white pe-3 pe-sm-4 pe-xl-5">
        <div className="fs-12">Trang chủ</div>
      </Nav.Link>
    </Navbar>
  );
}
