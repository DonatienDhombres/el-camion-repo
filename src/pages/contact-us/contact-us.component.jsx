import React from 'react';
import './contact-us.styles.css'

import Container from 'react-bootstrap/Container';
import Footer from '../../components/footer/footer.component'

const ContactUs = () => (
    <div>
        <Container>
            <h2 className="title-2 center">Nous contacter</h2>
            <h4 className="subtitles-1 center space">Soirée privée ? Evénement corporate ? 
            <br/>Ou juste envie de nous dire à quel point c’était bon ? </h4>
            <div className="text-contact-us">
                <div>
                    <p>Contactez-nous par mail, téléphone, ou via Facebook!
                    </p>
                </div>
                <div className="tel">
                    <i className="fas fa-mobile-alt"></i> <a href="tel:+33682686183">06 . 82 . 68 . 61 . 83</a>
                </div>
                <div className="mail"><i class="far fa-envelope"></i> <a href="mailto:event.elcamion@gmail.com">event.elcamion@gmail.com</a></div>
            </div>
        </Container>
        <Footer />
    </div>
)

export default ContactUs;