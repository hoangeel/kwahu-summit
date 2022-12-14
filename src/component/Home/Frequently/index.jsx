import React from 'react'
import "./index.scss"
import {Accordion} from 'react-bootstrap';



export default function Frequently() {
  return ( 
    <div>
      <div className='Frequently'>
        <h1 className='titleFrequently'>Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Summit ?</Accordion.Header>
            <Accordion.Body>
              Speaking in Kigali, Rwanda last week at the Commonwealth Business Forum, the MTN Group President and CEO, 
              Ralph Mupita, welcomed the Kwahu Summit as “timely, and a necessary platform to get Africa’s business leaders 
              fully engaged (along with the political leaders) in the process of deepening intra-Africa trade,”
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What format will the event take?</Accordion.Header>
            <Accordion.Body>
              Speaking in Kigali, Rwanda last week at the Commonwealth Business Forum, the MTN Group President and CEO, 
              Ralph Mupita, welcomed the Kwahu Summit as “timely, and a necessary platform to get Africa’s business leaders 
              fully engaged (along with the political leaders) in the process of deepening intra-Africa trade,”
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Who can participate in the Pre-Summit?</Accordion.Header>
            <Accordion.Body>
              Speaking in Kigali, Rwanda last week at the Commonwealth Business Forum, the MTN Group President and CEO, 
              Ralph Mupita, welcomed the Kwahu Summit as “timely, and a necessary platform to get Africa’s business leaders 
              fully engaged (along with the political leaders) in the process of deepening intra-Africa trade,”
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>When and where will the event take place?</Accordion.Header>
            <Accordion.Body>
              Speaking in Kigali, Rwanda last week at the Commonwealth Business Forum, the MTN Group President and CEO, 
              Ralph Mupita, welcomed the Kwahu Summit as “timely, and a necessary platform to get Africa’s business leaders 
              fully engaged (along with the political leaders) in the process of deepening intra-Africa trade,”
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Which parts of the event will be private and who will be able to attend?</Accordion.Header>
            <Accordion.Body>
              Speaking in Kigali, Rwanda last week at the Commonwealth Business Forum, the MTN Group President and CEO, 
              Ralph Mupita, welcomed the Kwahu Summit as “timely, and a necessary platform to get Africa’s business leaders 
              fully engaged (along with the political leaders) in the process of deepening intra-Africa trade,”
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
