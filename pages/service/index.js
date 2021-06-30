import Head from 'next/head'
import Link from 'next/link'

export default function service() {
  return (
  <div>
    <head>
      <title>บริการของเรา</title>
    </head>
    <div> 
      <h1><center>Service Page</center></h1>
      <br/>
      <center>
      <Link href="/"><a>Home</a></Link> |
      <Link href="/about"><a>Abou</a></Link> |
      <Link href="/service"><a>Service</a></Link> |
      <Link href="/products/P001"><a>Products</a></Link>
      </center>
    </div>
  </div>
  )
}