import { FiCamera } from "react-icons/fi";
import React from "react";

interface RecaptureButtonProps {
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const RecaptureButton: React.FC<RecaptureButtonProps> = ({ handleImageChange, label }) => {
  return (
    <button className="w-2/4 flex justify-center items-center bg-gray-400 text-white px-6 py-3 rounded-full text-sm cursor-pointer">
      <input
        type="file"
        accept="image/*"
        className="absolute opacity-0 flex justify-center items-center bg-gray-400 text-white px-6 py-3 rounded-full text-sm cursor-pointer"
        onChange={handleImageChange}
        aria-label={`Re-capture or upload ${label} image`}
      />
      <FiCamera className="mr-2 cursor-pointer" size={20} />
      Press to Re-capture/Upload
    </button>
  );
};

export default RecaptureButton;