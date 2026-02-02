import React, { useState, useEffect } from 'react';
import './App.css';

// Import hình ảnh - bạn sẽ thêm các file này vào thư mục src/

import News from './components/News'
import TrafficCameraMonitor from './components/Trafficcameramonitor';

function App() {
 

  return (


        <div className="app-layout">
      <div className="left-panel">
        <News />
      </div>

      <div className="right-panel">
        <TrafficCameraMonitor />
      </div>
    </div>
  );
}

export default App;