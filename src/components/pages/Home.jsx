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
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../utils/firebase/firebase";


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

  @media(min-width: 1000px){
    height:92.2vh;
  }
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
    @media (max-width: 1000px) {
      /* Mobile view styles */
      overflow: initial;
    }
    
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

const DeletedMessage = styled.div`
      color:black;
`

const Button = styled.div`
     color: black;
     background-color:white;
     padding:2px;
     border-radius:10px;
     cursor:pointer;
`
const DeleteContainer = styled.div`
    width:50%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    text-align:center;
    border:1px solid red;
    background-color:rgba(255,0,0,0.3);
    color:white;
    padding:5px;
    border-radius:10px;
    margin-top:5px;
`


function Home() {


  const songs = useSelector((state)=>state.song.songs)
  const user = useSelector((state)=>state.user)
  console.log(songs)
  const dispatch = useDispatch()
  
  const [modalOpen,setModalOpen] = useState()
  const [showDeleteMessage,setShowDeletedMessage] = useState(false)

  useEffect(()=>{
    dispatch(fetchUserList());
    dispatch(fetchSongList())
   
    const fetch = async()=>{
      const users = await fetchUser();
      console.log(users)
    }  

    fetch();



    const deletedData = localStorage.getItem("deletedData");
    if (deletedData) {
      setShowDeletedMessage(true);
      clearDeletedData(); // Remove deleted data from local storage
      setTimeout(() => {
        setShowDeletedMessage(false);
      }, 5000); // Hide message after 1 minute (60000 milliseconds)
    }

    },[dispatch])
    


    const clearDeletedData = () => {
      localStorage.removeItem("deletedData");
    };

    const openModal = ()=>{
      setModalOpen(true)
    }

    const closeModal = ()=>{
      setModalOpen(false);
      setTimeout(300)
    }

    const handleUndoDelete = () => {
      const deletedData = JSON.parse(localStorage.getItem("deletedData"));
      const collectionRef = doc(firestore, "song", deletedData.id);
      setDoc(collectionRef, deletedData)
        .then(() => {
          console.log("Data restored successfully!");
          // Perform any additional actions or show a success message
        })
        .catch((error) => {
          console.error("Error restoring data:", error);
          // Handle any errors that occur during the restoration process
        });
    
      // Clear the deletedData from local storage after undoing
      clearDeletedData();
      clearDeletedData();
    };


  

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
      // height={["100vh","100vh","100vh","92.2vh"]}
      
      >
      <LeftSide order={[3,2,2,1]} songs={songs}
      />
      <StyledContainer order={[2,2,2,2]}>
        {showDeleteMessage &&
        <DeleteContainer>
        <DeletedMessage className="bg-red-300 text-red p-3">A song has been deleted.{" "}
        </DeletedMessage>
        <Button onClick={() => handleUndoDelete()}>Undo</Button>

        </DeleteContainer>
        }
        

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