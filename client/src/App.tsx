import { FileUploadPage } from "./pages";
import { FileUploadProvider, ThemeProvider } from "./providers";

const App = () => {
  return (
    <ThemeProvider>
      <FileUploadProvider>
        <FileUploadPage />
      </FileUploadProvider>
    </ThemeProvider>
  );
};

export default App;
