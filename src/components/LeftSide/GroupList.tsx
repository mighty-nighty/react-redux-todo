import React, { useState } from 'react';
import Group from './Group';
import MyModal from './MyModal';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

interface IGroupListProps {
  groups: any
}

const Title = styled.div`
  margin: .6rem 0 .4rem;
  font-size: 1.6rem;
`;

const AddGroupBtn = styled.button`
  margin: .5rem 0 0 1rem;
  padding: 3px 10px;
  background-color: #61dafb;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.6);
  outline: none;
  
  :active {
    margin: .6rem 0 0 1rem;
  }
`; 

const FlexBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Modal = css`
  width: 480px;
`;

const GroupList: React.FC<IGroupListProps> = ({groups}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState<number | null>(null);
  const dispatchAction = useDispatch();
  const deleteGroup = (index: number | null) => dispatchAction({type: 'DELETE_GROUP', payload: index});
  const showNewGroupForm = () => dispatchAction({type: 'TOGGLE_GROUP_FORM_VISIBILITY'}); 

  const showDeleteModal = (groupIndex: number): void => {
    setModalOpen(true);
    setSelectedGroupIndex(groupIndex);
  }

  const deleteFunc = (): void => {
    deleteGroup(selectedGroupIndex);
    closeModal();
  }

  const closeModal = (): void => {
    setModalOpen(false);
  }
  
  const groupsMapping = groups.map((group: any, index: any) => {
    return <Group group={group} 
                  key={index}
                  groupIndex={index}                            
                  showDeleteModal={showDeleteModal} />
  })
  
  return (
    <>
      <div>
        <FlexBlock>
          <Title>Groups</Title>
          <AddGroupBtn onClick={showNewGroupForm}>Add group</AddGroupBtn>
        </FlexBlock>            
        { groupsMapping }
      </div> 
      <MyModal
        isModalOpen={isModalOpen}
        styles={Modal}     
        closeModal={closeModal}
        deleteFunc={deleteFunc} 
      />       
    </>
  ) 
}

export default GroupList;