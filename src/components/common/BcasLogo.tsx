import React from 'react';
import bcasLogoImg from '../../assets/images/bcas_logo.png';

interface BcasLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
}

export const BcasLogo: React.FC<BcasLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md'
}) => {
  // Height map for responsive rendering
  const heightClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13',
    lg: 'h-14 sm:h-16',
    xl: 'h-16 sm:h-20'
  };

  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {isDark ? (
        <div className="bg-white px-3 py-1.5 rounded-xl shadow-xs inline-flex items-center hover:opacity-95 transition-opacity">
          <img
            src={bcasLogoImg}
            alt="BCAS International University Placement"
            className={`${heightClasses[size]} w-auto object-contain max-w-[280px]`}
            loading="eager"
          />
        </div>
      ) : (
        <img
          src={bcasLogoImg}
          alt="BCAS International University Placement"
          className={`${heightClasses[size]} w-auto object-contain max-w-[280px]`}
          loading="eager"
        />
      )}
    </div>
  );
};
