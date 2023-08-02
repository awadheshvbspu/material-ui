import React from 'react';
import {Stack,Alert,AlertTitle,Button} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function MuiAlert() {
  return (
    <Stack spacing={2}>
        <Alert severity="success">
        This is a success alert—check it out!
      </Alert>
      <Alert severity="error">
        This is a error alert—check it out!
      </Alert>
      <Alert severity="info">
        This is a info alert—check it out!
      </Alert>
      <Alert severity="warning">
        This is a Warning alert—check it out!
      </Alert>
      <Alert variant='outlined' severity="success">
        This is a success alert—check it out!
      </Alert>
      <Alert variant='outlined' severity="error">
        This is a error alert—check it out!
      </Alert>
      <Alert variant='outlined' severity="info">
        This is a info alert—check it out!
      </Alert>
      <Alert variant='outlined' severity="warning">
        This is a Warning alert—check it out!
      </Alert>
      <Alert  variant='filled' severity="success" icon={<CheckCircleIcon fontSize='inherit' />}
      action={
        <Button color='inherit' size='small'>
            UNDO
        </Button>
      }
      >
        <AlertTitle>Success</AlertTitle>
        This is a success alert—check it out!
      </Alert>
      <Alert variant='filled' severity="error" onClose={()=>alert('click')}>
      <AlertTitle>Error</AlertTitle>
        This is a error alert—check it out!
      </Alert>
      <Alert variant='filled' severity="info">
      <AlertTitle>Info</AlertTitle>
        This is a info alert—check it out!
      </Alert>
      <Alert variant='filled' severity="warning" icon={<CheckCircleIcon/>}>
      <AlertTitle>Warning</AlertTitle>
        This is a Warning alert—check it out!
      </Alert>
      
    </Stack>
  )
}
