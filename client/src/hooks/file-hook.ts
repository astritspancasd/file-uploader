import { useReducer } from "react";
import {
  cancelUploadFileRequest,
  uploadFileRequest,
  uploadInfoRequest,
} from "../api/api";
import { filesToArray, filesToFormData, SnackbarUtils } from "../utils";

const LOAD_FILES = "LOAD_FILES";
const REMOVE_FILE = "REMOVE_FILE";
const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
const UPLOAD_ERROR = "UPLOAD_ERROR";
const LOADING = "LOADING";

const UPLOAD_SUCCESS_MESSAGE = "Files uploaded successfully";
const UPLOAD_ERROR_MESSAGE = "Something went wrong";
const UPLOAD_CANCEL_MESSAGE = "Upload Cancellerd";

const removeFile = (name: string): Action => ({
  type: REMOVE_FILE,
  payload: { name },
});

const loadFiles = (files: File[]): Action => ({
  type: LOAD_FILES,
  payload: { files },
});

const setLoading = (): Action => ({
  type: LOADING,
});

const setError = (): Action => ({
  type: UPLOAD_ERROR,
});

const setSuccess = (): Action => ({
  type: UPLOAD_SUCCESS,
});

interface IState {
  files: File[];
  error: boolean;
  success: boolean;
  loading: boolean;
}

type Action =
  | { type: "LOAD_FILES"; payload: { files: File[] } }
  | { type: "REMOVE_FILE"; payload: { name: string } }
  | { type: "UPLOAD_SUCCESS" }
  | { type: "UPLOAD_ERROR" }
  | { type: "LOADING" };

const initialState: IState = {
  files: [],
  error: false,
  success: false,
  loading: false,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_FILES:
      return {
        ...state,
        files: action.payload.files,
      };
    case REMOVE_FILE:
      return {
        ...state,
        files: { ...state }.files.filter(
          (file) => file.name !== action.payload.name
        ),
      };
    case LOADING:
      return {
        ...state,
        error: false,
        success: false,
        loading: true,
      };
    case UPLOAD_ERROR:
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        files: [],
        error: false,
        success: true,
        loading: false,
      };
    default:
      return state;
  }
};

export const useFile = () => {
  const [{ files, error, success, loading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleLoadFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loadFiles(filesToArray(event.target.files)));
  };

  const handleRemoveFile = (name: string) => {
    dispatch(removeFile(name));
  };

  const handleCancelFileUpload = () => {
    cancelUploadFileRequest();
    SnackbarUtils.warning(UPLOAD_CANCEL_MESSAGE);
  };

  const handleUploadFiles = async () => {
    dispatch(setLoading());

    try {
      const response = await uploadInfoRequest();
      const formData = filesToFormData(files);
      await uploadFileRequest(response.url, formData);

      dispatch(setSuccess());
      SnackbarUtils.success(UPLOAD_SUCCESS_MESSAGE);
    } catch (error) {
      dispatch(setError());
      SnackbarUtils.error(UPLOAD_ERROR_MESSAGE);
    } finally {
    }
  };

  return {
    files,
    success,
    error,
    loading,
    handleCancelFileUpload,
    handleLoadFiles,
    handleRemoveFile,
    handleUploadFiles,
  };
};
