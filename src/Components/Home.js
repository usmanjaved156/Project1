import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
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
      <Carousel.Item className='item-slider-1'>
        <img
          className="d-block w-100"
          src={cover1}
          alt="First slide"
        />
        <Carousel.Caption style={{color:'black'}}>
          <h5>Spring - Summer 2020</h5>
          <h2>FLASH SALE OF 70%</h2>
          <Button className='btn-slider-1'>Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover2}
          alt="Second slide"
        />

<Carousel.Caption style={{color:'black'}}>
          <h5>Spring - Summer 2020</h5>
          <h2>FLASH SALE OF 70%</h2>
          <Button className='btn-slider-1'>Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover3}
          alt="Third slide"
        />

<Carousel.Caption style={{color:'black'}}>
          <h5>Spring - Summer 2020</h5>
          <h2>FLASH SALE OF 70%</h2>
          <Button className='btn-slider-1'>Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <Container fluid >
      <Row>
        <Col sm={3}>
    <Card className='items' >
      <Card.Img className='img-items' src={footwear} />
        <Button className='btn-items'>Footwear</Button>
    </Card>
    </Col>
    <Col sm={3}>
    <Card className='items' >
      <Card.Img className='img-items' src={accessories} />
        <Button className='btn-items'>Accessories</Button>
    </Card>
    </Col>
    <Col sm={3}>
    <Card className='items' >
      <Card.Img className='img-items' src={watch} />
        <Button className='btn-items'>Watches</Button>
    </Card>
    </Col>
    <Col sm={3}>
    <Card className='items' >
      <Card.Img className='img-items' src={cap} />
        <Button className='btn-items'>Caps & Hats</Button>
        
    </Card>
    </Col>
    </Row>
    </Container>

{/* Models */}
    
    <Container fluid className='models-div'>
      <Row>
        <Col sm={4}>
        <Card className='model'>
      <Card.Img className='img-model' src={model1} />
      <div className='bottom'>
      <h6>VIEW COLLECTIONS</h6>
      <h1>LOOKBOOK</h1>
      <p>your world of fashion in numbers</p>
      </div>
    </Card>
        </Col>
        <Col sm={4}>
        <Card className='model' >
      <Card.Img className='img-model' src={model2} />
    </Card>
        </Col>
        <Col sm={4}>
        <Card className='model' >
      <Card.Img className='img-model' src={model3} />
      <div className='bottom-1'>
      <h6>SUMMER SALE</h6>
      <h1>UP TO 70%</h1>
      <Button className='btn-bottom-1'>Shop Now</Button>
      </div>
    </Card>
        </Col>
      </Row>
    </Container>
    <Container fluid className  ='heading'>
      <Row>
        <Col>
        <h1>TRENDING</h1>
      <p><i>Top view in this week</i></p>
        </Col>
      </Row>
    </Container>
    <div className='trending-div'>
      <div >
      <Card className='trending-items'>
      <Card.Img className='img-trending-items' src={trending1}/>
      <Card.Body>
        <h6>Cuffed Beanie</h6>
        <p>$115.00
        </p>
        <Button className='btn-trending'>L</Button>
        <Button className='btn-trending'>M</Button>
        <Button className='btn-trending'>XS</Button>
      </Card.Body>
    </Card>
      </div>
      <div >
      <Card className='trending-items'>
      <Card.Img className='img-trending-items' src={trending2}/>
      <Card.Body>
        <h6>Calvin Klien Logo Sweatpants</h6>
        <p>$39.00
        </p>
      </Card.Body>
    </Card>
      </div>
      <div >
      <Card className='trending-items'>
      <Card.Img className='img-trending-items' src={trending3}/>
      <Card.Body>
        <h6>Cyan Boheme</h6>
        <p>
          $125.00
        </p>
      </Card.Body>
    </Card>
      </div>
      <div >
      <Card className='trending-items'>
      <Card.Img className='img-trending-items' src={trending4}/>
      <Card.Body>
        <h6>Cyan Boheme</h6>
        <p>
          $125.00
        </p>
      </Card.Body>
    </Card>
      </div>
    </div>
    <Container fluid className  ='heading'>
      <Row>
        <Col>
        <h1>OUR PRODUCTS</h1>
      <p><i>Top view in the week</i></p>
        </Col>
      </Row>
    </Container>

    <div className='row-product'>
    <Button className='btn-product'>Best Seller</Button>
    <Button className='btn-product'>New</Button>
    <Button className='btn-product'>Sale</Button>
    <Button className='btn-product'>Top Rate</Button>
    </div>
      <div className='product-div1'>
      <Card className='product'>
      <Card.Img className='img-product' src={product1}/>
      <Card.Body>
        <h6>Jean Super Man</h6>
        <Card.Text>
        $33.00
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='product'>
      <Card.Img className='img-product' src={product2}/>
      <Card.Body>
        <h6>Jean Hot fire brown</h6>
        <Card.Text>
        $49.00
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='product'>
      <Card.Img className='img-product' src={product3}/>
      <Card.Body>
        <h6>Jean Lion king black</h6>
        <Card.Text>
        $65.00
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='product'>
      <Card.Img className='img-product' src={product4}/>
      <Card.Body>
        <h6>Jean Raw Denim Black</h6>
        <Card.Text>
        $92.00
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='product-div2'>
      <Card className='product'>
      <Card.Img className='img-product' src={product5}/>
      <Card.Body>
        <h6>Denim Shell Top with Ruffle Front</h6>
        <Card.Text>
        $58.00
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='product'>
      <Card.Img className='img-product' src={product6}/>
      <Card.Body>
        <h6>Jean Roshe One Casual</h6>
        <Card.Text>
        $115.00
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='product'>
      <Card.Img className='img-product' src={product7}/>
      <Card.Body>
        <h6>ASOS Ridley High Waist</h6>
        <Card.Text>
        $49.00
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='product'>
      <Card.Img className='img-product' src={product8}/>
      <Card.Body>
        <h6>Analogue Resin Strap Watch</h6>
        <Card.Text>
        $56.00
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <Container fluid className  ='heading'>
      <Row>
        <Col>
        <h1>LATEST FROM BLOGS</h1>
      <p><i>The freshest and most exciting news</i></p>
        </Col>
      </Row>
    </Container>

    
      <div className='blog-div'>
      <Card className='blog'>
      <Card.Img className='img-blog' src={blog1}/>
      <Card.Body>
        <h6>Blog 1</h6>
        
      </Card.Body>
    </Card>
      <Card className='blog'>
      <Card.Img className='img-blog' src={blog2}/>
      <Card.Body>
        <h6>Blog 2</h6>
        
      </Card.Body>
    </Card>
      <Card className='blog'>
      <Card.Img className='img-blog' src={blog3}/>
      <Card.Body>
        <h6>Blog 3</h6>
        
      </Card.Body>
    </Card>
    </div>
    <Container fluid className  ='heading'>
      <Row>
        <Col>
      <h1>@ FOLLOW US ON INSTAGRAM</h1>
        </Col>
      </Row>
    </Container>

      <Container fluid>
        <Row>
          <Col sm={2}>
          <img
          className="img-social-items"
          src={social1}
          alt="First slide"
        />
          </Col>
          <Col sm={2}>
          <img
          className="img-social-items"
          src={social2}
          alt="First slide"
        />
          </Col>
          <Col sm={2}>
          <img
          className="img-social-items"
          src={social3}
          alt="First slide"
        />
          </Col>
          <Col sm={2}>
          <img
          className="img-social-items"
          src={social4}
          alt="First slide"
        />
          </Col>
          <Col sm={2}>
          <img
          className="img-social-items"
          src={social5}
          alt="First slide"
        />
          </Col>
          <Col sm={2}>
          <img
          className="img-social-items"
          src={social6}
          alt="First slide"
        />
          </Col>
        </Row>
      </Container>
       <div className='social-items'>
        
        

    </div>

    {/* About */}
    <Container>
      <Row>
        <Col sm={1}>
    <DirectionsCarOutlinedIcon/>
        </Col>
        <Col sm={2}>
        <h6>FREE SHIPPING</h6>
<p>Free shipping on all US order<br/> or order above $200</p>
        </Col>
        <Col sm={1}>
<DonutLargeOutlinedIcon/>
        </Col>
        <Col sm={2}>
        <h6>	
SUPPORT 24/7</h6>
<p>Contact us 24 hours a day,<br/>7 days a week</p>
        </Col>
        <Col sm={1}>
<PublishedWithChangesOutlinedIcon/>
        </Col>
        <Col sm={2}>
        <h6>	
30 DAYS RETURN</h6>
<p>Simply return it within 30<br/>days for an exchange</p>
        </Col>
        <Col sm={1}>
<ShieldOutlinedIcon/>
        </Col>
        <Col sm={2}>
        <h6>	
100% PAYMENT SECURE</h6>
<p>We ensure secure payment<br/>with PEV</p>
        </Col>
      </Row>
    </Container>
    {/* About End */}
    
    </>

  )
}

export default Home