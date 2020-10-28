import React, { useEffect } from 'react';
import Link from 'next/link'

//Server Side Generator
import axios from 'axios';

function Users({users}) {
    // console.log(users);
    return (
        <div>
            {users.map((user) => (
                
              <div>
                  
                  <Link href='/profile/[id]' as={`profile/${user.id}`}>
                      <a>{user.id} / {user.name}</a>
                  </Link>
              </div>  
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
