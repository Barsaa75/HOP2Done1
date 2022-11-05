import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {
  const styles = {
    navbar: {
      width: "100vw",
      position: "absolute",
      zIndex: 100,
      backgroundColor: "transparent",
    },
    nav: {
      width: "100vw",
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <Navbar style={styles.navbar} bg="" variant="light">
      <Container>
        <Navbar.Brand>Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/login">LogIn</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
