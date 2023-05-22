import styled from "@emotion/styled"
import { color, flex, grid, layout, space, typography } from "styled-system"
import { Title } from "../common/Title"
import { Link } from "react-router-dom"
export const image = "https://firebasestorage.googleapis.com/v0/b/tune-32543.appspot.com/o/file%2Fpexels-tima-miroshnichenko-6670756.jpg?alt=media&token=6c68a7ae-22a7-4d3b-8273-d5bebac0d755";

const PopularSong = styled.div`
      display:flex;
      justify-content: space-between;
      items-align:center;
      margin-left:auto;
      margin-right:auto;
      transform: scale(0.95);
    //   border:1px solid black;
      ${color}
      ${space}
      ${layout}
      ${flex}
      ${typography}
      ${grid}

`

export const SongCard = styled.div`
    display: flex;
    flex-direction: column;
    // background-color:#fffff;
    border-radius:20px;
    box-shadow: 0 2px 4px rgb(0,0,0,0.1);
    overflow: hidden;
    margin-left:15px;
    gap:20px;


    &:hover{
    box-shadow: 0 4px 8px rgb(0, 0, 0, 0.2);
    cursor:pointer;
    }

    ${color}
      ${space}
      ${layout}
      ${flex}
      ${typography}
      ${grid}

`

export const SongImage = styled.img`
      width: 100%;
      object-fit:cover;
      object-position:50% -50%;
      height:400px;
      border-radius:0px 0px 30px 30px;
      box-shadow:0 2px 12px black;
      ${layout}
      ${color}
      ${space}
`


export const SongTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  opacity:0.8;
  ${layout}
  ${color}
  ${space}
`;

export const SongArtist = styled.p`
  font-size: 16px;
  margin:0 0 20px 0;
  font-weight:bold;
  opacity:0.6;
  ${layout}
  ${color}
  ${space}
`;



const Popular = ({header}) => {
    return(
        <>
        <Title>
            {header}
        </Title>
        
        <PopularSong
            p={4}
            // bg="lightgray"
            color="black"
            display="grid"
            placeItems="center"
            textAlign="center"
            fontFamily="sans-serif"
            gridTemplateColumns={['1fr', '1fr 1fr','1fr 1fr','1fr 1fr  1fr']}
            gridGap={2}
        >
            <Link to="/song/1">
            <SongCard
            
            
            width={[1,3/4,3/4,6/7]}
            >
            <SongImage
             src={image}
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


           <Link to="/song/1">
            <SongCard
            
            
            width={[1,3/4,3/4,6/7]}
            >
            <SongImage
             src={image}
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



           <Link to="/song/1">
            <SongCard
            
            
            width={[1,3/4,3/4,6/7]}
            >
            <SongImage
             src={image}
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

        </PopularSong>
        </>
    )  

}

export default Popular