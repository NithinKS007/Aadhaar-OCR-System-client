import * as Yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/webp"];

const imageValidation = Yup.object().shape({
  frontSideImage: Yup.mixed<File>()
    .required("Front side image is required")
    .test("fileSize", "File too large", (value) => {
      return value ? (value as File).size <= MAX_FILE_SIZE : false;
    })
    .test("fileFormat", "Unsupported file format", (value) => {
      return value ? SUPPORTED_FORMATS.includes((value as File).type) : false;
    }),

  backSideImage: Yup.mixed<File>()
    .required("Back side image is required")
    .test("fileSize", "File too large", (value) => {
      return value ? (value as File).size <= MAX_FILE_SIZE : false;
    })
    .test("fileFormat", "Unsupported file format", (value) => {
      return value ? SUPPORTED_FORMATS.includes((value as File).type) : false;
    }),
});

export { imageValidation };
