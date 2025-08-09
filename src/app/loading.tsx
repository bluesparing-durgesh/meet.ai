import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r ">
      <div className="flex flex-col items-center">
        <Image
          src='/loading.gif'
          alt="Loading..."
          width='500'

          height='500'
          className="object-contain"
        />

        <p className="mt-6 text-white text-lg font-semibold animate-pulse">
          Loading your experience...
        </p>
      </div>
    </div>
  );
};

export default Loading;
