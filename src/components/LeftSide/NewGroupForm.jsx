import React from 'react';
import Radium from 'radium';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addGroup } from '../../actions/groupActions';
import { toggleNewGroupFormVisibility } from '../../actions/layoutActions';

class NewGroupForm extends React.Component {
  state = {
    groupName: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.groupName) {
      this.props.addGroup(this.state.groupName)
      this.props.hideNewGroupForm()
    }
  }

  handleChange = e => {
    this.setState({ groupName: e.target.value })
  }  

  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <input style={[styles.border, styles.input]} type="text" placeholder="Group name" onChange={this.handleChange} autoFocus />
        <button style={[styles.border, styles.button]} type="submit">Save</button>
        <button style={[styles.border, styles.button]} onClick={this.props.hideNewGroupForm}>Cancel</button>
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

const mapDispatchToProps = dispatch => {
  return {
    addGroup: name => dispatch(addGroup(name)),
    hideNewGroupForm: e => {
      if (e) {
        e.preventDefault()
      }
      dispatch(toggleNewGroupFormVisibility())
    }
  }
}

const composed = compose(connect(null, mapDispatchToProps), Radium)

export default composed(NewGroupForm);