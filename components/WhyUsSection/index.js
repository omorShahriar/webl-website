import styled from 'styled-components'
import { Container, Row, Col, media } from 'styled-bootstrap-grid';
import { PrimaryHeading } from '../Typography';

import { reasons } from '../../assets/seed'
import ReasonBlock from './ReasonBlock';

const WhyUsWrapper = styled.div`
    margin-bottom: 4rem;
;
    ${media.md`
        margin-bottom: 6rem ; `
}
`
const WhyUsSection = () => {
    return (
        <WhyUsWrapper>
             <Container>
                <Row>
                    <Col>
                        <PrimaryHeading>Why Choose Us</PrimaryHeading>
                    </Col>
                </Row>
                <Row>
                    {reasons.map((reason) => {
                        return (
                            <Col key={reason.index} md="6">
                                <ReasonBlock title={reason.title} text={reason.text} index={reason.index}/>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </WhyUsWrapper>
       
    )
}

export default WhyUsSection;