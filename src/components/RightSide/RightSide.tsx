import React from 'react' ;
import TaskList from './TaskList';

// поправить еба дивы
interface IRightSideProps {
  groups: any
  selectedGroupIndex: number
}

const styles = {
  rightSide: {
    width: '74%',
    height: '100%',
    backgroundColor: '#708090'
  },

  message: {
    margin: '18% 0 5%',
    fontSize: '1.6rem',
    color: '#FFF'
  }
}

const RightSide: React.FC<IRightSideProps> = ({groups, selectedGroupIndex}) => {  
  return (
    <div style={styles.rightSide}>
      {
        selectedGroupIndex !== null
        ? <TaskList selectedGroup={groups[selectedGroupIndex]}
                    selectedGroupIndex={selectedGroupIndex} />
        : <>
            <div style={styles.message}>        
              Pick a group or create your custom group to add tasks
            </div>
          </>
      }        
    </div>
  ) 
}

export default RightSide;