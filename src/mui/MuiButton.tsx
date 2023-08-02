import React,{useState} from 'react';
import {Stack,Button,IconButton, ButtonGroup,ToggleButton,ToggleButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


export default function MuiButton() {
    const[format,setFormat]= useState<string | null>(null)
    console.log({format,})
    const handleFormatChange =(
        _event:React.MouseEvent<HTMLElement>,
        updatedFormat: string | null
    ) =>{
        setFormat(updatedFormat)
    }
  return (
    <>
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
    <Button variant='text' href='https//www.google.com'> Text</Button>
    <Button variant='contained'>context</Button>
    <Button variant='outlined'> Outline</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary' >Primary</Button>
        <Button variant='contained' color='secondary' >secondary</Button>
        <Button variant='contained' color='error' >Error</Button>
        <Button variant='contained' color='warning' >Warning</Button>
        <Button variant='contained' color='success' >Success</Button>
        <Button variant='contained' color='info' >Info</Button>
        <Button variant='contained' color='primary' >Primary</Button>
        <Button variant='contained' color='primary' >Primary</Button>

    </Stack>
    <Stack display='block' spacing={2} direction='row'>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium" >Medium</Button>
        <Button variant="contained" size="large" >Large</Button>
    </Stack>
    <Stack>
        <Button startIcon={<SendIcon />} disableElevation>
            Send</Button>
            <Button endIcon={<SendIcon />} disableRipple onClick={()=>alert("click me")}>
            Send</Button>
            <IconButton aria-label='send' color='success'>
                <SendIcon/>
            </IconButton>

    </Stack>
    <Stack direction='row'>
        <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
        <Button onClick={()=>alert('left clicked')}>left</Button>
        <Button>center</Button>
        <Button>right</Button>
        </ButtonGroup>
    </Stack>
    <Stack>
        <ToggleButtonGroup aria-label='text-formatting' value={format} onChange={handleFormatChange} size='small' color='success' orientation='vertical'>
            <ToggleButton value='bold' aria-label='bold'>
                <FormatBoldIcon/>
            </ToggleButton>
            <ToggleButton value='italic' aria-label='italic'>
                <FormatItalicIcon/>
            </ToggleButton >
            <ToggleButton value='underlined' aria-label='undrlined'>
                <FormatUnderlinedIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    </Stack>
    </>
  )
}
