import React, { useState, useEffect } from 'react';
import '../styles/Trafficcameramonitor.css';

const TrafficCameraMonitor = () => {
  const [selectedRoute, setSelectedRoute] = useState('cao-toc-hcm-long-thanh-dau-giay');
  const [selectedDate, setSelectedDate] = useState('2025-01-15');
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(false);

  // Static data for demonstration - Replace with API call
  const staticCameras = [
    {
      id: 1,
      name: 'Cam 1',
      thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      videoUrl: '#',
      location: 'Intersection A'
    },
    {
      id: 2,
      name: 'Cam 2',
      thumbnail: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=400&h=300&fit=crop',
      videoUrl: '#',
      location: 'Highway Section B'
    },
    {
      id: 3,
      name: 'Cam 3',
      thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=300&fit=crop',
      videoUrl: '#',
      location: 'City Center'
    },
    {
      id: 4,
      name: 'Cam 4',
      thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop',
      videoUrl: '#',
      location: 'Downtown Area'
    },
    {
      id: 5,
      name: 'Cam 5',
      thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop',
      videoUrl: '#',
      location: 'Express Lane'
    },
    {
      id: 6,
      name: 'Cam 6',
      thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      videoUrl: '#',
      location: 'Junction C'
    },
    {
      id: 7,
      name: 'Cam 7',
      thumbnail: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=400&h=300&fit=crop',
      videoUrl: '#',
      location: 'Bridge Overpass'
    },
    {
      id: 8,
      name: 'Cam 8',
      thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=300&fit=crop',
      videoUrl: '#',
      location: 'Tunnel Entrance'
    },
    {
      id: 9,
      name: 'Cam 9',
      thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop',
      videoUrl: '#',
      location: 'Exit Ramp'
    }
  ];

  const routes = [
    { value: 'cao-toc-hcm-long-thanh-dau-giay', label: 'Cao tốc TP. Hồ Chí Minh - Long Thành - Dầu Giây' },
    { value: 'cao-toc-hcm-trung-luong', label: 'Cao tốc TP. Hồ Chí Minh - Trung Lương' },
    { value: 'cao-toc-hcm-bien-hoa', label: 'Cao tốc TP. Hồ Chí Minh - Biên Hòa' }
  ];

  // Simulate API call - Replace with actual API integration
  useEffect(() => {
    fetchCameraData();
  }, [selectedRoute, selectedDate]);

  const fetchCameraData = async () => {
    setLoading(true);
    
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/cameras?route=${selectedRoute}&date=${selectedDate}`);
      // const data = await response.json();
      // setCameras(data);
      
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setCameras(staticCameras);
    } catch (error) {
      console.error('Error fetching camera data:', error);
      setCameras(staticCameras);
    } finally {
      setLoading(false);
    }
  };

  const handleCameraClick = (camera) => {
    // TODO: Implement video player modal or navigation
    console.log('Camera clicked:', camera);
    window.open(camera.videoUrl, '_blank');
  };

  const handleRouteChange = (e) => {
    setSelectedRoute(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="traffic-camera-monitor">
      <div className="traffic-camera-monitor__header">
        <div className="traffic-camera-monitor__header-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8Z" fill="white"/>
            <path d="M12 10C9.79 10 8 11.79 8 14V18C8 18.55 8.45 19 9 19C9.55 19 10 18.55 10 18V14C10 12.9 10.9 12 12 12C13.1 12 14 12.9 14 14V18C14 18.55 14.45 19 15 19C15.55 19 16 18.55 16 18V14C16 11.79 14.21 10 12 10Z" fill="white"/>
          </svg>
        </div>
        <h1 className="traffic-camera-monitor__header-title">Camera giao thông</h1>
      </div>

      <div className="traffic-camera-monitor__controls">
        <div className="traffic-camera-monitor__controls-select-wrapper">
          <select 
            className="traffic-camera-monitor__controls-select"
            value={selectedRoute}
            onChange={handleRouteChange}
          >
            {routes.map(route => (
              <option key={route.value} value={route.value}>
                {route.label}
              </option>
            ))}
          </select>
          <svg className="traffic-camera-monitor__controls-select-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="traffic-camera-monitor__controls-date-wrapper">
          <input 
            type="date" 
            className="traffic-camera-monitor__controls-date-input"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <svg className="traffic-camera-monitor__controls-date-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 8H17" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M7 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M13 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <div className="traffic-camera-monitor__grid">
        {loading ? (
          <div className="traffic-camera-monitor__loading">
            <div className="traffic-camera-monitor__loading-spinner"></div>
            <p>Đang tải...</p>
          </div>
        ) : (
          cameras.map(camera => (
            <div 
              key={camera.id} 
              className="traffic-camera-monitor__camera-card"
              onClick={() => handleCameraClick(camera)}
            >
              <div className="traffic-camera-monitor__camera-card-image-wrapper">
                <div className="traffic-camera-monitor__camera-card-label">
                  {camera.name}
                </div>
                <img 
                  src={camera.thumbnail} 
                  alt={camera.name}
                  className="traffic-camera-monitor__camera-card-image"
                />
                <div className="traffic-camera-monitor__camera-card-overlay">
                  <button className="traffic-camera-monitor__camera-card-play-button">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M11 8L21 16L11 24V8Z" fill="white"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrafficCameraMonitor;