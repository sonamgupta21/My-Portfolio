import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import github from "../assets/img/github.svg";
import linkedin from "../assets/img/nav-icon1.svg";
import dribble from "../assets/img/dribbble.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="brand">Portfolio</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span bar-toggler-icon="nav"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active nabvar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active nabvar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active nabvar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/sonam-gupta-17b1211b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="" />
              </a>
              <a
                href="https://github.com/sonamgupta21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" />
              </a>
              <a
                href="https://dribbble.com/sonamgupta02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={dribble} alt="" />
              </a>
            </div>
            <button onClick={() => console.log("connect")} href="#projects">
              <span>
                <a href="#contact">Let's Connect</a>
              </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
