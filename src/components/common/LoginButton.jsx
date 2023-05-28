import {  useNavigate } from "react-router-dom"
import { StyledButton } from "./Button"

const LogoutButton = () => {

    const navigate = useNavigate();

    const handleSubmit = () =>{
        localStorage.removeItem('user');
        navigate('/login')
    }


    return(
    <StyledButton
     onClick={handleSubmit}
      bg="white"
      border="1px solid green"
      p={9}
      color="black"
      fontWeight="normal"
      fontSize={1}  
      borderRadius={14}
        >
        Logout
    </StyledButton>
    )
}


export default LogoutButton