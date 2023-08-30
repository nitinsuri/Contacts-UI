import { NextResponse } from 'next/server'

export async function GET (_, { params }) {
  const id = params.id

  const res = await fetch(`http://localhost:4000/users/${id}`)
  const user = await res.json()

  if (!res.ok) {
    return NextResponse.json(
      { error: 'This user does not exist.' },
      {
        status: 404
      }
    )
  }

  return NextResponse.json(user, {
    status: 200
  })
}