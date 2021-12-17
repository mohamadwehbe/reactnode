import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Users() {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/users").then((res)=>{
            setUsers(res.data);
        })
    },[users]);

    const deleteUser = (id)=>{
        axios.delete(`http://localhost:3001/users/${id}`).then((res)=>{
            console.log(res.data);
        });
    }

    const editUser = (id)=>{
        console.log("User id: " + id);
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 ,border:'2px solid #007FFF' }} aria-label="simple table">
        <TableHead style={{backgroundColor:'#007FFF'}}>
          <TableRow>
            <TableCell style={{color:'white',fontSize:18,fontWeight:'bold'}}>Name</TableCell>
            <TableCell style={{color:'white',fontSize:18,fontWeight:'bold'}} align="center">Email</TableCell>
            <TableCell style={{color:'white',fontSize:18,fontWeight:'bold'}} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{fontSize:15,fontWeight:'bold',borderBottom:'2px solid #007FFF'}}
            >
              <TableCell component="th" scope="row" style={{fontSize:15,fontWeight:'bold'}}>
                {user.name}
              </TableCell>
              <TableCell align="center" style={{fontSize:15,fontWeight:'bold'}}>{user.email}</TableCell>
              <TableCell align="center" >
              <Button style={{marginRight:5}} onClick={()=>editUser(user.id)}><EditIcon/></Button>
              <Button style={{marginLeft:5,color:'red'}} onClick={()=>deleteUser(user.id)}><DeleteIcon/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
