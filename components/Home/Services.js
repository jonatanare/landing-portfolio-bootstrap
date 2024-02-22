import React from 'react'

const services = [
  {
    id: 1,
    name: 'Web Development',
    numberProjects: 20,
    icon: 'icon-code.svg',
    wrapperIconColor: '#00D394'

  },
  {
    id: 2,
    name: 'Diseño UX/UI',
    numberProjects: 12,
    icon: 'icon-ux-ui.svg',
    wrapperIconColor: '#2DC9FF'

  },
  {
    id: 3,
    name: 'Marketing Digital',
    numberProjects: 54,
    icon: 'icon-laptop.svg',
    wrapperIconColor: '#FFA71C'

  }
]

export default function Services () {
  return (
    <section className='container-fluid services'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className='services__wrapper-items'>
              {
                services.map((service) => (
                  <section key={service.id} className='services__item'>
                    <figure className='services__item-wrapper-icon' style={{backgroundColor: service.wrapperIconColor}}>
                      <img src={`/assets/icons/${service.icon}`} alt={`Icon ${service.name}`} className='services__item-icon' />
                    </figure>
                    <div>
                      <h3 className='services__item-title'>{service.name}</h3>
                      <p className='services__item-subtitle'>{service.numberProjects} Projects</p>
                      
                    </div>
                  </section>
                ))
              }
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <h2 className='services__title'>What do I help?</h2>
            <p className='services__text'>I will hel you with finging a solution and solve your problems. We use process design to create digital products. Besids that also help their business</p>
            <p className='services__text'>We use process design to create digital products. Besids that also help their business</p>
            <section className='services__info'>
              <div>
                <strong className='services__info-title'>285+</strong>
                <p className='services__info-subtitle'>Project Complete</p>
              </div>
              <div>
                <strong className='services__info-title'>190+</strong>
                <p className='services__info-subtitle'>Happy Clients</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
