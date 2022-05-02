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
  onCancelFileUpload: () => void;
  [key: string]: any;
};

export const CancelButton: FC<UploadButtonProps> = (props) => {
  const { onCancelFileUpload, ...rest } = props;

  return (
    <Styled.Container>
      <Styled.Button
        type="button"
        id="upload-button"
        onClick={onCancelFileUpload}
        {...rest}
      >
        Cancel
      </Styled.Button>
    </Styled.Container>
  );
};
