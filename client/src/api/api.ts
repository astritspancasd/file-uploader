import { api } from "./config";
import { UPLOAD_FILES_URL } from "./endpoints";
import { POST } from "./methods";

export const uploadFileRequest = (formData: FormData) => {
  return api({
    url: UPLOAD_FILES_URL,
    method: POST,
    data: formData,
  });
};
