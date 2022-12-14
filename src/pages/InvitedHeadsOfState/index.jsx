import React from 'react'
import "./index.scss"
import {Carousel, Container} from 'react-bootstrap';

import HeaderHome from 'component/Home/Header';
import Footer from 'component/Home/Footer';
import Header1 from "assets/img/Rectangle 11 (6).png"
import NoneHeader1 from "assets/img/Rectangle 11 (9).png"
import Section from 'component/HeadsOfState/Section';
import ContentHeadsOfState from 'component/HeadsOfState/Content';

export default function HeadsOfState() {
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
              <Section/>
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
        <ContentHeadsOfState/>
      </Container>
      <div className='backgroundFooter'>
        <Container>
          <Footer/>
        </Container>
      </div>
    </div>
  )
}
