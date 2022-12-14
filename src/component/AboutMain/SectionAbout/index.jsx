import React from 'react'
import "./index.scss"
import {Button, InputGroup} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


export default function SectionAbout() {
  const navigate = useNavigate();
  const RegistrationClick = () => {
    navigate('/registration', {replace: true});
  } 
  return (
    <div  className="sectionHome SectionAbout" >
      <div className='left'>
        <h1>About the summit</h1>
        <InputGroup>
          <p>About the summit</p>
          <hr className='hrLeft'/>
        </InputGroup>
        <Button className='Register' onClick={RegistrationClick}>Register</Button>
      </div>
    </div>
  )
}
