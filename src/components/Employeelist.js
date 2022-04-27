import * as React from 'react';
import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import SearchApp from '../component/Searchbar';

 function EmployeesList() {
  const [employees, setEmployees] = useState([])




useEffect(()=> {
   async function getAllEmployee() {
       try{
     const employees = await axios.get("http://localhost:3004/employeeList")
      console.log(employees.data)
     setEmployees(employees.data)
       }catch(error) {
           console.log('Not found')
       }
   }
   getAllEmployee();


}, [])


const  handleDelete = async(id)=> {
await axios.delete(`http://localhost:3004/employeeList/${id}`)
var newemployee = employees.filter((item)=> {
  return  item.id !== id;
})
setEmployees(newemployee);
}

  return (
    <>
  <Box textAlign="center" p={2}>
    <Typography variant="h4">Employee List</Typography>
    <SearchApp />
   </Box>
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" >No</TableCell>
       <TableCell align="center" >First Name</TableCell>
       <TableCell align="center" >Last Name</TableCell>
       <TableCell align="center" >Email</TableCell>
       <TableCell align="center" >mobile</TableCell>
       <TableCell align="center" >Desgination</TableCell>
       <TableCell align="center" >Salary</TableCell>
       <TableCell align="center" >Full Name</TableCell>
       <TableCell align="center" >Action</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {
       employees.map((employee, i) => {
        return (
         <TableRow key={i}>
          <TableCell align="center">{i + 1}</TableCell>
          <TableCell align="center">{employee.firstName}</TableCell>
          <TableCell align="center">{employee.lastName}</TableCell>
          <TableCell align="center">{employee.email}</TableCell>
          <TableCell align="center">{employee.mobile}</TableCell>
          <TableCell align="center">{employee.role}</TableCell>
          <TableCell align="center">{employee.salary}</TableCell>
          <TableCell align="center">{employee.firstName} {employee.lastName}</TableCell>
           
           <TableCell>
           <Stack direction="row">
          <Button 
          variant="contained"
       size='small'
        color="success"
         >
         <Link to={`/update/${employee.id}`} 
         style={{textDecoration:'none', color:'white'}}>
          Edit
          </Link>
          </Button>
          <Button 
            variant="contained"
       size='small'
        color="error" 
          onClick={()=>handleDelete(employee.id)}>
          Delete
          </Button>
          </Stack>
          </TableCell>
         </TableRow>
        )
       })
      }

     </TableBody>
    </Table>
   </TableContainer>

    </>
  );
}
export default EmployeesList;