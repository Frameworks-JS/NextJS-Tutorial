import {useRouter} from 'next/router';
import axios from 'axios';
import { User } from '../../../api/User';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

export interface UserProps {
  user: User;
}

// function Profile({user} : UserProps) {
function Profile({user} : InferGetStaticPropsType<typeof getStaticProps>) {
    //ou user = props.user;
    const router = useRouter();

    if(router.isFallback) return <h1>Carregando...</h1>;
    
    // console.log(router);
    // return <h1>profile {router.query.id}</h1>;
    return <div key={user.id}>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.username}</p>
    </div>;
}

export const getStaticProps: GetStaticProps<UserProps> = async (context) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users',
    { params: { id: context.params.id } }
    );
    
    const user = await response.data[0];

    //simulando um timeout
    // await new Promise( res => setTimeout(res,4000));

    let tempo_segundos = 10; //tempo de cache, ISG
    return {
      props: { user, revalidate: tempo_segundos } , // will be passed to the page component as props
    }
  }

  // export async function getStaticPaths() { //sem tipagem TS
export const getStaticPaths: GetStaticPaths = async () => { 
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    
    const users = await response.data.slice(0,5);

    const paths = users.map((user) => {
      return { params: { id: String(user.id) } };
    });

    return {
      paths,
      fallback: true,
    };
}

export default Profile;

//Video desta parte https://youtu.be/Z27sJSFZ9k8?list=PLkFMdTTdI9c2js2bPRUhChVA0jdI-358s