import React,{useState} from 'react';
import{Stack,Chip,Avatar} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

export default function MuiChip() {
    const[chips,setChips] = useState(['chip1','chip2','chip3'])

    const handleDelete = (chipToDelete:string) =>{
      setChips((chips) =>chips.filter((chip) =>chip !== chipToDelete))
    }
  return (
    <Stack direction='row' spacing={1}>
        <Chip label="chip" color='primary' size='small' icon={<FaceIcon/>}/>
        <Chip label="chip outlined" color='secondary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>}/>
        <Chip label="Click" color='success' size='small' onClick={()=>alert('Clicked')} />
        <Chip label='Delete' color='error' 
        onClick={()=>alert('Clicked')} 
        onDelete={()=>alert('Delete handler called')} />

        {
            chips.map(chip =>(
                <Chip key={chip} label={chip}  onDelete={()=>handleDelete(chip)}/>
            ))
        }
    </Stack>
  )
}
