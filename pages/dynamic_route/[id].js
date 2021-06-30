import React from 'react';
import { useRouter } from 'next/router'

const DinamicRout = () => {
 const router = useRouter();
 const pathData = router.query
 return (
 <h1 style={{ color: "blueviolet", textAlign: "center" }}>
 student name: {pathData.id}<br/>
 code: {pathData.code}
 </h1>
 )
}
export default DynamicRoute