import React from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import HomeTopBanner from '../../components/HomeTopBanner'
import Product4Slider from '../../components/Product4Slider'
import HowIsWorkSec from '../../components/HowIsWorkSec'
import BodyTypeSec from '../../components/BodyTypeSec'
import Button from 'react-bootstrap/Button';
import BrandsOnHomeSec from '../../components/BrandsOnHomeSec'

function Home() {
  return (
    <>
    <Header />
    <HeaderBottom />
      <HomeTopBanner />
      <section className='py-5'>
          <div className='container'>
              <div className='section-title text-center mb-4'>
                <h2>Recently viewed cars</h2>
              </div>
              <Product4Slider />
              <div className='text-center mt-3'>
                <Button  variant='warning' className="px-lg-5 px-4 py-3 btn-theme ">Browse more</Button>
              </div>
          </div>
      </section>
      
      <HowIsWorkSec />
      <BodyTypeSec />
      <BrandsOnHomeSec />
     
      
    </>
   
  )
}

export default Home