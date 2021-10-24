import styled from "styled-components";

import {  Row, Col, media } from "styled-bootstrap-grid";
import { PrimaryHeading } from "../../Typography"
import { GenericWrapper } from "../../Utils/GenericWrapper"

import { processes } from "../../../assets/seed"
import Process from "./Process";

const Heading = styled(PrimaryHeading)`
        ${
            media.md`
                text-align: left;
            `
        }
            
`

          

const ProcessBox = styled.div`
    position: relative;
    &::after {
        content:'';
        position:absolute;
        top:5%;
        left:0;
        height:3px;
        display:none;
        background: #3CBB95;
        width:80%;
        z-index: -1;
        ${
            media.md`
                display:block;
                top:4%;
            `
        }
        ${
            media.lg`
                
                top:5%;
            `
        }
         ${
            media.xl`
                
                top:8%;
            `
        }
    }
`

const ProcessSection = () => {
    return (
        <GenericWrapper>
          
                
                <Heading>a simple process</Heading>
          
            
            <ProcessBox>
                <Row>
                    {
                        processes.map(process => (
                            <Col md={3}>
                                <Process title={process.title} text={process.text} icon={process.icon} /> 
                            </Col>
                        ))
                    }
                </Row>
            </ProcessBox>
            
        </GenericWrapper>
    )
}
export default ProcessSection;