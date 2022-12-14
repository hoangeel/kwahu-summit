import React from 'react'
import "./index.scss"
import {Button, InputGroup} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export default function Section2() {
  const navigate = useNavigate();
  const RegistrationClick = () => {
    navigate('/registration', {replace: true});
  }
  return (
    <div  className="sectionHome" >
      <div className='left'>
        <h1>Transforming Africa: </h1>
        <h2>Trough trade and impact invesment</h2>
        <InputGroup>
          <p>Delivering prosperity through continental trade</p>
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
