import { Button, Table } from '@mui/material';
import React, { useEffect, useState } from 'react';

function List ({employees, handleEdit, handleDelete}){

const [employee, setEmployee] = useState([])    

const formatter = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:'USD',
    minimumFractionDigits:null
}) 
/**
useEffect(() => {
    const  getAllEmployee =()=> {
        try{
      const employee = await axios.get('')
      setEmployee(employee.data);
        }catch(error){
  console.log("not found")
        }
    }
getAllEmployee();

}, [])   

const handleDelete = (id) =>{
    const deleteemployee= await axios.delete(`${id}`);
    var newEmployee = employee.filter((item)=>{
        return item.id !== id;
    })
    setEmployee(newEmployee);
}
*/
return (
    <>

<div>

<Table>

<thead>
<tr>
 <th>No. </th>
 <th>First Name</th> 
 <th>Last Name</th>
 <th>Email Id</th>
 <th>Mobile No.</th>
 <th>Salary</th>
 <th>Desgination</th>
 <th>Date</th> 
 <th colSpan={2}>Actions</th> 
</tr>

</thead>
<tbody>

</tbody>
 {employees.length  > 0 ? ( 
     employees.map((employee, i) => (
       <tr key={employee.id}>
<td>{i + 1}</td>
<td>{employee.firstName}</td>
<td>{employee.lastName}</td>
<td>{employee.email}</td>
<td>{employee.mobile}</td>
<td>{formatter.format(employee.salary)}</td>
<td>{employee.role}</td>
<td>{employee.date}</td>
<td> 
<Button onClick={()=> handleEdit(employee.id)}
>Update</Button>
</td>

<td> 
<Button onClick={()=> handleDelete(employee.id)}
>Delete</Button>
</td>
       </tr>  
     ))
     
  ) : (   
      <tr>
      <td colSpan={8}>
      No Employees
      </td>
      </tr>
      )}
</Table>    
</div>
    </>
)

}

export default List;