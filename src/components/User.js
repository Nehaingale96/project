// import React from 'react'

// function User() {
//   return (
//     <>
//     <form>
//         <label>
//             <input placeholder='username' type="text" name='username'/>
//         </label>
//         <label>
//             <input placeholder='Email' type='email' name='email'/>
//         </label>
//         <label>
//             <input placeholder='Password' type='password' name='password'/>
//         </label>
//     </form>

//     </>
//   )
// }

// export default User


import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function MuiForm() {
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }
   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    borderRadius="25px"
                    border={"0.25px solid #ccc"}
                    padding={"60px"}
                    display={"flex"}
                    maxWidth={"450px"}
                    flexDirection={"column"}
                    margin={"100px auto"}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}
                >
                    <Typography textAlign="center" color="primary" variant='h4'>{isSignup ? "Sign up" : "Login"}</Typography>
                    {isSignup && <TextField label="Username" value={formData.username} onChange={handleChange} margin='normal' name='username' placeholder='Enter Name' type='text' />}
                    <TextField variant='outlined' value={formData.email} onChange={handleChange} margin='normal' name='email' placeholder='Enter Email' type='email' />
                    <TextField variant='outlined' value={formData.password} onChange={handleChange} margin='normal' name='password' placeholder='Enter Password' type='password' />
                    <Button sx={{ mt: 2 }} type='submit' variant='contained'>{isSignup ? "Sign up" : "Login"}</Button>
                    <Button sx={{ mt: 2 }} onClick={handleSwitch}>{isSignup ? "Login" : "Sign up"}</Button>
                   
                </Box>
            </form>
        </>
    )
}

export default MuiForm