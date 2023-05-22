import styled from '@emotion/styled'
import {border, color, layout, space, typography} from 'styled-system'

export const Input = styled.input`
  // appearance:${props => props.type === "checkbox"? 'none':''};
  /* Base style*/
  width:300px;
  padding:5px 10px;
  // border: 1px solid #ccc;
  border-radius: 10px;
  // opacity: 0.2;
  // background-color:red;


  /* Styled system props */
  ${color}
  ${space}
  ${typography}
  ${layout}
  ${border}
  `;  
