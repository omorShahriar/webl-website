import styled from 'styled-components'
import { Container, Row, Col, media } from 'styled-bootstrap-grid';
import { useMediaQuery } from 'react-responsive'
import { PrimaryHeading } from '../Typography';
import { services } from '../../assets/seed'
import { ServiceCard } from './ServiceCard';
import { ServiceSlides } from './ServicesSlide';

const ServicesWrapper = styled.div`
    margin-bottom: 4rem;
;
    ${media.md`
        margin-bottom: 6rem ; `
}
`
const ServiceCards = () => {
   return services.map((service,index) => {
                            return (
                               
                                    <Col key={index} md="4">
                                        <ServiceCard title={service.title} text={service.text} slug={service.slug}/>
                                    </Col>
                                )}
                                
                            )
}


const ServicesSection = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return (
        <ServicesWrapper>
            <Container>
                <PrimaryHeading>our services</PrimaryHeading>
                <Row>
                    {   
                        isMobile ? <ServiceSlides/> : <ServiceCards/>
                    }
                </Row>
            </Container>
        </ServicesWrapper>
    )
}
export default ServicesSection;