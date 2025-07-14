import React, { useState } from 'react'
import { Avatar, Grid, Paper, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


function Login() {

    const PaperStyle = { padding: 20, height: "50vh", width: 280, margin: "30px auto" }
    const AvtarStyle = { backgroundColor: '#009ada' }
    const btnStyle = { margin: '10px 0'}
    const btnStyleSign = { margin: '30px 0'}

    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const navigate = useNavigate();

    function checkUser() {


        if (username === 'abbott' && password === 'ttobba'){
            console.log('login succeessful!!')
            console.log("Base URL:", process.env.REACT_APP_API_BASE_URL);

            navigate("/admin")
        }else{
            console.log('login unsucceessful!!')
        }
    }

    return (
        <Grid>
            <Paper elevation={10} style={PaperStyle}>
                <Grid align="center">
                    <Avatar style={AvtarStyle}>a</Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField id="outlined-basic" label="UserName" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth required style={btnStyle}/>
                <br/>
                <TextField id="outlined-basic" label="Password" variant="outlined" value={password}  type='password' onChange={(e) => setPassword(e.target.value)} fullWidth required/><br/>
                <Button type='submit' color='primary' variant='contained' fullWidth style={btnStyleSign} onClick={checkUser}>Sign in</Button>
            </Paper>
        </Grid>
    )
}

export default Login;