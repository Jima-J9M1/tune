import styled from "@emotion/styled"
import { color, space, typography } from "styled-system"

export const Title = styled.h1`
       &::after{
        content: "${props => props.afterContent}";
        color:${props =>props.cl};
       }

       ${color}
       ${space}
       ${typography}
    `