import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const products = () => {
    const router = useRouter();
 const pathData = router.query
    return(
        <div>
            <h1>
           <center> Product ID: {pathData.id}</center>
            </h1>
            <br/>
      <center>
      <Link href="/"><a>Home</a></Link> |
      <Link href="/about"><a>Abou</a></Link> |
      <Link href="/service"><a>Service</a></Link> |
      <Link href="/products/P001"><a>Products</a></Link>
      </center>
        </div>
    )
}
export default products