import styled from "@emotion/styled"
import {  color, flex, grid, layout, order, space, typography } from "styled-system"
import Popular from "../layout/PopularSong"
import { useEffect, useState } from "react";
import {fetchUser} from "../utils/firebase/handlSubmit";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongList } from "../redux/slices/songSlice";
import LogoutButton from "../common/LoginButton"
import LeftSide from "../layout/LeftSide"
import RightSide from "../layout/RightSide"
import { fetchUserList } from "../redux/slices/userSlice"
import ModalForm from "../layout/ModalForm"
import { Input } from "../common/Input"
import {GiMusicSpell} from "react-icons/gi"


const BodyContainer = styled.div`
     width:100vw;
     background-color:white;
     height:100vh;
`


const Body = styled.div`
  background-color:#F9F9F9;
  color:black;
  // height:92.2vh;
  width:100vw;
  margin:0;
  padding:0;
  // overflow:scroll;
      ${color}
      ${space}
      ${layout}
      ${flex}
      ${typography}
      ${grid}
`


const StyledContainer = styled.div`
    
    // background-color:#FCF6F6;
    color: black;
    overflow:scroll;
    scrollbar-width: none;
    // border:1px solid red;
    // margin-right:30px;
    // margin-left:30px;
    // border:1px solid red;
    // transform: scale(0.96);
    ${order}
    ${color}
    ${space}
    ${layout}
    ${flex}
    ${typography}
    ${grid}


`

const NavLayout = styled.div`
      position:sticky;
      display:flex;
      justify-content:space-between;
      padding:0px 10px ;
      background-color:green;
      align-items:center;
      // margin:auto;
`


const SearchAndButton = styled.div`
     width:25%;
     display:flex;
     justify-content:space-around;
     align-items:center;
     margin:5px;

     ${color}
     ${layout}
     ${space}
`


function Home() {


  const songs = useSelector((state)=>state.song.songs)
  const user = useSelector((state)=>state.user)
  console.log(songs)
  const dispatch = useDispatch()
  
  const [modalOpen,setModalOpen] = useState()

  useEffect(()=>{
    dispatch(fetchUserList());
    dispatch(fetchSongList())
   
    const fetch = async()=>{
      const users = await fetchUser();
      console.log(users)
    }  

    fetch();
    },[dispatch])
    

    const openModal = ()=>{
      setModalOpen(true)
    }

    const closeModal = ()=>{
      setModalOpen(false);
      setTimeout(300)
    }



  

  const landPageLayout = () => (
 
   songs && <BodyContainer
   >
        <NavLayout>
        <GiMusicSpell size={30} color="white" />
        <SearchAndButton width={[1,1/2,1/3,1/4]}>
        <Input  bg="white"  placeholder="search" color="black" px={12}  py={8.1} fontSize={14} width={[3/4,1/2,1,1]}/>
        <LogoutButton  />
        </SearchAndButton>
        </NavLayout >
        
      <Body modalOpen
      display="grid"
      placeItem="center"
      placeText="center"
      gridTemplateColumns={["1fr", "auto 2fr","auto 2fr","auto 2fr auto"]}
      height={["100vh","100vh","100vh","92.2vh"]}
      
      >
      <LeftSide order={[3,2,2,1]} songs={songs}
      />
      <StyledContainer order={[2,2,2,2]}>
        
        

        <ModalForm modalOpen={modalOpen} closeModal={closeModal}/>  
        <Popular header="Popular" songs={songs}/>
      <Popular header="Latest" songs={songs}/>
      </StyledContainer>
      <RightSide openModal={openModal} order={[1,1,1,3]} songs={songs}/>

      </Body>
    </BodyContainer>
  )



  return (
       landPageLayout()
  )
}

export default Home