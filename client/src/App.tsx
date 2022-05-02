import { FileUploadPage } from "./pages";
import {
  FileUploadProvider,
  ThemeProvider,
  SnackbarProvider,
} from "./providers";

const App = () => {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <FileUploadProvider>
          <FileUploadPage />
        </FileUploadProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
