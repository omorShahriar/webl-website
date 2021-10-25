import styled from "styled-components"
import { media } from "styled-bootstrap-grid"

const ImageBox = styled.div`
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
export default ImageBox
