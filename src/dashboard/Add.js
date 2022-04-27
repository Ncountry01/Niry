import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

function Add({employees, setEmployees, setIsAdding}) {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName]  = useState('');
    const  [email, setEmail]   = useState('');
    const  [mobile, setMobile] = useState('');
    const  [salary, setSalary] = useState('');
    const [role, setRole]   = useState('')
    const  [date, setDate]  = useState('');



    const textInput = useRef(null);


    useEffect (() => {
        textInput.current.focus();
    }, [])


    const handleAdd = (event) => {
        event.preventDefault();
        if(!firstName || !lastName || !email|| !mobile || !role || !salary || !date){
            return Swal.fire({
                icon:'error',
                title:"Error!",
                text: "All fields are required",
                showConfirmButton: true
            });
        }

        const id = employees.length + 1 ;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            mobile,
            role,
            salary,
            date
        }

        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: "Added!",
            text: `${firstName} ${lastName} data added`,
            showConfirmButton:false,
            timer: 1500
        });
    }
    return (
        <>
     <div className='small-container'>
    <form onSubmit={handleAdd}>
    <h1>Add Employee Deatils</h1>
    <label>FirstName:</label>
    <input 
    id='firstName'
    type="text"
    name='firstName'
    ref={textInput}
    value={firstName}
    onChange={(event)=> setFirstName(event.target.value)}
     />
     <br/> <br/>

     <label>LastName:</label>
    <input
    id='lastname'
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
    value="Add"
     /> 
         <input 
    type="button"
    value="cancel"
    onClick={() => setIsAdding(false)}
     />   
     </div>    
    </form> 

     </div>   

        </>
    )
    
}

export default Add;


