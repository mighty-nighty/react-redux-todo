import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteTask } from '../../actions/taskActions';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewTaskForm from './NewTaskForm';
import Checkbox from '@material-ui/core/Checkbox';
// import Button from 'react-bootstrap/Button';
// import Fade from 'react-bootstrap/Fade';

class TaskList extends React.Component {
  state = {
    showAddTaskForm: false,
  }

  showAddForm = () => {
    this.setState(prevState => {
      return { showAddTaskForm: !prevState.showAddTaskForm }
    })
  }

  deleteTaskFunc = (taskId) => {
    this.props.deleteTask(taskId)
  }

  handleCheck = (taskIndex) => (event) => {
    this.props.taskStatusChanged(this.props.selectedGroupIndex, taskIndex)
  }
  
  render() {
    const {selectedGroup} = this.props
    return (
      // <Fade in={!!props.selectedGroup}>
      <Container>
        <Row>
          <Col xs={{ span: 8, offset: 2}}>
            <div style={styles.title}>{selectedGroup.name} Todos</div>
            <ListGroup>               
              {
                selectedGroup.tasks.map((task, index) => {
                  return (
                    <ListGroup.Item key={index}>
                      <div className="row align-items-center">
                        <div className="col-sm-2">
                          <Checkbox checked={task.isDone}
                              color="primary"                           
                              onChange={this.handleCheck(index)} />
                        </div>                        
                        <div className="col-sm-9" style={styles.taskName(task.isDone)}>
                          {task.name}
                        </div>
                        <div style={styles.deleteIconWrapper} className="col-sm-1">
                          <i style={styles.pointer} className="fa fa-times" 
                            onClick={() => this.deleteTaskFunc(task.id)} 
                            title="Delete task"></i>
                        </div>
                      </div>
                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup>
          </Col>
        </Row>
        <Row>
          {
            this.state.showAddTaskForm
            ? <NewTaskForm showAddForm={this.showAddForm}></NewTaskForm>
            : <button style={styles.addBtn} onClick={this.showAddForm}>Add new task</button> 
          }
        </Row>
      </Container>
      // </Fade>
    )
  }  
}

const styles = {
  // container: {
  //   display: 'flex', 
  //   flexFlow: 'row', 
  //   justifyContent: 'flex-start'
  // },

  pointer: {
    cursor: 'pointer'
  },

  title: {
    margin: '.6rem 0 1.1rem',
    fontSize: '1.6rem',
    color: '#FFF'
  },

  taskName: isDone => {
    return isDone 
      ? {textAlign: 'left', textDecoration: 'line-through'} 
      : {textAlign: 'left', textDecoration: 'none'}
  },

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
  },

  deleteIconWrapper: {
    textAlign: 'right'    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(deleteTask(id))
  }
}

const composed = compose(connect(null, mapDispatchToProps), Radium)

export default composed(TaskList);