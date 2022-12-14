import React from 'react'
import "./index.scss"
import {Button, InputGroup} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export default function SectionPlanning() {
  const navigate = useNavigate();
  const RegistrationClick = () => {
    navigate('/registration', {replace: true});
  }
  return (
    <div  className="sectionHome SectionTheHost " >
      <div className='left'>
        <h1>Planning committee</h1>
        <InputGroup>
          <p>About the Summit</p>
          <hr className='hrLeft'/>
        </InputGroup>
        <Button className='Register' onClick={RegistrationClick}>Register</Button>
      </div>
    </div>
  )
}
