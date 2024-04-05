import {Navbar, Container, Nav} from "react-bootstrap";
import {useEffect, useState} from "react";
import logo from '../assets/img/png/iconDesarrollador100.png';
import navIcon1 from '../assets/img/png/icons8-whatsapp-480.png';
import navIcon2 from '../assets/img/png/icons8-github-480.png';
import navIcon3 from '../assets/img/png/icons8-linkedin-480.png'

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

    function handleIconClick( navicon2, navicon3, navicon4) {
        console.log('Icon clicked:', navIcon1);
        console.log('Icon clicked:', navIcon2);
        console.log('Icon clicked:', navIcon3);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"
                                  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('home')}>Home </Nav.Link>
                        <Nav.Link href="#link"
                                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('skills')}>skills</Nav.Link>
                        <Nav.Link href="#link"
                                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('projects')}>projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://api.whatsapp.com/send?phone=3512275843" target="_blank" rel="noreferrer"><img src={navIcon1} alt=" "/></a>
                            <a href="https://github.com/EstebanLescano" target="_blank" onClick={() => handleIconClick('navicon2')} rel="noreferrer"><img src={navIcon2} alt=" "/></a>
                            <a href="https://www.linkedin.com/in/esteban-lescano" target="_blank" onClick={() => handleIconClick('navicon3')} rel="noreferrer"><img src={navIcon3} alt=" "/></a>
                        </div>
                        {/*<button className="vvd"*/}
                        {/*        onClick={() => console.log('connect')}><span>Let’s Connect</span>*/}
                        {/*</button>*/}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}