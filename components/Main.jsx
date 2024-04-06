import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Separator from "./Separator";
import Videos from "./Videos";

export default function Main() {
    return (
        <div className="main">
            <Header />
            <Banner />
            <Separator />
            <Videos />
        </div>
    )
}