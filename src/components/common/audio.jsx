import styled from "@emotion/styled";
import { useRef, useState } from "react";
import {BsPauseFill as Pause} from 'react-icons/bs'
import {BsPlayFill as Play} from 'react-icons/bs'
import {VscDebugRestart as Restart} from 'react-icons/vsc'
import {MdEdit, MdDelete} from 'react-icons/md'
import { color, layout, space } from "styled-system";

const AudioContainer = styled.button`
      display:flex;
      justify-content:space-around;

      &:haver{
        border:yellow;
      }

      ${space}
      ${layout}
      ${color}

`

const AudioButton = styled.button`
     display:flex;
     justify-content:center;
     align-items:center;
     background-color:black;
     width:60px;
     padding:20px 0;
     padding:0;
     border-radius:7px;
     margin:0 5px;
     &:hover{
      border:none;
      box-shadow:0 0 5px white;
     }


   
`

const AudioLayout = () =>{


  const audioPlayRef = useRef(null);
  const [tooglePlay, setTooglePlay] = useState(true);

  const handlePlayButton = () => {
    audioPlayRef.current.play();
    setTooglePlay(!tooglePlay)
    // console.log(audioPlayRef)
  };

  const handleStopButton = () => {
    audioPlayRef.current.pause();
    setTooglePlay(!tooglePlay)
  };

  const handleRestartButton = () => {
    const audio = audioPlayRef.current;
    audio.currentTime = 0;
    audio.play();
    if(tooglePlay){
      setTooglePlay(!tooglePlay)
    }

  };




    return (
      <AudioContainer width={[1,2/3,2/3,1/3]} ml={[0,2,3]}>
    <AudioButton>
    { tooglePlay
     ?
     <Play size={40} color="#00D4FF"  onClick={tooglePlay && handlePlayButton} cursor={"pointer"} />
     :
     <Pause size={40} color="#00D4FF" onClick={!tooglePlay && handleStopButton} cursor={"pointer"}/> }

    </AudioButton>
    <AudioButton>
    <Restart size={30} color="#00D4FF" onClick={handleRestartButton}/>
    </AudioButton>

    <AudioButton >
    <MdEdit color="#00D4FF"size={30} />
    </AudioButton>

    <AudioButton>
    <MdDelete color="#DC3A3A"size={30}/>
    </AudioButton>

        <audio  ref={audioPlayRef} >
          <source src="https://firebasestorage.googleapis.com/v0/b/tune-32543.appspot.com/o/file%2Faudio%2F1684608971254_christ.mp3?alt=media&token=89c00649-a4f8-4f2b-b779-4642ed0cffb4"  />
        </audio>
      </AudioContainer>
    )
}

export default AudioLayout;