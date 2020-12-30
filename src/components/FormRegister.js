
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));


export  function FormRegister({user = {}}) {

  console.log(user);

    const classes = useStyles();

    return ( 
      
      <div className="formstyle">
      
          <h3>{user && user.first_name ? 'Editar usuario' : 'Nuevo usuario' }</h3>
          <div> 
          <TextField
            id="standard-full-width"
            
            value={user ? user.first_name : ''}
            style={{ margin: 8 }}
            placeholder="Nombre:"
            
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            />
            </div>

            <div>
          <TextField
            id="standard-full-width"
           
            value={user ? user.last_name : ''}
            style={{ margin: 8 }}
            placeholder="Apellido:"
            
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            />
            </div>

            <div>
          <TextField
            id="standard-full-width"
           
            style={{ margin: 8 }}
            placeholder="Email:"
            value={user ? user.email : ''}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            />
            </div>
            <Button className="m-3">Guardar</Button>
           </div> 
     
            )
            }