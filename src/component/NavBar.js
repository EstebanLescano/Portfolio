import {Navbar, Container, Nav} from "react-bootstrap";
import {useEffect, useState} from "react";
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/instagram.png';
import navIcon3 from '../assets/img/whatsapp.png';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, seScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true)
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                {/*<img src={logo} alt="Logo"/>*/}
                <Navbar.Toggle>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={
                            activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('home')}>Home </Nav.Link>
                        <Nav.Link href="#link"
                                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('skills')}
                        >skills</Nav.Link>
                        <Nav.Link href="#link"
                                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('projects')}
                        >projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">0
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt=" "/></a>
                            {/*<a href="#"><img src={navIcon2} alt=" "/></a>*/}
                            <a href="#"><img src={navIcon3} alt=" "/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let’s Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}