import React from 'react';
import Radium from 'radium';

class NewTaskForm extends React.Component {
  state = {
    taskName: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTaskFunc(this.state.taskName)
    this.props.showAddForm()
  }

  handleCHange = (e) => {
    this.setState({ taskName: e.target.value })
  }

  handleCancel = () => {
    this.props.showAddForm()
  }

  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <input style={[styles.border, styles.input]} type='text' placeholder='Task name' onChange={this.handleCHange} />
        <button style={[styles.border, styles.button]} type='submit'>Save</button>
        <button style={[styles.border, styles.button]} onClick={this.handleCancel}>Cancel</button>
      </form>
    )
  }
}

const styles = {  
  form: {
    margin: '2.4rem auto 0',
    width: '28rem'
  },

  border: {
    borderRadius: '4px',
    border: '1px solid grey'
  },

  input: {
    padding: '2px 5px',
    width: '65%'
  },

  button: {
    height: '1.8rem',
    marginLeft: '2px',
    backgroundColor: '#61dafb',
  }
}

export default Radium(NewTaskForm);