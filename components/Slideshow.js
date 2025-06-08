'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
const slides = [
  {id: 0, image: '/PackHack image.jpg', text: <Link href = "/programs/PackHacks">Join us at PackHacks 2025!</Link>},
  { id: 1, image: '/slide1.jpg', text: "Empowering the next generation of computer scientists"},
  { id: 2, image: '/slide2.jpg', text: "Engaging hands-on experiences"},
  { id: 3, image: '/slide3.jpg', text: "Everything from engineering principles to robotics to software"},
  { id: 4, image: '/slide4.jpg', text: "We integrate these experiences directly to classrooms"},
  { id: 5, image: '/slide5.jpg', text: "And bring in experts from industry and academia"},
  { id: 6, image: '/slide6.jpg', text: "Come visit our events throughout the year!"}
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