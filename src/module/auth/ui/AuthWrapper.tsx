import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import SignInView from "./SignInView";
import SignUpView from "./SignUpView";

interface Props {
    mode: string;
}
const AuthWrapper: React.FC<Props> = ({ mode }) => {

    return (
        <Card
        className={`flex flex-col ${
          mode === "sign-in" ? "md:flex-row-reverse" : "md:flex-row"
        } w-[80vw] p-2 transition-all duration-500 ease-in-out`}
      >
        <div
          className={`w-1/2 flex justify-center items-center p-4 ${
            mode === "sign-in"
              ? "animate-slideInFromRight"
              : "animate-slideInFromLeft"
          }`}
        >
          {mode === "sign-in" ? <SignInView /> : <SignUpView />}
        </div>
      
        <div
          className={`hidden w-1/2 md:flex flex-col justify-center items-center bg-[#3064E8]/40 p-4 rounded ${
            mode === "sign-in"
              ? "animate-slideInFromLeft"
              : "animate-slideInFromRight"
          }`}
        >
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
      

    )
}

export default AuthWrapper
