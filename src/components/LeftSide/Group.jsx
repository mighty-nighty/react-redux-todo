import React from "react";
import Radium from 'radium';

// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

const Group = (props) => {
  const handleClick = () => {
    props.selectGroup(props.groupIndex)
  }  

  return (
    <div style={styles.groupBlock}>
      <div style={styles.groupName} onClick={handleClick}>{props.group.name}</div>
      <i style={styles.deleteIcon} className="fa fa-times" onClick={() => props.showModal(props.groupIndex)} title="Delete group"></i>
    </div>
  )
}

const styles = {
  groupBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    margin: '10px',
    border: '1px solid grey',
    borderRadius: '5px',
    cursor: 'pointer',    
    boxShadow: '2px 2px 4px rgba(128, 128, 128, 0.6)',
    ':hover': {
      backgroundColor: '#61dafb'
    }
  },

  groupName: {
    width: '90%',
    padding: '10px',
    textAlign: 'left'
  },

  deleteIcon: {
    width: '10%',
    padding: '10px',
  }
}

export default Radium(Group);