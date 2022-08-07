import React from 'react'
import './Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


function Footer() {
  return (
<div className="container-fluid">
    <footer className="row" >
        
        <div className='col-3 footer-logo' >
          <h2 className="text-center">claue</h2>
          <ul >
          <li><FacebookIcon/>
            <TwitterIcon/>
            <GoogleIcon/>
            <InstagramIcon/>
            <PinterestIcon/></li>
          </ul>
        </div>

        <div className='col-3 ' >
          <h5>claue</h5>
          <ul>
          <li><LocationOnIcon/>185 Main Rd E, St Albans<br/>VIC 3021, Australia</li>
          <li><EmailIcon/>usman@company.com</li>
          <li><CallIcon/>+000 111 222</li>
          <li><FacebookIcon/>
            <TwitterIcon/>
            <GoogleIcon/>
            <InstagramIcon/>
            <PinterestIcon/></li>
          </ul>
        </div>

        <div className='col-2' >
          <h5>Categories</h5>
          <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
          <li>Shoes</li>
          <li>Dresses</li>
          <li>Skirts</li>
          </ul>
        </div>

        <div className='col-2' >
          <h5>Information</h5>
          <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Terms & Condition</li>
          <li>returns & Exchanges</li>
          <li>SHipping & Delivery</li>
          <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='col-2' >
          <h5>Quick Links</h5>
          <ul>
          <li>Store Location</li>
          <li>My Account</li>
          <li>Accessories</li>
          <li>Orders Tracking</li>
          <li>Size Guide</li>
          <li>FAQs</li>
          </ul>
        </div>
        </footer>
      </div>
  )
}

export default Footer