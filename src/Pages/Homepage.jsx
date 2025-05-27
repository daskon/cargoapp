import React from 'react'
import { Slider } from '../components/Slider/Slider'
import { Welcome } from '../components/Welcome/Welcome'
import ServiceSlider from '../components/ServiceSlider/ServiceSlider'

const Homepage = () => {
  return (
    <div>
        <Slider/>
        <Welcome/>
        <ServiceSlider/>
    </div>
  )
}

export default Homepage