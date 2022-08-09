import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from './Assets/slider1.jpg';
import Slider2 from './Assets/slider2.jpg';
import Slider3 from './Assets/slider3.jpg';
import Img1 from './Assets/img1.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Components/Home.css'
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
      <Button className='btn'>Watches</Button>
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
    </>

  )
}

export default Home