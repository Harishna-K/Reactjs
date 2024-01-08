
import {Avatar, Button, FormControlLabel, Grid,Paper, TextField, Typography ,Link, Checkbox} from '@mui/material'
// import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const paperStyle={ padding :20,height:'90vh',width:300, margin:"20px auto"}
  const avatarStyle={backgroundColor:"blue"}
  const btnstyle={margin:'8px 0', backgroundColor:"blue" ,color:"white"}

  const  navigate=useNavigate()
  
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');

  const handleUsernameChange =(event)=>{
    setUsername(event.target.value);

  };
  const handlePasswordChange =(event)=>{
    setPassword(event.target.value);
    
  };
  const hiii = ()=>{
    // alert("welcome  " + username)
    navigate(`/Home/${username}`)

  }
  return (

       <Grid className='hari'>
          <Paper id="paper" elevation={10} style={paperStyle}>
            
             <Grid align='center'>
                  <Avatar style={avatarStyle}>H</Avatar>
                  <h1>SIGN IN</h1>
             </Grid>
               
                  <TextField  label='username'placeholder='enter your name' value={username} onChange={handleUsernameChange}  fullwidth required style={{margin:10}} variant='filled'></TextField>                 
                  <TextField label='password' placeholder='enter your password' type='password' value={password} onChange={handlePasswordChange} fullwidth required style={{margin:10}} variant='filled'></TextField>
                                   
                  {/* <FormControlLabel control={<CheckBox defaultChecked />} label="Remember me" /> */}
                  <div>
           
              </div>
              <FormControlLabel
              control={
                <Checkbox
                name="checkedB"
                color="primary"
                />
              }
              label="remember me"
              />
              <br></br>
              <div>
             <Button type='submit' color='primary'  variant='contained' style={btnstyle}fullWidth onClick={hiii}a >SIGN IN</Button>
             </div>
             <br></br>
             <div>
            <Typography> 
              <Link href="#" id='i'>
               Forgot Password ?
              </Link>
            </Typography>
            </div>
            <br></br>
            <div>
            <Typography id="sl"> Do you have an account ?
              <Link href="#"  id='h'>
               sign up
              </Link>
            </Typography>
            </div>
            <br></br>
         
         </Paper>
      </Grid>
     
  )
}
export default Login