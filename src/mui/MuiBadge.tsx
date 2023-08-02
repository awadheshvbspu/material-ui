import React from 'react';
import {Stack,Badge} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function MuiBadge() {
  return (
    <Stack spacing={2} direction='row'>
            <Badge badgeContent={5} color='primary'>
            <EmailIcon/>
            </Badge>
            <Badge badgeContent={5} color='secondary'>
            <EmailIcon/>
            </Badge>
            <Badge badgeContent={100} color='success' max={999}>
            <EmailIcon/>
            </Badge>
            <Badge variant='dot' color='primary' invisible={true}>
            <EmailIcon/>
            </Badge>
    </Stack>
  )
}
