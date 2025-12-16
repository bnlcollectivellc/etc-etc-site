import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
}

export default function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {/* Phone container - maintains phone proportions within the card */}
      <div className="relative h-full aspect-[9/19.5]">
        {/* Frame SVG */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <svg
            viewBox="0 0 180 390"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Outer frame - rounded rectangle */}
            <rect
              x="2"
              y="2"
              width="176"
              height="386"
              rx="36"
              ry="36"
              stroke="black"
              strokeWidth="3"
              fill="none"
            />
            {/* Inner screen area */}
            <rect
              x="8"
              y="8"
              width="164"
              height="374"
              rx="32"
              ry="32"
              stroke="black"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </div>
        {/* Screenshot content */}
        <div className="absolute inset-[3%] rounded-[12%] overflow-hidden bg-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
}
