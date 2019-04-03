import React from 'react';

import GroupList from './GroupList';
import NewGroupForm from './NewGroupForm';

const LeftSide = (props) => {  
  return (
    <div style={styles.leftSide}>
      {
        props.newGroupFormVisible 
        ? <NewGroupForm addGroup={props.addGroup}
                        showNewGroupForm={props.showNewGroupForm} />
        : <GroupList groups={props.groups}
                    deleteGroup={props.deleteGroup}
                    selectGroup={props.selectGroup}
                    showNewGroupForm={props.showNewGroupForm} />
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

export default LeftSide;