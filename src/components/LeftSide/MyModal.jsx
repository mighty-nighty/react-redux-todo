import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const MyModal = props => {
  return (
    <Dialog
      open={props.isModalOpen}
      onClose={props.closeModal}
    >
      <DialogTitle>Confirm action</DialogTitle>
      <DialogContent style={props.styles}>
        <DialogContentText>
          Do you really want to delete this group?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.deleteFunc} variant="contained" color="secondary">
          Yes
        </Button>
        <Button onClick={props.closeModal} variant="contained" color="primary">
          No
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default MyModal;