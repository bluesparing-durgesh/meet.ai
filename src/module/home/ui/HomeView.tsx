"use client";

import { Button } from "@/components/ui/button";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IUser {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined | undefined;
}
interface Props {
    user: IUser;
}
const HomeView: React.FC<Props> = ({ user }) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleSignOut = async () => {
        setLoading(true);
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth?mode=sign-in");
                },
                onRequest: () => {
                    setLoading(false)
                },
                onError: ({ error }) => {

                    setLoading(false)
                    alert(error.message)
                }
            },
        });


    }
    return (
        <>
            <span>{user?.name}</span>
            <Button disabled={loading} onClick={handleSignOut} >{loading ? "Please Wait..." : "Sign Out"}</Button>
        </>

    );
};



export default HomeView
