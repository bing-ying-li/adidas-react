import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, Dropdown, InputGroup, Button, Form, Col, NavbarBrand, NavItem, NavLink, Carousel, Row, Image } from 'react-bootstrap';
import { Bag, Facebook, Heart, Instagram, Person, Pinterest, Search, Tiktok, Twitter, Youtube } from 'react-bootstrap-icons';

const TopBar1 = () => (
  <Navbar expand-lg bg="dark" >
    <Container className="text-center">
      <Col>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="navFont">FREE STANDARD SHIPPING & RETURE</Dropdown.Toggle>
        </Dropdown>
      </Col>
    </Container>
  </Navbar>
);


const TopBar2 = () => (
  <Navbar fluid className="justify-content-end py-sm-0 font-size-color">
    <Nav>
      <Nav.Item>
        <Nav.Link href='#'>help</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='#'>exchanges & returns</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='#'>order tracker</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='#'>join adiclub</Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
);


const TopMenu = () => (
  <Navbar>
    <Navbar>
      <NavbarBrand href="#"><Image src="adidas-logo.png" width="200px"></Image></NavbarBrand>
    </Navbar>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Container>
        <Nav className="justify-content-center">
          <NavItem><NavLink className="active" aria-current="page"><strong>MEN</strong></NavLink></NavItem>
          <NavItem><NavLink className="active" aria-current="page"><strong>WOMEN</strong></NavLink></NavItem>
          <NavItem><NavLink className="active" aria-current="page"><strong>KIDS</strong></NavLink></NavItem>
          <NavItem><NavLink className="active" aria-current="page">SALE</NavLink></NavItem>
          <NavItem><NavLink className="active" aria-current="page">3 STRIPE LIFE</NavLink></NavItem>
        </Nav>
      </Container>

      <Nav>
        <NavItem>
          <InputGroup >
            <Form.Control placeholder="Search" aria-label="Search"/>
            <Button variant="outline-dark">
              <Search/>
            </Button>
          </InputGroup>
        </NavItem>
        <NavItem><NavLink href="#"><Person/></NavLink></NavItem>
        <NavItem><NavLink href="#"><Heart/></NavLink></NavItem>
        <NavItem><NavLink href="#"><Bag/></NavLink></NavItem>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
);


const FullWidthImage = () => (
  <Carousel>
    <Carousel.Item>
      <Image className="d-block w-100" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/fw23_ivy_park_noir_launch_hp_mh_d_ce988edad6.jpg" alt="First slide"/>
      <Carousel.Caption>
        <h3>1</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <Image className="d-block w-100" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/xcat_fw23_holiday_oct_shoes100andunder_hp_large_mh_d_a30cea1a31.jpg" alt="Second slide"/>
      <Carousel.Caption>
        <h3>2</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  /* (Single image)
    <Row className="justify-content-center">
       <Image className="pt-1" src="poster1.png" alt="Adidas-homepage"/>
    </Row>
  */
);

const Wordlink = () => (
  <Container className = "py-4">
    <Row>
      <Col className="nav justify-content-start">
        <Button variant="dark">New Arrivals</Button>
        <Button variant="outline-dark">What's Trending</Button>
      </Col>
      <Col className="nav justify-content-end">
        <p>VIEW ALL</p>
      </Col>
    </Row>
  </Container>

);

const SmallImages = () => (
  <Container>
    <Navbar fluid className="justify-content-center py-3">
      <Image className="px-2" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b0b6d4a107ad4e84b3baaf8700866f07_9366/campus-00s-shoes.jpg" alt="Image1" width="300px"></Image>
      <Image className="px-2" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/a6a1ecb378204fc6a5a3571b1a3a973e_9366/samba-og-shoes-kids.jpg" alt="Image2" width="300px"></Image>
      <Image className="px-2" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/eb4fe70570824a5993f305aca11473de_9366/samba-shoes.jpg" alt="Image3" width="300px"></Image>
      <Image className="px-2" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/52c951e30dcb4ff1bfdfd053405a6f75_9366/samba-shoes.jpg" alt="Image4" width="300px"></Image>
    </Navbar>
  </Container>
);


const FooterMenu = () => (
  <footer>
    <Container>
      <Row id="footFont">

        <Col>
          <strong>PRODUCTS</strong>
          <hr/>
          <div>Shoes</div>
          <div>Clothing</div>
          <div>Accessories</div>
          <div>Gift Cards</div>
          <div>New Arrivals</div>
          <div>Best Sellers</div>
          <div>Release Dates</div>
          <div>Sale</div>
        </Col>

        <Col>
          <strong>SPORTS</strong>
          <hr/>
          <div>Soccer</div>
          <div>Running</div>
          <div>Basketball</div>
          <div>Football</div>
          <div>Outdoor</div>
          <div>Golf</div>
          <div>Baseball</div>
          <div>Tennis</div>
          <div>Skateboarding</div>
          <div>Training</div>
        </Col>

        <Col>
          <strong>COLLECTIONS</strong>
          <hr/>
          <div>adicolor</div>
          <div>Ultraboost</div>
          <div>NMD</div>
          <div>Forum</div>
          <div>Superstar</div>
          <div>Running Shoes</div>
          <div>adilette</div>
          <div>Stan Smith</div>
          <div>adizero</div>
          <div>Tiro</div>
          <div>EQT</div>
        </Col>

        <Col>
          <strong>FOLLOW US</strong>
          <hr/>
          <Container>
            <Navbar>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link href='#'><Facebook/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#'><Instagram/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#'><Twitter/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#'><Pinterest/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#'><Tiktok/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#'><Youtube/></Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Container>
        </Col>

      </Row>
    </Container>
  </footer>
);


const Adidas = () => (
  <div>
    <TopBar1/>
    <TopBar2/>
    <TopMenu/>
    <FullWidthImage/>
    <Wordlink/>
    <SmallImages/>
    <FooterMenu/>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Adidas />);