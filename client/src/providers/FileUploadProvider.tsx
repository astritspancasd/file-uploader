import React, { createContext, FC, useContext } from "react";
import { useFile } from "../hooks/file-hook";

type ContextProps = {
  files: File[];
  handleLoadFiles: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveFile: (name: string) => void;
  handleUploadFiles: () => void;
};

const Context = createContext<ContextProps>({
  files: [],
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

  const { files, handleLoadFiles, handleRemoveFile, handleUploadFiles } = useFile();

  return (
    <Context.Provider value={{ files, handleLoadFiles, handleRemoveFile, handleUploadFiles }}>
      {children}
    </Context.Provider>
  );
};
