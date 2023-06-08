import styled from "@emotion/styled";
import { StyledButton } from "../common/Button";
import { Input } from "../common/Input";
import { Title } from "../common/Title";
import Modal from "./Modal";
import { grid } from "styled-system";
import { handleSubmit, update } from "../utils/firebase/handlSubmit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong, fetchSongList } from "../redux/slices/songSlice";
import {GrClose} from 'react-icons/gr'

const FormStyle = styled.div`
    display:flex;
    flex-direction: column;
    padding:10px;
    ${grid}
`   

const HeaderStyle = styled.div`
      display:flex;
      justify-content:space-between;

`

const ErrorShow = styled.span`
    color:red;
    font-size:12px;
    margin-top:5px;
`


const UpdateModalForm = ({modalOpen, closeModal}) =>{
    const user = localStorage.getItem("user");  
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState({
        name:"",
        title:"",
        artist:"",
        body:"",
        image:"",
        audio:"",
      })

    const [error, setError] = useState({
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
    
      
      const handleChange = name => event => {
        console.log(name, event.target.value)
          if(event.target.value === ""){
            setError({...error, [name]:event.target.value})
          }else{
            if(name === "body"){
              const des = event.target.value.split(" ")
              if(des.length < 10){
                setError({...error, [name]:"Please enter a body with more than 10 words"})
              }else{
                setError({...error, [name]:""})
                setData({...data, [name]:event.target.value})
              }
            }else{
              setError({...error, [name]:""})
              setData({...data, [name]:event.target.value})
            }
          }
    
      }
    
      //  Submit the input data
      const handle_submit = async () => {
        console.log(data)
        update(data);
        // try{
        //     setLoading(true)
        //   await update()
        //     setLoading(false)
        // }catch(error){
        //     console.log(error)
        // }
    }
    









      const handleFile = name => event => {
        const file_value = event.target.files[0]

        if(!file_value){
          setError("Please select a file")
        }else{
          if(name === "audio"){
            console.log(file_value.type)
              if(file_value.type === "audio/mpeg" || file_value.type === "audio/mp3" || file_value.type === "audio/ogg"){
                const max_size_limit = (1024 * 1024) * 10
    
                if(file_value.size > max_size_limit){
                    setError({...error, [name]:`File size exceeds the maximum limit of ${max_size_limit/(1024 * 1024)}MB for ${file_value.name}`})
                }else{
                  setError({...error, [name]:""})
                  setFile({...file, [name]:event.target.files[0]})
                }
              }else{
                // setError({...error, [name]:""})
                setError({...error,[name]:"Please select a valid audio type file (mp3, mpeg, ogg)"})
                
              }


        }else{

          if(name === "image"){
            console.log(typeof file_value.type)
            if(file_value.type === "image/jpeg" || file_value.type === "image/jpg" || file_value.type === "image/png"){ 
              const max_size_limit = (1024 * 1024) * 3
     
                 if(file_value.size > max_size_limit){
                   setError({...error,[name]:`File size exceeds the maximum limit of ${max_size_limit}MB for ${file_value.name}`})
               }else{
                 setError({...error, [name]:""})
                 setFile({...file, [name]:event.target.files[0]})
               }
            }
              

            }else{
              setError({...error,[name]:"Please select a valid type file (jpeg, jpg, png)"})
             }




        }
        console.log(name, event.target.files[0])
        setFile({...file, [name]:event.target.files[0]})
      }
    }
    


    
   return ( 
   <Modal isOpen={modalOpen} isClosed={closeModal}>
      <FormStyle>
      <HeaderStyle>
      <Title fontSize={20}>
        Update Song
      </Title>
            <GrClose color="#fff" size={20} onClick={closeModal} cursor="pointer"/>
       
      </HeaderStyle>
      <Title fontSize={15} fontWeight={300} >Name</Title>
      <Input onChange={handleChange('name')} p={12} bg="white" fontSize={15} placeholder="@name" color="black" width={3/4} required/>
      {error.name && <ErrorShow color="red" fontSize={15}>{error.name}</ErrorShow>}
      
      <Title fontSize={15} fontWeight={300}>Title</Title>
      <Input p={12} bg="white" fontSize={15} placeholder="@Title_of_the_song" color="black" width={3/4} onChange={handleChange('title')} required/>
      {error.title && <ErrorShow color="red" fontSize={15}>{error.title}</ErrorShow>}
      
      <Title fontSize={15} fontWeight={300}>Artist</Title>
      <Input p={12} bg="white" fontSize={15} placeholder="@Artist_Name" color="black" width={3/4} onChange={handleChange('artist')} required/>
      {error.artist && <ErrorShow color="red" fontSize={15}>{error.artist}</ErrorShow>}
      
      <Title fontSize={15} fontWeight={300}>Description</Title>
      <Input p={12} bg="white" fontSize={15} placeholder="@Song_Description" color="black" width={3/4} onChange={handleChange('body')} required/>
      {error.body && <ErrorShow color="red" fontSize={15}>{error.body}</ErrorShow>}
      
      <Title fontSize={15} fontWeight={300}>Song Posture</Title>
      <Input type="file"  fontSize={15} onChange={handleFile("image")} required/>
      {error.image && <ErrorShow color="red" fontSize={15}>{error.image}</ErrorShow>}
       
      <Title fontSize={15} fontWeight={300}>Audio Sound</Title>
      <Input type="file"  fontSize={15} onChange={handleFile("audio")} required placeholder="Auido"/>
      {error.audio && <ErrorShow color="red" fontSize={15}>{error.audio}</ErrorShow>}
    
      <StyledButton onClick={handle_submit} width={1/2} m="auto">{ loading ? "updating...":"Save"}</StyledButton>

      </FormStyle>

    </Modal> 

   )
}


export default UpdateModalForm