import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { urlFor } from "../../lib/sanity";
import Image from "next/image";
import ImageBox from "../ImageBox";

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}}rem`;
const em = (px, base) => `${round(px / base)}em`;

const ContentSection = styled.div`
        max-width: 70ch;
        margin: 0 auto;
        font-size: ${rem(16)};
        line-height: ${round(28 / 16)};
        p {
          margin-top: ${em(20, 16)};
          margin-bottom: ${em(20, 16)};
        }
        [class~="lead"] {
          font-size: ${em(20, 16)};
          line-height:${round(32 / 20)};
          margin-top: ${em(24, 20)};
          margin-bottom: ${em(24, 20)};
        }
        blockquote {
          margin-top: ${em(32, 20)};
          margin-bottom:${em(32, 20)};
          padding-left: ${em(20, 20)};
        }
        h1 {
          font-size: ${em(36, 16)};
          margin-top: 0;
          margin-Bottom: ${em(32, 36)};
          line-height: ${round(40 / 36)};
        }
        h2 {
          font-size: ${em(24, 16)};
          margin-Top: ${em(48, 24)};
          margin-bottom: ${em(24, 24)};
          line-height: ${round(32 / 24)};
        }
        h3 {
          font-size: ${em(20, 16)};
          margin-top: ${em(32, 20)};
          margin-bottom: ${em(12, 20)};
          line-height: ${round(32 / 20)};
        }
        h4 {
          margin-top:${em(24, 16)};
          margin-bottom: ${em(8, 16)};
          line-height:${round(24 / 16)};
        }
        img {
          margin-top: ${em(32, 16)};
          margin-bottom: ${em(32, 16)};
        }
        video{
          margin-top: ${em(32, 16)};
          margin-bottom: ${em(32, 16)};
        }
        figure {
          margin-top: ${em(32, 16)};
          margin-bottom: ${em(32, 16)};
        }
        figure > *{
          margin-top: '0',
          margin-bottom: '0',
        }
        figcaption {
          font-size: ${em(14, 16)};
          line-height:${round(20 / 14)};
          margin-top: ${em(12, 14)};
        }
    
        ol {
          margin-top: ${em(20, 16)};
          margin-bottom:${em(20, 16)};
        }
        ul {
          margin-top: ${em(20, 16)};
          margin-bottom: ${em(20, 16)};
        }
        li {
          margin-top:${em(8, 16)};
          margin-bottom: ${em(8, 16)};
        }
        ol {
          padding-left: ${em(26, 16)};
        }
        ol > li {
          padding-left:${em(6, 16)};
        }
        ul {
          padding-left:${em(26, 16)};
        }
        ul > li {
          padding-left: ${em(6, 16)};
        }
        &> ul > li p {
          margin-top: ${em(12, 16)};
          margin-bottom: ${em(12, 16)};
        }
        &> ul > li > *:first-child {
          margin-top:${em(20, 16)};
        }
      &> ul > li > *:last-child {
          margin-bottom:${em(20, 16)};
        }
        &> ol > li > *:first-child {
          margin-top:${em(20, 16)};
        }
        &> ol > li > *:last-child {
          margin-bottom:${em(20, 16)};
        }
        ul ul, ul ol, ol ul, ol ol {
          margin-top: ${em(12, 16)};
          margin-bottom:${em(12, 16)};
        }
        hr {
          margin-top: ${em(48, 16)};
          margin-bottom: ${em(48, 16)};
        }
        hr + * {
          margin-top: '0',
        }
        h2 + * {
          margin-top: '0',
        }
        h3 + * {
          margin-top: '0',
        }
        h4 + * {
          margin-top: '0',
        }
      
    
      
      

  a {
    text-decoration: none;
    color: #ffb300;
    padding-bottom: 0.15rem;
    position: relative;
    &::after {
      transition: all 0.2s ease;
      transform-origin: left;
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      width: 0;
      height: 3px;
      background: #3cbb95;
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;

const serializers = {
  types: {
    image: ({ node: { asset, alt } }) => {
      return (
        <ImageBox>
          <Image
            src={urlFor(asset).height(600).fit("max").url()}
            alt={alt}
            width={1000}
            height={600}
          />
        </ImageBox>
      );
    },
  },
};

const BlogContent = ({ content }) => {
  return (
    <ContentSection>
      <BlockContent serializers={serializers} blocks={content} />
    </ContentSection>
  );
};

export default BlogContent;
