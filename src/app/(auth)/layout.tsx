
import { Metadata } from 'next';
import React from 'react'
interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Authentication|meet ai",
    description: "Authentication page of app"
};
const Layout: React.FC<Props> = ({ children }) => {

    return (
        <div className='w-full h-[100vh] flex justify-center items-center p-3 md:p-5'>
            {children}
        </div>
    )
}

export default Layout
