import styled from "@emotion/styled"

const SpinnerContainer = styled.div`
    transform: translate(-50%, -50%);
    width:.1em;
    height:.1em;
    animation:rotateAndShrink 1.2s ease-in-out infinite;
    position:relative;
    left:50%;

    @keyframes rotateAndShrink {

        45%,55% {
          width:0.1em;
          height:0.1em;
        }
        50%,100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }

`
const DotOne = styled.span`
    position:absolute;
    display:inline-block;
    width:0.4em;
    height:0.4em;
    border-radius: 50%;
    left:-0.5em;
    top:-0.5em;
    background-color:#ffffff;
`

const DotTwo = styled.span`
position:absolute;
  display:inline-block;
  width:0.4em;
  height:0.4em;
  border-radius: 50%;
  right:-0.5em;
  top:-0.5em;
  background-color:#ffffff;
`

const DotThree = styled.span`
position:absolute;
  display:inline-block;
  width:0.4em;
  height:0.4em;
  border-radius: 50%;
  left:-0.5em;
  bottom:-0.5em;
  background-color:#ffffff;
`
const DotFour = styled.span`
position:absolute;
  display:inline-block;
  width:0.4em;
  height:0.4em;
  border-radius: 50%;
   right:-0.5em;
    bottom:-0.5em;
    background-color:#ffffff;
  
`




const Spinner = ()=>{
    return(
        <SpinnerContainer>
            <DotOne class="dot"></DotOne>
            <DotTwo class="dot"></DotTwo>
            <DotThree class="dot"></DotThree>
            <DotFour class="dot"></DotFour>
        </SpinnerContainer>
    )
}

export default Spinner