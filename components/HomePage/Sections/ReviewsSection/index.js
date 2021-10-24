import styled from 'styled-components'
import { Container, Row, Col, media } from 'styled-bootstrap-grid';

import { GenericWrapper } from '../../../Utils/GenericWrapper';
import { PrimaryHeading } from '../../../Typography';

import { ReviewsSlide } from './ReviewsSlide';










const ReviewSection = () => {
    return (
        <GenericWrapper>
            <Container>
                <PrimaryHeading>customer reviews</PrimaryHeading>
                <Row>
                    <ReviewsSlide />
                </Row>
            </Container>
        </GenericWrapper>
    )
}

export default ReviewSection
