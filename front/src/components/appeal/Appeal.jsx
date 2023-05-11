import React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert, AlertTitle } from "@mui/material";
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseUpdate = () => {
        setOpen(false);
      };
  
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
             Appeal!
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
             <EmojiFlagsIcon sx = {{mt:1.87, px:1}}/>  
              Enter you appeal</DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter text"
              type='text'
              fullWidth 
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseUpdate} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }