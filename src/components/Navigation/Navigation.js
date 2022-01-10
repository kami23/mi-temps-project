import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar expand="lg" className="navBar">
      <Container className="mainNav">
        <Navbar.Brand className="navBrand">
          <img src={logo} alt="Brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navigationLinks">
            <Nav.Link href="/">
              <Link className="navLinkItem" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLinkItem" to="/jobs">
                Jobs
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLinkItem" to="/jobs">
                Students
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLinkItem" to="/jobs">
                Employers
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLinkItem" to="/jobs">
                About us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLinkItem" to="/jobs">
                Blog
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="navButtons">
            <Link to="/signup">
              <Button className="m-2 signupButton">Sign up</Button>{" "}
            </Link>
            <Button className="m-2 signinButton">Sign in</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
