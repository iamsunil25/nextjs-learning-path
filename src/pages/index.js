import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import imgafes   from "../img/covidProjectImage.png"
import { toast } from 'react-toastify'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
	const Show = () => toast.success('Toast is good', { hideProgressBar: true, autoClose: 2000})

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
		
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>


      </Head>
      <main className={styles.main}>
		<img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgv4V3gCvpsXLHsXx6LC2ruTtCLZ0XGbymf1IKBqUIg&s"} />
		<div>
      <a href="https://en.wikipedia.org/wiki/Next.js">NextJS wikipedia</a>
	  <button onClick={()=>Show()}>Show Toast</button>
    </div>


      </main>
    </>
  )
}
