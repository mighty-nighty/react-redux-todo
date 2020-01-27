import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import { useSelector } from 'react-redux';
// import { withRouter } from 'react-router-dom';

interface IDashboardProps {

}

const styles = {
  dashboard: {
    width: '100vw',
    height: 'calc(100vh - 78px)',
    display: 'flex',
    // flexDirection: 'row',
  }
}

const Dashboard: React.FC<IDashboardProps> = () => {
  const groups = useSelector((state: any) => state.groups.allGroups);
  const selectedGroupIndex = useSelector((state: any) => state.groups.selectedGroupIndex);

  return (
    <div style={styles.dashboard}>
      <LeftSide groups={groups} />
      <RightSide groups={groups}
        selectedGroupIndex={selectedGroupIndex} />     
    </div>
  )  
}

export default Dashboard;