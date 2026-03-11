import React from 'react'
import Hero from './Hero'
import CenterMode from '../layout/components/Centermode'
import { products } from '../assets/JS/data'


const Home = () => {
  return (
   <>
  <Hero />
  <CenterMode items={products} />
   
   </>
  )
}

export default Home