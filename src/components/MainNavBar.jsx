import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavBar() {
    return (
        <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container className="mb-0">
                <Navbar.Brand href="#home">Brute Force </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features" target="_blank">Hugging faces</Nav.Link>
                        <Nav.Link href="#pricing">Github</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#pricing">$15</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;