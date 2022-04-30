import {
  SharedStyles,
  UploadButton,
  UploadInput,
  FileList,
  IF,
} from "../components";
import { useFileContext } from "../providers";

export const FileUploadPage = () => {
  const { files, handleLoadFiles, handleRemoveFile, handleUploadFiles } = useFileContext();

  return (
    <SharedStyles.PageContainer>
      <FileList files={files} onRemoveFile={handleRemoveFile} />
      <IF condition={Boolean(!files.length)}>
        <UploadInput onLoadFiles={handleLoadFiles} />
      </IF>
      <IF condition={Boolean(files.length)}>
        <UploadButton onUploadFiles={handleUploadFiles}/>
      </IF>
    </SharedStyles.PageContainer>
  );
};
