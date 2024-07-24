import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from 'react-icons/fa'
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Naviagtion from '../utils/navigatation';
import ToggleDropdown from '../common/Dropdown';
import { useSelector } from 'react-redux';

const Menubar = () => {

  const cartData = useSelector(state => state.addtocart)
  const isLoggedin = useSelector(state => state.LoginInfo)
  return (
    <div style={{ marginBottom: "5rem" }}>
      <div className='nav-container '>
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
                    <Nav.Link className='navItems'><Naviagtion path={"/about"}>About</Naviagtion></Nav.Link>
                    <Nav.Link className='navItems'><Naviagtion path={"/contact"}>contact</Naviagtion></Nav.Link>
                  </Nav>

                  <div className=' d-md-flex align-items-center gap-4'>
                    <div className='cart-icon'>
                      {
                        isLoggedin ? (
                          <Naviagtion path={"/cart"}>
                            <FaShoppingCart size={26} />
                            <span className="badge-icon d-none d-md-block" >{cartData.length}</span>
                          </Naviagtion>
                        ) : null
                      }

                    </div>
                    <ToggleDropdown />
                  </div>


                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </div>
  )
}

export default Menubar