import styled from "@emotion/styled";
import { color, flex, grid, layout, order, space, typography } from "styled-system";
import { Title } from "../common/Title";
import { Link } from "react-router-dom";
import { SongArtist, SongCard, SongImage, SongTitle } from "./PopularSong";
import { StyledButton } from "../common/Button";
import {HiPlus} from "react-icons/hi"
import Icon from '../../assets/image/singerImage.jpg'


const SideContainer = styled.div`
    // display: flex;
    // justify-content: flex-start;
    // flex-direction:column;
    // top: 0;
    // right:0; 
    // bottom:0;
    // // background-color: #fff;
    // margin-top:15px;
    // height:100%;
    width:300px;
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

const RightSide = ({openModal, order,songs}) =>{
    // const songs = useSelector(state=>state.song.songs)


    console.log(songs)
    return(
        <SideContainer p={4} order={order}>
        <StyledButton onClick={openModal} width={1} bg="green">
        <HiPlus width={12} />
          Add Song
        </StyledButton>
            <Title fontSize={[28,16]}>
            New Song
            </Title>
            
            <Link>
            <SongCard
            
            
            width={[6/7]} m="auto"
            >
            <SongImage
             src={Icon}
             />
            <SongTitle>
                songs[0].title
            </SongTitle>
            <SongArtist>
                songs[0].artist
            </SongArtist>
            </SongCard>
           </Link>

        </SideContainer>
    )
}

export default RightSide