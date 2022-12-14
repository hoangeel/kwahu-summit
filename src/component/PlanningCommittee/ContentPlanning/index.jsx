import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import "./index.scss"

import APN from "assets/img/Frame 1000004410.png"
import Office from "assets/img/Frame 1000004410 (1).png"
import GIPC from "assets/img/Frame 1000004410 (2).png"
import United from "assets/img/Frame 1000004410 (3).png"
import UNDP from "assets/img/Frame 1000004410 (4).png"
import Advisory from "assets/img/image 274.png"

export default function ContentPlanning() {
  return (
    <div className='ContentPlanning'>
      <h1 className='title'>Planning Committee</h1>
      <p className='text'>The planning committee is made up of designated persons from all our partner organizations and associates:</p>
      <Row>
        <Col xl={4} md={6} className="col">
          <Card className='card1400 card1200'>
            <Card.Body>
              <div><img src={APN} alt="" /></div>
              <h1>APN Board of Directors</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={6} className="col">
          <Card>
            <Card.Body>
              <div><img src={Office} alt="" /></div>
              <h1>Office of the President of Ghana</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={6} className="col">
          <Card className='card1400'>
            <Card.Body>
              <div><img src={GIPC} alt="" /></div>
              <h1>GIPC</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={6} className="col">
          <Card className='United'>
            <Card.Body>
              <div><img src={United} alt="" /></div>
              <h1>United Nations Economic Commission for Africa </h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={6} className="col">
          <Card>
            <Card.Body>
              <div><img src={UNDP} alt="" /></div>
              <h1>UNDP Regional Bureau for Africa</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={6} className="col Advisory">
          <Card className=''>
            <Card.Body>
              <div><img src={Advisory} alt="" /></div>
              <h1>Advisory council</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p className='text end'>
        The planning committee is made up of designated persons from all our partner organizations.
        The planning committee works APN’s functional team to produce content, programme and invitation list for summit.
      </p>
    </div>
  )
}
