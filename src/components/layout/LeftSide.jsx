import styled from "@emotion/styled";
import { color, flex, grid, layout, space, typography } from "styled-system";
import { Title } from "../common/Title";

const SideContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction:column;
    top: 0;
    left: 0;
    bottom:0;
    // background-color: #fff;
    margin-top:15px;
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

const LeftSide = () =>{
    return(
        <SideContainer p={3} w={[]}>
            <Title fontSize={26}>
            My playlist
            </Title>

           <FixedElement p={2}>
               <PlaylistLayout>
                <ImagLayout src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"/>
                <Title fontSize={16}>Bruno Mars</Title>
               </PlaylistLayout>
           </FixedElement>

           <FixedElement p={2}>
               <PlaylistLayout>
                <ImagLayout src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"/>
                <Title fontSize={16}>Bruno Mars</Title>
               </PlaylistLayout>
           </FixedElement>

           <FixedElement p={2}>
               <PlaylistLayout>
                <ImagLayout src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"/>
                <Title fontSize={16}>Bruno Mars</Title>
               </PlaylistLayout>
           </FixedElement>

        </SideContainer>
    )
}

export default LeftSide