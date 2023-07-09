import React from 'react'
import Banner from './banner'
import "./home.css"
import Slide from './Slide'


const Maincomponent = () => {
  return (
    <div className='home_section'>
        <div className='banner_part'>
           <Banner/>
        </div>
        <Slide/>
    </div>
  )
}

export default Maincomponent