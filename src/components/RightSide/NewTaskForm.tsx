import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/groupActions';
import styled from 'styled-components';

interface INewTaskFormProps {
  addTask: any
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

const NewTaskForm: React.FC<INewTaskFormProps> = ({addTask, toggleTaskFormVisibility}) => {  
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTask(taskName);
    toggleTaskFormVisibility();
  }

  const handleChange = (e: any) => {
    setTaskName(e.target.value);
  }

  const handleCancel = (e: any) => {
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTask: (name: any) => dispatch(addTask(name))
  }
}

export default connect(null, mapDispatchToProps)(NewTaskForm);