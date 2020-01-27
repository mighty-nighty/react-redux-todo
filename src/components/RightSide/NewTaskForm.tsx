import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

interface INewTaskFormProps {
  toggleTaskFormVisibility: () => void
}

const border = 'border-radius: 4px; border: 1px solid grey;';  
 
const FormStyled = styled.form`
  margin: 2.4rem auto 0;
  width: 28rem;
`; 

const InputStyled = styled.input`
  ${border}
  padding: 2px 5px;
  width: 65%;
`;

const ButtonStyled = styled.button`
  ${border}
  height: 1.8rem;
  margin-left: 2px;
  background-color: #61dafb;
`;

const NewTaskForm: React.FC<INewTaskFormProps> = ({toggleTaskFormVisibility}) => {  
  const [taskName, setTaskName] = useState('');
  const dispatchAction = useDispatch();
  const addTask = (name: string) => dispatchAction({type: 'ADD_TASK', payload: name});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName) {
      addTask(taskName);
      toggleTaskFormVisibility();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggleTaskFormVisibility();
  }
  
  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled type='text' placeholder='Task name' onChange={handleChange} autoFocus />
      <ButtonStyled type='submit'>Save</ButtonStyled>
      <ButtonStyled onClick={handleCancel}>Cancel</ButtonStyled>
    </FormStyled>
  )
  
}

export default NewTaskForm;