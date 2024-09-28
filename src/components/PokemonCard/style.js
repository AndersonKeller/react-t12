import styled from "styled-components";

export const StyledName = styled.p`
    font-size: 16px;
    font-weight: 600;
    ${({color})=>color==='primary'?`color:red;`:`color:blue;`}
`
export const StyledHeader = styled.header`
    background-color: red;
    & p{
        font-size: 12px;
    }
`