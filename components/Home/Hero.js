import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import BADGE_KODEMIA from '@/public/assets/home/badge-kodemia.webp'
import IMG_JONATAN from '@/public/assets/home/jonatan2-SF.png'

export default function Hero () {
  return (
    <section className='container-fluid hero'>
      <div className='row'>
        <section className='col-lg-6'>
          <h1 className='hero__title'>Hey There, I’m Jonatan</h1>
          <Link href='#' className='d-none d-lg-block hero__email'>jonatanare.dev@gmail.com</Link>
          <div className='hero__experiencies'>
            <strong>3</strong>
            <p>Years Experiences</p>
          </div>
        </section>
        <section className='col-lg-6 position-relative'>
          <p className='hero__subtitle'>
            I design beautifully simple things, <br/> And I love what i do
          </p>
          <figure className='hero__badge p-0'>
            <Image src={BADGE_KODEMIA} alt='Badge Kodemia' />
          </figure>
          <div className='text-center'>
            <Image src={IMG_JONATAN} width={300} height={430} alt='Foto Jonatan' className='hero__photo mx-auto' /> 
          </div>
          <p className='d-none d-md-block'>FullStack JavaScript Developer</p>
        </section>
      </div>
    </section>
  )
}
