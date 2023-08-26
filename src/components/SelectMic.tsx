import { Button, Dialog, DialogTitle, List, Typography } from '@mui/material'
import { ListItem, ListItemIcon, ListItemText, Radio } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';

function SelectMic() {
  return (
    <Dialog open>
      <DialogTitle>Select Microphone</DialogTitle>
      <Typography>Please choose which microphone would you like to use</Typography>
      <List>
          <ListItem>
              <ListItemIcon>
                <MicIcon />
              </ListItemIcon>
              <ListItemText primary="Microphone" />
              <Radio />
          </ListItem>
        </List>
      <Button>cancel</Button>
      <Button variant='contained'>next</Button>
    </Dialog>
  )
}

export default SelectMic