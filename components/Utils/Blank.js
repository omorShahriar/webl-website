import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'

export const Blank = styled.div`
    display: block;
    width: 100%;
    height: ${({ gap }) => `${gap}rem` };
    
    ${
    media.lg`
        height: ${({ gap }) => `${gap * 1.5}rem` };
    `
    }

`
