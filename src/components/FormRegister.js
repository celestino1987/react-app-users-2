
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';
import { useUsers } from '../hooks/useUsers';
import accionPost from '../services/accionPost';

const useStyles = makeStyles((theme) => ({

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export function FormRegister({ user = {} }) {

  const classes = useStyles();
  const users = useUsers()


  const [disabledStatus, setDisabledStatus] = useState(true)
  const [formUser, setFormUser] = useState(user)

  const newDisabled = () => {
    setDisabledStatus(!disabledStatus)
  }


  const managerSubmit = () => {
    let c = 0;
    let p = 0;
    let i = 0;
    if (formUser.first_name?.length <= 2 || formUser.last_name?.length <= 2 || formUser.email?.length <= 2) {
      return Swal.fire('Todos los campos  son requeridos y deben  ser mayor  a  2 caracters')
    } else if (!isNaN(formUser.first_name) || !isNaN(formUser.last_name) || !isNaN(formUser.email)) {
      return Swal.fire('El campo no puede  ser un numero ')
    }
    console.log(formUser)
    for (i = 1; i < formUser.email?.length; i++) {

      if (formUser.email.charAt(i - 1) == "@") {
        c++;
      }
      if (c == 1) {
        if (formUser.email.charAt(i - 1) == ".") {
          p++;
        }
      }
    }
    if (c == 1 && p == 1) {

      accionPost(formUser).then(Swal.fire({icon: 'error',
      title: 'Oops...',
      text: 'Usuario completado',
      footer: '<a href>Why do I have this issue?</a>'}))
        .catch(err => console.log(err))

    } else {
      return Swal.fire('su  corrreo  no es  valido')
    }
  }


  return (
    <form>

      <div className="formstyle">

        <h3>{user && user.first_name ? 'Editar usuario' : 'Nuevo usuario'}</h3>
        <div>
          <TextField
            name="name"
            autoComplete="off"
            id="standard-full-width-name"
            disabled={disabledStatus}
            value={formUser ? formUser.first_name : ''}
            style={{ margin: 8 }}
            placeholder="Nombre:"
            onChange={e => {
              setFormUser({ ...formUser, first_name: e.target.value })
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
            name="last_name"
            autoComplete="off"
            id="standard-full-width-last-name"
            disabled={disabledStatus}
            value={formUser ? formUser.last_name : ''}
            style={{ margin: 8 }}
            placeholder="Apellido:"
            onChange={e => {
              setFormUser({ ...formUser, last_name: e.target.value })
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
            name="email"
            autoComplete="off"
            id="standard-full-width"
            disabled={disabledStatus}
            style={{ margin: 8 }}
            placeholder="Email:"
            value={formUser ? formUser.email : ''}
            onChange={e => {
              setFormUser({ ...formUser, email: e.target.value })
            }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <Button onClick={managerSubmit} size="small">Guardar</Button>

        <Button id="btn" size="small" onClick={newDisabled}>Editar</Button>

      </div>
    </form>


  )

}
