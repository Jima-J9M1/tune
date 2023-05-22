import styled from "@emotion/styled";
import { color, layout, space } from "styled-system";
import { StyledButton } from "../common/Button";

const ModalStyle = styled.div`
      position:fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      width:100%;
      // height:100%;
      display:flex;
      justify-content:center;
      items-align:center;
      background-color:rgba(0,0,0,0.5);
      z-index:1;
      padding:20px 0px;

`

const ModalContentStyle = styled.div`
      background-color:white;
      // width:50%;
      padding:20px;
      border-radius:8px;
      margin:auto;
      ${space}
      ${color}
      ${layout}
`

const Modal = ({isOpen, isClosed, children})=>{
   if(!isOpen){
    return null
   }

   return(
    <ModalStyle>
       <ModalContentStyle width={[1,3/4,3/4,1/2]}>
        {children}

        <StyledButton onClick={isClosed}>
            Closed
        </StyledButton>


       </ModalContentStyle>

    </ModalStyle>
   )

}


export default Modal