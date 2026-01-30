import React, { useState, useEffect } from 'react';
import './App.css';

// Import hình ảnh - bạn sẽ thêm các file này vào thư mục src/

import News from './components/News'

function App() {
 

  return (
    <div className="app-container">
      <News/>
    </div>
  );
}

export default App;