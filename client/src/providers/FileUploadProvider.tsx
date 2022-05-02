import React, { createContext, FC, useContext } from "react";
import { useFile } from "../hooks/file-hook";

type ContextProps = {
  files: File[];
  loading: boolean;
  success: boolean;
  error: boolean;
  handleCancelFileUpload: () => void;
  handleLoadFiles: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveFile: (name: string) => void;
  handleUploadFiles: () => void;
};

const Context = createContext<ContextProps>({
  files: [],
  loading: false,
  success: false,
  error: false,
  handleCancelFileUpload: () => {},
  handleLoadFiles: () => {},
  handleRemoveFile: () => {},
  handleUploadFiles: () => {},
});

export const useFileContext = () => useContext(Context);

type FileUploadProviderProps = {
  children: React.ReactNode;
};

export const FileUploadProvider: FC<FileUploadProviderProps> = (props) => {
  const { children } = props;

  const {
    files,
    loading,
    error,
    success,
    handleCancelFileUpload,
    handleLoadFiles,
    handleRemoveFile,
    handleUploadFiles,
  } = useFile();

  return (
    <Context.Provider
      value={{
        files,
        loading,
        error,
        success,
        handleCancelFileUpload,
        handleLoadFiles,
        handleRemoveFile,
        handleUploadFiles,
      }}
    >
      {children}
    </Context.Provider>
  );
};
