import React from 'react';
import NewTaskForm from './NewTaskForm';
import Radium from 'radium';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleNewTaskFormVisibility } from '../../actions/layoutActions';

const TaskListButtonBlock = props => {
  return (    
    <>
      {
        props.showNewTaskForm
        ? <NewTaskForm toggleTaskFormVisibility={props.toggleTaskFormVisibility}></NewTaskForm>
        : <button style={styles.addBtn} onClick={props.toggleTaskFormVisibility}>
            Add new task
          </button>
      }        
    </>    
  )
}

const styles = {
  addBtn: {
    margin: '2rem auto',
    padding: '5px 10px',
    backgroundColor: '#61dafb',
    border: '1px solid grey',
    borderRadius: '5px',
    boxShadow: '2px 2px 4px rgba(80, 80, 80, 1)',
    color: 'black',
    outline: 'none',
    ':active': {
      margin: '2.2rem auto'
    }
  }
}

const mapStateToProps = state => {
  return {
    showNewTaskForm: state.layout.showNewTaskForm
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    toggleTaskFormVisibility: () => dispatch(toggleNewTaskFormVisibility())
  }
}

const composed = compose(connect(mapStateToProps, mapDispatchToProps), Radium)

export default composed(TaskListButtonBlock);