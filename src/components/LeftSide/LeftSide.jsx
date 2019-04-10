import React from 'react';
import GroupList from './GroupList';
import NewGroupForm from './NewGroupForm';
import { connect } from 'react-redux';

const LeftSide = (props) => {  
  return (
    <div style={styles.leftSide}>
      {
        props.newGroupFormVisible 
        ? <NewGroupForm />
        : <GroupList groups={props.groups} />
      }     
    </div>
  ) 
}
    
const styles = {
  leftSide: {
    width: '26%',
    height: '100%',
    backgroundColor: '#D3D3D3'
  }  
}

const mapStateToProps = state => {
  return {
    newGroupFormVisible: state.newGroupFormVisible
  }
}

export default connect(mapStateToProps)(LeftSide);