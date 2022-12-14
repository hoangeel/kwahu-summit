import React from 'react'
import "./index.scss"
import {Button,  InputGroup} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export default function Section() {
  const navigate = useNavigate();
  const RegistrationClick = () => {
    navigate('/registration', {replace: true});
  }
  return (
    <div  className="sectionHome" >
      <div className='left'>
        <h1>AfCTFA: </h1>
        <h2>From ambition to action </h2>
        <InputGroup>
          <p>Energy security For industrialisation</p>
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
