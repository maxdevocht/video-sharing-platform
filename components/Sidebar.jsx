import React, { useState } from "react";

const sidebarItems = [
    { icon: 'ri-home-4-line', label: 'Dashboard' },
    { icon: 'ri-user-6-line', label: 'My Channel' },
    { icon: 'ri-history-line', label: 'History' },
    { icon: 'ri-movie-2-line', label: 'Popular' },
    { icon: 'ri-film-line', label: 'Playlist' },
    { icon: 'ri-chat-1-line', label: 'Messages' },
    { icon: 'ri-thumb-up-line', label: 'Liked Videos' },
    { icon: 'ri-settings-3-line', label: 'Settings' },
];

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState(0); // Initial active item is the first one (Dashboard)

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <aside className="left-section">
            <div className="logo">
                <img src="./src/assets/images/logo.svg" alt="Logo" />
                <a href="#">VIDVAULT</a>
            </div>

            <div className="sidebar">
                {sidebarItems.map((sideItem, index) => (
                <div
                    key={index}
                    className={`item ${activeItem === index ? 'active' : ''}`}
                    onClick={() => handleItemClick(index)}
                >
                    <i className={sideItem.icon}></i>
                    <h3>{sideItem.label}</h3>
                </div>
                ))}
            </div>

            <div className="sign-out">
                <i className="ri-logout-box-r-line"></i>
                <h3>Sign Out</h3>
            </div>
        </aside>
    )
}