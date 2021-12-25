import { groq } from "next-sanity";
import { getClient } from "../lib/sanity";
import { NextSeo } from "next-seo";
const pageQuery = groq`
  *[_type == "landingPage" ][0] {
    content
  }
`;

import HeroSection from "../components/HomePage/Sections/HeroSection";
import ReviewSection from "../components/HomePage/Sections/ReviewsSection";
import ServicesSection from "../components/HomePage/Sections/ServicesSection";
import WhyUsSection from "../components/HomePage/Sections/WhyUsSection";

export default function Home({ data }) {
  const content = data.content;
  return (
    <>
      <NextSeo description="WebL Innovations is a Bangladesh-based startup working in the Digital Education sector. We provide digital education consultancy, eCourse development services, and innovative IT-based products for digital learning as well as teaching." />
      <HeroSection content={content[0]} />
      <WhyUsSection content={content[1]} />
      <ServicesSection content={content[2]} />
      <ReviewSection />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(pageQuery);

  return {
    props: {
      preview,
      data,
    },
  };
}
