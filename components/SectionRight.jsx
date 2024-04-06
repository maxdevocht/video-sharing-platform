import React from "react";

const weeklyVideos = [
    {
      image: './src/assets/images/weekly-1.jpg',
      title: 'Sea Balloon',
      views: 2320,
    },
    {
      image: './src/assets/images/weekly-2.jpg',
      title: 'Flower',
      views: 2490,
    },
    {
      image: './src/assets/images/weekly-3.jpg',
      title: 'Street',
      views: 1420,
    },
    {
      image: './src/assets/images/weekly-4.jpg',
      title: 'Sea Water',
      views: 9610,
    },
];

export default function SectionRight() {
    return (
        <div className="right-section">
            <div className="profile">
                <div className="info">
                    <i className="ri-user-3-line"></i>
                    <h5>Welcome Max!</h5>
                </div>
                <div className="user">
                    <i className="ri-notification-2-line"></i>
                    <img src="./src/assets/images/profile.png" alt="Reza's Profile" />
                </div>

                <h3>Nature Playlist</h3>
                <div className="playlist">
                    <video src="assets/videos/playlist.mp4" muted loop />
                    <div className="other">
                    <img src="./src/assets/images/playlist-1.jpg" alt="Playlist Image 1" />
                    <img src="./src/assets/images/playlist-2.jpg" alt="Playlist Image 2" />
                    <img src="./src/assets/images/playlist-3.jpg" alt="Playlist Image 3" />
                    <img src="./src/assets/images/playlist-4.jpg" alt="Playlist Image 4" />
                    </div>
                </div>

                <h3>Current Playing</h3>
                <div className="player">
                    <div className="content">
                    <img src="./src/assets/images/playlist-4.jpg" alt="Current Video Thumbnail" />
                    <div className="info">
                        <h5>Germany Travel Tour</h5>
                        <div className="rate">
                        <i className="ri-star-fill"></i>
                        <h5>4.7</h5>
                        </div>
                    </div>
                    <div className="desc">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero...</p>
                    </div>
                    </div>
                    <i className="ri-pause-large-line"></i>
                </div>

                <h3>Weekly Popular</h3>
                <div className="weekly">
                    {weeklyVideos.map((video) => (
                    <div key={video.title} className="item">
                        <div className="content">
                        <img src={video.image} alt={video.title + ' Thumbnail'} />
                        <div className="info">
                            <h4>{video.title}</h4>
                            <div className="view">
                            <i className="ri-eye-fill"></i>
                            <h5>{video.views}</h5>
                            </div>
                        </div>
                        </div>
                        <i className="ri-heart-3-fill"></i>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}