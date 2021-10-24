import { groq } from 'next-sanity'
import {getClient} from '../lib/sanity.server'

const pageQuery = groq`
  *[_type == "landingPage" ][0] {
    content
  }
`

import HeroSection from '../components/HomePage/Sections/HeroSection'
import ReviewSection from '../components/HomePage/Sections/ReviewsSection'
import ServicesSection from '../components/HomePage/Sections/ServicesSection'
import WhyUsSection from '../components/HomePage/Sections/WhyUsSection'

export default function Home({data}) {
  const content = data.content;
  return (
    <>
      
      <HeroSection content={content[0]}/>
      <WhyUsSection/>
      <ServicesSection />
      <ReviewSection/>
    
    </>
   
  )
}

export async function getStaticProps({ preview = false }) {
   const data = await getClient(preview).fetch(pageQuery)

  return {
    props: {
      preview,
      data
    },
  }
}

