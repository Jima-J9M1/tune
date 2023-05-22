import {  useNavigate } from "react-router-dom"
import { StyledButton } from "./Button"

const LogoutButton = () => {

    const navigate = useNavigate();

    const handleSubmit = () =>{
        localStorage.removeItem('user');
        navigate('/login')
    }


    return(
    <StyledButton onClick={handleSubmit}>
        Logout
    </StyledButton>
    )
}


export default LogoutButton