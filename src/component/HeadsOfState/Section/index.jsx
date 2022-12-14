import React from 'react'
import "./index.scss"
import {Button, InputGroup} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export default function Section() {
  const navigate = useNavigate();
  const RegistrationClick = () => {
    navigate('/registration', {replace: true});
  }
  return (
    <div  className="sectionHome SectionHeadsOfState" >
      <div className='left'>
        <h1>Invited Heads of State</h1>
        <InputGroup>
          <p>Heads of state</p>
          <hr className='hrLeft'/>
        </InputGroup>
        <Button className='Register' onClick={RegistrationClick}>Register</Button>
      </div>
      <div className='right'>
          <p>Who is attending ?</p>
          <hr className='hrRight'/>
      </div>
    </div>
  )
}
