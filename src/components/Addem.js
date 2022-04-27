import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, Stack } from '@mui/material';
import { Typography } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Home from '../Navbar/Home';
//import { borderLeft, borderColor } from '@mui/system';

function AddEmployee() {
  const navigate = useNavigate();
const [employees, setEmployees] = useState({
  firstName:"",
  lastName:"",
  email: "",
  mobile:"",
  role:"",
  address:"",
  salary:""
  
})

const [status, setStatus] = useState();

/**OnChange Text field */

function onTextfieldChange(event){
  setEmployees({
    ...employees,
    [event.target.name]: event.target.value
  })
}

/**Create post request */
  async function submitData (event){
    event.preventDefault();
    try{
    await axios.post(`http://localhost:3004/employeeList`, employees);
    setStatus(true)
    //console.log(employees.data)
    }catch(error){
   console.log("sonthing went wrong")
    }
  }

  function handleClick() {
    navigate('/')
}
function cancelClick() {
  navigate('/list')
}

  if(status) {
    return <Home/>
  }
    return (
        <>
        <div>
        <Grid border='thick' borderColor='black'>
        <Box
      sx={{
        display: 'flex',
        flexDirection:"column",
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
        
        <Grid>
        <Typography variant="h5" gutterBottom component="div">
        Add Employee Data
      </Typography>
        </Grid>
         <form noValidate>
    <Box  
      sx={{
        display: 'flex',
        flexDirection:"row",
        alignItems: 'center',
        bgcolor:'violet',
        '& > :not(style)': { m: 1 },
      }}
     >

      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        name='firstName'
        label="First Name"
        onChange={(event)=>onTextfieldChange(event) }

      />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        name='lastName'
        label="Last Name"
        onChange={(event)=>onTextfieldChange(event) }
      />
      </Box>

      <Box  
        sx={{
        display: 'flex',
        flexDirection:"row",
        alignItems: 'center',
        bgcolor:'violet',
        '& > :not(style)': { m: 1 },
      }}
      >
       <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        name='email'
        label="Email Id"
        onChange={(event)=>onTextfieldChange(event) }
      />
       <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        name='mobile'
        label="Mobile No."
        onChange={(event)=>onTextfieldChange(event) }
      />
      </Box>
      <Box  
           sx={{
        display: 'flex',
        flexDirection:"row",
        alignItems: 'center',
        bgcolor:'violet',
        '& > :not(style)': { m: 1 },
      }}
      >
       <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        name='role'
        label="Role"
        onChange={(event)=>onTextfieldChange(event) }
      />
       <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        name='address'
        label="Address"
        onChange={(event)=>onTextfieldChange(event) }
      />
      </Box>
      {/**<ServerRequestDatePicker />*/}
      

     <Box sx={{ bgcolor:'violet',}}>
       <TextField
        label="$-salary"
        name="numberformat"
        id="formatted-numberformat-input"
        variant="standard"
        onChange={(event)=>onTextfieldChange(event) }
      />
      </Box> 
      <br/> <br/>
      <Stack direction="row" spacing={4} sx={{display:"flex", justifyContent:'center'}}  >
       <Button size='large' variant="contained" 
       type='submit' onClick={(event)=>submitData(event)} >
       Add Employee</Button>
       
       <Button
        variant="contained"
       size='large'
        color="warning" 
        onClick={cancelClick}>
        Cancel
        </Button>
       </Stack>
        </form>
    </Box>
    <br/><br/>
    <Button
        variant="contained"
       size='large'
        color="secondary" 
        onClick={handleClick}>
        Back to Home
        </Button>
   
    </Grid>
     </div>
        </>
    )
}

export default AddEmployee;