import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

interface IMyModalProps {
  isModalOpen: boolean
  deleteFunc: any
  styles: any
  closeModal: () => void
}

const MyModal: React.FC<IMyModalProps> = ({isModalOpen, deleteFunc, styles, closeModal}) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={closeModal}
    >
      <DialogTitle>Confirm action</DialogTitle>
      <DialogContent style={styles}>
        <DialogContentText>
          Do you really want to delete this group?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={deleteFunc} variant="contained" color="secondary">
          Yes
        </Button>
        <Button onClick={closeModal} variant="contained" color="primary">
          No
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default MyModal;