import React from "react";

// Brand colors (adjust as needed)
const BRAND_GRADIENT = "bg-gradient-to-tr from-blue-500 via-purple-500 to-fuchsia-500";

const Spinner: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <div className="flex items-center justify-center w-full h-full py-8">
    <span
      className={`inline-block relative animate-spin rounded-full ${BRAND_GRADIENT}`}
      style={{ width: size, height: size }}
    >
      <svg
        className="absolute top-0 left-0"
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="url(#spinner-gradient)"
          strokeWidth="4"
          strokeDasharray="80"
          strokeDashoffset="60"
          strokeLinecap="round"
          fill="none"
        />
        <defs>
          <linearGradient id="spinner-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="0.5" stopColor="#a21caf" />
            <stop offset="1" stopColor="#a21caf" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </div>
);

export default Spinner; 