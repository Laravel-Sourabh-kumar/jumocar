import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Img1 from '../assets/images/brand-1.png';
import Img2 from '../assets/images/brand-2.png';
import Img3 from '../assets/images/brand-3.png';
import Img4 from '../assets/images/brand-4.png';
import Img5 from '../assets/images/brand-5.png';
import Img6 from '../assets/images/brand-6.png';
import Img7 from '../assets/images/brand-10.png';
import Img8 from '../assets/images/brand-8.png';
import Img9 from '../assets/images/brand-9.png';
import Img10 from '../assets/images/brand-10.png';
import Img11 from '../assets/images/brand-11.png';
import Img12 from '../assets/images/brand-12.png';


function BrandsOnHomeSec() {
    return (
        <section className='py-5 bg-light'>
            <Container>
                <div className='section-title text-center mb-5'>
                    <h2>Explore Popular Brands</h2>
                    <p>You won't just love our cars, you'll love the way you buy them.</p>
                </div>
                <Row className='g-3 brand-home-row'>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img1} />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img2} />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img3} />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img4} />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img5} />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img6} />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img7} />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img8} />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img9} />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img10}  />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img11}  />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2} md={3} xs={6}>
                        <Card className='w-100  text-center rounded-4'>
                            <Card.Img variant="top" src={Img12}  />
                            <Card.Body>
                                <Card.Title className='h6'>Honda</Card.Title>
                                <Card.Text>
                                    <small> 20+ cars </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className='text-center mt-3'>
                    <Button  variant='outline-warning' className="px-lg-5 px-4 py-3 outline-btn  ">Browse more</Button>
                </div>
            </Container>
        </section>
    )
}

export default BrandsOnHomeSec