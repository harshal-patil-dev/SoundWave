
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { MusicProvider } from "./context/MusicContext";

function App() {
  return (
    <MusicProvider>
      <AppRoutes />
    </MusicProvider>
  );
}

export default App;
