import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteTask, changeTaskStatus } from '../../actions/groupActions';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkbox from '@material-ui/core/Checkbox';
import TaskListButtonBlock from './TaskListButtonBlock';
// import Button from 'react-bootstrap/Button';
// import Fade from 'react-bootstrap/Fade';

class TaskList extends React.Component {    
  render() {
    const {selectedGroup, showNewTaskForm} = this.props
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
                              onChange={() => this.props.changeTaskStatus(index)} />
                        </div>                        
                        <div className="col-sm-9" style={styles.taskName(task.isDone)}>
                          {task.name}
                        </div>
                        <div style={styles.deleteIconWrapper} className="col-sm-1">
                          <i style={styles.pointer} className="fa fa-times" 
                            onClick={() => this.props.deleteTask(index)} 
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
          <TaskListButtonBlock />       
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

  deleteIconWrapper: {
    textAlign: 'right'    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: index => dispatch(deleteTask(index)),
    changeTaskStatus: index => dispatch(changeTaskStatus(index)),
  }
}

const composed = compose(connect(null, mapDispatchToProps), Radium)

export default composed(TaskList);