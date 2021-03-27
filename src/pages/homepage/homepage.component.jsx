import React from 'react'

import './homepage.styles.css';
import { Link, Route } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import Footer from '../../components/footer/footer.component'


const HomePage = () => (
    <div>
        <div className="homepage-title">
            <div className='title-overlay'>
                <img className='homepage-logo-central' src="./images/logo_el-camion.png" alt="" srcset="" />
                <h1 className='title-1'> <strong> ¡ Bienvenidos a todos !</strong> </h1>
                <span className='subtitle-1'>Chez El Camion, aller-retour au Mexique, sans payer le voyage ! <br />
                        Retrouvez les saveurs authentiques des plats préparés par nos soins, toujours avec amour.
                    </span>
            </div>
            <img className='label d-none d-lg-block' src="./images/label.png" alt="" />
        </div>


        {/* <section className='qui-est-el-camion'>
            <div className='homepage-body'>
                <h1>Qui est </h1>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            One of 2 columns
                        </div>
                        <div class="col-sm">
                            <img src="./images/team.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section> */}


        <section className='qu-est-ce-qu-on-mange'>
            <h4 className="subtitles-1">Qu'est-ce qu'on mange ?</h4>
            <div className='qu-est-ce-qu-on-mange-container'>
                <Carousel>
                    {/* 1 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/carousel/burritos.jpg"
                            alt="Burritos"
                            data-interval="5000"
                        />
                        <Carousel.Caption>
                            <h4>Burritos</h4>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* 2 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/carousel/nacho-machos.jpg"
                            alt="Nacho Machos"
                        />
                        <Carousel.Caption>
                            <h4>Nacho Machos</h4>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* 3 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/carousel/quesadillas.jpg"
                            alt="Quesadillas"
                        />
                        <Carousel.Caption>
                            <h4>Quesadillas</h4>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* 4 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/carousel/tacos.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h4>Tacos</h4>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                <span className="button-container">
                    <Link to="/menu">
                        <Button variant="outline-warning" size="lg" className="button-1">
                            Voir toutes nos recettes
                        </Button>
                    </Link>
                </span>
            </div>
        </section>



        <section className='ou-nous-trouver'>
            <h4 className="subtitles-1 ou-nous-trouver-title">Où nous trouver ?</h4>
            <div className='ou-nous-trouver-container'>
                <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1Aro_dXWapD43tS4b_jeRrh8wRaptwRhq" width="640" height="480" className="img-map-1"></iframe>
                <span className="button-container">
                    <Link to={{ pathname: "https://www.google.com/maps/d/u/9/viewer?hl=fr&mid=1Aro_dXWapD43tS4b_jeRrh8wRaptwRhq&ll=50.61903490417048%2C3.4015547848337713&z=9" }} target="_blank">
                        <Button variant="outline-warning" size="lg" className="button-1">
                            En savoir plus sur nos emplacements
                        </Button>
                    </Link>
                </span>
            </div>
        </section>
        <Footer />

    </div>
)

export default HomePage;
