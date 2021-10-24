import styled  from "styled-components"
export const VerticalSeparator = styled.div`
    background: ${({bgColor}) => bgColor ? bgColor : "#7A7A7A"} ;
    width: 2px;
    height: ${({height}) => height ? height : "48px" };
    margin: ${({centered}) => centered ? "0 auto" : "0 1rem"}; 
`
export const HorizontalSeparator = styled.div`
    background: ${({bgColor}) => bgColor ? bgColor : "#7A7A7A"} ;
    width: ${({width}) => width ? width : "48px" };
    height: 2px;
    margin:  0 1rem; 
`