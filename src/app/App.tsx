import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TemplateKPage from '../../templates/template-k/index';
import TemplateLPage from '../../templates/template-l/index';
import PortalPage from './portal/PortalPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portal — AI page builder */}
        <Route path="/portal" element={<PortalPage />} />

        {/* Template routes */}
        <Route path="/template-k" element={<TemplateKPage />} />
        <Route path="/template-l" element={<TemplateLPage />} />

        {/* Default → portal */}
        <Route path="/" element={<Navigate to="/portal" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
