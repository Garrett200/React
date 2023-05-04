import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import User from "../components/User";
import axios from 'axios';

function Users() {
    const { id } = useParams()
    const [ user, setUser ] = useState({})

    async function fetchUsers() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(data)
        setUser(data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <Link to="/">Go Back</Link>
            <h1>{ user.id }</h1>
            <h1>{ user.name }</h1>
            <h1>{ user.email }</h1>
            <h1>{ user.username }</h1>
        </div>
    )
}

export default Users;