import { FC, Fragment } from "react";
import { FilePreview } from "../FilePreview";
import styled from "styled-components";

const Styled = {
  Container: styled("div")({
    padding: "1rem",
  }),
  Button: styled("button")({
    width: "160px",
    display: "block",
  }),
};

type FileListProps = {
  files: File[];
  onRemoveFile: (name: string) => void;
};

export const FileList: FC<FileListProps> = (props) => {
  const { files, onRemoveFile } = props;

  return (
    <Styled.Container>
      {files.map((file) => (
        <Fragment key={file.name}>
          <FilePreview file={file} />
          <Styled.Button onClick={() => onRemoveFile(file.name)}>
            Remove file
          </Styled.Button>
        </Fragment>
      ))}
    </Styled.Container>
  );
};
