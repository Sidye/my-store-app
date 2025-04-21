// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css'; // Общие стили, если нужны

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header и Footer не требуются по заданию */}
        <Routes>
          {/* Перенаправление с корня на страницу продуктов */}
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          {/* Маршрут для всех остальных путей (404) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;