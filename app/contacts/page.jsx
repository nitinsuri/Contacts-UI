import ContactCard from '@/app/Components/ContactCard'
import InnerHeader from '@/app/Components/InnerHeader';

export default async function Contacts() {
    async function getAllUsers() {
        const res = await fetch('http://localhost:4000/users', {
            next: {
                revalidate: 0 // use 0 to opt out of using cache
            }
        })

        return res.json()
    }
    const contacts = await getAllUsers()
    return (
        <main className="flex flex-col items-center p-16  w-full">
            <InnerHeader pageType={'landing'} />
            <ul role="list" className="grid gap-4 text-left w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    contacts.map(contact => {
                        const { id, firstname } = contact;
                        return <li key={id + firstname}><ContactCard contact={contact} view={'list'} /></li>
                    })
                }
            </ul>
        </main>
    )
}
