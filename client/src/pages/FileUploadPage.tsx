import {
  SharedStyles,
  UploadButton,
  RetryButton,
  CancelButton,
  UploadInput,
  FileList,
  IF,
} from "../components";
import { useFileContext } from "../providers";

export const FileUploadPage = () => {
  const {
    files,
    loading,
    success,
    error,
    handleCancelFileUpload,
    handleLoadFiles,
    handleRemoveFile,
    handleUploadFiles,
  } = useFileContext();

  return (
    <SharedStyles.PageContainer>
      <FileList files={files} onRemoveFile={handleRemoveFile} />
      <IF condition={Boolean(!files.length)}>
        <UploadInput onLoadFiles={handleLoadFiles} />
      </IF>
      <IF condition={Boolean(files.length)}>
        <IF condition={Boolean(!error && !success && !loading)}>
          <UploadButton onUploadFiles={handleUploadFiles} />
        </IF>
        <IF condition={Boolean(loading)}>
          <CancelButton onCancelFileUpload={handleCancelFileUpload} />
        </IF>
        <IF condition={Boolean(error)}>
          <RetryButton onUploadFiles={handleUploadFiles} />
        </IF>
      </IF>
    </SharedStyles.PageContainer>
  );
};
