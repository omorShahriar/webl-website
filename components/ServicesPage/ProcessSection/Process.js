import styled from "styled-components";
import Image from "next/image";
import { media } from "styled-bootstrap-grid";
import { SecondaryHeading, SecondaryBodyText } from "../../Typography";

const Title = styled(SecondaryHeading)`
    text-align: center;
    border: 3px solid #3CBB95;
    border-radius : 15px;
    margin:0 auto;
    margin-bottom : 1rem;
    background: #fff;
    width:50%;
    ${
    media.md`
        margin-bottom : 3rem;
        padding: .25rem 1rem;
        width:100%;
        font-size : 1.5rem;
         
    `
    }
`
const Description = styled(SecondaryBodyText)`
        font-size: .75rem;
        text-align: center;
        ${
    media.md`
        font-size: 1.2rem;
         
    `
    }
      
`
const ProcessWrapper = styled.div`
    margin-bottom: 5rem;
    ${
    media.xl`
         padding: 1rem 1.5rem;
    padding-left: 0;
         
    `
    }
   
`
const ProcessIcon = styled.div`
    width: 3rem;
    height: 3rem;
    margin : 0 auto;
    margin-bottom: 1.5rem;
`

const Process = ({icon,title,text}) => {
    return (
        <ProcessWrapper>
            <Title>{title}</Title>
                <ProcessIcon>
                <Image src={icon} width={48} height={48} layout="responsive" />
                </ProcessIcon>
            <Description>
                {text}
            </Description>
        </ProcessWrapper>
    )
}

export default Process