
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Modal } from '@material-ui/core';
import Swal from 'sweetalert2';
import { useUsers } from '../hooks/useUsers';
import accionPost from '../services/accionPost';
import { ModalApp } from './ModalApp';



const useStyles = makeStyles((theme) => ({
  
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export function FormRegister({user, selectedUser, loadedUsers, setOpenModal, changeUsers}) {
  
 

  let newUser = true;
  const [formUser, setFormUser] = useState(user || {first_name: '', email: '', last_name: ''})
  const [disabledStatus, setDisabledStatus] = useState(true)
  

  const newDisabled = () => {
    setDisabledStatus(!disabledStatus)
  }


  if(user?.first_name){
    newUser = false
    setTimeout(() => {
      document.getElementById("btn").style.display="block"
    }, 0);
    
  }
  if(newUser){
    setTimeout(()=>{

      setDisabledStatus(false)

    })
  }  

  function validationForm  (){
    let c = 0;
    let p = 0;
    let i = 0;

    if (!formUser) {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los  campos  son requeridos'
        })
    }
    if (formUser.first_name?.length <= 2 || formUser.last_name?.length <= 2 || formUser.email?.length <= 2) {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los  campos  son requeridos'

        })
    } else if (!isNaN(formUser.first_name) || !isNaN(formUser.last_name) || !isNaN(formUser.email)) {

        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo requerido no debe ser solo numerico'

        })
    }

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
    } else {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'su  correo no es  valido'
        })
    }
    if (user && user.first_name) {
        Swal.fire(
            {
                icon: 'success',
                title: 'usuario editado',
                showConfirmButton: false,
                timer: 1500
            })
         
            loadedUsers.data[user.idx] = formUser

            loadedUsers.total = loadedUsers.data.length;
  
         
            changeUsers(loadedUsers);
        // obtener la id del que has cambiado y cambiarlo en el array y después llamar a ChangeUsers
    } else {
        <ModalApp  setOpenModal={setOpenModal} />

        accionPost(formUser).then(Swal.fire(
            {
                icon: 'success',
                title: 'usuario completado',
                showConfirmButton: false,
                timer: 1500
            }))
       
        loadedUsers.data.push({ ...formUser, id: loadedUsers.data.length + 1 })
        loadedUsers.total = loadedUsers.data.length;
       console.log( loadedUsers.data)

        changeUsers(loadedUsers);
        
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
        <Button onClick={() => {validationForm(); setOpenModal(false) }}size="small">Guardar</Button>
        <Button  id="btn" size="small" onClick={newDisabled}>Editar</Button>
      
      </div>
      
    </form>

)


}



 