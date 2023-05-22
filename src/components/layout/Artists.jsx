import styled from "@emotion/styled"
import { Title } from "../common/Title"
import { color, layout, space, typography } from "styled-system"

const ArtistLayout = styled.div`
    //   width:100%;
      display: flex;
      justify-content:space-around;
      items-align: center;
      border:solid 1px black;
      margin:auto;
    //   transform: scale(0.7);
      ${color}
      ${typography}
      ${space}
      ${layout}


`

// const ArtistIcon = styled.div`
   



const ArtisitImage = styled.img`
    //   width: 150px;
    //   height: 150px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: -0.65px 0 6px gray;
      // margin-left:40px;
      ${color}
      ${typography}
      ${space}
      ${layout}

`
const ArtisitName = styled.h2`
     color: #424242;
    //  width:100%;
     font-weight:bold;
     opacity:0.6;
     font-size:20px;
     text-align:center;
    //  border:1px solid black;
    //  width:100px;

     ${color}
     ${typography}
     ${space}
     ${layout}
     
`


const ArtistDescription = styled.div`
      // width :80px;
      display: flex block;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    //   box-shadow: 0 0 4px red;
    margin-left:40px;


    ${color}
    ${space}
    ${layout}


`
const Artist = () => {

    return (
        <>
        <Title  color="#424242">
            Artists
        </Title>


        <ArtistLayout mt={1} p={1} width={[1/4,3/4, 1]}>
            <ArtistDescription width={[1/4,3/4, 1]}>
            <ArtisitImage src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg" width={[1/7,1/7,1/7,1/7]}/>
            <ArtisitName width={[1/4,3/4, 1/5]}>Burno Mars</ArtisitName>
            </ArtistDescription>

            <ArtistDescription >
            <ArtisitImage src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"/>
            <ArtisitName>Burno Mars</ArtisitName>
            </ArtistDescription>

            <ArtistDescription >
            <ArtisitImage src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"/>
            <ArtisitName>Burno Mars</ArtisitName>
            </ArtistDescription>

            <ArtistDescription >
            <ArtisitImage src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"/>
            <ArtisitName>Burno Mars</ArtisitName>
            </ArtistDescription>

            <ArtistDescription >
            <ArtisitImage src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"/>
            <ArtisitName>Burno Mars</ArtisitName>
            </ArtistDescription>

            <ArtistDescription >
            <ArtisitImage src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"/>
            <ArtisitName>Burno Mars</ArtisitName>
            </ArtistDescription>

            <ArtistDescription >
            <ArtisitImage src="https://c4.wallpaperflare.com/wallpaper/218/930/510/bruno-mars-musician-singer-wallpaper-preview.jpg"/>
            <ArtisitName>Burno Mars</ArtisitName>
            </ArtistDescription>

           
            
            
        </ArtistLayout>
        </>
    )
   
}
export default Artist