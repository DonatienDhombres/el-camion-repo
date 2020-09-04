import React from 'react'
import './menu-card.styles.css'


import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

const MenuCard = ({ title, text, imgsrc }) => (
    <Col className="col-findus" md={6}>
        <Card>
            <Card.Img
                variant="top" className="w-100" alt="img"
                src={imgsrc}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
)

export default MenuCard;