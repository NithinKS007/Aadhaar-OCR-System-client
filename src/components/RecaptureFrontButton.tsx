import { FiCamera } from "react-icons/fi";
interface RecaptureFrontButton {
     handleFrontImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const RecaptureFrontButton: React.FC<RecaptureFrontButton> = ({handleFrontImageChange}) => {
  return (
    <button className="w-2/4 flex justify-center items-center bg-gray-400 text-white px-6 py-3 rounded-full text-sm  cursor-pointer">
        <input
          id="back-upload"
          type="file"
          accept="image/*"
          className="absolute opacity-0 flex justify-center items-center bg-gray-400 text-white px-6 py-3 rounded-full text-sm cursor-pointer"
          onChange={handleFrontImageChange}
        />
      <FiCamera className="mr-2 cursor-pointer" size={20} />
      Press to Re-capture/Upload
    </button>
  );
};

export default RecaptureFrontButton;
