import { Typography } from '@mui/material'
import React from 'react'

export default function MuiTypography() {
  return (
    <>
    <Typography variant='h1'>H1 Typography</Typography>
     <Typography variant='h2'>H2 Typography</Typography>
      <Typography variant='h3' component='h1' gutterBottom>H3 Typography</Typography>
         <Typography variant='h4'>H4 Typography</Typography>
       <Typography variant='h5'>H5 Typography</Typography>
        <Typography variant='h6'>H Typography</Typography>
        <Typography variant='subtitle1'>subtitle1 Typography</Typography>
        <Typography variant='subtitle2'> subtitle 2 Typography</Typography>
        <Typography variant='body1'>We do not recommend using this approach in production. It requires the client to download the entire library—regardless of which components are actually used—which negatively impacts performance and bandwidth utilization.</Typography>
        <Typography variant='body2'>The UMD links use the latest tag to point to the latest version of the library. This pointer is unstable and subject to change as we release new versions. You should consider pointing to a specific version, such as v5.0.0.</Typography>
    </>
  )
}
