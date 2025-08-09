import { Card } from '@/components/ui/card';
import { Metadata } from 'next';
import Image from 'next/image';
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
            <Card className="flex flex-col md:flex-row w-[80vw] p-2">
                <div className="w-1/2 flex justify-center items-center p-4">
                    
                        {children}
                  
                </div>
                <div className="hidden w-1/2 md:flex flex-col justify-center items-center bg-[#283841]/40 p-4 rounded">
                    <h1 className="text-2xl text-[#283841] font-bold mb-4">Meet AI</h1>
                    <Image
                        src="/logo.svg"
                        alt="logo image"
                        width={550}
                        height={550}
                        className="object-contain"
                    />
                </div>
            </Card>

        </div>
    )
}

export default Layout
