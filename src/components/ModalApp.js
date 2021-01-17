import React, { useState } from 'react'
import Modal from 'react-modal';
import   CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { FormRegister } from './FormRegister';
import { Button } from '@material-ui/core';



Modal.setAppElement('#root');

export const ModalApp = ({isOpen, setOpenModal, selectedUser = {}, changeUsers, loadedUsers}) => {

    return (
        <> 
         
        <Modal   
        
            isOpen={isOpen}
            closeTimeoutMS={200}
           setOpenModal={setOpenModal}
            className="modal"
            overlayClassName="modal-fondo"     
             
        > 
           <Button onClick={() => {setOpenModal(false)}}><CloseOutlinedIcon  /></Button>
            <FormRegister user={selectedUser} loadedUsers={loadedUsers} setOpenModal={setOpenModal} changeUsers={changeUsers}></FormRegister>
        </Modal>
       
        </>
    )
}
