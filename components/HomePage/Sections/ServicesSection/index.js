import styled from 'styled-components'
import { Container, Row, Col, media } from 'styled-bootstrap-grid';
import { GenericWrapper } from '../../../Utils/GenericWrapper';
import { PrimaryHeading } from '../../../Typography';
import { services } from '../../../../assets/seed'
import { ServiceCard } from './ServiceCard';
import { ServiceSlides } from './ServicesSlide';



const ServiceCardsWrapper = styled.div`
    display: none;
    ${media.md`
       display:block`
    }
`
const ServicesSlideWrapper = styled.div`
    ${media.md`
       display:none; `
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
   
    return (
        <GenericWrapper>
            <Container>
                <PrimaryHeading>our services</PrimaryHeading>
                <ServicesSlideWrapper>
                    <Row>
                        <ServiceSlides />
                    </Row>
                </ServicesSlideWrapper>
                    
                <ServiceCardsWrapper>
                    <Row>
                        <ServiceCards/>   
                    </Row>
                </ServiceCardsWrapper>
                
            </Container>
        </GenericWrapper>
    )
}
export default ServicesSection;