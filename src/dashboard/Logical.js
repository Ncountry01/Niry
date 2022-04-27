
import React, { useState } from "react";
import Swal from "sweetalert2";
import Add from "./Add";
import Header from "./header";
import List from "./List";
import Update from "./Update";

import { employeesData } from "../data/Data";




function DashBoard() {

const [employees, setEmployees] = useState(employeesData);
const [selectedEmployee, setSelectedEmployee] = useState(null)
const [isAdding, setIsAdding] = useState(false);
const [isEditing, setIsEditing] = useState(false) ;

const handleEdit =(id) => {
    const [employee] = employees.filter(employee => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
}

const handleDelete = (id) => {
    Swal.fire({
        icon:'warning',
        title:'Are you sure?',
        text:"You won't be able to revert this!",
        showCancelButtonText: 'Yes, delete it!',
        cancelButtonText:'No, cancel!',
    })
    .then(result => {
        if(result.value) {
            const [employee] = employees.filter(employee => employee.id !==id)

            Swal.fire({
                icon:'success',
                title:'Deleted!',
                text:`${employee.firstName} ${employee.lastName} data deleted!`,
                showConfirmButton:false,
                timer:1500,
            })
        setEmployees(employees.filter(employee => employee.id !==id));    
        }
    });
}
return (

    <>
<div>
{/**List */}
{!isAdding && !isEditing && (
    <div>
    <Header 
    setIsAdding = {setIsAdding}
     />
     <List
      employees={employees}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      />
    </div>
) }

{/**Add */}

{isAdding && (
    <Add 
      employees={employees}
      setEmployees={setEmployees}
      setIsAdding={setIsAdding}
      />
)}

{/**Edit */}

{isEditing && (
    <Update 
    employees ={employees} 
    selectedEmployee={selectedEmployee}
    setEmployees={setEmployees}
    setIsEditing= {setIsEditing}

    />
)}
</div>

    </>
)
}

export default DashBoard;