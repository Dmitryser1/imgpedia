import React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert, AlertTitle } from "@mui/material";
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { createAlbum, createAppeal } from '../../http/AlbumAPI';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [appeal, setAppeal] = React.useState('');

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseUpdate = async () => {
        let data;
        data = await createAppeal(appeal)
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
            <input type="text" placeholder="text" value={appeal} onChange={e => setAppeal(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseUpdate} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }