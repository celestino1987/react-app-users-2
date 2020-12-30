import React from 'react'
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
export const AddButton = ({onClick}) => {
    return (
        <div className="openbutton">
             
         
                  <Button onClick={onClick} ><PersonAddIcon></PersonAddIcon> </Button>
           
            
        </div>
    )
}
