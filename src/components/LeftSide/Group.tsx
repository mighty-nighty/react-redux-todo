import * as React from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";

interface IGroupProps {
  group: any
  groupIndex: number                           
  deleteGroup: any
  showDeleteModal: any
  selectGroup?: any // откуда эта хрень??
}

const GroupBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  cursor: pointer;
`;  

const GroupName = styled.div`
  width: 90%;
  padding: 10px;
  text-align: left;
`;

const deleteIcon = {
  width: '10%',
  padding: '10px',
}

const Group: React.FC<IGroupProps> = ({group, groupIndex, showDeleteModal}) => {
  const dispatchAction = useDispatch();
  
  const handleClick = () => {
    dispatchAction({type: 'SELECT_GROUP', payload: groupIndex});
  }  

  return (
    <GroupBlock>
      <GroupName onClick={handleClick}>{group.name}</GroupName>
      <i style={deleteIcon} className="fa fa-times" onClick={() => showDeleteModal(groupIndex)} title="Delete group"></i>
    </GroupBlock>
  )
}

export default Group;