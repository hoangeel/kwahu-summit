import React from 'react'
import "./index.scss"
import {Button, Col, Form, InputGroup, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

import Logo from "assets/img/Mask group (1).png"
import Instagram from "assets/img/Vector (10).png"
import Face from "assets/img/Vector (11).png"
import Tiwer from "assets/img/Vector (12).png"



export default function Footer() {
  const navigate = useNavigate();
  const HomehandleClick = () => {
    navigate('/', {replace: true});
  };
  const AbouthandleClick = () => {
    navigate('/about', {replace: true});
  };
  const InvitedHeadsOfStateClick = () => {
    navigate('/invited-heads-of-state', {replace: true});
  };
  const InvitedPersonalitiesClick = () => {
    navigate('/invited-personalities', {replace: true});
  };
  const TheHostClick = () => {
    navigate('/the-host', {replace: true});
  };
  return ( 
    <div className='FooterHome'>
      <div className='top'>
        <div className='left'>
          <h1>Stay connected</h1>
          <Form.Label>Your email</Form.Label>
          <InputGroup>
            <Form.Control type="email" placeholder="example@site.com" />
            <Button className='Submit'>Submit</Button>
          </InputGroup>
        </div>
        <div className='right' onClick={HomehandleClick}><img src={Logo} alt="" /></div>
      </div>
      <div className='mid'/>
      <Row className='bottom'>
        <Col xxl="9" xl="12">
          <Row>
            <Col lg="2" xs="6">
              <div className='th'onClick={AbouthandleClick}>About</div>
              <div className='td' onClick={TheHostClick}>The Host </div>
              <div className='td'>Partners </div>
              <div className='td'>The Summit</div>
            </Col>
            <Col lg="3" xs="6">
              <div className='th'>Who is attending</div>
              <div className='td'>Captains of Industry</div>
              <div className='td'onClick={InvitedHeadsOfStateClick}>Heads of State</div>
              <div className='td'onClick={InvitedPersonalitiesClick}>Notable Personalities</div>
            </Col>
            <Col lg="3" xs="6">
              <div className='th Resourses'>Resourses</div>
              <div className='td'>News</div>
              <div className='td'>The AfCFTA</div>
              <div className='td'>The AU Agenda 2063</div>
            </Col>
            <Col lg="2" xs="6">
              <div className='th Resourses'>Event guide</div>
              <div className='td'>Peduase</div>
              <div className='td'>Accra</div>
              <div className='td'>Protocols</div>
            </Col>
            <Col lg="2" xs="6">
              <div className='tdd Resourses'>Contact us</div>
              <div className='tdd'>Privacy policy</div>
              <div className='tdd'>Terms and conditions</div>
            </Col>
          </Row>
        </Col>
        <Col xxl="3" className='right'>
          <InputGroup>
            <div className='instagram'><img src={Instagram} alt="" /></div>
            <div className='face'><img src={Face} alt="" /></div>
            <div className='tiwer'><img src={Tiwer} alt="" /></div>
          </InputGroup>
          <hr />
          <p>Copyright © 2023. All Rights Reserved.</p>
        </Col>
      </Row>
      <p className='end'>Developed by <span>Peges Inc</span></p>
    </div>
  )
}
