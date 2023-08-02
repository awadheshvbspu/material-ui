import React,{useState} from 'react';
import {Box,TextField,MenuItem} from  '@mui/material';

export default function MuiSelect() {
    const [countries, setCountries] = useState<string[]>([]); 
    console.log({countries})
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value    
        setCountries(typeof value==="string" ? value.split(',') : value)
    }
  return (
    <Box width='250px'>
      <TextField label='Select Country' select value={countries} onChange={handleChange} fullWidth SelectProps={{
        multiple:true
      }} 
      size='small'
      color='secondary'
      helperText='Please Select the country'
      error
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AUS'>Australia</MenuItem>
        <MenuItem value='RS'>Russia</MenuItem>
        <MenuItem value='PA'>Paris</MenuItem>
      </TextField>
    </Box>

  )
}
