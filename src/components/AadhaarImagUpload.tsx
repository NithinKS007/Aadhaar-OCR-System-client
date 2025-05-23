import { BiSolidCloudUpload } from "react-icons/bi";
import React from "react";

interface AadhaarImageUploadProps {
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const AadhaarImageUpload: React.FC<AadhaarImageUploadProps> = ({
  handleImageChange,
  label,
}) => {
  return (
    <div className="bg-[#F7F7F7] w-full h-[150px] rounded-xl border border-[#E5E7EB] shadow-sm flex justify-center items-center cursor-pointer">
      <div className="w-full h-[150px] flex justify-center items-center cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="absolute opacity-0 md:w-2/5 w-full h-[150px] cursor-pointer"
          onChange={handleImageChange}
          aria-label={`Upload ${label} image`}
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-[#6D81E8] text-4xl relative">
            <BiSolidCloudUpload />
          </span>
          <span className="text-[#6D81E8] text-sm font-medium">
            Click here to Upload/Capture
          </span>
        </div>
      </div>
    </div>
  );
};

export default AadhaarImageUpload;
