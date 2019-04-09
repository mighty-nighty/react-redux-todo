import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Dashboard extends React.Component {
  state = {
    newGroupFormVisible: false,
    selectedGroupIndex: null,
    // groups: [
    //   {
    //     id: 1,
    //     name: 'Home',
    //     tasks: [
    //       { id: 1, name: 'Brush teeth', isDone: false },
    //       { id: 2, name: 'Drink vodka', isDone: false },
    //       { id: 3, name: 'Kill the mouse!', isDone: false }
    //     ]
    //   },
    //   {
    //     id: 2,
    //     name: 'Work',
    //     tasks: [
    //       { id: 1, name: 'Get to work', isDone: false },
    //       { id: 2, name: 'Make some tasks', isDone: false },
    //       { id: 3, name: 'Kill medfarm', isDone: false }
    //     ]
    //   },
    //   {
    //     id: 3,
    //     name: 'Education',
    //     tasks: [
    //       { id: 1, name: 'Learn hindy', isDone: false },
    //       { id: 2, name: 'Learn trololo', isDone: false },
    //     ]
    //   }
    // ]
  }

  addGroup = (groupName) => {
    this.setState(prevState => {
      let group = { id: prevState.groups.length + 1, name: groupName, tasks: [] }
      return { groups: [...prevState.groups, group] }
    })
  }

  deleteGroup = (index) => {
    this.setState(prevState => {
      let updatedGroups = prevState.groups.filter((group, i) => i !== index) // переделал на удаление по индексу
      return { groups: updatedGroups, selectedGroupIndex: null }
    })
  }

  selectGroup = (index) => {
    this.setState({ selectedGroupIndex: index })
  }

  addTask = (group, groupIndex, taskName) => {
    this.setState(prevState => {
      let newTask = { id: (group.tasks.length + 1), name: taskName, isDone: false }
      prevState.groups[groupIndex].tasks.push(newTask)
      return { groups: prevState.groups }
    })
  }

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

  showNewGroupForm = () => {
    if (!this.state.newGroupFormVisible) {
      this.setState({ newGroupFormVisible: true })
    } else {
      this.setState({ newGroupFormVisible: false })
    }
  }

  render() {
    return (
      <div style={styles.dashboard}>
        <LeftSide groups={this.props.groups}
          deleteGroup={this.deleteGroup}
          showNewGroupForm={this.showNewGroupForm}
          newGroupFormVisible={this.state.newGroupFormVisible}
          addGroup={this.addGroup}
          selectGroup={this.selectGroup} />
        <RightSide groups={this.state.groups}
          selectedGroupIndex={this.state.selectedGroupIndex}
          addTask={this.addTask}
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

const mapStateToProps = (state => {
  return {
    groups: state.groups
  }  
})

export default connect(mapStateToProps)(Dashboard);