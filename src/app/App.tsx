import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TemplateKPage from '../../templates/template-k/index';
import TemplateLPage from '../../templates/template-l/index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Template routes */}
        <Route path="/template-k" element={<TemplateKPage />} />
        <Route path="/template-l" element={<TemplateLPage />} />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/template-k" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
