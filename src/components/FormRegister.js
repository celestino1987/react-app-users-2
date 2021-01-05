
import React, { useState } from 'react';
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


  const [disabledStatus, setDisabledStatus] = useState(true)
  const [formUser, setFormUser] = useState(user)

  const newDisabled =() => {
    setDisabledStatus(!disabledStatus)
   }

    const classes = useStyles();

    return ( 
      
      <div className="formstyle">
      
          <h3>{user && user.first_name ? 'Editar usuario' : 'Nuevo usuario' }</h3>
          <div> 
          <TextField
            id="standard-full-width-name"
            disabled={disabledStatus}
            value={formUser ? formUser.first_name : ''}
            style={{ margin: 8 }}
            placeholder="Nombre:"
            onChange={e => {
              setFormUser({...formUser, first_name: e.target.value})
            }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            />
            </div>

            <div>
          <TextField
            id="standard-full-width-last-name"
            disabled={disabledStatus}
            value={formUser ? formUser.last_name : ''}
            style={{ margin: 8 }}
            placeholder="Apellido:"
            onChange={e => {
              setFormUser({...formUser, last_name: e.target.value})
            }}
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
            disabled={disabledStatus}
            style={{ margin: 8 }}
            placeholder="Email:"
            value={formUser ? formUser.email : ''}
            onChange={e => {
              setFormUser({...formUser, email: e.target.value})
            }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            />
            </div>
            <Button size="small">Guardar</Button>
           
            <Button type="submit" id="btn" size="small" onClick={newDisabled}>Editar</Button>

           </div> 
     
            )
           
            }
          