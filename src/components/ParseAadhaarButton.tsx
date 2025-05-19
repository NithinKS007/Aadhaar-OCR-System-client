interface ParseAadhaarButtonProps {
  handleSubmit: () => void;
  isSubmitting: boolean;
}

const ParseAadhaarButton: React.FC<ParseAadhaarButtonProps> = ({
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <button
      className="bg-[#2568d3] w-full h-12 rounded-2xl flex justify-center items-center cursor-pointer"
      onClick={handleSubmit}
      disabled={isSubmitting}
    >
      <span className="text-white text-sm font-medium uppercase">
        {isSubmitting ? "Submitting..." : "Parse Aadhaar"}
      </span>
    </button>
  );
};

export default ParseAadhaarButton;
