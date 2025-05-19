import { BiSolidCloudUpload } from "react-icons/bi";
interface AadhaarFrontProps {
  handleFrontImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AadhaarFront: React.FC<AadhaarFrontProps> = ({ handleFrontImageChange }) => {
  return (
    <div className="bg-[#F7F7F7] w-full h-[150px] rounded-xl border border-[#E5E7EB] shadow-sm flex justify-center items-center cursor-pointer">
      <div className="w-full h-full flex justify-center items-center cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="absolute opacity-0 w-full md:w-2/5  h-[150px] cursor-pointer"
          onChange={handleFrontImageChange}
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

export default AadhaarFront;