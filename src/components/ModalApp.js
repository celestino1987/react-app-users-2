import React, { useState } from 'react'
import Modal from 'react-modal';
import { AddButton } from './AddButton';
import { FormRegister } from './FormRegister';

Modal.setAppElement('#root');
export const ModalApp = ({isOpen, selectedUser = {}}) => {

    const closeModal = () => {
    isOpen = false;
    }

    return (
        <>
        <Modal   
            isOpen={isOpen}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal-fondo"     
             
        >
            <FormRegister user={selectedUser}></FormRegister>
        </Modal>
       
        </>
    )
}
