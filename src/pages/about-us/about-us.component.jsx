import React from 'react';
import './about-us.styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/footer/footer.component'

const AboutUs = () => (
    <div>
        <Container className='about-us'>
            <h2 className="title-2 center">A propos de nous</h2>
            <h4 className="subtitles-1 center space">Qui sommes-nous ?</h4>
            <p>El Camion, c’est une fiesta MEXICAINE et une aventure culinaire exceptionnelle ! Quand on entend le mot street food, on s’attend à un voyage sans conditions.</p>

            <h4 className="subtitles-1 center space">Le concept</h4>
            <p>Chaque visite chez El Camion vous amènera directement dans un marché local de Mexico !
            <br/>De la marinade des viandes, en passant par le fameux guacamole ou encore les Tacos traditionnels fait minute, tout chez El Camion est fait maison et vous invite au voyage !
            <br/>Viens « Compadre » au pied du bureau, en festival ou même de chez toi composer le Burrito de tes rêves sinon rien !!! 
            </p>

            <h4 className="subtitles-1 center space">Notre petite histoire</h4>
            <p>Marre de nos emplois respectifs, nouveau départ, occasion qui fait le lardon et quelques mois plus tard, nous prenions le volant du fameux camion à la moustache.
            <br/>Seb et Laura nos prénoms, avons pris la direction depuis avril 2019.
            Depuis, c’est une aventure colorée chaque jour.
            Nous amenons l’équipe chaque jour pour vous proposer une cuisine à la hauteur de vos attentes et de nos exigences.
            <br/>Notre leitmotiv, la bonne humeur, la bonne bouffe et le tout sur de la bonne musique … Latino bien sûr !!!
            </p>

            <div className="center-img">
                <img className="img-fluid" src="./images/camion.jpg" alt="camion" />
            </div>







            {/* <h2 className="title-2 center">A propos de nous</h2>
            <h4 className="subtitles-1 center space">Depuis plusieurs années déjà, nous faisons danser les papilles de nos clients !
                <br />  El camión c’est plus qu’un food truck, c’est un voyage !</h4>
            <p>En assemblant avec vous le <strong>burrito de vos rêves</strong>, on trouve le savant mélange qui vous fera aimer la cuisine mexicaine. Souvent catégorisée comme piquante notre cuisine sait aussi se faire douce et subtile.</p>
            <p>Venez trouver conseil auprès de notre équipe prête à faire découvrir aux plus téméraires les piments les plus costauds et aux palais délicats la douceur de notre guacamole maison !</p>
            <p>Nous travaillons bien sûr avec des <strong>ingrédients frais, locaux </strong>dès que possible et nous privilégions évidemment le <strong>fait maison !</strong> Notre marinade aux piments mexicains Guajillo, Ancho et Chipotle est notre fierté, elle donne à notre poulet grillé et notre bœuf braisé cette saveur inimitable ! Notre guacamole est 100% frais, fait quelques minutes avant le service, dès fois même pendant le service quand il n’y en a déjà plus ! Avocats Hass, citron vert et coriandre fraîche, une touche d’ail, de la poudre de piment Guajillo, oignon rouge émincé, sel, poivre et c’est tout !</p>
            <div className="center-img">
                <img className="img-fluid" src="./images/camion.jpg" alt="camion" />
            </div> */}
        </Container>
        <Footer />
    </div>
);

export default AboutUs;