import React ,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useUsers } from '../hooks/useUsers';
import { ModalApp } from './ModalApp';
import { getSort } from '../services/getSort';
import { Button } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const ASC = 'asc';
const DESC = 'desc'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const defaultState = {
    users: [],
    copyUsers: []
}
const [state, setState] = useState(defaultState)
const [order, setOrder] = useState(ASC)
const [isOpen, setOpenModal] = useState(false);
const [selectedUser, setSelectedUser] = useState({})

const [users,setUsers] = useUsers()   
useEffect(() => {
    
    setState({ users: users.data, copyUsers: users.data });
}, [])
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  
  const changeUsers = (newUsers) => {
    
    newUsers.tal = newUsers.data.length 
    setState({ users: newUsers.data, copyUsers: newUsers.data });
    setUsers(newUsers)
   
  }
   
  function sortColumn(column) {
    setOrder(order === ASC ? DESC : ASC)
    setState({...state, users: getSort(state.users,column, order)})
    

}
  return (
    <div>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className="cursor">ID</TableCell>
              <TableCell className="cursor" onClick={() => sortColumn('first_name')} >Nombre</TableCell>
              <TableCell className="cursor" onClick={() => sortColumn('last_name')} >Apellido</TableCell>
              <TableCell className="cursor" onClick={() => sortColumn('email')} >Email</TableCell>
            <TableCell>
            <Button  onClick={() => {setOpenModal(true); setSelectedUser(null)}} ><PersonAddIcon></PersonAddIcon> </Button>
            </TableCell>
            <TableCell>
            
            </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>     
                {users.data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user,idx)  => (
                    
                  <TableRow  className="cursor" key={user.id}  onClick={() => {setOpenModal(true); setSelectedUser({...user, idx});}}  >
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.first_name}</TableCell>
                      <TableCell>{user.last_name}</TableCell>                  
                      <TableCell>{user.email}</TableCell>
                  </TableRow>
                  
              ))}
                    
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component='div'
        count={users.data?.length || 0 }
        rowsPerPage={rowsPerPage || 10}
        page={page || 0}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    <ModalApp isOpen={isOpen} setOpenModal={setOpenModal} selectedUser={selectedUser} changeUsers={changeUsers} loadedUsers={users}></ModalApp>
    </div>

  );
}
