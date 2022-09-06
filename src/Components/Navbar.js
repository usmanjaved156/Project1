import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavLink, Row, Col } from "react-bootstrap";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
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
   

    <Container fluid className='header'>
      <Row>
        <Col sm={4}>
        <CallOutlinedIcon />
    <label className='lbl-header-1'>+0123456789</label>
        
        <EmailOutlinedIcon />
    <label className='lbl-header-1'>claue@domain.com</label>
    </Col>
        <Col sm={8}>
<label className='label'>Summer Sale discount off <span style={{color:'red'}}>50%</span> Shop Now</label>

        </Col>
        
      </Row>
    </Container>
      {/* Header Ends*/}
      
      {/* Navbar Starts */}
      <Navbar collapseOnSelect expand="sm" bg="white" variant="light">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                
      <Nav className='nav-icons-1'>
        
      <NavLink href="#home"><FacebookIcon/></NavLink>
            <NavLink href="#home"><TwitterIcon/></NavLink>
            <NavLink href="#home"><GoogleIcon/></NavLink>
            <NavLink href="#home"><InstagramIcon/></NavLink>
            <NavLink href="#home"><PinterestIcon/></NavLink>
        </Nav>
      </Navbar.Collapse>
        <Navbar.Collapse >
          <Nav className='nav-pages'>
            <NavLink href="/Home">Home</NavLink>
            <NavLink href="/Shop">Shop</NavLink>
            <NavLink href="/Products">Products</NavLink>
            <NavLink href="/Pages">Pages</NavLink>
            <NavLink href="/Elements">Elements</NavLink>
            <NavLink href="/Sales">Sales</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse >
      <Nav className='nav-icons-2'>
            <NavLink href="#home"><SearchIcon/></NavLink>
            <NavLink href="#home"><AccountCircleOutlinedIcon/></NavLink>
            <NavLink href="#home"><FavoriteBorderOutlinedIcon/></NavLink>
            <NavLink href="#home"><AddShoppingCartOutlinedIcon/></NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>  

      {/* Navbar Ends */}
    </>
  );
}

export default Header;