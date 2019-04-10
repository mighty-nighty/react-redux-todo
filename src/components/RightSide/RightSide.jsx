import React from 'react' ;
import TaskList from './TaskList';

const RightSide = (props) => {  
  return (
    <div style={styles.rightSide}>
      {
        props.selectedGroupIndex !== null
        ? <TaskList selectedGroup={props.groups[props.selectedGroupIndex]}
                    selectedGroupIndex={props.selectedGroupIndex}                     
                    deleteTask={props.deleteTask}
                    taskStatusChanged={props.taskStatusChanged} />
        : <div style={styles.message}>
            Pick a group or create your custom group to add tasks
          </div>
      }        
    </div>
  ) 
}

const styles = {
  rightSide: {
    width: '74%',
    height: '100%',
    backgroundColor: '#708090'
  },

  message: {
    margin: '18% 0 0',
    fontSize: '1.6rem',
    color: '#FFF'
  }
}

export default RightSide;