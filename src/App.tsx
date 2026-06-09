import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import AnalyzerPage from "./pages/home";
import { StoreProvider } from "./lib/store-context";

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/analyze" element={<AnalyzerPage />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}
