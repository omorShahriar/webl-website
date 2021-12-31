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

import CopyToClipboardLink from "components/CopyToClipboard";
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
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: #424242;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  span {
    font-weight: bold;
    font-size: 1rem;
  }
`;
const Synopsys = styled.div`
  margin: 2rem 0;
  border: 2px solid #b8e8ce;
  color: #424242;
  padding: 1rem;
  border-radius: 15px;
`;
const SocialShareBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CopyToClipboardBox = styled.div`
  display: flex;
  align-item: center;
  span {
    margin-right: 1rem;
  }
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
      {imageProps && (
        <CoverImageBox>
          <Image {...imageProps} alt={title} layout="responsive" quality={90} />
        </CoverImageBox>
      )}
      <Info>
        <SocialShareBox>
          <span>Share on : </span>
          <FacebookShareButton url={fullUrl}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>

          <LinkedinShareButton title={title} url={fullUrl}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
        </SocialShareBox>

        <CopyToClipboardBox>
          <span>Copy link to Clipboard :</span>
          <CopyToClipboardLink url={fullUrl} />
        </CopyToClipboardBox>
      </Info>
      <Synopsys>
        <h2>Quick Summary</h2>
        {subtitle}
      </Synopsys>
    </>
  );
}
