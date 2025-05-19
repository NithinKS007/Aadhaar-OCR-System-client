import ApiResponse from "../components/ApiResponse";
import ParseAadhaarButton from "../components/ParseAadhaarButton";
import AadhaarFront from "../components/AadhaarFront";
import AadhaarBack from "../components/AadhaarBack";
import { sendImageFile } from "../api/ocr";
import { showErrorToast, showSuccessToast } from "../utils/toast";
import { useFormik } from "formik";
import { imageValidation } from "../utils/validationSchema";
import React, { useState } from "react";
import ImagePreview from "../components/ImagePreview";
import RecaptureFrontButton from "../components/RecaptureFrontButton";
import RecaptureBackButton from "../components/RecaptureBackButton";
import ParsedData from "../components/ParsedData";

interface apiresult {
  success: boolean;
  status: string;
  message: string;
  data: {
    aadhaarNumber: string;
    address: string;
    dob: string;
    gender: string;
    name: string;
    pincode: string;
  };
}
interface FormValues {
  frontSideImage: File | null;
  backSideImage: File | null;
}
interface ImageInput {
  frontImagePreview: string | null;
  backImagePreview: string | null;
}
const HomePage = () => {
  const [images, setImages] = useState<ImageInput>({
    frontImagePreview: null,
    backImagePreview: null,
  });
  const [showApiResponse, setShowApiResponse] = useState<boolean>(false);
  const [aadhaarDetails, setAadhaarDetails] = useState<apiresult | null>(null);

  const handleFrontFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      try {
        formik.setFieldValue("frontSideImage", selectedFile);
        const reader = new FileReader();
        reader.onload = () => {
          setImages({ ...images, frontImagePreview: reader.result as string });
        };
        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Unexpected error:", error);
        const message =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.";
        showErrorToast(message);
        formik.setFieldError("frontSideImage", message);
        event.target.value = "";
      }
    }
  };
  const handleBackFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      try {
        formik.setFieldValue("backSideImage", selectedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages({ ...images, backImagePreview: reader.result as string });
        };
        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Unexpected error:", error);
        const message =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.";
        showErrorToast(message);
        formik.setFieldError("backSideImage", message);
        event.target.value = "";
      }
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      frontSideImage: null,
      backSideImage: null,
    },
    validationSchema: imageValidation,
    onSubmit: async (values) => {
      const { frontSideImage, backSideImage } = values;
      if (frontSideImage && backSideImage) {
        try {
          const formData = new FormData();
          formData.append("frontSideImage", frontSideImage);
          formData.append("backSideImage", backSideImage);
          const response: any = await sendImageFile(formData);
          showSuccessToast(response.message);
          setAadhaarDetails(response);
          setShowApiResponse(true);
        } catch (error) {
          if (error instanceof Error) {
            console.log(`Api Error: ${error.message}`);
            showErrorToast(error.message || "Error uploading images");
            setShowApiResponse(false);
          } else {
            console.log("Unexpected error", error);
            showErrorToast("An unexpected error occurred.");
            setShowApiResponse(false);
          }
        }
      }
    },
  });

  const formatApiResponse = (aadhaarDetails: apiresult) => {
    const { success, status, message, data } = aadhaarDetails;
    const formattedResponse = {
      success: success,
      status: status,
      data: {
        Name: data.name,
        DOB: data.dob,
        Gender: data.gender,
        address: data.address,
        pincode: data.pincode,
        UID: data.aadhaarNumber,
      },
      message: message,
    };

    return <> {JSON.stringify(formattedResponse)}</>;
  };

  return (
    <>
      <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#F7F6F6]">
        <div className="md:w-2/5 bg-[#F7F6F6] space-y-6 p-10 md:flex flex-col items-start h-full">
          <span className="text-gray-800 font-medium">Aadhaar Front</span>
          {images.frontImagePreview ? (
            <>
              <ImagePreview imageSrc={images.frontImagePreview} />
              <div className="flex justify-center w-full">
                <RecaptureFrontButton
                  handleFrontImageChange={handleFrontFileChange}
                />
              </div>
            </>
          ) : (
            <>
              <AadhaarFront handleFrontImageChange={handleFrontFileChange} />
            </>
          )}
          {formik.errors.frontSideImage && formik.touched.frontSideImage && (
            <div className="text-red-500 text-sm">
              {formik.errors.frontSideImage}
            </div>
          )}
          <span className="text-gray-800 font-medium">Aadhaar Back</span>
          {images.backImagePreview ? (
            <>
              <ImagePreview imageSrc={images.backImagePreview} />
              <div className="flex justify-center w-full">
                <RecaptureBackButton
                  handleBackImageChange={handleBackFileChange}
                />
              </div>
            </>
          ) : (
            <>
              <AadhaarBack handleBackImageChange={handleBackFileChange} />
            </>
          )}
          {formik.errors.backSideImage && formik.touched.backSideImage && (
            <div className="text-red-500 text-sm">
              {formik.errors.backSideImage}
            </div>
          )}
          <ParseAadhaarButton
            handleSubmit={formik.handleSubmit}
            isSubmitting={formik.isSubmitting}
          />
        </div>
        <div className="md:h-full border-2 border-gray-300 md:min-h-screen"></div>
        <div className="flex-1 p-10 bg-[#F7F6F6] w-full min-h-screen h-full">
          {showApiResponse && aadhaarDetails ? (
            <>
              <ParsedData
                aadhaarNumber={aadhaarDetails?.data.aadhaarNumber}
                address={aadhaarDetails?.data.address}
                dob={aadhaarDetails?.data.dob}
                gender={aadhaarDetails?.data.gender}
                name={aadhaarDetails?.data.name}
                pincode={aadhaarDetails?.data.pincode}
              />
              <ApiResponse
                title="API Response"
                message={formatApiResponse(aadhaarDetails)}
              />
            </>
          ) : (
            <ApiResponse
              title="API Response"
              message="Start Performing OCR by inputting your Aadhaar front and back"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
