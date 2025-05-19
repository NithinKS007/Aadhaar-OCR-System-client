import axiosInstance from "../config/axios";

const sendImageFile = async (aadhaarImages:FormData) => {
  const response = await axiosInstance.post("aadhaar/extract",aadhaarImages);
  return response.data;
};

export { sendImageFile };
