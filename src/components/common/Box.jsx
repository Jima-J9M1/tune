import styled from "@emotion/styled";
import { color, grid, space, typography } from "styled-system";

const BoxContainer = styled.div`
    backgraound-color:gray;
    color:Black;
    padding:40px;
    font-size:25px;
    border:1px solid black;
    border-radius:20px;
    ${color},
    ${space},
    ${grid},
    ${typography},
`

const Box = () =>{
    return(
        <BoxContainer>
            Box
        </BoxContainer>
    )
}

export default Box