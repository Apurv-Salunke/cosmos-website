import React from 'react';

interface GradientHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const GradientHeading: React.FC<GradientHeadingProps> = ({
  as: Component = 'h2',
  children,
  className,
  ...props
}) => {
  return (
    <Component
      className={`bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-400 relative py-1 ${className || ''}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GradientHeading;

// Add this to your global CSS or a relevant stylesheet (e.g., app/globals.css)
/*
.heading-glow {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3), 0 0 25px rgba(255, 255, 255, 0.2);
}

// If you want a more pronounced hero-like glow for specific headings,
// you can create a variant or use a different class.
// For example, for the hero section's specific glow:
.hero-heading-glow {
  text-shadow: 0 0 20px rgba(229, 231, 235, 0.7), 0 0 35px rgba(209, 213, 219, 0.5), 0 0 50px rgba(156, 163, 175, 0.3);
}

// You might also want to adjust font sizes and weights in your Tailwind config or global styles
// for different heading levels (h1, h2, etc.) if not already done.
*/ 