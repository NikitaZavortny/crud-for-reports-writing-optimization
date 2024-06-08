import React from 'react';
import Home from './design/awesome-templates/home-template.jsx';
import HomeFooter from './design/awesome-components/footers/footer-home.jsx';
import MiniFooter from './design/awesome-components/footers/footer-mini.jsx';
import CurveTransitionTemplate from './design/awesome-templates/curve-transition-template.jsx';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import "./bootstrap.css";
import "./curves.scss";
import HomePage from './design/pages/home-page.jsx';
import LoginFormPage from './design/pages/login-page.jsx';
import ProfilePage from './design/pages/profile-page.jsx';
import AdminPage from './design/pages/admin-page.jsx';
import ReportPage from './design/pages/report-page.jsx';

function App() {
  return (
    <div align="center">

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
