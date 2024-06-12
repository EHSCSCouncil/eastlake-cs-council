'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const slides = [
  { id: 1, image: '/slide1.jpg', text: 'Empowering the Next Generation' },
  { id: 2, image: '/slide2.jpg', text: 'Hands-on Learning Experiences' },
];

export default function Slideshow() {
  return (
    <Swiper
      className="overflow-hidden"
      loop={true}
      autoplay={{ delay: 5000 }} 
      navigation={false} 
      pagination={{ clickable: true }} 
      modules = {[Autoplay, Navigation, Pagination ]}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <div className="relative" style={{ paddingBottom: '54%', overflow: 'hidden' }}> 
            <img src={slide.image} alt={slide.text} className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <h2 className="text-white text-4xl">{slide.text}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))
      }
    </Swiper>
  );
}