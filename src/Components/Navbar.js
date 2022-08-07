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

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="row" style={{ backgroundColor: '#e8e7e3' }}>
      <div className="col-4" style={{marginLeft:'2%'}}>
 <CallOutlinedIcon/>
 <label style={{paddingRight:'1em'}}>+0123456789</label>
<EmailOutlinedIcon/>
<label >claue@domain.com</label>
</div>
<div className="col-4">
<label>Summer Sale discount off 50%! Shop Now</label>
</div>

    <NavDropdown title="English">
        <NavDropdown.Item href="#action/3.1">Chinese</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Italy</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="USD-US Dollar">
        <NavDropdown.Item href="#action/3.1">RS-Ruppees</NavDropdown.Item>
            </NavDropdown>
      </Navbar>
      
        <Navbar className="row">
       
          <Nav >
          <div className="col-4" style={{marginLeft:'2%'}}>
            <FacebookIcon />
            <TwitterIcon/>
            <GoogleIcon/>
            <InstagramIcon/>
            <PinterestIcon/>
            </div>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#pages">Pages</Nav.Link>
            <Nav.Link href="#elements">Elements</Nav.Link>
            <Nav.Link href="#sales">Sale</Nav.Link>
        
            <div className="col-4" style={{textAlign:'right',marginRight:'2%'}}>
            <SearchIcon/>
            </div>
          </Nav>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;