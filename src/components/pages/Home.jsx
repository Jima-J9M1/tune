import styled from "@emotion/styled"
import Navigation from "../layout/Navigation"
import {  color, flex, grid, layout, space, typography } from "styled-system"
import Popular from "../layout/PopularSong"
import { StyledButton } from "../common/Button"
import { useEffect, useState } from "react";
import Modal from "../layout/Modal";
import { Input } from "../common/Input";
import { Title } from "../common/Title";
import {handleSubmit} from "../utils/firebase/handlSubmit";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../redux/slices/songSlice";
import LogoutButton from "../common/LoginButton"
import LeftSide from "../layout/LeftSide"
import RightSide from "../layout/RightSide"
import { fetchUserList } from "../redux/slices/userSlice"

const Body = styled.div`
  background-color:#F9F9F9;
  color:black;
  height:100vh;
  width:100vw;
  margin:0;
  padding:0;
  // border:3px solid yellow;
  overflow: ${props => props.modalOpen? 'scroll': ''};
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
    // border:1px solid red;
    // margin-right:30px;
    // margin-left:30px;
    // border:1px solid red;
    // transform: scale(0.96);
    ${color}
    ${space}
    ${layout}
    ${flex}
    ${typography}
    ${grid}


`



const FormStyle = styled.div`
    display:flex;
    flex-direction: column;
    padding:10px;
    ${grid}
   

`


function Home() {


  // const songs = useSelector((state)=>state.song.songs)
  const user = useSelector((state)=>state.user.user)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchUserList());
    },[dispatch])


  const [data, setData] = useState({
    name:"",
    title:"",
    artist:"",
    body:"",
    image:"",
    audio:"",
  })

  const [file, setFile] = useState({
    audio:"",
    image:"",
  });
  // const [percent, setPercent] = useState(0)

  const [modalOpen, setModalOpen] = useState(false)
  
  const handleChange = name => event => {

      setData({...data, [name]:event.target.value})

  }

  //  Submit the input data
  const handle_submit = async () => {
    
      const url = await handleSubmit(data, file.image,file.audio)
      setData({
        ...data,
        image:url[0],
        audio:url[1]
      })

      dispatch(addSong({...data,image:url[0],audio:url[1]}));
    // console.log(file, percent)
  }

  const handleFile = name => event => {
    setFile({...file, [name]:event.target.files[0]})
  }


  



  const openModal = ()=>{
    setModalOpen(true)
  }

  const closeModal = ()=>{
    setModalOpen(false);
    setTimeout(300)
  }



  const landPageLayout = () => (
    <Body modalOpen
    display="grid"
    placeItem="center"
    placeText="center"
    gridTemplateColumns={["1fr", "auto 2fr auto"]}
    // gridGap={2}
    
    >
    <LeftSide /> 
    {/* <Empty />    */}
    <StyledContainer

    >
      <LogoutButton  />
      <Navigation /> 
      <StyledButton onClick={openModal}>
        Modal open
      </StyledButton>
      {JSON.stringify(user)}
      <Modal isOpen={modalOpen} isClosed={closeModal}>
        <FormStyle>
        <Title fontSize={20}>
          Add Song
        </Title>

        <Title fontSize={20} fontWeight={300} >Name</Title>
        <Input onChange={handleChange('name')} p={12} bg="white" fontSize={20} placeholder="@name" color="black" width={3/4}/>

        <Title fontSize={20} fontWeight={300}>Title</Title>
        <Input p={12} bg="white" fontSize={20} placeholder="@Title_of_the_song" color="black" width={3/4} onChange={handleChange('title')}/>

        <Title fontSize={20} fontWeight={300}>Artist</Title>
        <Input p={12} bg="white" fontSize={20} placeholder="@Artist_Name" color="black" width={3/4} onChange={handleChange('artist')}/>

        
        <Title fontSize={20} fontWeight={300}>Description</Title>
        <Input p={12} bg="white" fontSize={20} placeholder="@Song_Description" color="black" width={3/4} onChange={handleChange('body')}/>

        <Title fontSize={20} fontWeight={300}>Song Posture</Title>
        <Input type="file"  fontSize={20} onChange={handleFile("image")}/>

        <Title fontSize={20} fontWeight={300}>Audio Sound</Title>
        <Input type="file"  fontSize={20} onChange={handleFile("audio")}/>

        <StyledButton onClick={handle_submit} width={1/2} m="auto">Save</StyledButton>

        </FormStyle>

      </Modal>      
        {/* <Artist /> */}
        
      {/* Popular songs */}
      <Popular header="Popular"/>
      {/* Latest Songs */}
     <Popular header="Latest"/>
    </StyledContainer>
    {/* <Empty />    */}
    <RightSide/>

    </Body>
  )



  return (
       landPageLayout()
  )
}

export default Home