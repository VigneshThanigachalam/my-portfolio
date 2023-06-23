import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavItem } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";

export const NavBar = () => {
    const [toggle, settoggle] = useState("");
    const [scrolled, setScrolled] = useState(false);
const [homeClass, sethomeClass] = useState("active");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
                sethomeClass("")
            } else {
                setScrolled(false);
                sethomeClass("active")
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <Router>
            <Navbar expanded={toggle} expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <h1 className="text-white d-none d-md-none d-sm-block d-xl-none d-xxl-block">
                            Vignesh Thanikachalam
                        </h1>
                        <h1 className="text-white d-block d-sm-none d-md-block d-xl-block d-xxl-none">
                            Vignesh T
                        </h1>
                    </Navbar.Brand>
                    <Navbar.Toggle>
                        {toggle?(<span type="button" onClick={()=>settoggle("")} class="btn-close btn-close-white" aria-label="Close"></span>):(<span className="navbar-toggler-icon" onClick={()=>settoggle("expanded")}></span>)}
                    </Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className="ms-auto">

                            <Link activeClass="active" className={homeClass} smooth spy to="home" duration={100} onClick={()=>settoggle("")}>
                                Home
                            </Link>
                            <NavItem href="#skills">
                                <Link activeClass="active" smooth spy to="skills" duration={100} onClick={()=>settoggle("")}>
                                    Skills
                                </Link>
                            </NavItem>
                            <Link activeClass="active" smooth spy to="project" duration={100} onClick={()=>settoggle("")}>
                                Projects
                            </Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon d-lg-block d-md-none">
                                <a href="https://www.linkedin.com/in/vignesh-thanikachalam" target="_blank" className="text-light">
                                <h4><AiFillLinkedin /></h4>
                                </a>
                                <a href="https://github.com/VigneshThanigachalam" target="_blank" className="text-light">
                                    <h4><AiFillGithub /></h4>
                                </a>
                            </div>
                            <Link activeClass="active" smooth spy to="connect" duration={100} onClick={()=>settoggle("")}>
                                <button className="vvd">
                                    <span>Let’s Connect</span>
                                </button>
                            </Link>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
