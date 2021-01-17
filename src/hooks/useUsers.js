
import {useState,useEffect} from 'react'
import petitionUsers from '../services/petitionUsers';

export const useUsers = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        petitionUsers().then((data) => {
            setUsers(data)
        })     
    },[])

    return [users, setUsers]
}

