import styled from "@emotion/styled"
import { color, space, typography } from "styled-system"
import { Input } from "../common/Input"

const  Navigation = () => {

    const Nav = styled.div`
         display: flex;
         justify-content:space-between;
         align-items:center;
                           
         ${color}
         ${space}
         ${typography}

    `

  return (
    <Nav  >
        {/* Container */}
        <h2>Logo</h2>

        <Input placeholder={`Search`} />
        
    </Nav>
  )
}

export default Navigation