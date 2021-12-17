import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

export default function TextFieldSizes() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [added,setAdded] = useState(false);

  useEffect(()=>{
      if(added) {
          setName('');
          setEmail('');
          setAdded(false);
      }
  },[added])

  const addUser = ()=>{
    if(name === "" || email === "") {
        alert("fill all fields");
    }
    else {
        const data = {
            name:name,
            email:email
        }
        axios.post("http://localhost:3001/users",data).then(res => {
            console.log(res.data);
        })
        setAdded(true);
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',margin:20}}>
        <TextField
          label="Name"
          id="outlined-size-small"
          size="small"
          style={{border:'1px solid #1976d2',borderRadius:5}}
          value={name}
          onChange={e=>setName(e.target.value)}
        />
        <TextField
          label="Email"
          id="outlined-size-small"
          size="small"
          style={{border:'1px solid #1976d2',borderRadius:5}}
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
        <Button style={{marginRight:5}} onClick={addUser}><AddIcon fontSize='large'/><h2>Add User</h2></Button>
      </div>
    </Box>
  );
}