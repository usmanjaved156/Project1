import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cover1 from './Assets/cover1.jpg';
import cover2 from './Assets/cover2.jpg';
import cover3 from './Assets/cover3.jpg';
import cap from './Assets/cap.jpg';
import accessories from './Assets/accessories.jpg';
import footwear from './Assets/footwear.jpg';
import watch from './Assets/watch.jpg';
import model1 from './Assets/model1.jpg';
import model2 from './Assets/model2.jpg';
import model3 from './Assets/model3.jpg';
import trending1 from './Assets/trending1.jpg';
import trending2 from './Assets/trending2.jpg';
import trending3 from './Assets/trending3.jpg';
import trending4 from './Assets/trending4.jpg';
import product1 from './Assets/product1.jpg';
import product2 from './Assets/product2.jpg';
import product3 from './Assets/product3.jpg';
import product4 from './Assets/product4.jpg';
import product5 from './Assets/product5.jpg';
import product6 from './Assets/product6.jpg';
import product7 from './Assets/product7.jpg';
import product8 from './Assets/product8.jpg';
import blog1 from './Assets/blog1.jpg';
import blog2 from './Assets/blog2.jpg';
import blog3 from './Assets/blog3.jpg';
import social1 from './Assets/social1.jpg';
import social2 from './Assets/social2.jpg';
import social3 from './Assets/social3.jpg';
import social4 from './Assets/social4.jpg';
import social5 from './Assets/social5.jpg';
import social6 from './Assets/social6.jpg';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Components/Home.css';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

function Home() {
  return (<>
      <div>
       <Carousel className="slider">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={cover1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <div className='main-items'>
    <Card className='items' >
      <Card.Img variant="top" src={footwear} />
        <Button className='btn-items'>Watches</Button>
    </Card>
    <Card className='items' >
      <Card.Img variant="top" src={accessories} />
        <Button className='btn-items'>Watches</Button>
        
    </Card>
    <Card className='items' >
      <Card.Img variant="top" src={watch} />
        <Button className='btn-items'>Watches</Button>
        
    </Card>
    <Card className='items' >
      <Card.Img variant="top" src={cap} />
        <Button className='btn-items'>Watches</Button>
        
    </Card>
    </div>

{/* Models */}
    <div className='models-div'>
      <Card className='model' >
      <Card.Img variant="top" src={model1} />
      <div className='bottom'>
      <h6>VIEW COLLECTIONS</h6>
      <h1>LOOKBOOK</h1>
      <p>your world of fashion in numbers</p>
      </div>
    </Card>
    <Card className='model' >
      <Card.Img variant="top" src={model2} />
    </Card>
    <Card className='model' >
      <Card.Img variant="top" src={model3} />
      <div className='bottom-1'>
      <h6>SUMMER SALE</h6>
      <h1>UP TO 70%</h1>
      <Button  style={{borderRadius:'20px'}}>Shop Now</Button>
      </div>
    </Card>
    
    </div>
    <div className='trending'>
      <h1>--TRENDING--</h1>
      <p><i>Top view in this week</i></p>
    </div>

    <div className='trending-div'>
      <div >
      <Card className='trending-items'>
      <Card.Img variant="top" src={trending1}/>
      <Card.Body>
        <Card.Title>Cuffed Beanie</Card.Title>
        <Card.Text>$115.00
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div >
      <Card className='trending-items'>
      <Card.Img variant="top" src={trending2}/>
      <Card.Body>
        <Card.Title>Calvin Klien Logo Sweatpants</Card.Title>
        <Card.Text>$39.00
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div >
      <Card className='trending-items'>
      <Card.Img variant="top" src={trending3}/>
      <Card.Body>
        <Card.Title>Cyan Boheme</Card.Title>
        <Card.Text>
          $125.00
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div >
      <Card className='trending-items'>
      <Card.Img variant="top" src={trending4}/>
      <Card.Body>
        <Card.Title>Cyan Boheme</Card.Title>
        <Card.Text>
          $125.00
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className='products'>
      <h1>--OUR PRODUCTS--</h1>
      <p><i>Top view in the week</i></p>
    </div>

    <div className='row-product'>
    <Button className='btn-product'>Primary</Button>
    <Button className='btn-product'>Primary</Button>
    <Button className='btn-product'>Primary</Button>
    <Button className='btn-product'>Primary</Button>
    </div>
    <div className='row'>
      <div className='col-4'>
      <Card >
      <Card.Img variant="top" src={product1}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product2}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product3}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product4}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className='row'>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product5}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product6}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product7}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product8}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className='trending'>
      <h1>--LATEST FROM BLOGS--</h1>
      <p><i>The freshest and most exciting news</i></p>
    </div>

    <div className='row'>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog1}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog2}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog3}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className='trending'>
      <h1>--@ FOLLOW US ON INSTAGRAM--</h1>
    </div>
    <div>


       <Carousel className='social-items'>
      <Carousel.Item>
        <img
          className="slider-2"
          src={social1}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={social2}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={social3}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={social4}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={social5}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={social6}
          alt="First slide"
        />
      </Carousel.Item>
      
      
    </Carousel>
    </div>
    <div className='row'>
      <div className='col-1'>
<DirectionsCarOutlinedIcon/>
      </div>
      <div className='col-2'>
<h6>FREE SHIPPING</h6>
<p>Free shipping on all US order<br/> or order above $200</p>
</div>
<div className='col-1'>
<DonutLargeOutlinedIcon/>
      </div>
      <div className='col-2'>
      <h6>	
SUPPORT 24/7</h6>
<p>Contact us 24 hours a day,<br/>7 days a week</p>
</div>
<div className='col-1'>
<PublishedWithChangesOutlinedIcon/>
      </div>
      <div className='col-2'>
      <h6>	
30 DAYS RETURN</h6>
<p>Simply return it within 30<br/>days for an exchange</p>
</div>
<div className='col-1'>
<ShieldOutlinedIcon/>
      </div>
      <div className='col-2'>
      <h6>	
100% PAYMENT SECURE</h6>
<p>We ensure secure payment<br/>with PEV</p>
</div>
    </div>
    </>

  )
}

export default Home