import styled from "@emotion/styled";
import { color, flex, grid, layout, order, space, typography } from "styled-system";
import { Title } from "../common/Title";
import Icon from '../../assets/image/singerImage.jpg'
const SideContainer = styled.div`
    position:stricky;
    display: flex;
    justify-content: flex-start;
    flex-direction:column;
    top: 0;
    left: 0;
    bottom:0;
    // background-color: #fff;
    margin-top:15px;
    ${order}
    ${color}
    ${space}
    ${layout}
    ${flex}
    ${typography}
    ${grid}
`

const FixedElement = styled.div`
  ${space};
  ${layout}
//   background-color: #fff;
`;

const PlaylistLayout = styled.div`
      display:flex;
      width:200px;
`

const ImagLayout = styled.img`
     object-fit:cover;
     border-radius:50%;
     height:50px;
     width:50px;
     margin-right:12px;
`

const LeftSide = ({order,songs}) =>{
    return(
        <SideContainer p={3} order={order}>
            <Title fontSize={26}>
            My playlist
            </Title>

           <FixedElement p={2}>
               <PlaylistLayout>
                <ImagLayout src={Icon}/>
                <Title fontSize={16}>Music Title</Title>
               </PlaylistLayout>
           </FixedElement>

           <FixedElement p={2}>
               <PlaylistLayout>
                <ImagLayout src={Icon}/>
                <Title fontSize={16}>Music Title</Title>
               </PlaylistLayout>
           </FixedElement>

           <FixedElement p={2}>
               <PlaylistLayout>
                <ImagLayout src={Icon}/>
                <Title fontSize={16}>Music Title</Title>
               </PlaylistLayout>
           </FixedElement>

        </SideContainer>
    )
}

export default LeftSide