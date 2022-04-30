import { useState, useEffect } from "react";

type UseFilePreviewProps = {
  file: File;
};

export const useFilePreview = (props: UseFilePreviewProps) => {
  const { file } = props;

  const [preview, setPreview] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        setPreview(e.target?.result as string);
        setLoading(false);
      };

      fileReader.readAsDataURL(file);
    }
  }, [file]);

  return {
    preview,
    loading,
  };
};
