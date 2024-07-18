import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoCartOutline } from "react-icons/io5";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CgProfile } from "react-icons/cg";
import { logOut } from '../store/action';
import { useDispatch } from 'react-redux';
import Naviagtion from '../utils/navigatation';

const Menubar = () => {
  const dispatch = useDispatch()

  return (
    <div className='nav-container'>

      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} bg="#FFFFFF" data-bs-theme="light" className='navbar'>
          <Container>
            <Navbar.Brand href="#home" className='text2-color fw-bold nav-title'>Exclusive</Navbar.Brand>
            {/* <CiMenuFries aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ border: "none", boxShadow: "none" }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Exclusive
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="gap-lg-3 gap-1 justify-content-center flex-grow-1 pe-5">
                  <Nav.Link className='navItems' ><Naviagtion path={"/"}>Home</Naviagtion></Nav.Link>
                  <Nav.Link className='navItems'><Naviagtion  path={"/about"}>About</Naviagtion></Nav.Link>
                  <Nav.Link className='navItems'><Naviagtion  path={"/contact"}>contact</Naviagtion></Nav.Link>
                  <Nav.Link onClick={() => dispatch(logOut())} className='navItems'>Signin</Nav.Link>

                </Nav>

                <div className=' d-md-flex align-items-center gap-3'>
                  <IoCartOutline fontSize={25} className='d-none d-lg-block ' />
                  <CgProfile fontSize={26} className='mt-3 mt-lg-0 ' />
                </div>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default Menubar