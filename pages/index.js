import Services from '@/components/Home/Services'
import Hero from '@/components/Home/Hero'
import Layout from '@/components/Layout'
import Experiencies from '@/components/Home/Experiencies'
import Testimonials from '@/components/Home/Testimonials'

export default function Home () {
  return (
    <Layout title='Home' description={'Descripción home'}>
      <main>
        <Hero />
        <Services />
        <Experiencies />
        <Testimonials />
      </main>
    </Layout>
  )
}
