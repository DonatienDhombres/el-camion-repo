import React from 'react';
import './find-us.styles.css'

//          React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Footer from '../../components/footer/footer.component'



const FindUs = () => (
    <div className="findus">
        <h2 className="title-2">Où nous trouver</h2>
        <Container>
            <div className='ou-nous-trouver-container'>
                <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1Aro_dXWapD43tS4b_jeRrh8wRaptwRhq" width="640" height="480" className="img-map-3"></iframe>
                <span className="button-container">
                    <Link to={{ pathname: "https://www.google.com/maps/d/u/9/viewer?hl=fr&mid=1Aro_dXWapD43tS4b_jeRrh8wRaptwRhq&ll=50.61903490417048%2C3.4015547848337713&z=9" }} target="_blank">
                        <Button variant="outline-warning" size="lg" className="button-1">
                            En savoir plus sur nos emplacements
                        </Button>
                    </Link>
                </span>
            </div>

        </Container>
        <Footer />
    </div>
)


export default FindUs;