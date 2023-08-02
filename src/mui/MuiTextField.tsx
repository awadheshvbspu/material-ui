import React from 'react';
import {Stack,TextField,InputAdornment} from '@mui/material';
import { useState } from 'react';


export default function MuiTextField() {
    const [value,setValue] =useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField
                variant="outlined"
                label="NAME"
            />
            <TextField
                variant="filled"
                label="NAME"
            />
            <TextField
                variant="standard"
                label="NAME"
            />
            
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField
                label='small secondary' size='small' color='secondary' />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField  label='form input' required error={!value} 
            helperText={!value ? "Required" : 'do not share your password anyone'}
            value={value} onChange={(e)=>setValue(e.target.value)}/>
            <TextField  label='password' type='password' helperText ='do not share your password'/>
            <TextField  label='Read Only' InputProps={{readOnly:true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label="Amount" InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }}/>
             <TextField label="Weight" InputProps={{
                endAdornment:<InputAdornment position='end'>kg</InputAdornment>
            }}/>
        </Stack>
    </Stack>
  )
}
