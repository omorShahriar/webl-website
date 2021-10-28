import styled from 'styled-components'
import { Container, Row, Col, media } from 'styled-bootstrap-grid'
import { SecondaryHeading } from '../../Typography'
import StyledButton from '../../StyledButton'
import { allServices } from '../../../assets/seed'
import ServiceCard from './ServiceCard'
import { Blank } from '../../Utils/Blank'

const ServiceBoxWrapper = styled.div`
    border: 3px solid #FFB300;
    border-radius: 35px;
    padding: 1rem;
    padding-top: 2rem;
    margin-bottom: 2rem;
    ${
    media.md`
    padding: 3.5rem;
    padding-top: 5rem;
    margin-bottom: 4rem;
    `
    }
    ${
    media.lg`
    margin-bottom: 6rem;
    `
    }
    
 
`
const CTAWrapper = styled.div`
    margin:2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

`

const ServiceBox = () => {
    return (
        <>
            <ServiceBoxWrapper>
                <Container>
                    <Row>
                        {
                            allServices.map(service => (
                                <Col md={4}>
                                <ServiceCard icon={`/${service.icon}`} title={service.title} description={service.text} />
                                </Col>
                            ))
                        }
                    </Row>
                    <Row>
                        <Col>
                            <Blank gap={2}/>
                            <SecondaryHeading textAlign="center">
                                Can't see what you're looking for?
                            </SecondaryHeading>
                            <CTAWrapper>
                                <StyledButton href="/contact" borderColor="#3CBB95">
                                    CONTACT US
                                </StyledButton>
                            </CTAWrapper>
                        </Col>

                        
                    </Row>
                </Container>
            </ServiceBoxWrapper>
        </>
    )
}

export default ServiceBox

