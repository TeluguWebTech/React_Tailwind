import React from 'react'
import NavBarSection from '../components/NavBarSection'
import HeroSection from '../components/HeroSection'
import ContentSection from '../components/ContentSection'
import GallerySection from '../components/GallerySection'
import HoverSection from '../components/HoverSection'
import FeatureSection from '../components/FeatureSection'
import PricingSection from '../components/PricingSection'
import TeamSection from '../components/TeamSection'
import TestimonialSection from '../components/TestimonialSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

const LandingPage = ({change}) => {
  return (
    <div>
        <NavBarSection change={change}/>
        <HeroSection />
        <ContentSection />
        <GallerySection />
        <HoverSection />
        <FeatureSection />
        <PricingSection />
        <TeamSection />
        <TestimonialSection />
        <ContactSection />
        <FooterSection />
    </div>
  )
}

export default LandingPage