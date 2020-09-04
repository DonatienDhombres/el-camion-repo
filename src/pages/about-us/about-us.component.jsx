import React from 'react';
import './about-us.styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/footer/footer.component'

const AboutUs = () => (
    <div>
        <Container>
            <h2 className="title-2 center">A propos de nous</h2>
            <h4 className="subtitles-1 center space">Depuis plusieurs années déjà, nous faisons danser les papilles de nos clients !
                <br />  El camión c’est plus qu’un food truck, c’est un voyage !</h4>
            <p>En assemblant avec vous le <strong>burrito de vos rêves</strong>, on trouve le savant mélange qui vous fera aimer la cuisine mexicaine. Souvent catégorisée comme piquante notre cuisine sait aussi se faire douce et subtile.</p>
            <p>Venez trouver conseil auprès de notre équipe prête à faire découvrir aux plus téméraires les piments les plus costauds et aux palais délicats la douceur de notre guacamole maison !</p>
            <p>Nous travaillons bien sûr avec des <strong>ingrédients frais, locaux </strong>dès que possible et nous privilégions évidemment le <strong>fait maison !</strong> Notre marinade aux piments mexicains Guajillo, Ancho et Chipotle est notre fierté, elle donne à notre poulet grillé et notre bœuf braisé cette saveur inimitable ! Notre guacamole est 100% frais, fait quelques minutes avant le service, dès fois même pendant le service quand il n’y en a déjà plus ! Avocats Hass, citron vert et coriandre fraîche, une touche d’ail, de la poudre de piment Guajillo, oignon rouge émincé, sel, poivre et c’est tout !</p>
            <div className="center-img">
                <img className="img-fluid" src="./images/camion.jpg" alt="camion" />
            </div>
        </Container>


        <Footer />
    </div>
);

export default AboutUs;