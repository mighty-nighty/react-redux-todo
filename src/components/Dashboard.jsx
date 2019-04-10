import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

class Dashboard extends React.Component {

  deleteTask = (groupIndex, taskId) => {
    this.setState(prevState => {      
      prevState.groups[groupIndex].tasks = prevState.groups[groupIndex].tasks.filter(task => task.id !== taskId)
      return { groups: prevState.groups }
    })
  }

  taskStatusChanged = (groupIndex, taskIndex) => {
    this.setState(prevState => {
      let selectedGroupTasks = prevState.groups[groupIndex].tasks
      selectedGroupTasks[taskIndex].isDone = !selectedGroupTasks[taskIndex].isDone
      return { groups: prevState.groups }
    })
  }  

  render() {
    return (
      <div style={styles.dashboard}>
        <LeftSide groups={this.props.groups} />
        <RightSide groups={this.props.groups}
          selectedGroupIndex={this.props.selectedGroupIndex}          
          deleteTask={this.deleteTask}
          taskStatusChanged={this.taskStatusChanged} />
      </div>
    )
  }
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
    groups: state.groups,
    selectedGroupIndex: state.selectedGroupIndex
  }  
}

export default connect(mapStateToProps)(Dashboard);