import React from "react";
import GifPlayer from "react-gif-player";

const GifComponent = ({ src }) => {
return (
    <div className="gif-container">
        <GifPlayer gif={src} still={src} autoplay />
    </div>
);
};

export default GifComponent;
