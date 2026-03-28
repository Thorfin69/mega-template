import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TemplateKPage from '../../templates/template-k/index';
import TemplateLPage from '../../templates/template-l/index';
import TemplateMPage from '../../templates/template-m/index';
import TemplateNPage from '../../templates/template-n/index';
import TemplateOPage from '../../templates/template-o/index';
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
        <Route path="/template-m" element={<TemplateMPage />} />
        <Route path="/template-n" element={<TemplateNPage />} />
        <Route path="/template-o" element={<TemplateOPage />} />

        {/* Default → portal */}
        <Route path="/" element={<Navigate to="/portal" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
