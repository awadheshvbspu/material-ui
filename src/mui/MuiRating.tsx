import React,{useState} from 'react'
import {Box,Stack,Rating} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function MuiRating() {
    const [value, setValue] = useState<number | null>(null)
    const handleChange=(e:React.ChangeEvent<{}>, newValue:number | null) =>{
setValue(newValue)
    }
    console.log({value})
  return (
    <Box>
   <Stack spacing={2}>
    <Rating value={value} onChange={handleChange} precision={0.5} size='large'
    icon={<FavoriteIcon fontSize='inherit' color='error' />}
    emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
    // readOnly
    highlightSelectedOnly
    />
   </Stack>
    </Box>
  )
}
