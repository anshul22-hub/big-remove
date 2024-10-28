import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Bgslider from '../components/Bgslider'
import Testimonials from '../components/Testimonials'
import Load from '../components/Load'


const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Bgslider />
      <Testimonials />
      <Load />
    </div>
  )
}

export default Home