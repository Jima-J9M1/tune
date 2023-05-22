
import styled from '@emotion/styled'
import {border, color, layout, space, typography} from 'styled-system'

export const StyledButton = styled.button`
  /* Base style*/
  background-color: #1D618F;
  padding: 10px 10px;
  margin: 5px 5px;
  cursor:pointer;
  color:"#fff";
  font-size:16px;
  font-weight:bold;
  border-radius:20px;
  text-align:center;

  /* Styled system props */
  ${color}
  ${space}
  ${typography}
  ${layout}
  ${border}
  `;  