import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { SecondaryBodyText, SecondaryHeading } from '../../Typography'
import Image from 'next/image'

const ServiceCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
    margin-bottom: 2rem;
    ${
    media.md`
        align-items : flex-start;
        margin-bottom: 4rem;
    `
   
    }

    

`

const Description = styled(SecondaryBodyText)`
    text-align:center;
     ${
        media.md`
            text-align:left;
        `
   
    }
`

const ServiceIcon = styled.div`
    width: 3rem;
    height: 3rem;
    margin-bottom: 1.5rem;
`

const ServiceCard = ({icon,title,description}) => {
    return (
        <ServiceCardWrapper>
            <ServiceIcon>
                <Image src={icon} width={100} height={ 100}/>
            </ServiceIcon>
            <SecondaryHeading>
               {title}
            </SecondaryHeading>
            <Description>
                {description}
            </Description>
        </ServiceCardWrapper>
    )
}

export default ServiceCard