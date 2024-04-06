import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Separator from "./Separator";

export default function Main() {
    return (
        <div className="main">
            <Header />
            <Banner />
            <Separator />
        </div>
    )
}