import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function IndexPage() {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      router.replace("/tmp")
    },2000)
  })
  return (
    <div>
      <div className='container'>
        <Image src={"/img/logo.gif"} width={300} height={100} alt="."/>
        <h2>Mengalihkan ke Server Korea</h2>
        <p>Please wait a moment .......
        </p>
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction:column;
          justify-content: center;
          align-items:center;
          text-align: center;
        }
        .container h2{
          font-size: 32px;
          margin-block-end: 0.5rem;
          color: #2e2e2e;
        }
        .container p{
          color: #4f4f4f;
        }
      `}</style>
    </div>
  )
}
