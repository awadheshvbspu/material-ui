import React, { useState } from 'react'
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,FormHelperText} from '@mui/material'

export default function MuiRadioButton() {
    const [value,setValue] = useState('')
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }
  return (
    <FormControl error>
        <FormLabel id='job-experience-group-label'>
            Year of Experience
        </FormLabel>
        <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
    <FormControlLabel control={<Radio size='small' color='secondary'/>} label='0-2' value='0-2'/>
    
    <FormControlLabel control={<Radio size='medium' color='primary'/>} label='3-5' value='3-5'/>
    
    <FormControlLabel control={<Radio  color='success'/>} label='6-10' value='6-10'/>
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
    </FormControl>
  )
}
