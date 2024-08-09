import React from 'react';

const VideoModal: React.FC = () => {
    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const parentElement = e.currentTarget.parentNode as HTMLElement;
        parentElement.style.opacity = "1";
    };

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Wistia Video Embed */}
            <script src="https://fast.wistia.com/embed/medias/4du53yhlul.jsonp" async></script>
            <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>

            <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <div className="wistia_responsive_wrapper" style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}>
                    <div className="wistia_embed wistia_async_4du53yhlul seo=true videoFoam=true" style={{ height: "100%", position: "relative", width: "100%" }}>
                        <div className="wistia_swatch" style={{ height: "100%", left: 0, opacity: 0, overflow: "hidden", position: "absolute", top: 0, transition: "opacity 200ms", width: "100%" }}>
                            <img
                                src="https://fast.wistia.com/embed/medias/4du53yhlul/swatch"
                                style={{ filter: "blur(5px)", height: "100%", objectFit: "contain", width: "100%" }}
                                alt=""
                                aria-hidden="true"
                                onLoad={handleImageLoad}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
