import React from 'react'
import { Box, Container, Typography ,OutlinedInput, Button} from '@mui/material'
const page = () => {
return(
<Container maxWidth="l" sx={{height:"100vh",width:"100%"}}>

    <Box sx={{height:"90vh" ,width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Box sx={{width:"50%",height:"55vh",textAlign:"center"}}>
        <Typography sx={{fontSize:"30px"}}>Thank you for signin up!</Typography>
        <Typography sx={{fontSize:"20px",pt:3}}>Verify your email address</Typography>
        <Typography sx={{fontSize:"15px",pt: 3,}}>We have sent an email verification code for security concern,type that code below</Typography>
        <Box sx={{display:"flex",justifyContent:"space-between" ,mt:3}}>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    <OutlinedInput sx={{width:"40px",height:"40px",mt:2}}/>
    </Box>


    <Box sx={{display:'flex',justifyContent:"flex-end"}}>
        <Button variant='contained' sx={{width:"25%",borderRadius:"15px",mt:6,bgcolor:"black"}}>Next</Button>
    </Box>

    </Box>
    </Box>

    
</Container>
)
  
}

export default page
