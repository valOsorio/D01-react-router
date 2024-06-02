import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RiHomeSmileFill, RiChatSmile3Fill } from 'react-icons/ri'
import { PiCakeFill } from 'react-icons/pi'

const Navigation = () => {
  return (
    <>
      <Navbar expand='lg' bg='danger' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link className='nav-item nav-link' to='/'>
                <RiHomeSmileFill className='nav-icon' /> Home
              </Link>
              <Link className='nav-item nav-link' to='/contacto'>
                <RiChatSmile3Fill className='nav-icon' /> Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Link className='nav-item nav-link link-home' to='/'>
            <Navbar.Brand><PiCakeFill className='nav-icon' /> Happy Cake</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
