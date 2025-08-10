"use client"

import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
import { BotIcon, StarIcon, VideoIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { usePathname, useSearchParams } from 'next/navigation'
import DashboardUserButton from '@/components/utils/DashboardUserButton'

const firstSection = [
    {
        icon: VideoIcon,
        label: "Meetings",
        href: "/meetings"
    },
    {
        icon: BotIcon,
        label: "Agents",
        href: "/agents"
    }
]

const secondSection = [
    {
        icon: StarIcon,
        label: "Upgrade",
        href: "/upgrade"
    },
]

const DashBoardSidebar = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentUrl = `${pathname}?${searchParams.toString()}`

    const isActive = (href: string) => {
        return currentUrl.startsWith(href)
    }

    return (
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-2 pt-2 hover:opacity-90 transition-opacity"
                >
                    <Image src="./logo.svg" height={36} width={36} alt="Meet AI" />
                    <p className="text-2xl font-semibold">Meet AI</p>
                </Link>
            </SidebarHeader>

            <div className="px-2 py-2">
                <Separator className=" text-black" />
            </div>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map((ele) => (
                                <SidebarMenuItem key={ele.href}>
                                    <Link
                                        href={ele.href}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group
                                            ${isActive(ele.href)
                                                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                                : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                            }`}
                                    >
                                        <ele.icon
                                            className={`size-5 transition-colors 
                                                ${isActive(ele.href)
                                                    ? "text-sidebar-accent-foreground"
                                                    : "text-muted-foreground group-hover:text-sidebar-accent-foreground"
                                                }`}
                                        />
                                        <span className="text-sm font-medium tracking-tight">
                                            {ele.label}
                                        </span>
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <div className="px-2 py-2">
                    <Separator className=" text-black" />
                </div>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {secondSection.map((ele) => (
                                <SidebarMenuItem key={ele.href}>
                                    <Link
                                        href={ele.href}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group
                                            ${isActive(ele.href)
                                                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                                : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                            }`}
                                    >
                                        <ele.icon
                                            className={`size-5 transition-colors 
                                                ${isActive(ele.href)
                                                    ? "text-sidebar-accent-foreground"
                                                    : "text-muted-foreground group-hover:text-sidebar-accent-foreground"
                                                }`}
                                        />
                                        <span className="text-sm font-medium tracking-tight">
                                            {ele.label}
                                        </span>
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <div className="px-2 py-2">
                <Separator className=" text-black" />
            </div>
            <SidebarFooter className='text-white'>
                <DashboardUserButton />
            </SidebarFooter>
        </Sidebar>
    )
}

export default DashBoardSidebar
