import React from 'react';
import GroupList from './GroupList';
import NewGroupForm from './NewGroupForm';
import { connect } from 'react-redux';

interface ILeftSideProps {
  groups: any
  newGroupFormVisible: boolean
}

const styles = {
  leftSide: {
    width: '26%',
    height: '100%',
    backgroundColor: '#D3D3D3'
  }  
}

const LeftSide: React.FC<ILeftSideProps> = ({groups, newGroupFormVisible}) => {
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

const mapStateToProps = (state: any) => {
  return {
    newGroupFormVisible: state.layout.newGroupFormVisible
  }
}

export default connect(mapStateToProps)(LeftSide);