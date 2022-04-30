import { useState } from "react";
import { uploadFileRequest } from "../api/api";
import { filesToArray, filesToFormData } from "../utils";

export const useFile = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleLoadFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(filesToArray(event.target.files));
  };

  const handleRemoveFile = (name: string) => {
    setFiles((prevState) => prevState.filter((file) => file.name !== name));
  };

  const handleUploadFiles = async () => {
    const formData = filesToFormData(files);
    await uploadFileRequest(formData);
  };

  return {
    files,
    handleLoadFiles,
    handleRemoveFile,
    handleUploadFiles,
  };
};
