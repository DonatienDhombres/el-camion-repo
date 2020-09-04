import React from 'react'

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

const MenuCardWithoutImg = ({ title, text }) => (
    <Col className="col-findus" md={6}>
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
)

export default MenuCardWithoutImg;