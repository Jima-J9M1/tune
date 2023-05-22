import styled from "@emotion/styled";
import singerImage  from '../../assets/image/singerImage.jpg';
import { StyledButton } from "../common/Button";
import Popular from "../layout/PopularSong";
import AudioLayout from "../common/audio";

const Body = styled.div`
     width:100vw;
     min-height:100vh;
     background-color:white;
     color:black;


`
const SongDetailsContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  items-align:center;
  justify-content:end;
  background-image:url(${singerImage});
  background-size:cover;
  background-position:center 0;
  height:400px;
`;


const SongDetails = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content:end;
  items-align:end;
  margin-left:30px;
  color:white;
  margin-bottom:10px;



`

const SongTitle = styled.h1`
  font-size: 48px;
  // margin-top: 10px;
  margin:0;
  font-weight:bold;
`;

const SongArtist = styled.p`
  font-size: 28px;
  margin:0;
  margin-bottom: 10px;
  font-style:italic;
  font-weight:bold;
`;

// const SongAlbum = styled.p`
//   font-size: 16px;
//   color: #999999;
// `;

const SongDescription = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const ButtonLayout = styled.div`
      width: 500px;
      display:flex;
      // justify-content:space-around;
      
`
const DetailedSongView = () => {
  

  return (
    <Body>
    <SongDetailsContainer>
      <SongDetails>
      <SongTitle>Sarboy</SongTitle>
      <SongArtist>Weekend</SongArtist>
      <SongDescription>The weekend Ethiopian american famous singer in the world. 
        Starboy is talking about the boy who has nothing before and become one of the popular people in the world. 
      </SongDescription>
      </SongDetails>
      <AudioLayout />
    </SongDetailsContainer>
    <Popular header={"Relative Songs"}/>
    </Body>
  );
};

export default DetailedSongView;
