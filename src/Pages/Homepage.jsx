import React from 'react'
import { Slider } from '../components/Slider/Slider'
import { Welcome } from '../components/Welcome/Welcome'
import ServiceSlider from '../components/ServiceSlider/ServiceSlider'
import Stats from '../components/Stats/Stats'
import TestimonialSection from '../components/Testimonial/TestimonialSection'
import ClientsLogos from '../components/ClientsLogo/ClientLogos'
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
        <Slider/>
        <Welcome/>
        <ServiceSlider/>
        <Stats/>
        <TestimonialSection/>
        <ClientsLogos/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Homepage