import { useState } from 'react';
import { Autocomplete, Button, Dialog, DialogTitle,
    InputAdornment,TextField, Typography } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';

function SelectMic() {
    const [close, setClose] = useState(true)
    const options = ['USB Condenser Microphone (31b2:0011)', 'Built-in Mic(Macbook pro)', 'Bluetooth'];
    const navigate = useNavigate();

    const handleClose = () => {
        setClose(false);
        navigate('/');
    }
  return (
    <Dialog open={close}>
      <DialogTitle>Select Microphone</DialogTitle>
      <Typography>Please choose which microphone would you like to use</Typography>
      <Autocomplete options={options} renderInput={(params) => <TextField {...params} InputProps={{
            ...params.InputProps,
          startAdornment: (
            <InputAdornment position="start">
              <MicIcon />
            </InputAdornment>
          )
        }} />}/>
      <Button onClick={handleClose}>cancel</Button>
      <Button variant='contained'>next</Button>
    </Dialog>
  )
}

export default SelectMic