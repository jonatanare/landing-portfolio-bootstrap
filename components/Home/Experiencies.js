import React from 'react'
import ICON_LINE from '@/public/assets/icons/icon-line.svg'
import Image from 'next/image'

import business from '@/data/business.json'

export default function Experiencies() {
  return (
    <section className='container-fluid experiencies'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className='experiencies__title'>My Work Experience</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 d-none d-md-block">
                    <div className='d-md-flex flex-md-column justify-content-md-between align-items-md-start'>
                    {
                        business.map((item) => (
                            <section key={item.id} className='experiencies__business'>
                                <h4 className='experiencies__business-name'>{item.name}</h4>
                                <p className='experiencies__business-date'>{item.date}</p>
                            </section>
                        ))
                    }
                    </div>
                    
                </div>
                <div className="col-2 col-md-2">
                    <section className='experiencies__timeline'>
                        {
                            [1,2,3].map(index => (
                                <>
                                <div key={index} className='experiencies__timeline-wrapper-squere'>
                                    <div className={`experiencies__timeline-wrapper-squere-icon experiencies__timeline-wrapper-squere-icon--${index}`}>
                                    </div>
                                </div>
                                <div className='experiencies__timeline-divisor'>
                                    <Image src={ICON_LINE} alt='Icon line' />
                                </div>
                                </>
                            ))
                        }

                    </section>
                </div>
                <div className="col-10 col-md-5">
                    {
                        business.map(item => (
                            <section key={item.id} className='experiencies__position'>
                                <h3 className='experiencies__position-name'>{item.position}</h3>
                                <p className='experiencies__position-description'>{item.description}</p>
                                <section>
                                    <h4 className='experiencies__position-business'>{item.name}</h4>
                                    <p className='experiencies__position-date'>{item.date}</p>
                                </section>
                            </section>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
