'use client';

import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Search() {
    const [term, setTerm] = useState(null)
    const [searchResult, setSearchData] = useState(null)
    const minSearchTermLength = 2
    const getContactSearchResult = async () => {
        const response = await fetch('http://localhost:4000/users', {
            next: {
                revalidate: 0 // use 0 to opt out of using cache
            }
        })
        return response.json()
    }
    const onChangeHandler = (e) => {
        const userString = e.target.value;
        setTerm(userString)
    }
    useEffect(() => {
        async function showFilteredUsers() {
            if (term?.length > minSearchTermLength) {
                const results = await getContactSearchResult()
                const filteredItems = results.filter(item => {
                    const { firstName, lastName } = item;
                    const fullName = `${firstName} ${lastName}`;
                    return fullName.toLowerCase().includes(term.toLowerCase()) ?? item
                })
                setSearchData(filteredItems)
            } else {
                setSearchData(null);
            }
        }
        showFilteredUsers()
    }, [term])
    return (
        <section id='searchSection' className='self-end relative p-1 bg-gradient-to-b from-slate-100 to-bg-slate-500
        border border-slate-400 rounded z-10'>
            <input type='text' value={term} placeholder='Find a contact, minimum 3 letters' onChange={onChangeHandler} className='text-lg' />
            {
                term?.length > minSearchTermLength && <ul className='absolute border rounded border-slate-400 bg-slate-50 right-0 left-0 w-full top-full p-1 text-lg'>
                    {
                        searchResult?.length > 0 ? searchResult.map(contact => {
                            const { id, firstName, lastName } = contact
                            return <li key={id + firstName}>
                                <Link href={'/contacts/' + id}>{firstName} {lastName}</Link></li>
                        }) : (
                            <li>No data to display</li>
                        )
                    }
                </ul>
            }
        </section >
    )
}
