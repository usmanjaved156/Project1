import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo1 from '../Components/Assets/logo-footer.png';
import logo2 from '../Components/Assets/logo.png';

function Footer() {
  return (
    
    <>
      <Container fluid className='footer'>
      <Row>
        <Col>
        <img
          src={logo1}
          alt="logo" width={177} height={55}
        />
          <ul className='icons-footer-1'>
          <li><FacebookIcon className='icon'/>
            <TwitterIcon className='icon'/>
            <GoogleIcon className='icon'/>
            <InstagramIcon className='icon'/>
            <PinterestIcon className='icon'/></li>
          </ul>
        </Col>
        <Col>
        <img 
          src={logo2}
          alt="logo" width={96} height={27}
        />
          <ul className='icons-footer-1'>
          <li><LocationOnIcon/>185 Main Rd E, St Albans<br/>VIC 3021, Australia</li>
          <li><EmailIcon/>claue@company.com</li>
          <li><CallIcon/>+000 111 222</li>
          <li><FacebookIcon className='icon'/>
            <TwitterIcon className='icon'/>
            <GoogleIcon className='icon'/>
            <InstagramIcon className='icon'/>
            <PinterestIcon className='icon'/></li>
          </ul>
        </Col>
        <Col>
        <ul>
          <li><b>Categories</b></li>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
          <li>Shoes</li>
          <li>Dresses</li>
          <li>Skirts</li>
          </ul>
        </Col>
        <Col>
        <ul>
          <li><b>Information</b></li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Terms & Condition</li>
          <li>returns & Exchanges</li>
          <li>Shipping & Delivery</li>
          <li>Privacy Policy</li>
          </ul>
        </Col>
        <Col>
        <ul>
          <li><b>Quick Links</b></li>
          <li>Store Location</li>
          <li>My Account</li>
          <li>Accessories</li>
          <li>Orders Tracking</li>
          <li>Size Guide</li>
          <li>FAQs</li>
          </ul>
          </Col>
      </Row>
    </Container>
       
    </>
  )
}

export default Footer