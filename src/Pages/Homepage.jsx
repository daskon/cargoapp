import React from 'react'
import { Slider } from '../components/Slider/Slider'
import { Welcome } from '../components/Welcome/Welcome'
import ServiceSlider from '../components/ServiceSlider/ServiceSlider'
import Stats from '../components/Stats/Stats'

const Homepage = () => {
  return (
    <div>
        <Slider/>
        <Welcome/>
        <ServiceSlider/>
        <Stats/>
    </div>
  )
}

export default Homepage