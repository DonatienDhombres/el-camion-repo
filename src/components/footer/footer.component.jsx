import React from 'react';
import './footer.styles.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Footer = () => (
    <footer className="footer">
        <Container>
            <Row>
                <Col md={4}>
                    <img className="logo-footer" src="./images/logo_el-camion.png" alt="" />
                </Col>
                <Col md={4}>
                    <div className="container align-self-center">
                        <p>Retrouvez-nous sur les réseaux sociaux ! </p>

                        <div className="social-icons">
                            <a href="https://www.instagram.com/el_camion2.0/">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x social-icon-light"></i>
                                    <i className="fab fa-instagram fa-stack-1x social-icon-dark"></i>
                                </span>
                            </a>

                            <a href="https://www.facebook.com/ElCamionCantinaMexicana">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x social-icon-light"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x social-icon-dark"></i>
                                </span>
                            </a>

                            <a href="mailto:el.camion@icloud.com">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x social-icon-light"></i>
                                    <i className="far fa-envelope fa-stack-1x social-icon-dark"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="text">
                        <div>
                            <p>Contact</p>
                        </div>
                        <div className="tel">
                            <i className="fas fa-mobile-alt"></i> <a href="tel:+33682686183">06 . 82 . 68 . 61 . 83</a>
                        </div>
                        <div className="mail"><i class="far fa-envelope"></i> <a href="mailto:el.camion@icloud.com">el.camion@icloud.com</a></div>
                    </div>
                </Col>
            </Row>
            <div className="copyright">
                <p> ©2020 El Camion. Réalisé par <a href="mailto:donatien.lesravitailleurs@gmail.com">Donatien</a></p>
            </div>
        </Container>
    </footer>
)


export default Footer;