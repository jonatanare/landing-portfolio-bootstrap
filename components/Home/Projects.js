import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: 'MoveBike',
        subtitle: 'Motorcycle rental platform',
        imageCover: '/assets/home/projects/img-movebike.png',
        color: '#FE5F3B'
    },
    {
        id: 1,
        title: 'Academia Landrada',
        subtitle: 'Platform for training consultants',
        imageCover: '',
        color: '#00B451'
    },
    {
        id: 1,
        title: 'Landing Page',
        subtitle: 'Investment Land Sales',
        imageCover: '',
        color: '#3AACFF'
    },
    {
        id: 1,
        title: 'Landing Page',
        subtitle: 'Investment Land Sales',
        imageCover: '',
        color: '#3AACFF'
    },
    {
        id: 1,
        title: 'Landing Page',
        subtitle: 'Investment Land Sales',
        imageCover: '',
        color: '#3AACFF'
    },
    {
        id: 1,
        title: 'Landing Page',
        subtitle: 'Investment Land Sales',
        imageCover: '',
        color: '#3AACFF'
    }
]

export default function Projects() {
  return (
    <section className='container-fluid projects'>
        <div className="row">
            <div className="col-12 d-flex justify-content-between">
                <div>
                    <h2 className='projects__title'>Projects</h2>
                    <p className='projects__subtitle'>Perfect solutions for digital experience</p>
                </div>
                <Link href={'#'} className='projects__explore d-none d-md-block'>
                    Explore More Works
                </Link>
                
            </div>
            <div className="col-12">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.2}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4
                        }
                    }}
                    className='projects__swiper'
                    >
                        {
                            projects.map((projects) => (
                                <SwiperSlide key={projects.id}>
                                    <section className='projects__item' style={{backgroundColor: projects.color}}>
                                        <h3 className='projects__item-title'>{projects.title}</h3>
                                        <p className='projects__item-subtitle'>{projects.subtitle}</p>
                                        {
                                            projects.imageCover ? (
                                                <img src={projects.imageCover} alt={`Image ${projects.title}`} className='projects__item-img' />

                                            ): ''
                                        }
                                    </section>
                                </SwiperSlide>
                            ))
                        }
                </Swiper>
            </div>
        </div>
    </section>
  )
}
