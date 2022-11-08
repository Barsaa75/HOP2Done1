import { Navbar, Container, Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { darkModeContext } from "../App";
import { useContext } from "react";

const Header = () => {
  const { setIsDarkMode } = useContext(darkModeContext);
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
      <Form>
        <Form.Check
          onChange={(e) => setIsDarkMode(e.target.checked)}
          type="switch"
          id="custom-switch"
          label="dark mode"
        />
      </Form>
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
