
import styled from "styled-components";

export const BreadCrumb = styled.div`
    width:48px;
    height: 3px;
    background-color: #3CBB95;
    position: relative;
 
    &:after {
        content : '';
        position: absolute;
        width:48px;
        height: 3px;
        background-color: #3CBB95;
        top:10px;
        left:-10px;
       
       
    }
  

`