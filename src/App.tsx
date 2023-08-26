import { useState } from 'react'
import { Button, DialogTitle, Divider, List, ListItem } from '@mui/material'
import { ListItemIcon, ListItemText, Radio, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';

import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
    {open ?
    <Dialog open={open} >
      <DialogTitle>How would you like to join?</DialogTitle>
      <Typography>Please choose if you want to participate in conversation</Typography>
      <List>
          <ListItem>
              <ListItemIcon>
                <MicIcon />
              </ListItemIcon>
              <ListItemText primary="Microphone" />
              <Radio />
          </ListItem>
          <Divider />
          <ListItem >
              <ListItemIcon>
                <HeadsetIcon />
              </ListItemIcon>
              <ListItemText primary="Listen Only" />
              <Radio />
          </ListItem>
        </List>
      <Button onClick={handleClose}>cancel</Button>
      <Button variant='contained'>next</Button>
    </Dialog>
     : <Button variant='outlined' onClick={handleOpen}>Join Meeting</Button> 
    }
    </>
  )
}

export default App
