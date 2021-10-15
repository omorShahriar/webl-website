import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import ReviewSection from '../components/ReviewsSection'
import ServicesSection from '../components/ServicesSection'
import WhyUsSection from '../components/WhyUsSection'

export default function Home() {
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet" />
        
      </Head>
    <HeroSection/>
    <WhyUsSection/>
      <ServicesSection />
      <ReviewSection/>

    </>
   
  )
}
