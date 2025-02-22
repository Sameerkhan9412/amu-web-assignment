import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import MarqueeText from '../components/common/MarqueText'

const Home = () => {
  return (
    <div className='w-full'>
        {/* hero section */}
        <HeroSection/>
        {/* marque tag */}
        <MarqueeText/>

    </div>
  )
}

export default Home