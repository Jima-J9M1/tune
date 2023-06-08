import styled from "@emotion/styled";
import { space, color } from "styled-system";
import { deleteSong } from "../utils/firebase/handlSubmit";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Spinner from "../common/Spinner";
import RedSpinner from "../common/RedSpinner";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 20px 40px;
  border-radius: 4px;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  ${space}
  ${color}
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  margin-right: 8px;
  background-color: #e0e0e0;
  color: #333333;
`;

const DeleteButton = styled(Button)`
  background-color: #ff0000;
  color: #ffffff;
`;

const DeleteMessageModal = ({ onCancel,id,data }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isloading, setIsloading] = useState(false)
    const [success, setSuccess] = useState(false)


    const handleDelete =  async() => {
        try{
             
            setIsloading(true)
            await deleteSong(id);
            const deletedData = { ...data };

            localStorage.setItem("deletedData", JSON.stringify(deletedData));
            navigate("/");
            dispatch(deleteSong(id));
      // Perform delete operation here
            setIsloading(false)
            setSuccess(true)
            

        }catch(err){
            console.log(err)
        }

    };

  return (

   success ? <Navigate to="/" />: <ModalContainer>
      <ModalContent>
        {isloading && <RedSpinner color="red"/>}
        <ModalTitle>Confirm Message Deletion</ModalTitle>
        <p>Are you sure you want to delete this message?</p>
        <ModalButtonsContainer>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </ModalButtonsContainer>
      </ModalContent>
    </ModalContainer>
  );
};


export default DeleteMessageModal