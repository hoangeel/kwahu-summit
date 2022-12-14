import React from 'react'
import "./index.scss"
import {Carousel, Container} from 'react-bootstrap';

import HeaderHome from 'component/Home/Header';
import Section from 'component/Home/Section';
import About from 'component/Home/About';
import Invited from 'component/Home/Invited';
import Notable from 'component/Home/Notable';
import Keys from 'component/Home/Keys';
import News from 'component/Home/News';
import Frequently from 'component/Home/Frequently';
import Sponsors from 'component/Home/Sponsors';
import Footer from 'component/Home/Footer';

import Header1 from "assets/img/Rectangle 11.png"
import Header2 from "assets/img/Rectangle 11 (2).png"
import Header3 from "assets/img/Rectangle 11 (1).png"
import NoneHeader1 from "assets/img/Rectangle 11 (3).png"
import NoneHeader2 from "assets/img/Rectangle 11 (4).png"
import NoneHeader3 from "assets/img/Rectangle 11 (5).png"
import Section2 from 'component/Home/Section2';
import Section3 from 'component/Home/Section3';

export default function Home() {
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
          <Carousel.Item>
            <img
              className="img "
              src={Header2}
              alt="Second slide"
            />
            <img
              className="imgNone "
              src={NoneHeader2}
              alt="First slide"
            />
            <Carousel.Caption>
              <Section2/>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img"
              src={Header3}
              alt="First slide"
            />
            <img
              className="imgNone"
              src={NoneHeader3}
              alt="First slide"
            />
            <Carousel.Caption>
              <Section3/>
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
        <About/>
        <Invited/>
        <Notable/>
        <Keys/>
        <News/>
        <Frequently/>
        <Sponsors/>
      </Container>
      <div className='backgroundFooter'>
        <Container>
          <Footer/>
        </Container>
      </div>
    </div>
  )
}
