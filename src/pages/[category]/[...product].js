import Link from "next/link";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  console.log(router);
  
  return (
        <div>
    
          <h1>{`${router.query.category} - ${router.query.product}`}</h1> 
          
          <Link href='../products'><a>Navegar para produtos</a></Link>
        </div>
      );
}