import React from 'react'
import "./index.scss"
import {Card, Col, Row} from 'react-bootstrap';

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


export default function ContentPersonalities() {
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
      src: Hakainde,
      name: "Kayra Harding Bart",
      text: "Vice President, National Assembly of Panama",
    },
    {
      src: Joao,
      name: "Carl Cruz",
      text: "MD, Unilever West Africa",
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
      <h1 className='titleInvited'>Invited Personalities</h1>
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
