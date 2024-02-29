import React from 'react'
import MainCarousl from '../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousl/>
   
        <div className='space-y-10 py-20 flex flex-col justify-around px-5 lg:px-10 '>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} smallsection={"Top view in this week"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
        </div>
    
    </div>
  )
}

export default HomePage