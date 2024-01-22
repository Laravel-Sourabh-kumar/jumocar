import React from 'react'
import Container from 'react-bootstrap/Container';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Product4Slider from './Product4Slider';
 import IcoCar from '../assets/icons/car-line.png';


function BodyTypeSec() {
    return (
        <section className='py-5'>
            <Container>
                <div className='section-title text-center mb-5'>
                    <h2>Explore By Body Type</h2>
                    <p>You won't just love our cars, you'll love the way you buy them.</p>
                </div>
                <Tabs
                    defaultActiveKey="Tab-1"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="Tab-1"  title={<span className='d-grid'> <img src={IcoCar} class="img-fluid m-auto" width={50}/> Hatchback  </span>}>
                        <Product4Slider />
                    </Tab>
                    <Tab eventKey="Tab-2"  title={<span className='d-grid'> <img src={IcoCar} class="img-fluid m-auto" width={50}/> Sedan  </span>}>
                    <Product4Slider />
                    </Tab>
                    <Tab eventKey="Tab-3"  title={<span className='d-grid'> <img src={IcoCar} class="img-fluid m-auto" width={50}/> SUV  </span>}>
                    <Product4Slider />
                    </Tab>
                    <Tab eventKey="Tab-4" title={<span className='d-grid'> <img src={IcoCar} class="img-fluid m-auto" width={50}/> MUV  </span>}>
                        <Product4Slider />
                    </Tab>
                    <Tab eventKey="Tab-5" title={<span className='d-grid'> <img src={IcoCar} class="img-fluid m-auto" width={50}/> Luxry Sedan  </span>}>
                        <Product4Slider />
                    </Tab>
                    <Tab eventKey="Tab-6" title={<span className='d-grid'> <img src={IcoCar} class="img-fluid m-auto" width={50}/> Lusxry SUV  </span>}>
                        <Product4Slider />
                    </Tab>
                </Tabs>
            </Container>
        </section>
    )
}

export default BodyTypeSec