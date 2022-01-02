import Image from "next/image";

import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import AuthorBox from "./AuthorBox";
import { sanityImageProps } from "../../lib/sanity";
import { LinkComponent } from "components/StyledLink";

const CardWrapper = styled.div`
  margin-bottom: 2rem;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  ${media.md`
                border-radius:25px ;
            `}
`;

const CoverImageBox = styled.div`
  border-radius: 0 0 25px 25px;
  overflow: hidden;
  height: 200px;
  background: #3cbb95;
  position: relative;
  img {
    z-index: 1;
    object-fit: cover;
    object-position: center;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    padding: 0.5rem;
    text-align: center;
    content: attr(data-title);
    color: #fff;

    font-size: 2rem;
  }
`;
const CardContent = styled.div`
  padding: 0 0.75rem;
  margin: 1rem 0 2rem 0;
`;

const Title = styled.h2`
  color: #006661;
  font-size: 1.25rem;
  text-transform: capitalcase;
  line-height: 1.25;
  text-align: left;
  margin-bottom: 0.5rem;
  transition: all 0.3s;
  &:hover {
    color: #3cbb95;
  }
`;
const SubTitle = styled.p`
  color: #7a7a7a;
  font-size: 0.75rem;
  text-align: left;
`;

const CardItem = ({ title, subtitle, image, date, author, link }) => {
  return (
    <LinkComponent {...link}>
      <CardWrapper>
        <CoverImageBox data-title={title}>
          {image && <Image {...sanityImageProps(image)} layout="responsive" />}
        </CoverImageBox>
        <CardContent>
          <Title>{title}</Title>
          <SubTitle>
            {subtitle &&
              (subtitle.length > 80
                ? subtitle.substr(0, 80) + "..."
                : subtitle)}
          </SubTitle>
          <AuthorBox author={author} date={date} centered></AuthorBox>
        </CardContent>
      </CardWrapper>
    </LinkComponent>
  );
};

export default CardItem;
