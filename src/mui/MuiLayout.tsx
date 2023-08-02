import React from 'react';
import {Box,Stack,Divider,Grid,Paper} from '@mui/material'

export default function MuiLayout() {
  return (
    <Paper sx={{padding:'32px'}} elevation={4}>
    <Stack sx={{border:'1px solid'}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
    <Box component='span' sx={{
        backgroundColor:'primary.main',
        color: 'white',
        padding:"16px",
        height:"100px",
        width:"100px",
        '&:hover':{
            backgroundColor:'secondary.dark',
            cursor:'pointer'}
    }}>
        fhudcn
    </Box>
    <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>

    </Box>
    </Stack>
    <Grid container my={4} spacing={2} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} ><Box bgcolor='primary.light' p={2}>Item 2</Box></Grid>
        <Grid item xs={12} sm={6} ><Box bgcolor='primary.light' p={2}>Item 3</Box></Grid>
        <Grid item xs={12} sm={6} ><Box bgcolor='primary.light' p={2}>Item 4</Box></Grid>
    </Grid>
    </Paper>
  )
}
