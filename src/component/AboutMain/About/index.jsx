import React from 'react'
import "./index.scss"
import {Button, Card, Col, Container, InputGroup, Row} from 'react-bootstrap';

import IconVideo from "assets/img/Group 4886.png"
import IconHeads from "assets/img/Vector (6).png"
import IconCaptains from "assets/img/Vector (7).png"
import IconNotable from "assets/img/Vector (8).png"


export default function About() {

  return (
    <>
      <div  className="about" >
        <h5>BACKGROUND TO SUMMIT</h5>
        <h1>About the Summit</h1>
        <div className='text'>
          <p className='Africa'>
            Africa Prosperity Network (APN) , in partnership with the AfCFTA Secretariat and the Presidency of Ghana, 
            (the host nation of AfCFTA Secretariat), presents the Kwahu Summit on Africa’s Prosperity. This is the summit 
            where leading Africans in Politics and Business will convene to Contribute, Connect and Commit to restructuring 
            the African reality, and reconstructing the African narrative.
          </p>
          <p className='Africa project '>
            That project of ownership and partnerships among African nations, citizens and businesses is before us today 
            like never before. On 1 January 2021, Africa signalled her resolve to forge ahead together with greater purpose 
            through the coming into force of the African Continental Free Trade Area (AfCFTA) – a historic pact among AU 
            member-states to create a single continental market for goods and services, as well as a customs union
          </p>
          <p className='Africa AfCFTA '>
            The AfCFTA has the potential to transform collectively, Africa’s economies and create opportunities in what is 
            now the world’s largest free trade zone, with an estimated spending power of US$6.7 trillion by 2030, (ECA). 
            The fate of Africa will be determined by how Africans guide and drive the first decade of the AfCFTA. To achieve 
            this, African leaders in politics and industry, as well as other key stakeholders, must intentionally and 
            actively reason, plan, and work together.
          </p>
          <Button className='Register'>Register</Button>
        </div>
        <div className='video'>
          <img src={IconVideo} alt="" />
        </div>
      </div>

      <div  className="who whoAboutMain" >
        <div className='left'>
          <h5>The speakers</h5>
          <h1>Who is attending</h1>
          <div className='text'>
            <p className='At'>
              At the Africa Prosperity Dialogues, Africa’s business leaders and politicians will “take that walk together”. 
              There will be the opportunity to discuss the threats to trade and commerce that could be mitigated by 
              government interventions in one shape or form
            </p>
            <p className='At Also '>
              Also on the table will be economic opportunities and how governments can partner with business leaders to 
              unlock them for the mutual benefit of business and government, and ultimately, for improving upon the living 
              conditions of the citizens.
            </p>
          </div>
        </div>
        <div className='right'>
          <Row>
            <Col xs={6}>
              <Card className='Heads'>
                <div><img src={IconHeads} alt="" /></div>
                <h1>Heads of State</h1>
              </Card>
            </Col>
            <Col xs={6}>
              <Card className='Heads Captains'>
                <div><img src={IconCaptains} alt="" /></div>
                <h1>Captains of Industry</h1>
              </Card>
            </Col>
            <Col xs={6}>
              <Card className='Heads Notable'>
                <div><img src={IconNotable} alt="" /></div>
                <h1>Notable Personalities</h1>
              </Card>
            </Col>
            <Col xs={6}>
              <Card className='Heads'>
                <div><img src={IconHeads} alt="" /></div>
                <h1>Heads of State</h1>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
