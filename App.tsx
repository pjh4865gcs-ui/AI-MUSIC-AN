import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LyricsPage from "./pages/LyricsPage";
import ApiGuidePage from "./pages/ApiGuidePage";
import HowToUsePage from "./pages/HowToUsePage";
import AdminPage from "./pages/AdminPage";
import ThumbnailPage from "./pages/ThumbnailPage";
import ThumbnailEditPage from "./pages/ThumbnailEditPage";
import ThumbnailDownloadPage from "./pages/ThumbnailDownloadPage";
import HomePage from "./pages/HomePage";
import { initContentProtection } from "./utils/contentProtection";

const API_KEY_STORAGE = "gemini_api_key";

const AppContent: React.FC = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    // API 키 불러오기
    const stored = localStorage.getItem(API_KEY_STORAGE);
    if (stored) {
      setApiKey(stored);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 relative">
      {/* 메인 컨텐츠 */}
      <div className="min-h-screen flex flex-col p-4">
        <main className="w-full max-w-7xl mx-auto flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage apiKey={apiKey} setApiKey={setApiKey} />}
            />
            <Route path="/lyrics" element={<LyricsPage apiKey={apiKey} />} />
            <Route
              path="/thumbnail"
              element={<ThumbnailPage apiKey={apiKey} />}
            />
            <Route path="/thumbnail/edit" element={<ThumbnailEditPage />} />
            <Route path="/thumbnail/download" element={<ThumbnailDownloadPage />} />
            <Route path="/api-guide" element={<ApiGuidePage />} />
            <Route path="/how-to-use" element={<HowToUsePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>

        <footer className="text-center mt-12 text-zinc-500 text-sm pb-8">
          <p>&copy; 2025 AI 음원 가사 및 썸네일 제작. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // 콘텐츠 보호 초기화
    initContentProtection();

    return () => {
      // 클린업은 contentProtection에서 처리
    };
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
