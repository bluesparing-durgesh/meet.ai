import { authClient } from '@/lib/auth-client'

import React from 'react'
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger

} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { ChevronDown, CreditCardIcon, LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DashboardUserButton = () => {
    const { data, isPending } = authClient.useSession();

    const router = useRouter()
    const handleSignOut = async () => {

        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth?mode=sign-in");
                },
                onRequest: () => {

                },
                onError: ({ error }) => {


                    alert(error.message)
                }
            },
        });


    }
    if (isPending || !data?.user) {
        return null;
    }
    return (

        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex gap-x-1 items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden cursor-pointer">
                <Avatar >
                    {data.user?.image && (
                        <AvatarImage
                            src={data.user.image}
                            alt={data.user.name || "User"}
                        />
                    )}
                    <AvatarFallback className="bg-gray-800 text-white font-bold">
                        {data.user?.name?.charAt(0)?.toUpperCase() || "?"}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
                    <span className='text-sm truncate w-ull'>{data.user.name}</span>
                    <span className='text-xs truncate w-ull'>{data.user.email}</span>
                </div>
                <ChevronDown className='size-4 shrink-0' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' side='right' className='w-72'>
                <DropdownMenuLabel>
                    <div className="flex flex-col gap-1">
                        <span className='font-medium truncate '>{data.user.name}</span>
                        <span className='font-normal text-sm text-muted-foreground truncate w-ull'>{data.user.email}</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className='cursor-pointer flex items-center justify-between'>
                    Billing
                    <CreditCardIcon className='size-4'/>
                </DropdownMenuItem>
                <DropdownMenuItem  onClick={handleSignOut} className='cursor-pointer flex items-center justify-between'>
                    Logout
                    <LogOutIcon className='size-4'/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>


    )
}

export default DashboardUserButton
