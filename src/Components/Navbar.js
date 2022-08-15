import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

function Header() {
  return (
    <>
    {/* Header Starts*/}
    <Container className="header">
    <CallOutlinedIcon className='icon'/>+0123456789
    <EmailOutlinedIcon className='icon'/>claue@domain.com

<label className='label'>Summer Sale discount off 50%! Shop Now</label>
<NavDropdown className="dropdown" title="English">
        <NavDropdown.Item href="#action/3.1">Chinese</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Italy</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown Ntitle="USD-US Dollar">
        <NavDropdown.Item href="#action/3.1">RS-Ruppees</NavDropdown.Item>
            </NavDropdown>
      </Container>
      {/* Header Ends*/}
      
      {/* Navbar Starts */}
    <Navbar>
      <Container>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
      <Nav.Link href="#home"><FacebookIcon/></Nav.Link>
            <Nav.Link href="#home"><TwitterIcon/></Nav.Link>
            <Nav.Link href="#home"><GoogleIcon/></Nav.Link>
            <Nav.Link href="#home"><InstagramIcon/></Nav.Link>
            <Nav.Link href="#home"><PinterestIcon/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Shop">Shop</Nav.Link>
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="/Pages">Pages</Nav.Link>
            <Nav.Link href="/Elements">Elements</Nav.Link>
            <Nav.Link href="/Sales">Sales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
            <Nav.Link href="#home"><SearchIcon/></Nav.Link>
            <Nav.Link href="#home"><AccountCircleOutlinedIcon/></Nav.Link>
            <Nav.Link href="#home"><FavoriteBorderOutlinedIcon/></Nav.Link>
            <Nav.Link href="#home"><AddShoppingCartOutlinedIcon/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* Navbar Ends */}
    </>
  );
}

export default Header;