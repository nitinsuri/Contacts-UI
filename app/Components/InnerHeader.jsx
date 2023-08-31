import { AiFillContacts } from 'react-icons/ai';
import BackButton from './BackButton'
import Search from './Search'

export default function InnerHeader({ pageType }) {
    return (
        <>
            <div className="relative flex flex-col md:flex-row gap-2 items-center mb-4">
                <p className='text-5xl'><AiFillContacts /></p>
                <h1 className='text-2xl	font-bold'>TfNSW Contacts App</h1>
            </div>
            <div className='relative flex flex-col md:flex-row justify-between w-full mb-4'>
                <BackButton pageType={pageType} />
                <Search />
            </div>
        </>
    )
}
