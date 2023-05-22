import styled from "@emotion/styled"
import { Title } from "../common/Title"
import { Input } from "../common/Input"
import { StyledButton } from "../common/Button"
import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { isAuthenticated, signup } from "../utils/firebase/handlSubmit" 


const Body = styled.div`
    background-color:#FCF6F6;
    color:black;
    height:100vh;
    width:100vw;
`

const Container = styled.div`
    height:100%;
    display:flex;
    justify-content: center;
    // align-items: center;
`
const LoginContainer = styled.div`
     width:400px;
     padding:10px;
`
const FormContainer = styled.div`
      margin:2px;
      padding:2px;
      border:1px solid rgba(0,0,0,0.2);
      border-radius:10px;
      display:flex;
      flex-direction:column;
      justify-content:center;
    //   align-items:center;
      padding:20px 0 20px 20px;
      height:400px;

`




const Singup = ()=>{ 

const [user, setUser] = useState({
    fname: "",
    lname:"",
    email:"",
    password:"",
})




const handleChange = name =>event => {
    setUser({
        ...user, [name]:event.target.value
    })
}

const handleSubmit = ()=>{
    signup(user)
}

const signForm = () => (
    <Body>
    <Container>
        <LoginContainer>
            <Title fontSize={25} p={25}>Create you Account</Title>
            <FormContainer>
                <Title fontSize={12} afterContent="*" cl="red">First Name</Title>
                <Input 
                p={9} bg="white" fontSize={16} width={5/6} 
                type="text" border="1px solid rgba(0,0,0,0.2)"
                onChange={handleChange("fname")}
                color="black"
                />


                <Title fontSize={12} afterContent="*" cl="red">Last Name</Title>
                <Input p={9} bg="white" fontSize={16} width={5/6} type="text" 
                border="1px solid rgba(0,0,0,0.2)"
                onChange={handleChange("lname")}
                color="black"
                />

                <Title fontSize={12} afterContent="*" cl="red">Email</Title>
                <Input p={9} bg="white" fontSize={16} width={5/6} type="email" 
                border="1px solid rgba(0,0,0,0.2)"
                onChange={handleChange("email")}
                color="black"
                />
                <Title fontSize={12} afterContent="*" cl="red">Password</Title>
                <Input p={9} bg="white" fontSize={16} width={5/6} type="password"
                 border="1px solid rgba(0,0,0,0.2)" 
                 onChange={handleChange("password")}
                 color="black"
                 />
                
                <StyledButton width={1/2} m="auto" onClick={handleSubmit}>
                    SignUp
                </StyledButton>
                <Title fontSize={12} m="auto">Do you have an account? <Link to={'/login'}> Singin</Link></Title>
            </FormContainer>
        </LoginContainer>
    </Container>
</Body>
)

     return(
         isAuthenticated()? <Navigate to="/"/>: signForm()
     )

     
}

export default Singup;