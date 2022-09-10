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
        <Col lg={6} md={6} sm={6}>
        <CallOutlinedIcon />
    <label className='lbl-header-1'>+0123456789</label>
        
        <EmailOutlinedIcon />
    <label className='lbl-header-1'>claue@domain.com</label>
    </Col>
        <Col lg={6} md={6} sm={6}>
<label className='label'>Summer Sale discount off <span style={{color:'red'}}>50%</span> Shop Now</label>

        </Col>
        
      </Row>
    </Container>
      {/* Header Ends*/}
      
      {/* Navbar Starts */}
      <Navbar collapseOnSelect expand="md" bg="white" variant="light">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                
      <Nav >
          <div className='nav-icons-1'>
            <NavLink href="#home" className='icon'><FacebookIcon/></NavLink>
            <NavLink href="#home" className='icon'><TwitterIcon/></NavLink>
            <NavLink href="#home" className='icon'><GoogleIcon/></NavLink>
            <NavLink href="#home" className='icon'><InstagramIcon/></NavLink>
            <NavLink href="#home" className='icon'><PinterestIcon/></NavLink>
            </div>
        </Nav>
      </Navbar.Collapse>
        <Navbar.Collapse >
          <Nav>
            <div className='nav-pages'>
            <NavLink href="/Home">Home</NavLink>
            <NavLink href="/Shop">Shop</NavLink>
            <NavLink href="/Products">Products</NavLink>
            <NavLink href="/Pages">Pages</NavLink>
            <NavLink href="/Elements">Elements</NavLink>
            <NavLink href="/Sales">Sales</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse >
      <Nav>
      <div className='nav-icons-2'>
            <NavLink href="#home" className='icon'><SearchIcon/></NavLink>
            <NavLink href="#home" className='icon'><AccountCircleOutlinedIcon/></NavLink>
            <NavLink href="#home" className='icon'><FavoriteBorderOutlinedIcon/></NavLink>
            <NavLink href="#home" className='icon'><AddShoppingCartOutlinedIcon/></NavLink>
            </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>  

      {/* Navbar Ends */}
    </>
  );
}

export default Header;