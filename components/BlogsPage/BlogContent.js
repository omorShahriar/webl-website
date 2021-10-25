import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { urlFor } from '../../lib/sanity';
import Image from 'next/image'
import ImageBox from '../ImageBox'

const ContentSection = styled.div`
  h2{
    font-size: 21px;
    line-height: 1.19048;
    margin-bottom: 16px;
    letter-spacing: .011em;
    color:#424242;
    ${
  media.lg`
        font-size: 24px;
  `
    }
  }
  p{
    color:#7a7a7a;
    font-size: 17px;
    line-height: 1.47059;
    letter-spacing: -.022em;
    margin-bottom: 1.4211em;
        ${
      media.lg`
            font-size: 19px;
        line-height: 1.4211;
        letter-spacing: .012em;
      `
    }
    
  }
  a{
    text-decoration:none;
    margin-left:.5rem;
    color:#FFB300;
    padding-bottom: .15rem;
    position: relative;
    &::after{
    transition: all 0.2s ease;
    transform-origin: left;
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      width: 0;
      height: 3px;
      background: #3CBB95
    }
    &:hover{
      &::after{
      width: 100%;
     
   
    }
    }
  }
`

const serializers = {
  types: {
    image: ({node: {asset, alt}}) => {
      return (
        <ImageBox>
          <Image src={urlFor(asset).height(600).fit('max').url()} alt={alt} width={1000} height={600}/>
        </ImageBox>
      )
    }
  }
}

const BlogContent = ({ content }) => {
  return (
    <ContentSection>
      <BlockContent
        serializers={serializers}
        blocks={content}
      />
    </ContentSection>
  )
}
  
  

export default BlogContent;
