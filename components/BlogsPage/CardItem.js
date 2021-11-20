import Image from "next/image";

import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { SecondaryHeading, SecondaryBodyText } from "../Typography";
import AuthorBox from "./AuthorBox";
import Link from "next/link";
import { sanityImageProps } from "../../lib/sanity";
const CardLink = styled.a`
  text-decoration: none;
  list-style: none;
  text-align: center;
  font-size: 0.75rem;
  margin-left: auto;
  cursor: pointer;
  color: #424242;
  padding: 0.35rem 0.7rem;
  border: 3px solid #3cbb95;
  transition: all 0.2s ease;
  border-radius: 25px;
  align-self: center;
  &:hover {
    background: #3cbb95;
  }
  ${media.md`
   
    padding : 0.5rem 1.25rem;
  `}
  ${media.lg`
   
    font-size:1rem;
  `}
`;
const CardWrapper = styled.div`
  margin-bottom: 2rem;
  border: 3px solid #ffb300;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  ${media.md`
                border-radius:25px ;
            `}
`;

const CoverImageBox = styled.div`
  border-radius: 0 0 25px 25px;
  border-bottom: 3px solid #ffb300;
  overflow: hidden;
  ${media.md`
                border-radius: 0 0 50px 50px;
            `}
`;
const CardContent = styled.div`
  padding: 0 0.75rem;
  margin: 1rem 0 2rem 0;
`;

const Title = styled(SecondaryHeading)`
  text-transform: uppercase;
  text-align: left;
`;
const SubTitle = styled(SecondaryBodyText)`
  text-align: left;
`;

const CardItem = ({ title, subtitle, image, date, author, link }) => {
  return (
    <CardWrapper>
      <CoverImageBox>
        {image && <Image {...sanityImageProps(image)} layout="responsive" />}
      </CoverImageBox>
      <CardContent>
        <Title>{title.length > 40 ? title.substr(0, 40) + "..." : title}</Title>
        <SubTitle>
          {subtitle &&
            (subtitle.length > 80 ? subtitle.substr(0, 80) + "..." : subtitle)}
        </SubTitle>
        <AuthorBox author={author} date={date}>
          <Link {...link} passHref>
            <CardLink>Read More</CardLink>
          </Link>
        </AuthorBox>
      </CardContent>
    </CardWrapper>
  );
};

export default CardItem;
