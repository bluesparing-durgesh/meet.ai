"use client";

import { Button } from "@/components/ui/button";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


const Home = () => {
  const { 
    data: session, 
    isPending, 
    error, 
    refetch
} = authClient.useSession() 
const router = useRouter()
  const handleSignOut = async() => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in"); 
        },
      },
    });
 

  }

  return (
<>
<span>{session?.user?.name}</span>
<Button onClick={handleSignOut} >Sign Out</Button>
</>

  );
};

export default Home;

