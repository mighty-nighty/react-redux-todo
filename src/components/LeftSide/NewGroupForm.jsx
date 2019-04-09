import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

class NewGroupForm extends React.Component {
  state = {
    groupName: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.groupName) {
      this.props.addGroup(this.state.groupName)
      this.props.showNewGroupForm()
    }
  }

  handleChange = (e) => {
    this.setState({ groupName: e.target.value })
  }

  handleCancel = () => {
    this.props.showNewGroupForm()
  }

  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <input style={[styles.border, styles.input]} type="text" placeholder="Group name" onChange={this.handleChange} />
        <button style={[styles.border, styles.button]} type="submit">Save</button>
        <button style={[styles.border, styles.button]} onClick={this.handleCancel}>Cancel</button>
      </form>
    )
  }
}

const styles = {
  form: {
    margin: '20px 0 0'
  },

  border: {
    borderRadius: '4px',
    border: '1px solid grey'
  },

  input: {
    padding: '2px 5px',
    width: '50%'
  },

  button: {
    height: '1.8rem',
    marginLeft: '2px',
    backgroundColor: '#61dafb',
  }
}

const mapDispatchToProps = (dispatch, state) => {
  let name = state.groupName
  return {
    addGroup: (name) => dispatch({type: 'ADD_GROUP', payload: name})
  }
}

export default connect(mapDispatchToProps)(NewGroupForm);