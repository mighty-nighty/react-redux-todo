import React from 'react';
import Radium from 'radium';

import Group from './Group';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class GroupList extends React.Component {
  state = {
    isModalOpen: false,
    selectedGroupId: null
  }

  showModal = (groupId) => {
    this.setState({ isModalOpen: true, selectedGroupId: groupId })
  }

  deleteFunc = () => {
    this.props.deleteGroup(this.state.selectedGroupId)
    this.closeModal()
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <>
        <div>
          <div style={styles.flexBlock}>
            <div style={styles.title}>Groups</div>
            <button style={styles.addGroupBtn} onClick={this.props.showNewGroupForm}>Add group</button>
          </div>            
          {
            this.props.groups.map((group, index) => {
              return <Group group={group} 
                            key={group.id}
                            groupIndex={index} 
                            selectGroup={this.props.selectGroup} 
                            deleteGroup={this.props.deleteGroup}
                            showModal={this.showModal} />
            })
          }
        </div>
        <Dialog 
          open={this.state.isModalOpen}
          onClose={this.closeModal}            
        >
          <DialogTitle>Confirm action</DialogTitle>
          <DialogContent style={styles.modal}>
            <DialogContentText>
              Do you really want to delete this group?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.deleteFunc} variant="contained" color="secondary">
              Yes
            </Button>
            <Button onClick={this.closeModal} variant="contained" color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }   
}

const styles = {
  title: {
    margin: '.6rem 0 .4rem',
    fontSize: '1.6rem',
  },

  modal: {
    width: '480px'
  },  

  addGroupBtn: {
    margin: '.5rem 0 0 1rem',
    padding: '3px 10px',
    backgroundColor: '#61dafb',
    border: '1px solid grey',
    borderRadius: '5px',
    boxShadow: '2px 2px 4px rgba(128, 128, 128, 0.6)',
    ':active': {
      margin: '.6rem 0 0 1rem'
    }
  },

  flexBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Radium(GroupList);