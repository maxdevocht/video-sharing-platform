import React from "react";

export default function Banner() {
    return (
        <div class="banner">
            <div class="share">
                <i class="ri-share-forward-line"></i>
                <i class="ri-more-fill"></i>
            </div>
            <div class="video-info">
                <div class="item">
                    <h3>Today's Popular Video :</h3>
                </div>
                <div class="item">
                    <i class="ri-thumb-up-line"></i>
                    <h3>230</h3>
                </div>
                <div class="item">
                    <i class="ri-eye-line"></i>
                    <h3>1920</h3>
                </div>
                <div class="item">
                    <i class="ri-calendar-line"></i>
                    <h3>20 Mar</h3>
                </div>
                <div class="item">
                    <i class="ri-bookmark-line"></i>
                    <h3>310</h3>
                </div>
            </div>
            <video src="./src/assets/videos/banner.mp4" muted loop></video>
        </div>
    )
}