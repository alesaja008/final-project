import React, { useState } from 'react'

// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";

// custom style
import "./styles.css"
import "swiper/css";
import "swiper/css/pagination";
import { Container } from 'react-bootstrap';

function SliderApps() {

  const {entities} = useSelector((state) => state.product)
  

  return (
    <>
    <section className='sec-slider'>
    <Container>
      <div className='Slider_hero'>
          <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
            
              {entities.map((product,i) => {
                return (
              <SwiperSlide key={i}>
                
                <img src={product.image} alt=''/>
                
              </SwiperSlide>
                )
              })

              }
              
              
            </Swiper>

      </div>
    </Container>

    </section>

    </>
  )
}

export default SliderApps