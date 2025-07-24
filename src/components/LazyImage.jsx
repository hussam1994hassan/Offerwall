// LazyImage.jsx
import React, { useEffect } from "react";
import lozad from "lozad";

const LazyImage = ({
    src,
    alt,
    width = "100%",
    height = "auto",
    className = "",
}) => {
    useEffect(() => {
        const observer = lozad(); // ← يمكنك تخصيص التحديد هنا إذا أردت
        observer.observe();
    }, []);

    return (
        <img
            data-src={src}
            alt={alt}
            className={`lozad ${className}`}
            width={width}
            height={height}
        />
    );
};

export default LazyImage;
