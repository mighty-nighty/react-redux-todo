import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

interface IDashboardProps {
  groups: any
  selectedGroupIndex: number
}

const styles = {
  dashboard: {
    width: '100vw',
    height: 'calc(100vh - 78px)',
    display: 'flex',
    // flexDirection: 'row',
  }
}

const Dashboard: React.FC<IDashboardProps> = ({groups, selectedGroupIndex}) => {
  return (
    <div style={styles.dashboard}>
      <LeftSide groups={groups} />
      <RightSide groups={groups}
        selectedGroupIndex={selectedGroupIndex} />      
    </div>
  )  
}

const mapStateToProps = (state: any) => {
  return {
    groups: state.groups.allGroups,
    selectedGroupIndex: state.groups.selectedGroupIndex
  }  
}

export default connect(mapStateToProps)(Dashboard);