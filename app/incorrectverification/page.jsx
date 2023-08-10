import { Box, Button, Container, Typography,OutlinedInput } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Container maxWidth="l" sx={{height:"100vh",width:"100%"}}>
<Box sx={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>

    <Box sx={{height:"50vh",width:'40%'}}>
        <Typography>The code you have entered is incorrect.Retry!</Typography>

        <Box sx={{display:"flex",justifyContent:"space-between",mt:5}}>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>

    
    </Box>
    <Box sx={{display:"flex",justifyContent:"flex-end",mt:6}}>
    <Button variant='contained' sx={{width:"30%",borderRadius:"15px",bgcolor:"black",mr:2}}>Next</Button>
    <Button variant='contained'sx={{width:"30%",borderRadius:"15px",bgcolor:"black"}}>Resend</Button>
</Box>
    </Box>
</Box>



    </Container>
  )
}

export default page
