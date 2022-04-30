import { FC } from "react";
import styled from "styled-components";
import { useFilePreview } from "../../../hooks/file-preview-hook";

const Styled = {
  Container: styled("div")({
    margin: "1rem 0",
  }),
  Image: styled("img")({
    width: "100%",
    height: "200px",
    objectFit: "cover",
  }),
};

type FilePreviewProps = {
  file: File;
};

export const FilePreview: FC<FilePreviewProps> = (props) => {
  const { file } = props;

  const { preview, loading } = useFilePreview({ file });

  return (
    <Styled.Container>
      {loading ? <div>Loading...</div> : <Styled.Image src={preview} />}
    </Styled.Container>
  );
};
