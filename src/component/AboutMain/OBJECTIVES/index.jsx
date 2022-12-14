import React from 'react'
import "./index.scss"
import {Button, Card, Col, Container, InputGroup, Row} from 'react-bootstrap';

import Foster from "assets/img/Vector (13).png"
import Develop from "assets/img/Vector (14).png"
import Create from "assets/img/Vector (15).png"
import Creates from "assets/img/Vector (16).png"
import Become from "assets/img/Vector (17).png"



export default function OBJECTIVES() {

  return (
    <div className='OBJECTIVES'>
      <p className='textOBJECTIVES'>The specific objectives of the Kwahu Summit are to:</p>
      <h1 className='titleOBJECTIVES'>OBJECTIVES</h1>
      <Row>
        <Col md={4}>
          <Card className='Foster'>
            <Card.Body>
              <div><img src={Foster} alt="" /></div>
              <p>Foster collaboration among African states and businesses to drive investment and develop intra-African trade.</p>
            </Card.Body>  
          </Card>
        </Col>
        <Col md={4}>
          <Card className='Foster Develop'>
            <Card.Body>
              <div><img src={Develop} alt="" /></div>
              <p>Develop deliberate and sustainable measures to grow Africa into a manufacturing powerhouse.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='Foster Create'>
            <Card.Body>
              <div><img src={Create} alt="" /></div>
              <p>Create an efective platform for businesses and political leaders to build strategic partnerships and empower African businesses to build Africa.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='Foster Creates'>
            <Card.Body>
              <div><img src={Creates} alt="" /></div>
              <p>Create opportunities for business collaboration, which places Africa’s development first.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='Foster Become'>
            <Card.Body>
              <div><img src={Become} alt="" /></div>
              <p>Become the most sought-after event for political and business lead ers, entrepreneurs and innovators in Africa and beyond.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
