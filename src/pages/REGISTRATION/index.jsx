import React from 'react'
import "./index.scss"
import {Carousel, Container} from 'react-bootstrap';

import HeaderHome from 'component/Home/Header';
import Footer from 'component/Home/Footer';
import Header1 from "assets/img/Rectangle 11 (18).png"
import NoneHeader1 from "assets/img/Rectangle 11 (19).png"
import ContentPlanning from 'component/PlanningCommittee/ContentPlanning';
import SectionREGISTRATION from 'component/REGISTRATION/SectionREGISTRATION';

export default function REGISTRATION() {
  return (
    <div className='mainHome'>
      <div className='corouselHeader'>
        <Carousel>
          <Carousel.Item>
            <img
              className="img"
              src={Header1}
              alt="First slide"
            />
            <img
              className="imgNone"
              src={NoneHeader1}
              alt="First slide"
            />
            <Carousel.Caption>
              <SectionREGISTRATION/>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='mainHeader'>
        <Container className='flex'>
          <HeaderHome/>
        </Container>
      </div>
      <Container>
        <ContentPlanning/>
      </Container>
      <div className='backgroundFooter'>
        <Container>
          <Footer/>
        </Container>
      </div>
    </div>
  )
}
