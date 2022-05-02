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

type RetryButtonProps = {
  onUploadFiles: () => void;
  [key: string]: any;
};

export const RetryButton: FC<RetryButtonProps> = (props) => {
  const { onUploadFiles, ...rest } = props;

  return (
    <Styled.Container>
      <Styled.Button
        type="button"
        id="upload-button"
        onClick={onUploadFiles}
        {...rest}
      >
        Retry
      </Styled.Button>
    </Styled.Container>
  );
};
