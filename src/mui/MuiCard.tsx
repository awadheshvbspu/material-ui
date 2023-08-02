import React from 'react'
import {Box,Card,CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'

export default function MuiCard() {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia component='img' height='140' image='https://unsplash.com/s/photos/random-photo' alt='Bird'/>
            <CardContent>
            <Typography gutterBottom variant='h5' component='div'> ReactJs</Typography>
            <Typography variant='body2' color='text.secondary'>
                React is a javascript library for user Interface.React can be used as a in the deelopmemnt.
            </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
