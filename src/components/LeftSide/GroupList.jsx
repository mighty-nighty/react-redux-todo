import React from 'react';
import Radium from 'radium';

import Group from './Group';
import MyModal from './MyModal';

class GroupList extends React.Component {
  state = {
    isModalOpen: false,
    selectedGroupIndex: null
  }

  showModal = (groupIndex) => {
    this.setState({ isModalOpen: true, selectedGroupIndex: groupIndex })
  }

  deleteFunc = () => {
    this.props.deleteGroup(this.state.selectedGroupIndex)
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
                            key={index}
                            groupIndex={index} 
                            selectGroup={this.props.selectGroup} 
                            deleteGroup={this.props.deleteGroup}
                            showModal={this.showModal} />
            })
          }
        </div> 
        <MyModal isModalOpen={this.state.isModalOpen}
                styles={styles.modal}     
                closeModal={this.closeModal}
                deleteFunc={this.deleteFunc} />       
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