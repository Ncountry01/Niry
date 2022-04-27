import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Update({employees, selectedEmployee, setEmployees, setIsEditing}) {

    const id= selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName)
    const [lastName, setLastName]  = useState(selectedEmployee.lastName);
    const  [email, setEmail]   = useState(selectedEmployee.email);
    const  [mobile, setMobile] = useState(selectedEmployee.mobile);
    const  [salary, setSalary] = useState(selectedEmployee.salary);
    const [role, setRole]   = useState(selectedEmployee.role)
    const  [date, setDate]  = useState(selectedEmployee.date);

    

    const handleEdit = (event) => {
        event.preventDefault();

        if(!firstName || !lastName || !email|| !mobile || !role || !salary || !date){
            return Swal.fire({
                icon:'error',
                title:"Error!",
                text: "All fields are required",
                showConfirmButton: true
            });
        }
        
        const employee = {
            id,
            firstName,
            lastName,
            email,
            role,
            salary,
            date
        }
        for(let i =0; i < employees.length; i++) {
            if(employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: "Added!",
            text: `${firstName} ${lastName} data updated`,
            showConfirmButton:false,
            timer: 1500
        });
    }
    return (
        <>
     <div className='small-container'>
    <form onSubmit={handleEdit}>
    <h1>Update Employee Deatils</h1>
    <label>FirstName:</label>
    <input 
    id='firstName'
    type="text"
    name='firstName'
    value={firstName}
    onChange={(event)=> setFirstName(event.target.value)}
     />
     <br/> <br/>

     <label>LastName:</label>
    <input 
    id='lastName'
    type="text"
    name='lastName'
    value={lastName}
    onChange={(event)=> setLastName(event.target.value)}
     />
  <br/> <br/>

     <label>Email Id:</label>
    <input 
    id='email'
    type="email"
    name='email'
    value={email}
    onChange={(event)=> setEmail(event.target.value)}
     />

<br/> <br/>

     <label> Mobile:</label>
    <input 
    id='mobile'
    type="number"
    name='mobile'
    value={mobile}
    onChange={(event)=>setMobile(event.target.value)}
     />

<br/> <br/>

     <label>Salary:</label>
    <input 
    id='salary'
    type="number"
    name='salary'
    value={salary}
    onChange={(event)=>setSalary(event.target.value)}
     />

<br/> <br/>

     <label>Desgination:</label>
    <input 
    id='role'
    type="text"
    name='role'
    value={role}
    onChange={(event)=> setRole(event.target.value)}
     />

<br/> <br/>

     <label>Date:</label>
    <input 
    id='date'
    type="date"
    name='date'
    value={date}
    onChange={(event)=>setDate(event.target.value)}
     />
     <br/> <br/>
     
     <div>
    <input 
    type="submit"
    value="Update"
     />  
      <input 
    type="button"
    value="Cancel"
    onClick={()=> setIsEditing(false)}
     />  
     </div>    
    </form> 

     </div>   

        </>
    )
    
}

export default Update;

