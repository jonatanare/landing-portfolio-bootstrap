import AboutMe from '@/components/Home/AboutMe'
import Hero from '@/components/Home/Hero'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home () {
  return (
    <Layout title='Home' description={'Descripción home'}>
      <main>
        <Hero />
        <AboutMe />
      </main>
    </Layout>
  )
}
