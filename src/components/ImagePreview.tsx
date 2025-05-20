import React from "react";
interface ImagePreviewProps {
  imageSrc: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageSrc }) => {
  return (
    <div className="bg-black w-full h-[150px] rounded-xl border border-[#E5E7EB] shadow-sm flex justify-center items-center cursor-pointer">
      <img
        src={imageSrc}
        alt="Aadhaar Front Preview"
        className="w-full h-[149px] object-contain rounded-xl"
      />
    </div>
  );
};

export default ImagePreview;
