import React from 'react'
import "./index.scss"
import {useNavigate} from 'react-router-dom';
import {Button, Card, Col, Row} from 'react-bootstrap';

import Abdel from "assets/img/image 235.png"
import Aziz from "assets/img/image 241.png"
import Mohamed from "assets/img/image 247.png"
import Muhammadu from "assets/img/image 252.png"
import Cyril from "assets/img/image 242.png"
import Denis from "assets/img/image 248.png"
import Yoweri from "assets/img/image 253.png"
import Evariste from "assets/img/image 236.png"
import Faure from "assets/img/image 238.png"
import Felix from "assets/img/image 250.png"
import Hakainde from "assets/img/image 255.png"
import Joao from "assets/img/image 244.png"


export default function Notable() {
  const navigate = useNavigate();
  const data = [
    {
      src: Abdel,
      name: "Aliko Dangote",
      text: "Chairman and CEO, Dangote Group",
    },
    {
      src: Aziz,
      name: "Ngozi Okonjo-Iweala",
      text: "Director-General, World Trade Organization",
    },
    {
      src: Mohamed,
      name: "Dr. Adesina Akinwumi",
      text: "President, African Development Bank",
    },
    {
      class: "heightNotable",
      src: Muhammadu,
      name: "Tidjane Thiam",
      text: "Executive Chairman, Freedom Acquisition I Corporation",
    },
    {
      src: Cyril,
      name: "Prof. Benedict Oramah",
      text: "President, Afrexim Bank",
    },
    {
      src: Denis,
      name: "Ralph Mupita",
      text: "Group CEO, MTN",
    },
    {
      src: Yoweri,
      name: "Miriam C. Olusanya",
      text: "Managing Director, Guaranty Trust Bank",
    },
    {
      src: Evariste,
      name: "Hadi Halloche",
      text: "Global Co-Head, Trafigura Group Pte LTD",
    },
    {
      src: Faure,
      name: "Bernard Mensah",
      text: "President, International Bank of America",
    },
    {
      src: Felix,
      name: "Sir David Frank Adjaye",
      text: "Renowned architect",
    },
    {
      src: Hakainde,
      name: "Kayra Harding Bart",
      text: "Vice President, National Assembly of Panama",
    },
    {
      src: Joao,
      name: "Carl Cruz",
      text: "MD, Unilever West Africa",
    },
  ]
  const InvitedPersonalitiesClick = () => {
    navigate('/invited-personalities', {replace: true});
  };
  return ( 
    <div className='invited Notable'>
      <h1 className='titleInvited'>notable personalities</h1>
      <Row className='content'>
        {
          data.map((index) =>{
            return(
              <Col>
                <Card className={index.class}>
                  <div><img src={index.src} alt="" /></div>
                  <Card.Body>
                    <h1>{index.name}</h1>
                    <p>{index.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      <div><Button className='see' onClick={InvitedPersonalitiesClick}>See all Invited Personalities</Button></div>
    </div>
  )
}
