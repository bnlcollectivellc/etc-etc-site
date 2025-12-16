import { ReactNode } from 'react';

interface WebFrameProps {
  children: ReactNode;
}

export default function WebFrame({ children }: WebFrameProps) {
  return (
    <div className="relative w-full aspect-[4/3]">
      {/* Rounded rectangle mask for browser window simulation */}
      <div className="absolute inset-0 rounded-xl overflow-hidden border border-black/10 bg-gray-100">
        {children}
      </div>
    </div>
  );
}
