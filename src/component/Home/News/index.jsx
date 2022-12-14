import React from 'react'
import "./index.scss"
import {Col, InputGroup, Row} from 'react-bootstrap';

import Time from "assets/img/Rectangle 6010.png"
import KWAHU from "assets/img/Rectangle 6078.png"
import Benefits from "assets/img/Rectangle 6057.png"
import IconView from "assets/img/Arrow 4.png"



export default function News() {
  return ( 
    <div className='Keys News'>
      <h1 className='titleKeys titleNews'>News</h1>
      <Row className='content'>
        <Col md={4}>
          <div className='Energy'>
            <img src={Time} alt="" />
            <h4>“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa, </h4>
            <InputGroup>
              <h6/> <h5>1 November 2022 | 22:48</h5>
            </InputGroup>
          </div>
        </Col>
        <Col md={4}>
          <div className='Energy'>
            <img src={KWAHU} alt="" />
            <h4>KWAHU SUMMIT LAUNCHED – GHANA TO HOST AFRICA’S PROSPERITY DIALOGUES</h4>
            <InputGroup>
              <h6/> <h5>1 November 2022 | 22:48</h5>
            </InputGroup>
          </div>
        </Col>
        <Col md={4}>
          <div className='Energy'>
            <img src={Benefits} alt="" />
            <h4>Benefits of African Economic Integration</h4>
            <InputGroup>
              <h6/> <h5>1 November 2022 | 22:48</h5>
            </InputGroup>
          </div>
        </Col>
      </Row>
        <InputGroup className='groupView'>
          <h1 className='View'>View all news</h1><span><img src={IconView} alt="" /></span>
        </InputGroup>
    </div>
  )
}
