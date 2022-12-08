import Aside from 'components/Aside'
import Banner from 'components/sections/Banner'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import React from 'react'
import { GlobalStyles } from 'styles/GlobalStyles'
import Layout from 'components/Layout/Layout'
import About from 'components/sections/About'
import Projects from 'components/sections/Projects'
import Vacansy from 'components/sections/Vacansy'
import News from 'components/sections/News'
import "swiper/css"
import "swiper/css/pagination";
import Contact from 'components/sections/Contact'

export default function App() {
  return (
    <div className='App customScroll'>
      <GlobalStyles />
      <Aside />
      <Header />
      <Banner />
      <Layout>
        <About />
        <Projects />
        <Vacansy />
        <News />
        <Contact />
      </Layout>
      <Bottom />
    </div>
  )
}
