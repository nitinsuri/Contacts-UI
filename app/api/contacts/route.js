import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET () {
  const res = await fetch('http://localhost:4000/users')

  const users = await res.json()

  return NextResponse.json(users, {
    status: 200
  })
}
