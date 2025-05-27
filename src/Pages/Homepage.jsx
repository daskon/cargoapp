import React from 'react'
import { Slider } from '../components/Slider/Slider'
import { Welcome } from '../components/Welcome/Welcome'
import ServiceSlider from '../components/ServiceSlider/ServiceSlider'
import Stats from '../components/Stats/Stats'
import TestimonialSection from '../components/Testimonial/TestimonialSection'
import ClientsLogos from '../components/ClientsLogo/ClientLogos'

const Homepage = () => {
  return (
    <div>
        <Slider/>
        <Welcome/>
        <ServiceSlider/>
        <Stats/>
        <TestimonialSection/>
        <ClientsLogos/>
    </div>
  )
}

export default Homepage