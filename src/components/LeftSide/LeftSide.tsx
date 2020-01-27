import React from 'react';
import GroupList from './GroupList';
import NewGroupForm from './NewGroupForm';
import { useSelector } from 'react-redux';

interface ILeftSideProps {
  groups: any
}

const styles = {
  leftSide: {
    width: '26%',
    height: '100%',
    backgroundColor: '#D3D3D3'
  }  
}

const LeftSide: React.FC<ILeftSideProps> = ({groups}) => {
  const newGroupFormVisible = useSelector((state: any) => state.layout.newGroupFormVisible);
  
  return (
    <div style={styles.leftSide}>
      {
        newGroupFormVisible 
        ? <NewGroupForm />
        : <GroupList groups={groups} />
      }     
    </div>
  ) 
}

export default LeftSide;