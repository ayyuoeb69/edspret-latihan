import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({ navbars }){
    return (
        <div style={{width: '100%', backgroundColor: '#152A46', padding: '20px', color: 'white', textAlign: 'center'}}>
            <h1>HEADER</h1>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {navbars.map((item, idx) => {
                            return(
                                <Nav.Link key={idx} href="#home">{item}</Nav.Link>
                            )
                        })}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;