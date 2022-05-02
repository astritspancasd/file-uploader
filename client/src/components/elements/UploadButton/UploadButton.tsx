import { FC } from "react";
import styled from "styled-components";

const Styled = {
  Container: styled("div")({
    padding: "1rem",
  }),
  Button: styled("button")({
    fontSize: "1rem",
    display: "block",
    width: "100%",
  }),
};

type UploadButtonProps = {
  onUploadFiles: () => void;
  [key: string]: any;
};

export const UploadButton: FC<UploadButtonProps> = (props) => {
  const { onUploadFiles, ...rest } = props;

  return (
    <Styled.Container>
      <Styled.Button
        type="button"
        id="upload-button"
        onClick={onUploadFiles}
        {...rest}
      >
        Upload
      </Styled.Button>
    </Styled.Container>
  );
};
