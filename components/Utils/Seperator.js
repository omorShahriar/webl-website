import styled  from "styled-components"
const Separator = styled.div`
    background: ${({bgColor}) => bgColor ? bgColor : "#7A7A7A"} ;
    width: 2px;
    height: 48px;
    margin:  0 1rem; 
`
export default Separator