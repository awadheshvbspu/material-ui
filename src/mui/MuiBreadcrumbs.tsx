import React from 'react'
import {Box,Link,Typography,Breadcrumbs} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MuiBreadcrumbs() {
  return (
    <Box m={2}>
       <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>} maxItems={2} itemsAfterCollapse={2} itemsBeforeCollapse={3}>
        <Link underline='hover' href='#'>Home</Link>
        <Link underline='hover' href='#'>Catalog</Link>
        <Link underline='hover' href='#'>Accesssories</Link>
        <Link underline='hover' href='#'>Shoes</Link>
        <Typography color='primary.light'>Shoes</Typography>
        </Breadcrumbs> 
    </Box>
  )
}
