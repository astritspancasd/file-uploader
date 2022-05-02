import { api } from "./config";
import { UPLOAD_INFO_URL } from "./endpoints";
import { POST } from "./methods";

const options = {
  controller: new AbortController(),
};

export const uploadFileRequest = (url: string, formData: FormData) => {
  return api({
    url,
    method: POST,
    data: formData,
    signal: options.controller.signal,
  });
};

export const cancelUploadFileRequest = () => {
  options.controller.abort();
  options.controller = new AbortController();
};

export const uploadInfoRequest = async () => {
  return await (
    await api({
      url: UPLOAD_INFO_URL,
    })
  ).data;
};
