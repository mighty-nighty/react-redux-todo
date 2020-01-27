import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

interface INewGroupFormProps {

}

const border = 'border-radius: 4px; border: 1px solid grey;'

const FormStyled = styled.form`
  margin: 20px 0 0;
`;

const InputStyled = styled.input`
  ${border}
  padding: 2px 5px;
  width: 50%;
`;

const ButtonStyled = styled.button`
  ${border}
  height: 1.8rem;
  margin-left: 2px;
  background-color: #61dafb;
`;

const NewGroupForm: React.FC<INewGroupFormProps> = () => {  
  const [groupName, setGroupName] = useState('');
  const dispatchAction = useDispatch();
  const addGroup = (name: string) => dispatchAction({type: 'ADD_GROUP', payload: name});
  const hideNewGroupForm = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    dispatchAction({type: 'TOGGLE_GROUP_FORM_VISIBILITY'});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (groupName) {
      addGroup(groupName);
      hideNewGroupForm();
    }
  }

  const handleChange = (e: any) => {
    setGroupName(e.target.value);
  }
  
  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled type="text" placeholder="Group name" onChange={handleChange} autoFocus />
      <ButtonStyled type="submit">Save</ButtonStyled>
      <ButtonStyled onClick={hideNewGroupForm}>Cancel</ButtonStyled>
    </FormStyled>
  )  
}

export default NewGroupForm;