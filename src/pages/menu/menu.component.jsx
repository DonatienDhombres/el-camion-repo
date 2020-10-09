import React from 'react'

import './menu.styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import MenuCard from '../../components/menu-card/menu-card.component'
import MenuCardWithoutImg from '../../components/menu-card-without-img/menu-card-without-img.component'
import Footer from '../../components/footer/footer.component'


const Menu = () => (
    <div>
        <h2 className="title-2 center">Menu</h2>

        <Container>

            {/*             Entrées             */}
            <section>
                <h4 className="subtitles-1 subtitles-3">Entrées</h4>
                <Row>
                    <MenuCardWithoutImg
                        title="Quesadillas"
                        text="Tortillas de blé de 15cm accompagnées de cheddar, et mozzarella, poulet halal ou chorizo maison"
                    />
                    <MenuCardWithoutImg
                        title="Nacho Bowl"
                        text="Barquette de nachos, cheddar fondu, oignon, coriandre, guacamole maison"
                    />
                </Row>
            </section>


            {/*             Plats             */}
            <section>
                <h4 className="subtitles-1 subtitles-3">Plats</h4>
                <Row>
                    <MenuCard
                        title="Burrito (à composer)"
                        text="Barquette de nachos, cheddar fondu, oignon, coriandre, guacamole maison"
                        imgsrc="./images/carousel/burritos.jpg"
                    />

                    <MenuCard
                        title="Quesadilla Deluxe"
                        text="Tortilla de blé de 30cm, coupé en 4, accompagnées de cheddar, et mozzarella, poulet halal ou chorizo maison, pico de gallo, épices à votre guise"
                        imgsrc="./images/carousel/quesadillas.jpg"
                    />

                    <MenuCard
                        title="Tacos"
                        text="2 tortillas de maïs faites maison, bœuf barbacoa ou porc carnitas, pico de gallo, guacamole, oignon, coriandre, épicés à votre guise, citron vert"
                        imgsrc="./images/carousel/tacos.jpg"
                    />

                    <MenuCard
                        title="Nacho Machos"
                        text="Barquette XXL à partager composé de tortilla chips de maïs, cheddar fondu, chorizo maison, oignon rouge, coriandre, crème fraiche, guacamole, jalapeños"
                        imgsrc="./images/carousel/nacho-machos.jpg"
                    />
                    <MenuCardWithoutImg
                        title="Plat du jour"
                        text="En fonction des saisons et des envies de notre chef"
                    />
                </Row>
            </section>

            {/*             Desserts             */}
            <section>
                <h4 className="subtitles-1 subtitles-3">Desserts</h4>
                <Row>
                    <MenuCardWithoutImg
                        title="Brownie maison"
                        text="100% chocolat, 100% plaisir"
                    />
                    <MenuCardWithoutImg
                        title="Brownie-Mitsu"
                        text="Mousse de mascarpone, chunks de brownie et caramel beurre salé"
                    />
                </Row>
            </section>


            {/*             Boissons             */}
            <section>
                <h4 className="subtitles-1 subtitles-3">Boissons</h4>
                <Row>
                    <MenuCard
                        title="Jarritos"
                        text="Soda mexicain"
                        imgsrc="./images/jarritos.jpg"
                    />
                    <MenuCard
                        title="Modelo"
                        text="Bière mexicaine"
                        imgsrc="./images/modelo.jpg"
                    />
                    <MenuCard
                        title="Jumex"
                        text="Jus de fruit mexicain"
                        imgsrc="./images/jumex.png"
                    />
                </Row>
            </section>

        </Container>
        
        <Footer />
    </div>
)


export default Menu;
