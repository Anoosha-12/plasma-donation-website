import React from 'react'
import { Box, Button, Container, OutlinedInput, Typography,Link } from '@mui/material'

const page = () => {
  return (
   <Container maxWidth="l" sx={{height:"100vh"}}>
     <Box sx={{height:"10vh",width:"100%",display:"flex",pt:2}}>
       <img src='/images/Arrow.svg' style={{width:"15px",height:"15px",marginTop:"4px"}}/>
 <Link style={{marginLeft:"4px",color:"black",}} href="/login" >Back to Login</Link>
     </Box>
<Box sx={{height:"80vh" ,width:"100%" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Box sx={{ height:"50vh",width:"40%",mx:"auto"}}>
    <Typography sx={{fontSize:"35px",textAlign:"center"}}>Forget Password</Typography>
 <Box sx={{ml:5,mt:2}}>
    <Typography sx={{}}>Email</Typography>
    <OutlinedInput sx={{height:"30px" ,width:"80%",mt:1}}></OutlinedInput>
    </Box>
    
    <Typography sx={{textAlign:"center",mt:5}}>we  have sent an email verification code for security concern type that code below and than you can reset your password. </Typography>
<Box sx={{display:"flex",justifyContent:"space-between"}}>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    </Box>
    </Box>
</Box>

<Box sx={{display:"flex",justifyContent:"flex-end"}}>
    <Button variant='contained'sx={{width:"15%",height:"50px",borderRadius:"15px",bgcolor:"black"}} href='/reset' >Submit</Button>
</Box>
   </Container>
  )
}

export default page
