import React from 'react'
import "./index.scss"
import {Col, Row} from 'react-bootstrap';

import Energy from "assets/img/Rectangle 6072.png"
import Technology from "assets/img/Rectangle 6073.png"
import Financing from "assets/img/Rectangle 6074.png"
import Legal from "assets/img/Rectangle 6075.png"
import FOOD from "assets/img/Rectangle 6077.png"



export default function Keys() {
  return ( 
    <div className='Keys'>
      <h1 className='titleKeys'>Key topics</h1>
      <Row className='content'>
        <Col md={4}>
          <div className='Energy'>
            <img src={Energy} alt="" />
            <p>Energy Security</p>
          </div>
        </Col>
        <Col md={4}>
          <div className='Energy Technology md320'>
            <img src={Technology} alt="" />
            <p>Technology and Innovation</p>
          </div>
        </Col>
        <Col md={4}>
          <div className='Energy Technology md320'>
            <img src={Financing} alt="" />
            <p>Financing Trade across borders</p>
          </div>
        </Col>
      </Row>
      <Row className='content'>
        <Col md={6}>
          <div className='Energy Legal md320'>
            <img src={Legal} alt="" />
            <p>Legal and Institutional Framework</p>
          </div>
        </Col>
        <Col md={6}>
          <div className='Energy md320'>
            <img src={FOOD} alt="" />
            <p>FOOD SECURITY & AGRICULTURE</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
