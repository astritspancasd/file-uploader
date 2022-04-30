export const filesToArray = (files: FileList | null) => Array.from(files || []);

export const filesToFormData = (files: File[]) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append(file.name, file);
  });

  return formData;
};
