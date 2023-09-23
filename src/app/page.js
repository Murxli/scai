import Image from 'next/image'
import {getServerSession} from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]/route';
import Landing from "./../components/Landing"
import NavBar from "./../components/NavBar"


export default async function Home() {

  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main className="min-h-screen justify-between px-24 py-10">
      <NavBar />
      <div className='mt-28'>
        <Landing />
      </div>
    </main>
  )
}
