'use client'

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const GoBackBtn = () => {
    const router = useRouter();
    return (
        <Button
            onClick={() => router.back()}
            className="mt-6 inline-block text-white cursor-pointer px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
        >
            Go Back
        </Button>

    )
}

export default GoBackBtn
