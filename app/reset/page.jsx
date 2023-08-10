import React from 'react'
import { Box, Button, Container, OutlinedInput, Typography,Link } from '@mui/material'

const page = () => {
  return (
    <Container maxWidth="l" sx={{height:"100vh"}}>
    <Box sx={{height:"10vh",width:"100%",display:"flex",pt:2}}>
      <img src='/images/Arrow.svg' style={{width:"15px",height:"15px",marginTop:"4px"}}/>
      <Link style={{marginLeft:"4px",color:"black",}} href="/login" >Back to Login</Link>
    </Box>
<Box sx={{height:"90vh" ,width:"100%" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
   <Box sx={{ height:"70vh",width:"40%",mx:"auto"}}>
   <Typography sx={{fontSize:"35px",textAlign:"center"}}>Reset Password</Typography>
<Box sx={{ml:5,mt:2}}>
   <Typography sx={{}}>Password</Typography>
   <OutlinedInput sx={{height:"30px" ,width:"80%",mt:1}}></OutlinedInput>

   <Typography sx={{mt:2}}>Confirm Password</Typography>
   <OutlinedInput sx={{height:"30px" ,width:"80%",mt:1}}></OutlinedInput>

   </Box>

   <Button variant='contained' sx={{display:"block",mx:"auto",mt:3,width:"40%",borderRadius:"15px",bgcolor:"black",textAlign:'center'}} href="/login">Submit</Button>
  
   </Box>
</Box>


  </Container>
  )
}

export default page
