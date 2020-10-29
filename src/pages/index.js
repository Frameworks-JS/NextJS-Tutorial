import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Index</h1> 
      <Link href='/products'><a>Navegar para produtos</a></Link>
    </div>
  );
}
