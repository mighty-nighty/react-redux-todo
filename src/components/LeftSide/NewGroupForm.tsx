import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addGroup } from '../../actions/groupActions';
import { toggleNewGroupFormVisibility } from '../../actions/layoutActions';
import styled from 'styled-components';

interface INewGroupFormProps {
  addGroup: any
  hideNewGroupForm: any
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

const NewGroupForm: React.FC<INewGroupFormProps> = ({addGroup, hideNewGroupForm}) => {  
  const [groupName, setGroupName] = useState('');

  const handleSubmit = (e: any) => {
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    addGroup: (name: any) => dispatch(addGroup(name)),
    hideNewGroupForm: (e: any) => {
      if (e) {
        e.preventDefault();
      }
      dispatch(toggleNewGroupFormVisibility());
    }
  }
}

export default connect(null, mapDispatchToProps)(NewGroupForm);