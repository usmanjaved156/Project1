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
    <div className="header">
      <div className='header-1'>
    <CallOutlinedIcon />
    <label className='lbl-header-1'>+0123456789</label>
    <EmailOutlinedIcon />
    <label className='lbl-header-1'>claue@domain.com</label>
    </div>
    <div className='header-2'>
<label className='label'>Summer Sale discount off 50%! Shop Now</label>
</div>
      </div>
      {/* Header Ends*/}
      
      {/* Navbar Starts */}
    <Navbar>
      <div className='navbar'>
      <Navbar.Collapse>
      <Nav className='nav-icons-1'>
        
      <Nav.Link href="#home"><FacebookIcon/></Nav.Link>
            <Nav.Link href="#home"><TwitterIcon/></Nav.Link>
            <Nav.Link href="#home"><GoogleIcon/></Nav.Link>
            <Nav.Link href="#home"><InstagramIcon/></Nav.Link>
            <Nav.Link href="#home"><PinterestIcon/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
        <Navbar.Collapse >
          <Nav className='nav-pages'>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Shop">Shop</Nav.Link>
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="/Pages">Pages</Nav.Link>
            <Nav.Link href="/Elements">Elements</Nav.Link>
            <Nav.Link href="/Sales">Sales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse >
      <Nav className='nav-icons-2'>
            <Nav.Link href="#home"><SearchIcon/></Nav.Link>
            <Nav.Link href="#home"><AccountCircleOutlinedIcon/></Nav.Link>
            <Nav.Link href="#home"><FavoriteBorderOutlinedIcon/></Nav.Link>
            <Nav.Link href="#home"><AddShoppingCartOutlinedIcon/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div >
    </Navbar>
      {/* Navbar Ends */}
    </>
  );
}

export default Header;