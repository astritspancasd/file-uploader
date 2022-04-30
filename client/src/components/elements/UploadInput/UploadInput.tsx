import { FC } from "react";
import styled from "styled-components";

const Styled = {
  Container: styled("div")({
    padding: "1rem",
  }),
  Label: styled("label")({
    fontSize: "1rem",
    display: "block",
    marginBottom: "0.5rem",
  }),
  Input: styled("input")({
    fontSize: "1rem",
  }),
};

type UploadInputProps = {
  onLoadFiles: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UploadInput: FC<UploadInputProps> = (props) => {
  const { onLoadFiles } = props;

  return (
    <Styled.Container>
      <Styled.Label htmlFor="upload-input">Upload file</Styled.Label>
      <Styled.Input
        type="file"
        id="upload-input"
        multiple
        onChange={onLoadFiles}
      />
    </Styled.Container>
  );
};
