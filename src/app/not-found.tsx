import GoBackBtn from "@/components/utils/GoBackBtn";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-indigo-600 drop-shadow-lg">
          404
        </h1>

        <p className="mt-4 text-2xl text-gray-800 font-semibold">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <GoBackBtn />
      </div>
    </div>
  );
};

export default Custom404;
