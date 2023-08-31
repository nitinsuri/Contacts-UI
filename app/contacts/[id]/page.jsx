import ContactCard from '@/app/Components/ContactCard';
import InnerHeader from '@/app/Components/InnerHeader';

export default async function Contacts({ params }) {
    const id = params.id;
    async function getUserById() {
        const res = await fetch('http://localhost:4000/users/' + id, {
            next: {
                revalidate: 0 // use 0 to opt out of using cache
            }
        })

        return res.json()
    }
    const contact = await getUserById()
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 w-full">
            <InnerHeader pageType={'details'} />
            <ContactCard contact={contact} view={'single'} />
        </main>
    )
}
