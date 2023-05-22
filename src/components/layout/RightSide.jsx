import styled from "@emotion/styled";
import { color, flex, grid, layout, space, typography } from "styled-system";
import { Title } from "../common/Title";
import { Link } from "react-router-dom";
import { SongArtist, SongCard, SongImage, SongTitle } from "./PopularSong";

const SideContainer = styled.div`
    // display: flex;
    // justify-content: flex-start;
    // flex-direction:column;
    // top: 0;
    // right:0; 
    // bottom:0;
    // // background-color: #fff;
    // margin-top:15px;
    width:300px;
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

const RightSide = () =>{
    return(
        <SideContainer p={4}>
            <Title fontSize={[28,16]}>
            New Song
            </Title>
            
            <Link>
            <SongCard
            
            
            width={[6/7]} m="auto"
            >
            <SongImage
             src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"
             width={[1]}
             />
            <SongTitle>
                Grend
            </SongTitle>
            <SongArtist>
                Bruno Mars
            </SongArtist>
            </SongCard>
           </Link>

        </SideContainer>
    )
}

export default RightSide