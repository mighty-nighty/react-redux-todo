import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkbox from '@material-ui/core/Checkbox';
import TaskListButtonBlock from './TaskListButtonBlock';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

interface ITaskListProps {
  selectedGroup: any
  selectedGroupIndex: number // зачем это??
}

const TaskNameWrapper = styled.div<any>`
  text-align: center;
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`;

const DeleteIconWrapper = styled.div`
  text-align: right;
`;

const styles = {
  pointer: {
    cursor: 'pointer'
  },

  title: {
    margin: '.6rem 0 1.1rem',
    fontSize: '1.6rem',
    color: '#FFF'
  },
}

const TaskList: React.FC<ITaskListProps> = ({selectedGroup}) => {
  const dispatchAction = useDispatch();
  const deleteTask = (index: number) => dispatchAction({type: 'DELETE_TASK', payload: index});
  const changeTaskStatus = (index: number) => dispatchAction({type: 'CHANGE_TASK_STATUS', payload: index});

  return (
    // <Fade in={!!props.selectedGroup}>
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2}}>
          <div style={styles.title}>{selectedGroup.name} Todos</div>
          <ListGroup>               
            {
              selectedGroup.tasks.map((task: any, index: number)  => {
                return (
                  <ListGroup.Item key={index}>
                    <div className="row align-items-center">
                      <div className="col-sm-2">
                        <Checkbox checked={task.isDone}
                            color="primary"                           
                            onChange={() => changeTaskStatus(index)} />
                      </div>                        
                      <TaskNameWrapper className="col-sm-8" isDone={task.isDone}>
                        {task.name}
                      </TaskNameWrapper>
                      <DeleteIconWrapper className="col-sm-2">
                        <i style={styles.pointer} className="fa fa-times" 
                          onClick={() => deleteTask(index)} 
                          title="Delete task"></i>
                      </DeleteIconWrapper>
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

export default TaskList;