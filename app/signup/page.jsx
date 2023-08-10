import React from 'react'
import { Box, Button, Container, OutlinedInput, Typography } from '@mui/material'

const page = () => {
  return (
    <Container maxWidth="l" sx={{height:"100vh"}}>
   
<Box sx={{height:"90vh" ,width:"100%" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
   <Box sx={{ height:"70vh",width:"40%"}}>
   <Typography sx={{fontSize:"35px",textAlign:"center"}}>Sign Up</Typography>
<Box sx={{width:"100%",mt:2,ml:4}}>
   <Typography sx={{}}>User Name</Typography>
   <OutlinedInput sx={{height:"30px" ,width:"80%",mt:1}}></OutlinedInput>

   <Typography sx={{mt:2}}>Email</Typography>
   <OutlinedInput sx={{height:"30px" ,width:"80%",mt:1}}></OutlinedInput>

   <Typography sx={{mt:2}}>Password</Typography>
   <OutlinedInput sx={{height:"30px" ,width:"80%",mt:1}}></OutlinedInput>

   <Typography sx={{mt:2}}>Confirm Password</Typography>
   <OutlinedInput sx={{height:"30px" ,width:"80%",mt:1}}></OutlinedInput>


   <Button variant='contained' sx={{display:"block",mx:"auto",borderRadius:"15px",width:"30%",mt:2,bgcolor:"black"}} href='/emailverification'>Submit</Button>
  
</Box>
</Box>



</Box>



  </Container>
  )
}

export default page
