import Image from 'next/image'
import Link from 'next/link';
import { CiPhone, CiMail } from "react-icons/ci";
export default function ContactCard({ contact, view }) {
    const listView = view === 'list';
    const { id, firstName, lastName, email, phone, avatarImage } = contact
    const fullName = `${firstName} ${lastName}`
    return (
        <>
            <Link href={`${listView ? '/contacts/' + id : ''}`}
                className={`bg-gradient-to-b from-slate-100 to-bg-slate-500
                border border-slate-400 rounded
                flex items-center
                ${listView ? 'gap-x-3 transition-transform hover:scale-105 p-2 w-full' : 'flex-col sm:w-full md:w-3/4 lg:w-1/2 p-8'} `}>
                <Image
                    src={avatarImage}
                    alt={'Avatar image of ' + fullName}
                    width={100}
                    height={100}
                    className={`rounded-full ${listView ? 'h-16 w-16' : 'h-48 w-48 mb-8'}`} />
                <h3 class={`font-semibold leading-7 tracking-tight text-gray-900 ${listView ? 'text-base' : 'text-3xl mb-4'}`}>{fullName}</h3>
                {
                    listView ? null : <ul role="list" className='flex flex-col items-center gap-y-2 content-center'>
                        <li><Link href={`tel:${phone}`}><CiPhone className='inline-block mr-1' /> {phone}</Link></li>
                        <li><Link href={`mailto:${email}`}><CiMail className='inline-block mr-1' /> {email}</Link></li>
                    </ul>
                }
            </Link >
        </>
    )
}
