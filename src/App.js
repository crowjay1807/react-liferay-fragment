import React, { useState, useEffect } from 'react';
import './App.css';

// Import hình ảnh - bạn sẽ thêm các file này vào thư mục src/
import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';
import image3 from './assets/image-3.jpg';
import image4 from './assets/image-4.jpg';
import image5 from './assets/image-5.jpg';
import image6 from './assets/image-6.jpg';

function App() {
  // State cho slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderImages = [image1, image2, image3];

  // State cho carousel
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const carouselImages = [image4, image5, image6];

  // Auto slide cho slider (5 giây)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Hàm điều khiển slider
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Hàm điều khiển carousel
  const nextCarousel = () => {
    setCurrentCarousel((prev) => (prev + 1) % carouselImages.length);
  };

  const prevCarousel = () => {
    setCurrentCarousel((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">Hello World</h1>
        <p className="app-subtitle">React Slider & Carousel Demo</p>
      </header>

      {/* Slider Section */}
      <section className="slider-section">
        <h2 className="section-title">Featured Slider</h2>
        <div className="slider-container">
          <div className="slider-wrapper">
            {sliderImages.map((img, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${img})`,
                  display: index === currentSlide ? 'block' : 'none'
                }}
              >
                <div className="slide-overlay">
                  <h3 className="slide-title">Slide {index + 1}</h3>
                  <p className="slide-description">Beautiful image showcase</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
            &#8250;
          </button>

          {/* Dots Navigation */}
          <div className="slider-dots">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <h2 className="section-title">Image Carousel</h2>
        <div className="carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={prevCarousel}>
            &#8249;
          </button>

          <div className="carousel-track">
            {carouselImages.map((img, index) => {
              // Tính toán vị trí của mỗi item
              let position = index - currentCarousel;
              if (position < 0) position += carouselImages.length;

              return (
                <div
                  key={index}
                  className={`carousel-item ${position === 0 ? 'center' : ''} ${
                    position === 1 || position === carouselImages.length - 1 ? 'side' : 'hidden'
                  }`}
                  onClick={() => setCurrentCarousel(index)}
                >
                  <img src={img} alt={`Carousel ${index + 1}`} />
                  <div className="carousel-caption">
                    <h4>Image {index + 1}</h4>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={nextCarousel}>
            &#8250;
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentCarousel ? 'active' : ''}`}
              onClick={() => setCurrentCarousel(index)}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <p>Built with React for Liferay Portal</p>
        <p className="timestamp">Last updated: {new Date().toLocaleString()}</p>
      </footer>
    </div>
  );
}

export default App;