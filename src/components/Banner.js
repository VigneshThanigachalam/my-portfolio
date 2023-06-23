import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { CloudArrowDownFill } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useTypewriter } from "react-simple-typewriter";

export const Banner = () => {
    const [text] = useTypewriter({
        words: ["MERN Stack Developer"],
        loop: 0,
    });
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        Welcome to my Portfolio
                                    </span>
                                    <h1>{`Hi! I'm ${text}`}</h1>
                                    <p>
                                        Full Stack Developer with 1+ years of
                                        hands-on experience designing,
                                        developing, and implementing
                                        applications and solutions using a range
                                        of technologies and programming
                                        languages. Seeking to leverage broad
                                        development experience and hands-on
                                        technical expertise in a challenging
                                        role as a Full-stack Developer.
                                    </p>
                                    <a className="resume-btn" href="Hari of BDO Office Quotation.pdf" download>
                                        My Resume
                                        <CloudArrowDownFill size={25} />
                                    </a>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img src={headerImg} alt="Header Img" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
