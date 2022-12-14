import React, { useState } from 'react'
import "./index.scss"
import { Button, Nav, Dropdown, Stack, InputGroup, Accordion, Offcanvas} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

import IconMenu from "assets/img/Rectangle 6059.png"

import English from "assets/img/Group 1000004482.png"
import Arabic from "assets/img/emojione_flag-for-saudi-arabia.png"
import French from "assets/img/emojione_flag-for-france.png"
import German from "assets/img/emojione_flag-for-germany.png"
import Portuguese from "assets/img/emojione_flag-for-portugal.png"
import Spanish from "assets/img/emojione_flag-for-spain.png"
import Instagram from "assets/img/Vector.png"
import Face from "assets/img/Vector (1).png"
import Tiwer from "assets/img/Vector (2).png"
import In from "assets/img/Vector (3).png"
import Logo from "assets/img/Mask group.png"
import IconCountry from "assets/img/Arrow 5 (Stroke).png"
import IconMenu1 from "assets/img/Rectangle 6062.png"
import IconMenu2 from "assets/img/Rectangle 6061.png"
import IconMenu3 from "assets/img/Rectangle 6060.png"



export default function Header() {
  const navigate = useNavigate();
  const HomehandleClick = () => {
    navigate('/', {replace: true});
    setShow(false);
  };
  const AbouthandleClick = () => {
    navigate('/about', {replace: true});
    setShow(false);
  };
  const InvitedHeadsOfStateClick = () => {
    navigate('/invited-heads-of-state', {replace: true});
    setShow(false);
  };
  const InvitedPersonalitiesClick = () => {
    navigate('/invited-personalities', {replace: true});
    setShow(false);
  };
  const TheHostClick = () => {
    navigate('/the-host', {replace: true});
    setShow(false);
  };
  const SponsorsClick = () => {
    navigate('/sponsors', {replace: true});
    setShow(false);
  };
  const PlanningCommitteeClick = () => {
    navigate('/planning-committee', {replace: true});
    setShow(false);
  };
    const RegistrationClick = () => {
    navigate('/registration', {replace: true});
    setShow(false);
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='headerHome' >
      <Stack direction="horizontal" className='top'>
        <div className='time'>January 26th - 28th 2023</div>
        <Nav
          className='ms-auto'
          activeKey="/"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Dropdown className='country'>
              <Dropdown.Toggle className='English' variant="success" id="dropdown-basic">
                <InputGroup>
                  <div><img src={English} alt="" /></div>
                  <p className='text'>English</p>
                  <div className='spanEnglish'><img src={IconCountry} alt="" /></div>
                </InputGroup>
              </Dropdown.Toggle>

              <Dropdown.Menu className='menuCountry'>
                <Dropdown.Item href="">
                  <InputGroup>
                    <div><img src={Arabic} alt="" /></div>
                    <p>Arabic</p>
                  </InputGroup>
                </Dropdown.Item>
                <Dropdown.Item href="">
                  <InputGroup>
                    <div><img src={French} alt="" /></div>
                    <p>French</p>
                  </InputGroup>
                </Dropdown.Item>
                <Dropdown.Item href="">
                  <InputGroup>
                    <div><img src={German} alt="" /></div>
                    <p>German</p>
                  </InputGroup>
                </Dropdown.Item>
                <Dropdown.Item href="">
                  <InputGroup>
                    <div><img src={Portuguese} alt="" /></div>
                    <p>Portuguese</p>
                  </InputGroup>
                </Dropdown.Item>
                <Dropdown.Item href="#action/3.5">
                  <InputGroup>
                    <div><img src={Spanish} alt="" /></div>
                    <p>Spanish</p>
                  </InputGroup>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" className='user Instagram'><div><img src={Instagram} alt="" /></div></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="" className='user Face'><div><img src={Face} alt="" /></div></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="" className='user Tiwer'><div><img src={Tiwer} alt="" /></div></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="" className='user In'><div><img src={In} alt="" /></div></Nav.Link>
          </Nav.Item>
        </Nav>
      </Stack>
      <hr className='mid'/>
      <Stack direction="horizontal" className='bottom'>
        <div className='logo' onClick={HomehandleClick}><img src={Logo} alt="Logo" /></div>
        <div className='brCol'/>
        <Button className='Register' onClick={RegistrationClick}>Register</Button>
        <Nav
          activeKey="/"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/" className='homeLink'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Dropdown className='About'>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='aboutToggle'>
                About <span className='spanEnglish'><img src={IconCountry} alt="" /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className='menuAbout'>
                <Dropdown.Item href="" className='itemAbout' onClick={AbouthandleClick}><p>About the Summit</p></Dropdown.Item>
                <Dropdown.Item href="" className='itemAbout' onClick={TheHostClick}><p>The host</p></Dropdown.Item>
                <Dropdown.Item href="" className='itemAbout'><p>Media partners</p></Dropdown.Item>
                <Dropdown.Item href="" className='itemAbout' onClick={SponsorsClick}><p>Sponsors</p></Dropdown.Item>
                <Dropdown.Item href="" className='itemAbout' onClick={PlanningCommitteeClick}><p>Planning committee</p></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Dropdown className='About Who'>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='aboutToggle'>
                Who is attending <span className='spanEnglish'><img src={IconCountry} alt="" /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className='menuAbout'>
                <Dropdown.Item onClick={InvitedHeadsOfStateClick} className='itemAbout'><p>Invited Heads of State</p></Dropdown.Item>
                <Dropdown.Item onClick={InvitedPersonalitiesClick} className='itemAbout'><p>Invited Personalities</p></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Dropdown className='About Resources'>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='aboutToggle'>
                Resources <span className='spanEnglish'><img src={IconCountry} alt="" /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className='menuAbout'>
                <Dropdown.Item href="" className='itemAbout'><p>News</p></Dropdown.Item>
                <Dropdown.Item href="" className='itemAbout'><p>The AfCFTA</p></Dropdown.Item>
                <Dropdown.Item href="" className='itemAbout'><p>The AU Agenda 2063</p></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Dropdown className='About Event'>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='aboutToggle'>
                Event guide <span className='spanEnglish'><img src={IconCountry} alt="" /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className='menuAbout'>
                <Dropdown.Item href="" className='itemAbout'><p>Peduase</p></Dropdown.Item>
                <Dropdown.Item href="" className='itemAbout'><p>Accra</p></Dropdown.Item>
                <Dropdown.Item href="" className='itemAbout'><p>Protocols</p></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='homeLink Help'>Help</Nav.Link>
          </Nav.Item>
        </Nav>
      </Stack>


      <div className='menu'>
        <div className='logo' onClick={HomehandleClick}><img src={Logo} alt="Logo" /></div>
        <div className='buttonMenu'>
          <img className='IconMenu1' src={IconMenu1} alt="" />
          <img className='IconMenu2' src={IconMenu1} alt="" />
          <img className='IconMenu3' src={IconMenu1} alt="" />
          <img src={IconMenu} alt="IconMenu" onClick={handleShow}/>
        </div>
      </div>

      <Offcanvas className="mainMenu" backdrop="static" placement="end" show={show} onHide={handleClose}>
        <div className='HeaderMenu'>
          <div className='logo' onClick={HomehandleClick}><img src={Logo} alt="Logo" /></div>
          <div className='buttonMenu'>
            <img className='IconMenu4' src={IconMenu2} alt="" />
            <img className='IconMenu5' src={IconMenu3} alt="" />
            <img src={IconMenu} alt="IconMenu" onClick={handleClose}/>
          </div>
        </div>
        <hr className='hrTop'/>
        <Offcanvas.Body>
          <div href="" className='home' onClick={HomehandleClick}>Home</div>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header className='aboutHeader'>About</Accordion.Header>
              <Accordion.Body >
                <p className="textmenu" onClick={AbouthandleClick}>About the Summit</p>
                <p className="textmenu" onClick={TheHostClick}>The host</p>
                <p className="textmenu">Media partners</p>
                <p className="textmenu" onClick={SponsorsClick}>Sponsors</p>
                <p className="textmenu" onClick={PlanningCommitteeClick}>Planning committee</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className='aboutHeader event'>Who is attending</Accordion.Header>
              <Accordion.Body>
                <p className="textmenu" onClick={InvitedHeadsOfStateClick}>Invited Heads of State</p>
                <p className="textmenu" onClick={InvitedPersonalitiesClick}>Invited Personalities</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className='aboutHeader event'>Resources</Accordion.Header>
              <Accordion.Body>
                <p className="textmenu">News</p>
                <p className="textmenu">The AfCFTA</p>
                <p className="textmenu">The AU Agenda 2063</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header className='aboutHeader event'>Event guide</Accordion.Header>
              <Accordion.Body>
                <p className="textmenu">Peduase</p>
                <p className="textmenu">Accra</p>
                <p className="textmenu">Protocols</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Dropdown.Item href="" className='home help'>Help</Dropdown.Item>
          <Button className='registerMenu' onClick={RegistrationClick}>Register</Button>
          <hr className='hrTop hrBottom'/>
          <div className='footerMenu'>
            <Nav
                className='ms-auto'
                activeKey="/"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
              <Nav.Item>
                <Dropdown className='country'>
                  <Dropdown.Toggle className='English' variant="success" id="dropdown-basic">
                    <InputGroup>
                      <div><img src={English} alt="" /></div>
                      <p className='text'>English</p>
                      <div className='spanEnglish'><img src={IconCountry} alt="" /></div>
                    </InputGroup>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='menuCountry'>
                    <Dropdown.Item href="">
                      <InputGroup>
                        <div><img src={Arabic} alt="" /></div>
                        <p>Arabic</p>
                      </InputGroup>
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <InputGroup>
                        <div><img src={French} alt="" /></div>
                        <p>French</p>
                      </InputGroup>
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <InputGroup>
                        <div><img src={German} alt="" /></div>
                        <p>German</p>
                      </InputGroup>
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <InputGroup>
                        <div><img src={Portuguese} alt="" /></div>
                        <p>Portuguese</p>
                      </InputGroup>
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.5">
                      <InputGroup>
                        <div><img src={Spanish} alt="" /></div>
                        <p>Spanish</p>
                      </InputGroup>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
              <Nav.Item className='itemInstagram'>
                <Nav.Link href="" className='user Instagram'><div><img src={Instagram} alt="" /></div></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="" className='user Face'><div><img src={Face} alt="" /></div></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="" className='user Tiwer'><div><img src={Tiwer} alt="" /></div></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="" className='user In'><div><img src={In} alt="" /></div></Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
