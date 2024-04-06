import React from 'react';

const videoData = [
  {
    src: './src/assets/videos/video-1.mp4',
    title: 'Animal On Winter',
    location: 'Canada',
    rating: '4.9',
  },
  {
    src: './src/assets/videos/video-2.mp4',
    title: 'Animal On Winter',
    location: 'Canada',
    rating: '4.9',
  },
  {
    src: './src/assets/videos/video-3.mp4',
    title: 'Animal On Winter',
    location: 'Canada',
    rating: '4.9',
  },
];

export default function VideoItems() {
  return (
    <div className="video-items">
      {videoData.map((video) => (
        <div key={video.src} className="item">
          <div className="like">
            <i className="ri-heart-3-fill"></i>
          </div>
          <video src={video.src} muted loop />
          <div className="details">
            <h3>{video.title}</h3>
            <div className="info">
              <div className="location">
                <i className="ri-map-pin-line"></i>
                <h5>{video.location}</h5>
              </div>
              <div className="rate">
                <i className="ri-star-fill"></i>
                <h5>{video.rating}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
