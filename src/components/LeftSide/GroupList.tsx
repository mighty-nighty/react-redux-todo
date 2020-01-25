import React, { useState } from 'react';
import { connect } from 'react-redux';
import Group from './Group';
import MyModal from './MyModal';
import { deleteGroup } from '../../actions/groupActions';
import { toggleNewGroupFormVisibility } from '../../actions/layoutActions';
import styled, { css } from 'styled-components';

interface IGroupListProps {
  deleteGroup: any
  groups: any
  showNewGroupForm: any
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

const GroupList: React.FC<IGroupListProps> = ({deleteGroup, groups, showNewGroupForm}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(null); 

  const showDeleteModal = (groupIndex: any): void => {
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
                  deleteGroup={deleteGroup}
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteGroup: (index: any) => dispatch(deleteGroup(index)),
    showNewGroupForm: () => dispatch(toggleNewGroupFormVisibility())
  }
}

export default connect(null, mapDispatchToProps)(GroupList);