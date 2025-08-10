import { SidebarProvider } from '@/components/ui/sidebar';
import DashBoardSidebar from '@/module/Dashbaord/ui/DashBoardSidebar';
import React from 'react'
interface Props {
    children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <DashBoardSidebar />
            <main className='flex flex-col h-screen w-screen bg-muted'>
                {children}
            </main>
        </SidebarProvider>
    )
}

export default Layout
