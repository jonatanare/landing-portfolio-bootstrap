import Link from 'next/link'
import React from 'react'

export default function Footer () {
  return (
    <footer className='container footer'>
      <div className="row">
        <div className="col-md-8">
          <h2 className='footer__title'>Let’s Make Something <br /> Amazing Together</h2>

          <h3 className='footer__subtitle'>Start by <span>saying hi</span></h3>
        </div>
        <div className="col-md-4">
          <nav>
            <h2 className='footer__info'>Information</h2>
            <address className='footer__address'>Cancún, Quintana Roo. Mex.</address>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link href={'#services'} className='nav-link active'>Servicios</Link>
              </li>
              <li>
                <Link href={'#projects'} className='nav-link'>Projects</Link>
              </li>
              <li>
                <Link href={'#nots'} className='nav-link'>Notas</Link>
              </li>
              <li>
                <Link href={'#experiencies'} className='nav-link'>Experiencia</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className='footer__divisor' />
      <div className="row">
        <div className="col-12 d-lg-flex justify-content-lg-between">
          <Link href="/" className='footer__jonidev d-none d-lg-block'>{'</Joni Dev>'}</Link>
          <p className='text-center footer__devkoore mb-0'>Power By <a href="https://devkoore.com/" target='_blank'>DevKoore</a> <br className='d-lg-none' /> con <span>♥</span></p>
        </div>
      </div>
    </footer>
  )
}
