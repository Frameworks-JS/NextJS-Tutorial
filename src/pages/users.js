import React, { useEffect } from 'react';

//Server Side Render
import axios from 'axios';

function Users({users}) {
    return (
        <div>
            {users.map((user) => (
              <div>{user.name}</div>  
            ))}
        </div>
    );
}

export async function getServerSideProps(context) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await response.data;

    return {
        props: { users: data},
    }
}

export default Users;
