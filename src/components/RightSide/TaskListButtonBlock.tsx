import React, { useCallback } from 'react';
import NewTaskForm from './NewTaskForm';
import { useSelector, useDispatch } from 'react-redux';

interface ITaskListButtonBlkProps {

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

const TaskListButtonBlock: React.FC<ITaskListButtonBlkProps> = () => {
  const showNewTaskForm = useSelector((state: any) => state.layout.showNewTaskForm);
  const dispatchAction = useDispatch();

  const toggleFormVisibility = useCallback(() => {
    dispatchAction({type: 'TOGGLE_TASK_FORM_VISIBILITY'});
  }, [dispatchAction]);

  return (    
    <>
      {
        showNewTaskForm
        ? <NewTaskForm toggleTaskFormVisibility={toggleFormVisibility}></NewTaskForm>
        : <button style={styles.addBtn} onClick={toggleFormVisibility}>
            Add new task
          </button>
      }        
    </>    
  )
}

export default TaskListButtonBlock;