import Link from 'next/link'
import {AiFillContacts, AiOutlineArrowRight} from 'react-icons/ai'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="flex flex-col place-items-center">
        <p className='text-9xl'><AiFillContacts /></p>
        <h1 className='text-5xl	font-bold mb-10'>TfNSW Contacts App</h1>
        <h2 className='text-3xl	font-bold align-middle'><Link href='/contacts'>Show all contacts <AiOutlineArrowRight className='inline-block' /></Link></h2>
      </div>
    </main>
  )
}
