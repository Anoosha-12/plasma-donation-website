
import React from "react";
import { OutlinedInput,Typography,Box, Container,Checkbox, Button } from "@mui/material";
import Link from "next/link";


const Login = () => {
  
  return (

    <Container sx={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Box sx={{width:"40%",mx:"auto",alignItems:"center"}}>
      <Box sx={{display:"flex",justifyContent:"center"}}>
      <img src="/images/logo1.png" style={{height:"100px",width:"100px"}}/>
      </Box>
      <Typography sx={{
        color:"black",lineHeight:"3em"
      }}>User Name</Typography>

      <OutlinedInput sx={{height:"30px", width:"100%"}}/>

      <Typography sx={{
        color:"black",lineHeight:"3em"
      }}>Password</Typography>
      <OutlinedInput  sx={{height:"30px", width:"100%"}}/>
<Box sx={{
  display:"flex",
  justifyContent:"space-between"
}}>
  <Box sx={{display:"flex",marginTop:"10px"}}>
      <Checkbox
  value="checkedA"
  inputProps={{
    'aria-label': 'Checkbox A',
  }}
/>
<Typography sx={{marginTop:"9px"}}>Remember me</Typography>
</Box>
<Box sx={{mt:2.5}}>
<Link href='/forget'>Forget Password</Link>
</Box>
</Box>

<Button variant="contained"sx={{backgroundColor:"black" ,display:"block",width:"50%",mx:"auto",borderRadius:5,marginTop:"10px",fontSize:"13px",color:"white"}} href="">Log in</Button>
<Button variant="contained"sx={{backgroundColor:"black" ,display:"block",width:"50%",marginTop:"12px",mx:"auto",borderRadius:5,fontSize:"13px",color:"white",textAlign:"center"}} href="/signinwithgoogle">Continue with Google</Button>
<Button variant="contained" sx={{backgroundColor:"black" ,display:"block" ,width:"50%",marginTop:"12px",mx:"auto",borderRadius:5,fontSize:"13px",color:"white",textAlign:"center"}} href="/signup">Sign up</Button>
</Box>
</Container>
  );
};

export default Login;

