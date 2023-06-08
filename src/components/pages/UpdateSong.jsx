import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { space, color, layout } from "styled-system";
import { Input } from "../common/Input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

// const Input = styled.input`
//   ${space}
//   ${color}
//   ${layout}
//   padding: 12px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   margin-bottom: 16px;
//   font-size: 16px;
//   outline: none;
//   width: 100%;
// `;

const Button = styled.button`
  ${space}
  ${color}
  ${layout}
  padding: 12px 24px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 32px;
`;

const UpdatePage = () => {
  return (
    <Container>
      <Title>Update Song</Title>
      <Description>
        Fill in the details below to update the song information.
      </Description>
      <Form>
        <Input
          mb={3}
          type="text"
          p={3}
          placeholder="Song Title"
        />
        <Input
          mb={3}
          type="text"
          p={3}
          placeholder="Artist"
        />
        <Input
          mb={3}
          type="text"
          p={3}
          placeholder="Song Picture URL"
        />
        <Input
          mb={3}
          type="text"
          p={3}
          placeholder="Audio Content URL"
        />
        <Input
          mb={3}
          type="file"
        />
        <Button mt={3}>Update</Button>
      </Form>
    </Container>
  );
};

export default UpdatePage;