import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
  <div>
    <head>
      <title>เกี่ยวกับเรา</title>
    </head>
    <div> 
      <h1><center>Abou page</center></h1>
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