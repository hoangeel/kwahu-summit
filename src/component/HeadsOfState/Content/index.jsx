import React from 'react'
import "./index.scss"
import {Card, Col, Row} from 'react-bootstrap';

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
import Paul from "assets/img/image 225.png"
import Macky from "assets/img/image 227.png"
import Mia from "assets/img/image 228.png"
import Alassane from "assets/img/image 226.png"
import William from "assets/img/image 234.png"
import Sahle from "assets/img/image 229.png"
import Teodoro from "assets/img/image 231.png"
import Samia from "assets/img/image 232.png"
import Umaro from "assets/img/image 230.png"
import Mahamadou from "assets/img/image 233.png"


export default function ContentHeadsOfState() {
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
      class: " Faure",
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
    {
      src: Paul,
      name: "H.E. Paul Kagame",
      text: "President of Rwanda",
    },
    {
      src: Macky,
      name: "H.E. Macky Sall",
      text: "President of Senegal & Chairperson of the AU",
    },
    {
      src: Mia,
      name: "H.E. Mia Motley",
      text: "Prime Minister of Barbados",
    },
    {
      src: Alassane,
      name: "H.E. Alassane Ouattara",
      text: "President of Côte d'Ivoire",
    },
    {
      src: William,
      name: "H.E. William Ruto",
      text: "President of Kenya",
    },
    {
      src: Sahle,
      name: "H.E. Sahle-Work Zewde",
      text: "President of Ethiopia",
    },
    {
      src: Teodoro,
      name: "H.E. Teodoro O. Nguema",
      text: "President of Equatorial Guinea",
    },
    {
      src: Samia,
      name: "H.E. Samia Suluhu Hassan",
      text: "President of Tanzania",
    },
    {
      class: "Umaro",
      src: Umaro,
      name: "H.E. Umaro Sissoco Embaló",
      text: "President of Guinea-Bissau",
    },
    {
      class: "Mahamadou",
      src: Mahamadou,
      name: "H.E. Mahamadou Issoufou",
      text: "Former Nigerien President",
    },
  ]
  return (
    <div className='invited contentHeadsOfState'>
      <p className='textTop'>
        At the Africa Prosperity Dialogues, Africa’s business leaders and politicians will “take that walk 
        together”. There will be the opportunity to discuss the threats to trade and commerce that could be 
        mitigated by government interventions in one shape or form
      </p>
      <p className='textTop textBottom'>
        Also on the table will be economic opportunities and how governments can partner with business leaders 
        to unlock them for the mutual benefit of business and government, and ultimately, for improving upon the 
        living conditions of the citizens.
      </p>
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
    </div>
  )
}
