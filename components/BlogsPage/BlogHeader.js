import styled from "styled-components";
import Image from "next/image";
import AuthorBox from "./AuthorBox";
import { media } from "styled-bootstrap-grid";
import { PrimaryHeading } from "../Typography";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
const CoverImageBox = styled.div`
  margin: 2rem 0;
  border-radius: 25px;
  overflow: hidden;
  ${media.md`
                border-radius:50px;
                margin: 2.25rem 0;
            `}
  ${media.lg`
                
                margin: 2.5rem 0;
            `}
      ${media.lg`
                
                margin: 2.75rem 0;
            `}
`;
const Title = styled(PrimaryHeading)`
  margin-bottom: 0%;
`;
const Info = styled.div`
  margin: 2rem 0;
  background: #b8e8ce;
  color: #424242;
  padding: 1rem;
  border-radius: 15px;
`;
const Synopsys = styled.div`
  margin: 2rem 0;
  border: 2px solid #b8e8ce;
  color: #424242;
  padding: 1rem;
  border-radius: 15px;
`;

export default function BlogHeader({
  title,
  subtitle,
  imageProps,
  date,
  author,
}) {
  const { asPath } = useRouter();
  const baseurl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://weblinnovations.com";
  const fullUrl = `${baseurl}${asPath}`;

  return (
    <>
      <Title>{title}</Title>
      <AuthorBox author={author} date={date} centered={true} />
      {imageProps.src && (
        <CoverImageBox>
          <Image {...imageProps} alt={title} layout="responsive" quality={90} />
        </CoverImageBox>
      )}
      <Info>
        Share on facebook{" "}
        <FacebookShareButton url={fullUrl}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>{" "}
        | Linkedin
        <LinkedinShareButton title={title} url={fullUrl}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </Info>
      <Synopsys>
        <h2>Quick Summary</h2>
        {subtitle}
      </Synopsys>
    </>
  );
}
