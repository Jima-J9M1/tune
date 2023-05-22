import styled from "@emotion/styled"
import { Title } from "../common/Title"
import { Input } from "../common/Input"
import { StyledButton } from "../common/Button"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import {   isAuthenticated, singin } from "../utils/firebase/handlSubmit"
// import { getAuth, onAuthStateChanged } from "firebase/auth"


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
      height:300px;

`

const RememberContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px;
    // border:1px solid black;
    margin-right:22px;
    
`

const ErrorLayout = styled.div`
    width:75%;
    margin:auto;
    border:1px solid red;
    color:red;
`

const RememberLayout = styled.div`
     display:flex;
    //  justify-content:sp;
    //  border:1px solid red;
 `
const Login = ()=>{
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async ()=>{
        const error = await singin(email,password);
        if(error){
            setError(error)
        }else{
            navigate("/")
        }
    }




const errorShow = () =>(

        error ? <ErrorLayout>{JSON.stringify(error)}</ErrorLayout>:""
)

const singinForm = () =>(
    <Body>
            <Container>
                <LoginContainer>
                    <Title fontSize={25} p={25}>Sing into your account</Title>
                    <FormContainer>
                        {errorShow()}
                        <Title fontSize={12} afterContent="*" cl="red">Email</Title>

                        <Input p={9} bg="white" fontSize={20} width={5/6} 
                        type="email" border="1px solid rgba(0,0,0,0.2)"
                        color="black"
                        onChange={(e)=>setEmail(e.target.value)}
                        />

                        <Title fontSize={12} afterContent="*" cl="red">Password</Title>

                        <Input p={9} bg="white" fontSize={20} width={5/6} 
                        type="password" border="1px solid rgba(0,0,0,0.2)"
                        color="black"
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        <RememberContainer>
                            <RememberLayout>
                           <Input type="checkbox"width={6/7} bg="white" border="1px solid #ccc" p={3}/>
                           <Title fontSize={12}  width={1/3}  fontWeight="normal">Remember_me</Title>
                            </RememberLayout>
                            <Title fontSize={12} >Forgot password?</Title>
                        </RememberContainer>
                        <StyledButton width={1/2} m="auto" onClick={handleSubmit}>
                            SignIn
                        </StyledButton>

                        <Title fontSize={14} m="auto" color="blue"><Link to={'/singup'}> Create account</Link></Title>
                    </FormContainer>
                </LoginContainer>
            </Container>
        </Body>
)


     return(
        isAuthenticated() ? <Navigate to="/" replace/> : singinForm()
     )

}

export default Login;