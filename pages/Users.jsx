import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';

function Users() {
    const { id } = useParams()

    useEffect(() => {
        console.log(id)
    }, [])
    return (
        <h1>{id}</h1>
    )
}

export default Users;