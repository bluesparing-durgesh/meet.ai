import { auth } from '@/lib/auth'
import HomeView from '@/module/home/ui/HomeView'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async() => {
const session = await auth.api.getSession({
  headers:await headers()
})
if(!session){
  redirect("/auth?mode=sign-in")
}
session.user
  return (
    <HomeView user={session.user}/>
  )
}

export default Page
