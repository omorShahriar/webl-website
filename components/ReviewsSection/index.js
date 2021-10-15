import styled from 'styled-components'
import { Container, Row, Col, media } from 'styled-bootstrap-grid';

import { PrimaryHeading } from '../Typography';

import { ReviewsSlide } from './ReviewsSlide';



const ReviewsWrapper = styled.div`
    margin-bottom: 5rem;
;
    ${media.md`
        margin-bottom: 9rem ; `
}
`






const ReviewSection = () => {
    return (
        <ReviewsWrapper>
            <Container>
                <PrimaryHeading>customer reviews</PrimaryHeading>
                <Row>
                    <ReviewsSlide />
                </Row>
            </Container>
        </ReviewsWrapper>
    )
}

export default ReviewSection
