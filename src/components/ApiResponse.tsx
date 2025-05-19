import React from "react";

interface ApiResponseProps {
  title: string;
  message: any;
}

const ApiResponse: React.FC<ApiResponseProps> = ({ title, message }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <div className="bg-gray-200 w-full rounded-lg flex items-start p-5">
        <p className="text-gray-600 break-words whitespace-pre-wrap overflow-hidden text-sm sm:text-base md:text-base lg:text-base">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ApiResponse;
