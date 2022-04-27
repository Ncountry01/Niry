import * as React from 'react';
import { Box, Grid, TextField, Button, Typography, Stack } from '@mui/material';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


const UpdateData =() => {

const {id} = useParams()
const navigate = useNavigate();    

const [employee, setEmployee] =useState({
   
    firstName:"",
    lastName:"",
    email: "",
    mobile:"",
    role:"",
    address:"",
    salary:""
})
useEffect(()=>{
    async function getEmployee() {
        try{
            const employee = await axios.get(`http://localhost:3004/employeeList/${id}`)
         setEmployee(employee.data)
         //console.log(employees.data)
        }catch(error) {
            console.log('Not Found')
        }
    }
    getEmployee();

}, [id])

    function onTextfieldChange(event){
        setEmployee({
          ...employee,
          [event.target.name]: event.target.value
        })
      }
     


      async function updateData(event) {
          event.preventDefault()
          try{
           await axios.put(`http://localhost:3004/employeeList/${id}`, employee)   
          navigate('/list')
        }catch(error){
          console.log('Not Update')  
        }
      }

      function handleClick() {
          navigate('/')
      }

      function cancelClick() {
        navigate('/list')
    }

    return (
        <>
 <div>
        <Grid >
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
        Edit/Update Employee Data
      </Typography>
      </Grid>
         <form noValidate>

         <TextField
        id='id'
        name='id'
        label="ID"
        value={id}
      disabled

      />
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
        id='firstName'
        name='firstName'
        label="First Name"
        value={employee.firstName}
        onChange={(event)=>onTextfieldChange(event) }

      />
      <TextField
        helperText=" "
        id='lastName'
        name='lastName'
        label="Last Name"
        value={employee.lastName}
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
        id='email'
        name='email'
        label="Email Id"
        value={employee.email}
        onChange={(event)=>onTextfieldChange(event) }
      />
       <TextField
        helperText=" "
        id='mobile'
        name='mobile'
        label="Mobile No."
        value={employee.mobile}
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
        id='role'
        name='role'
        label="Role"
        value={employee.role}
        onChange={(event)=>onTextfieldChange(event) }
      />
       <TextField
        helperText=" "
        id='address'
        name='address'
        label="Address"
        value={employee.address}
        onChange={(event)=>onTextfieldChange(event) }
      />
      </Box>
      {/**<ServerRequestDatePicker />*/}
      

     <Box  sx={ {bgcolor:'violet'}} >
       <TextField
        label="$-salary"
        name="numberformat"
        id="salary"
        variant="standard"
        onChange={(event)=>onTextfieldChange(event) }
      />
      </Box>
      <br/>
      <Stack direction="row" spacing={3} sx={{display:'flex', justifyContent:'center'}}>
       <Button  variant="contained"
       size='large'
        color="success" 
       type='submit' 
       onClick={(event)=>updateData(event)} >
       Update
       </Button>

       <Button  variant="contained"
       size='large'
        color="warning" 
       onClick={cancelClick} >
       Cancel
       </Button>
       </Stack> 
        </form>
<br/><br/>
        <Button
        variant="contained"
       size='large'
        color="secondary" 
        onClick={handleClick}>
        Back to Home
        </Button>
    </Box>
   
    </Grid>
     </div>

        </>
    )
}

export default UpdateData;