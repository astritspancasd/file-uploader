import { useState } from "react";
import {
  cancelUploadFileRequest,
  uploadFileRequest,
  uploadInfoRequest,
} from "../api/api";
import { useMachine } from "@xstate/react";
import { filesToArray, filesToFormData } from "../utils";
import { fileMachine } from "../machines/file";

export const useFile = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [fileState, sendToMachine] =
    useMachine(fileMachine);

  const handleLoadFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(filesToArray(event.target.files));
  };

  const handleRemoveFile = (name: string) => {
    setFiles((prevState) => prevState.filter((file) => file.name !== name));
  };

  const handleCancelFileUpload = () => {
    cancelUploadFileRequest();
  };

  const handleUploadFiles = async () => {
    setLoading(true);
    setError(false);

    try {
      const { url, id } = await uploadInfoRequest();

      const formData = filesToFormData(files);
      await uploadFileRequest(url, formData);
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    files,
    success,
    error,
    loading,
    handleCancelFileUpload,
    handleLoadFiles,
    handleRemoveFile,
    handleUploadFiles,
  };
};
