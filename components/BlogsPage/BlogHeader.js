import styled from "styled-components"
import Image from 'next/image'
import AuthorBox from "./AuthorBox"
import { media } from "styled-bootstrap-grid";
import { PrimaryHeading } from "../Typography";

const CoverImageBox = styled.div`
    margin: 2rem 0;
    border-radius: 25px ;
    overflow: hidden;
     ${
            media.md`
                border-radius:50px;
                margin: 2.25rem 0;
            `
      }
      ${
            media.lg`
                
                margin: 2.5rem 0;
            `
      }
      ${
            media.lg`
                
                margin: 2.75rem 0;
            `
      }
`
const Title = styled(PrimaryHeading)`
  margin-bottom: 0%;
`
const Synopsys = styled.p`
  margin: 2rem 0;
  background: #B8E8CE;
  color:#424242;
  padding:1rem;
  border-radius: 15px;
`
export default function BlogHeader({title, subtitle, coverImage, date, author}) {
  return (
    <>
      <Title>{title}</Title>
      <AuthorBox author={author} date={date} centered={true}/>
      {coverImage &&
        <CoverImageBox>
           <Image
          src={coverImage} alt={title} layout="responsive" width={898} height={600} quality={90}/>
        </CoverImageBox>
         
        }
      
      <Synopsys >{subtitle}</Synopsys>
      
    </>
  )
}
