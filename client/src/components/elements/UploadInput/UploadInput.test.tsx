import { render, screen } from "@testing-library/react";
import { UploadInput } from "./UploadInput";

describe("UploadInput", () => {
  beforeEach(() => {
    render(<UploadInput onLoadFiles={() => {}} />);
  });

  it("should render a label and a file input field", () => {
    expect(screen.getByTestId("file-input")).toBeInTheDocument();
    expect(screen.getByTestId("file-input-label")).toBeInTheDocument();
  });

  it("should attach the label to the input field", () => {
    const id = "file-input";
    expect(screen.getByTestId("file-input-label")).toHaveAttribute("for", id);
    expect(screen.getByTestId("file-input")).toHaveAttribute("id", id);
  });

  it("should not show preview if no image has been selected", () => {
    expect(screen.queryByTitle("img")).not.toBeInTheDocument();
  });
});

export {};
