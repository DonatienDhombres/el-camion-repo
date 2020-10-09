import React from 'react';
import './find-us.styles.css'

//          React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from '../../components/footer/footer.component'



const FindUs = () => (
    <div className="findus">
        <h2 className="title-2">Où nous trouver</h2>
        <Container>

            {/* Vue d'ensemble */}
            <Row>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Vue d'ensemble - Camion 1</h4>
                    <div className="google-maps-div">
                        <img src="./images/map.png" alt="" className="img-map-2" />
                    </div>
                </Col>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Vue d'ensemble - Camion 2</h4>
                    <div className="google-maps-div">
                        <img src="./images/map2.png" alt="" className="img-map-2" />
                    </div>
                </Col>
            </Row>



            {/* 1 */}
            <Row>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Lundi - 11h45-14h <br /> Hôpital Huriez, Lille</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-lundi"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80986.13504904919!2d3.0483883627455195!3d50.63052147980388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5103447dfd7%3A0xab5633f5f6257936!2sCHU%20de%20Lille!5e0!3m2!1sfr!2sfr!4v1599033188910!5m2!1sfr!2sfr"
                            width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Lundi - 11h45-14h <br />O'Tera, Sart</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-lundi-2"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.6175399307567!2d3.138409915498139!3d50.65279377950375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329c951de8245%3A0xf57208a82059145d!2sO&#39;tera%20du%20Sart!5e0!3m2!1sfr!2sfr!4v1599131454619!5m2!1sfr!2sfr" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
            </Row>





            {/* 3 */}
            <Row>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Mardi - 11h45-14h <br />Plaine Images, Tourcoing</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-mardi"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.060184964895!2d3.1554034155001043!3d50.70026767951061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c328dfad101edf%3A0x2551d389c0607e14!2sPlaine%20Images!5e0!3m2!1sfr!2sfr!4v1599033726090!5m2!1sfr!2sfr"
                            width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Mercredi - 11h45-14h <br />CNFPT, Lille</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-mercredi-1"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.0359765290114!2d3.0792594152647284!3d50.6264484795001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d59c55555555%3A0xca8295391f1672e5!2sCentre%20National%20De%20La%20Fonction%20Publique%20Territoriale%20C.N.F.P.T!5e0!3m2!1sfr!2sfr!4v1602229817209!5m2!1sfr!2sfr" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
            </Row>


            {/* 4 */}
            <Row>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Mercredi - 11h45-14h <br />O'Tera, St André</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-mercredi-2"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.4344819276284!2d3.0455733154982667!3d50.65619307950421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x577166eca24afbc2!2sO&#39;tera%20Saint%20Andr%C3%A9!5e0!3m2!1sfr!2sfr!4v1599130987718!5m2!1sfr!2sfr" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Jeudi - 11h45-14h <br />Centre Européen de formation, V.D'ascq</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-jeudi"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.1655919950663!2d3.129347715496204!3d50.60546047949709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d640b7ba1381%3A0x1d452ab85c36f80c!2sCentre%20Europ%C3%A9en%20de%20Formation!5e0!3m2!1sfr!2sfr!4v1599131157193!5m2!1sfr!2sfr" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
            </Row>



            {/* 5 */}
            <Row>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Vendredi - 11h45-14h <br />Euratechnologies, Lille</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-vendredi"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.680299111027!2d3.017811315497321!3d50.633055579500926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d55c764ab439%3A0x2e9bfd5c48d283b!2sEuraTechnologies%20-%20Incubateur%20et%20acc%C3%A9l%C3%A9rateur%20startups%20Lille!5e0!3m2!1sfr!2sfr!4v1599131279723!5m2!1sfr!2sfr" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Vendredi - 11h45-14h <br />Louvre Lens Vallée, Lens</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-vendredi-2"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.564296573723!2d2.8116994152556773!3d50.43058897947259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd30f32995b9ed%3A0x227e61b83fe3bfcd!2sLouvre%20Lens%20Vall%C3%A9e!5e0!3m2!1sfr!2sfr!4v1602230414087!5m2!1sfr!2sfr" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
            </Row>


            {/* 6 */}
            <Row>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Samedi - 11h45-14h <br />O'Tera, Sart</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-samedi"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.6175399307567!2d3.138409915498139!3d50.65279377950375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329c951de8245%3A0xf57208a82059145d!2sO&#39;tera%20du%20Sart!5e0!3m2!1sfr!2sfr!4v1599131454619!5m2!1sfr!2sfr" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Samedi - 11h45-14h <br />Midas Faidherbe, Arras</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-samedi-2"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.1281503609594!2d2.7801615152491572!3d50.28953567945353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd48715f2ccc69%3A0x804cd801b19f5a41!2sMidas!5e0!3m2!1sfr!2sfr!4v1602230564695!5m2!1sfr!2sfr" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
                <Col className="col-findus">
                    <h4 className="subtitles-1">Dimanche - 19h-22h <br />Stars Music, Lille</h4>
                    <div className="google-maps-div">
                        <iframe
                            title="map-dimanche"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.327371580548!2d3.0629913154975976!3d50.63961097950188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d58830296aab%3A0x96c9e7b78922d7e4!2sStar&#39;s%20Music%20Lille!5e0!3m2!1sfr!2sfr!4v1599131609228!5m2!1sfr!2sfr" width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
)


export default FindUs;