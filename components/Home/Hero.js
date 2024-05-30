import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import BADGE_KODEMIA from '@/public/assets/home/badge-kodemia.webp'
import IMG_JONATAN from '@/public/assets/home/jonatan2-SF.png'

export default function Hero () {
  return (
    <section className='container-fluid hero'>
      <Image src={IMG_JONATAN} width={300} height={430} alt='Foto Jonatan' className='hero__photo mx-auto d-none d-xl-block' /> 
      <div className="container hero__container">
      <div className='row'>
        <section className='col-lg-6 position-relative'>
          <section className='d-md-flex align-items-md-center justify-content-md-between'>
          <h1 className='hero__title'>Hey There, <br/> I’m Jonatan</h1>
          <p className='hero__subtitle d-none d-md-block d-lg-none'>
            I design beautifully simple things, <br /> And I love what i do
          </p>
          </section>
          <Link href='mailto:jonatanare.dev@gmail.com' className='d-none d-lg-block hero__email'>jonatanare.dev@gmail.com</Link>
          <div className='hero__experiencies d-none d-xl-flex'>
            <strong className='hero__experiencies-year'>3</strong>
            <p className='mb-0 hero__experiencies-text'>Years <br /> Experiences</p>
          </div>
        </section>
        <section className='col-lg-6 position-relative vh-100'>
          <p className='hero__subtitle d-md-none d-xl-block'>
            I design beautifully simple <br className='d-none d-xl-block' /> things, <br className='d-xl-none' /> And I love what i do
          </p>
          <figure className='hero__badge p-0 text-center'>
            <Image src={BADGE_KODEMIA} alt='Badge Kodemia' />
            <figcaption>
              <p className='d-none d-md-block hero__badge-text'>FullStack JavaScript Developer</p>
            </figcaption>
          </figure>
          <div className='text-center d-xl-none'>
            <Image src={IMG_JONATAN} width={300} height={430} alt='Foto Jonatan' className='hero__photo mx-auto' /> 
          </div>
          <div className='hero__experiencies d-xl-none'>
            <strong className='hero__experiencies-year'>3</strong>
            <p className='mb-0 hero__experiencies-text'>Years <br /> Experiences</p>
          </div>
        </section>
      </div>
      </div>
    </section>
  )
}
