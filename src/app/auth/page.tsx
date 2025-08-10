
import { auth } from '@/lib/auth';
import AuthWrapper from '@/module/auth/ui/AuthWrapper';
import SignUpView from '@/module/auth/ui/SignUpView'

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props {
    searchParams: { [key: string]: string | string[] | undefined };
}

const Page: React.FC<Props> = async ({ searchParams }) => {

    const mode = searchParams.mode || "sign-in";
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!!session) {
        redirect("/")
    }
    return (
        <AuthWrapper mode={mode as string} />

    )
}

export default Page