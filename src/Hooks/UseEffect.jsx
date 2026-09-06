import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)

            })
    })
    return (
        <div className='flex min-h-screen justify-center items-center gap-4 flex-col'>
            <h1>Users</h1>
            {
                users.map((user) => (
                    <p key={user.id} className='border p-5 border-gray-200 w-4xl text-center'>

                       Name : {user.name} - email : {user.email} - Username : {user.username} - Phone : {user.phone}

                    </p>
                )

                )
            }

        </div>
    )
}

export default UseEffect