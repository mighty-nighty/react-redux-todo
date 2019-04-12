import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

const Dashboard = props => {
  return (
    <div style={styles.dashboard}>
      <LeftSide groups={props.groups} />
      <RightSide groups={props.groups}
        selectedGroupIndex={props.selectedGroupIndex} />
    </div>
  )  
}

const styles = {
  dashboard: {
    width: '100vw',
    height: 'calc(100vh - 78px)',
    display: 'flex',
    flexDirection: 'row',
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups.allGroups,
    selectedGroupIndex: state.groups.selectedGroupIndex
  }  
}

export default connect(mapStateToProps)(Dashboard);