// import {useRouter} from 'next/router';
import axios from 'axios';

function Profile({user}) {
    //ou user = props.user;
    // const router = useRouter();
    // console.log(router);
    // return <h1>profile {router.query.id}</h1>;
    return <div>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.username}</p>
    </div>;
}

export async function getStaticProps(context) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users',
    { params: { id: context.params.id } }
    );
    
    const user = await response.data[0];

    return {
      props: { user } , // will be passed to the page component as props
    }
  }

  export async function getStaticPaths() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    
    const users = await response.data;

    const paths = users.map((user) => {
      return { params: { id: String(user.id) } };
    });

    return {
      paths,
      fallback: true,
    };
}

export default Profile;
