'use client'

import Hero from '@/components/Hero'
import AIFeatures from '@/components/AIFeatures'
import RSSPreview from '@/components/RSSPreview'
import InfoComparison from '@/components/InfoComparison'
import WeChatHub from '@/components/WeChatHub'
import Testimonials from '@/components/Testimonials'
// import FeatureComparison from '@/components/FeatureComparison'
import PricingPlans from '@/components/PricingPlans'
import BlogNews from '@/components/BlogNews'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AIFeatures />
        <RSSPreview />
        <InfoComparison />
        <WeChatHub />
        <Testimonials />
        {/* <FeatureComparison /> */}
        <PricingPlans />
        <BlogNews />
      </main>
      <Footer />
    </div>
  )
}