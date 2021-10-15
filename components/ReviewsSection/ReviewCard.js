import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

const ReviewWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    border: 3px solid #FFB300;
    border-radius: 15px;
    ${
    media.lg`
        width:60%;
        margin: 0 auto;    
    `
    }
`
const PersonBox = styled.div`
    color: #424242;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    border-right: 3px solid #3CBB95;
    padding-right: 1rem;
    text-align: center;
    margin-right: 1rem;
`

const PersonImage = styled.div`
    background: #FFB300;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-bottom: 2rem;
    ${
    media.md`
        margin-bottom: 1.5rem; 
    `
    }

`
const ReviewBox = styled.div`
display: flex;
align-items: center;
    color: #7A7A7A;
    font-size: 0.75rem;
`
const ReviewCard = ({name,text}) => {
    return (
        <ReviewWrapper>
            <PersonBox>
                    <PersonImage>
                    </PersonImage>
                 <p>{name}</p>
            </PersonBox>
         
            <ReviewBox>
                 <p>{ text}</p>
           </ReviewBox>
           
        </ReviewWrapper>
    )
}

export default ReviewCard;
