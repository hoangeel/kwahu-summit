import React from 'react'
import "./index.scss"
import {useNavigate} from 'react-router-dom';
import {Button, Card, Col, Row} from 'react-bootstrap';

import Abdel from "assets/img/image 213.png"
import Aziz from "assets/img/image 214.png"
import Mohamed from "assets/img/image 215.png"
import Muhammadu from "assets/img/image 216.png"

import Cyril from "assets/img/image 218.png"
import Denis from "assets/img/image 219.png"
import Yoweri from "assets/img/image 220.png"
import Evariste from "assets/img/image 217.png"

import Faure from "assets/img/image 221.png"
import Felix from "assets/img/image 223.png"
import Hakainde from "assets/img/image 224.png"
import Joao from "assets/img/image 222.png"


export default function Invited() {
  const navigate = useNavigate();
  const data = [
    {
      src: Abdel,
      name: "H.E. Abdel Fattah El-Sisi",
      text: "President of the Arab Republic of Egypt",
    },
    {
      src: Aziz,
      name: "H.E. Aziz Akhannouch",
      text: "Prime Minister of Morocco",
    },
    {
      src: Mohamed,
      name: "H.E. Mohamed Bazoum",
      text: "President of Niger",
    },
    {
      src: Muhammadu,
      name: "H.E. Muhammadu Buhari",
      text: "President of the Federal Republic of Nigeria",
    },
    {
      src: Cyril,
      name: "H.E Cyril Ramaphosa",
      text: "President of South Africa",
    },
    {
      src: Denis,
      name: "H.E. Denis Sassou Nguesso",
      text: "President of the Republic of the Congo",
    },
    {
      src: Yoweri,
      name: "H.E. Yoweri K. Museveni",
      text: "President of Uganda",
    },
    {
      src: Evariste,
      name: "H.E. Evariste Ndayishimiye",
      text: "President of Burundi",
    },
    {
      class: "height",
      src: Faure,
      name: "H.E. Faure Gnassingbe",
      text: "President of Togo",
    },
    {
      class: "height",
      src: Felix,
      name: "H.E Félix A. Tshisekedi Tshilombo",
      text: "President, the Democratic Republic of the Congo",
    },
    {
      class: "height",
      src: Hakainde,
      name: "H.E. Hakainde Hichilema",
      text: "President of Zambia",
    },
    {
      class: "height",
      src: Joao,
      name: "H.E. João Manuel Gonçalves Lourenço",
      text: "President of Angola",
    },
  ]
  const InvitedHeadsOfStateClick = () => {
    navigate('/invited-heads-of-state', {replace: true});
  };
  return (
    <div className='invited'>
      <h1 className='titleInvited'>Invited Heads of State</h1>
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
      <div><Button className='see' onClick={InvitedHeadsOfStateClick}>See all Invited Heads of State </Button></div>
    </div>
  )
}
