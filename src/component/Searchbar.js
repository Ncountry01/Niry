import * as React from 'react'
import { Box, TextField, Button } from '@mui/material'
import axios from 'axios'
import {useState, useEffect} from 'react'



const SearchApp =()=> {
const [searchdata, setSearchData] = useState(null)
const [noData] = useState(false)
useEffect(()=> {

async function search(key) {
    
    await axios.get('http://localhost:3004/employeeList' + key).then((data)=>{ 
    data.json().then((res)=> {
        setSearchData({searchdata:res})
        if(res.length > 0)
        {
            setSearchData({searchdata:res})
        }else{
            setSearchData({noData:true, searchdata:null})
        }
    })  
    })
}
search()
}, [])

function handleTextfield(event) {
    event.preventDefault()
    setSearchData({searchdata})
}

return (<>
<Box>
    <TextField
    autoComplete=''
   label='Search'
   name='search'
   onChange={(event) => handleTextfield(event.target)}


    />
   <Button>Search</Button>
</Box>
{
    searchdata ?
    <div>
        {
            searchdata.map((item) =>{
            return(
                <>
                    <div>{item.name}</div>
                </>

            )
            })
        }
    </div>
    : ""
}

{
    noData ? <h3>No Data</h3>
:""
}

</>)    
}

export default SearchApp