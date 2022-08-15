import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from './Assets/slider1.jpg';
import Slider2 from './Assets/slider2.jpg';
import Slider3 from './Assets/slider3.jpg';
import Img1 from './Assets/img1.jpg';
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
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider1}
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
          src={Slider2}
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
          src={Slider3}
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

    <div className='row'>
    <Card className='col-4' >
      <Card.Img variant="top" src={Slider1} />
        <Button className='btn'>Watches</Button>
    </Card>
    <Card className='col-4' >
      <Card.Img variant="top" src={Slider1} />
        <Button className='btn'>Watches</Button>
        
    </Card>
    <Card className='col-4' >
      <Card.Img variant="top" src={Slider1} />
        <Button className='btn'>Watches</Button>
        
    </Card>
    <Card className='col-4' >
      <Card.Img variant="top" src={Slider1} />
        <Button className='btn'>Watches</Button>
        
    </Card>
    </div>
    <div className='row'>
      <Card className='col-3' >
      <Card.Img variant="top" src={Img1} />
      <div className='bottom'>
      <h6>VIEW COLLECTIONS</h6>
      <h1>LOOKBOOK</h1>
      <p>your world of fashion in numbers</p>
      </div>
    </Card>
    <Card className='col-3' >
      <Card.Img variant="top" src={Img1} />
        <Button className='btn'>Watches</Button>
    </Card>
    <Card className='col-3' >
      <Card.Img variant="top" src={Img1} />
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

    <div className='row'>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img1}/>
      <Card.Body>
        <Card.Title>Cuffed Beanie</Card.Title>
        <Card.Text>$115.00
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img1}/>
      <Card.Body>
        <Card.Title>Calvin Klien Logo Sweatpants</Card.Title>
        <Card.Text>$39.00
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img1}/>
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
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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
      <Card.Img variant="top" src={Img1}/>
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


       <Carousel>
      <Carousel.Item>
        <img
          className="slider-2"
          src={Slider1}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={Slider2}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={Slider3}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={Slider1}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={Slider2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-2"
          src={Slider1}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={Slider2}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={Slider3}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={Slider1}
          alt="First slide"
        />
        <img
          className="slider-2"
          src={Slider2}
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