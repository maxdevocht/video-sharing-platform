import React from "react";

export default function Header() {
    return (
        <div className="header">
            <div className="search">
                <button>
                    <i className="ri-search-2-line"></i>
                </button>
                <input type="text" placeholder="Search for videos..." />
            </div>
            <i className="ri-equalizer-2-line"></i>
        </div>
    )
}