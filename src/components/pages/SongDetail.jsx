import styled from "@emotion/styled";
import Popular from "../layout/PopularSong";
import AudioLayout from "../common/audio";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserList } from "../redux/slices/userSlice";
import { fetchSongList } from "../redux/slices/songSlice";

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
  // align-items:center;
  justify-content:end;
  background-image:url(${props => props.image});
  background-size:100% auto;
  background-position:center;
  height:500px;
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
  const [data,setData] = useState([])
  const [relativeSong,setRelativeSong] = useState([])

  const dispatch = useDispatch()
  const songs = useSelector((state)=> state.song.songs)

  const {id} = useParams()

  const fetchUser = (songs,id) =>{
    return songs.find((song)=>{
      return song.id === `${id}`
    })
  }
  
  useEffect(()=>{
    dispatch(fetchUserList())
    dispatch(fetchSongList())
    const result = fetchUser(songs,id);
    const relativesong = relative(result)
    setRelativeSong(relativesong)
    setData(result)
  },[dispatch])

  
  const relative = (music)=>{
    const currentSongId = music.id;
    const currentSongUid = music.uid;
    const relativeSong = songs.filter((song) => song.id === currentSongId)
    return relativeSong
}

  const dataForm = () =>(
    data &&   
      <Body>
        {/* {JSON.stringify(data)} */}
        {/* {JSON.stringify(relativeSong)} */}
    <SongDetailsContainer image={data.image}>
      <SongDetails>
      <SongTitle>{data.title}</SongTitle>
      <SongArtist>{data.artist}</SongArtist>
      <SongDescription>{data.body}
      </SongDescription>
      </SongDetails>
      <AudioLayout source={data.audio} />
    </SongDetailsContainer>
    {relativeSong && <Popular header={"Relative Songs"} songs={relativeSong}/>}
    {/* <Popular header={"Relative Songs"} songs={songs}/> */}
    </Body>
    
  )
 
  return (

     dataForm()
  );
};

export default DetailedSongView;
