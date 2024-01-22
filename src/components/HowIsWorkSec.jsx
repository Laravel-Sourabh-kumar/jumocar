import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Img1 from '../assets/images/how-img-1.png';
import Img2 from '../assets/images/how-img-2.png';
import Img3 from '../assets/images/how-img-3.png';

function HowIsWorkSec() {
    return (
        <section className='py-5 bg-light'>
            <Container>
                <div className='section-title text-center mb-5'>
                    <h2>How Jumocar® Works</h2>
                    <p>You won't just love our cars, you'll love the way you buy them.</p>
                </div>
                <Row>
                    <Col lg={4}>
                        <Card className='w-100 border-0 text-center bg-transparent'>
                            <Card.Img variant="top" src={Img1} />
                            <Card.Body>
                                <Card.Title className='h6'>Choose from the best pre-owned cars</Card.Title>
                                <Card.Text>
                                    <small> 10,000+ fully inspected cars online </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='w-100 border-0 text-center bg-transparent'>
                            <Card.Img variant="top" src={Img2} />
                            <Card.Body>
                                <Card.Title className='h6'>Take a test drive at your home or a Spinny Hub</Card.Title>
                                <Card.Text>
                                    <small> Sanitized cars for every test drive</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='w-100 border-0 text-center bg-transparent'>
                            <Card.Img variant="top" src={Img3} />
                            <Card.Body>
                                <Card.Title className='h6'>Online Payment. Doorstep Delivery.</Card.Title>
                                <Card.Text>
                                    <small> And 5-day money back guarantee </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                
                </Row>
            </Container>
        </section>
    )
}

export default HowIsWorkSec