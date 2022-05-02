export const filesToArray = (files: FileList | null) => Array.from(files || []);

export const filesToFormData = (files: File[]) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append('image', file);
  });

  return formData;
};
