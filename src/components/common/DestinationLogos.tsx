import React from 'react';
import { DestinationCountry } from '../../types';

export interface DestinationBrandInfo {
  country: DestinationCountry;
  brandName: string;
  subTitle: string;
  officialBody: string;
  primaryColor: string;
  accentColor: string;
}

export const DESTINATION_BRANDS: Record<string, DestinationBrandInfo> = {
  UK: {
    country: 'UK',
    brandName: 'Study UK',
    subTitle: 'GREAT Britain & Northern Ireland',
    officialBody: 'British Council & UK Visas and Immigration',
    primaryColor: '#012169',
    accentColor: '#C8102E'
  },
  Canada: {
    country: 'Canada',
    brandName: 'EduCanada',
    subTitle: 'A world of possibilities • Un monde de possibilités',
    officialBody: 'Government of Canada & Global Affairs',
    primaryColor: '#D80027',
    accentColor: '#000000'
  },
  Australia: {
    country: 'Australia',
    brandName: 'Study Australia',
    subTitle: 'Australian Government',
    officialBody: 'Austrade & Department of Home Affairs',
    primaryColor: '#00482B',
    accentColor: '#FFCD00'
  },
  USA: {
    country: 'USA',
    brandName: 'EducationUSA',
    subTitle: 'A U.S. Department of State Network',
    officialBody: 'Bureau of Educational and Cultural Affairs',
    primaryColor: '#0A3161',
    accentColor: '#B31942'
  },
  Ireland: {
    country: 'Ireland',
    brandName: 'Education in Ireland',
    subTitle: 'World-Class Standards',
    officialBody: 'Enterprise Ireland & Dept of Further Education',
    primaryColor: '#007A3D',
    accentColor: '#FF7900'
  },
  Germany: {
    country: 'Germany',
    brandName: 'Study in Germany',
    subTitle: 'Land of Ideas • DAAD',
    officialBody: 'German Academic Exchange Service (DAAD)',
    primaryColor: '#003366',
    accentColor: '#DD0000'
  },
  Malaysia: {
    country: 'Malaysia',
    brandName: 'Education Malaysia',
    subTitle: 'EMGS • Global Higher Education',
    officialBody: 'Education Malaysia Global Services',
    primaryColor: '#002B7F',
    accentColor: '#FCBF49'
  },
  Singapore: {
    country: 'Singapore',
    brandName: 'Study Singapore',
    subTitle: 'Global Schoolhouse • EDB',
    officialBody: 'Singapore Economic Development Board',
    primaryColor: '#ED2939',
    accentColor: '#FFFFFF'
  },
  UAE: {
    country: 'UAE',
    brandName: 'Study in Dubai',
    subTitle: 'KHDA • Government of Dubai',
    officialBody: 'Knowledge and Human Development Authority',
    primaryColor: '#C41822',
    accentColor: '#00732F'
  },
  Malta: {
    country: 'Malta',
    brandName: 'Study in Malta',
    subTitle: 'Ministry for Education, Sport & Youth',
    officialBody: 'Government of Malta Education Directorate',
    primaryColor: '#C41822',
    accentColor: '#000000'
  },
  Spain: {
    country: 'Spain',
    brandName: 'Study in Spain',
    subTitle: 'SEPIE • ICEX España',
    officialBody: 'Ministry of Universities & SEPIE',
    primaryColor: '#AA151B',
    accentColor: '#F1BF00'
  }
};

/**
 * Authentic Official Logos for Study Destinations
 * Accurate representations of the official government education promotion brands
 */
export const OfficialLogoSvg: React.FC<{ country: DestinationCountry | string; className?: string }> = ({
  country,
  className = 'h-8'
}) => {
  switch (country) {
    case 'Canada':
      // EduCanada: Official Government of Canada brand with dual-arc dynamic maple leaf
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Canadian Flag Left Indicator */}
          <rect x="2" y="8" width="6" height="32" fill="#D80027" />
          <rect x="8" y="8" width="16" height="32" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.5" />
          <rect x="24" y="8" width="6" height="32" fill="#D80027" />
          {/* Mini Maple Leaf in Flag */}
          <path d="M16 16l1.2 2.5 2.8-.6-1 2.8 2.5.6-2.2 1.8 1.2 2.8-3.4-.9-.6 2.8h-1.2l-.6-2.8-3.4.9 1.2-2.8-2.2-1.8 2.5-.6-1-2.8 2.8.6z" fill="#D80027" />
          {/* Iconic EduCanada Dual-Arc Maple Leaf Emblem */}
          <g transform="translate(36, 4)">
            <path d="M18 2C10 8 6 18 10 28c3 7 9 10 14 10-6-3-9-9-9-15 0-8 6-17 13-21z" fill="#D80027" />
            <path d="M22 6c4 6 7 14 5 21-2 6-7 10-12 11 5-2 9-7 10-13 1-7-1-14-3-19z" fill="#E53E3E" opacity="0.85" />
            <path d="M17 14l2 4 4.5-1-1.5 4.5 4 1-3.5 3 2 4.5-5.5-1.5-1 4.5h-2l-1-4.5-5.5 1.5 2-4.5-3.5-3 4-1-1.5-4.5 4.5 1z" fill="#D80027" transform="translate(5, 5) scale(0.45)" />
          </g>
          {/* EduCanada Typography */}
          <text x="74" y="24" fill="#D80027" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="19" letterSpacing="-0.5">Edu</text>
          <text x="110" y="24" fill="#1A202C" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="19" letterSpacing="-0.5">Canada</text>
          {/* Official Tagline */}
          <text x="75" y="36" fill="#718096" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.8" letterSpacing="0.2">A world of possibilities • Un monde de possibilités</text>
        </svg>
      );

    case 'UK':
      // Study UK: Official British Council & GREAT Britain
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* British Council 4-dot Icon */}
          <circle cx="10" cy="16" r="4.5" fill="#012169" />
          <circle cx="21" cy="16" r="4.5" fill="#012169" />
          <circle cx="10" cy="27" r="4.5" fill="#012169" />
          <circle cx="21" cy="27" r="4.5" fill="#012169" />
          {/* British Council text */}
          <text x="30" y="18" fill="#012169" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.5">BRITISH</text>
          <text x="30" y="28" fill="#012169" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.5">COUNCIL</text>
          {/* Divider */}
          <line x1="82" y1="8" x2="82" y2="40" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* GREAT Britain Red Box */}
          <rect x="90" y="8" width="56" height="20" rx="2" fill="#C8102E" />
          <text x="94" y="23" fill="#FFFFFF" fontFamily="Georgia, serif" fontWeight="900" fontSize="14" letterSpacing="1">GREAT</text>
          <text x="91" y="36" fill="#012169" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="5.5" letterSpacing="0.4">BRITAIN & NORTHERN IRELAND</text>
          {/* Study UK Badge */}
          <g transform="translate(152, 10)">
            <text x="0" y="14" fill="#012169" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="13" letterSpacing="-0.3">Study UK</text>
          </g>
        </svg>
      );

    case 'Australia':
      // Study Australia: Official Australian Government Austrade
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Australian Government Crest & Boomerang */}
          <rect x="4" y="6" width="36" height="36" rx="8" fill="#00482B" />
          {/* Kangaroo & Southern Cross Gold Silhouette */}
          <path d="M28 16c0-2-1-3-3-1.5s-4 4-6 6l-5 1c-2 0-4 2-4 4s2 4 5 4l5-1 3 5c.6 1.2 2.5 2.5 5 1.2l5-2.5c1.2-.6 1.2-2 0-2.5l-4-1 2.5-5c.6-1.5 0-4.5-2.5-6z" fill="#FFCD00" />
          <circle cx="12" cy="16" r="1.3" fill="#FFFFFF" />
          <circle cx="15" cy="11" r="1.1" fill="#FFFFFF" />
          <circle cx="13" cy="32" r="1.3" fill="#FFFFFF" />
          <circle cx="32" cy="30" r="1.1" fill="#FFFFFF" />
          {/* Australia Branding */}
          <text x="48" y="21" fill="#00482B" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.8">STUDY AUSTRALIA</text>
          <text x="49" y="32" fill="#556B2F" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.6">Australian Government</text>
          <text x="49" y="41" fill="#888888" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5">Austrade Official Portal</text>
        </svg>
      );

    case 'USA':
      // EducationUSA: Official U.S. Department of State
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Roundel Crest */}
          <circle cx="22" cy="24" r="18" fill="#0A3161" />
          <circle cx="22" cy="24" r="15" fill="#FFFFFF" />
          <circle cx="22" cy="24" r="13" fill="#0A3161" />
          {/* Red and White Stripes Shield */}
          <path d="M16 18h12v10c0 4-6 7-6 7s-6-3-6-7V18z" fill="#B31942" />
          <rect x="18" y="21" width="2" height="7" fill="#FFFFFF" />
          <rect x="22" y="21" width="2" height="7" fill="#FFFFFF" />
          <rect x="26" y="21" width="2" height="7" fill="#FFFFFF" />
          <rect x="16" y="18" width="12" height="3" fill="#0A3161" />
          {/* Stars */}
          <circle cx="19" cy="19.5" r="0.8" fill="#FFFFFF" />
          <circle cx="22" cy="19.5" r="0.8" fill="#FFFFFF" />
          <circle cx="25" cy="19.5" r="0.8" fill="#FFFFFF" />
          {/* EducationUSA Typography */}
          <text x="48" y="23" fill="#0A3161" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3">Education</text>
          <text x="127" y="23" fill="#B31942" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.2">USA</text>
          {/* Subtitle */}
          <text x="49" y="34" fill="#64748B" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="7" letterSpacing="0.3">A U.S. Department of State Network</text>
        </svg>
      );

    case 'Ireland':
      // Education in Ireland: Official Enterprise Ireland
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Irish Emerald Shield */}
          <rect x="4" y="6" width="36" height="36" rx="8" fill="#007A3D" />
          {/* Golden Celtic Harp / Clover */}
          <path d="M18 13c5 0 9 3.5 9 8.5v11c0 1.5-1.5 2-3 1s-2-2-2-4v-7c0-2-1-3-3-3h-1v13h-2V13h2z" fill="#FFCD00" />
          <path d="M20 19h5M20 22h4M20 25h3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          {/* Wordmark */}
          <text x="48" y="20" fill="#007A3D" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" letterSpacing="0.2">Education in Ireland</text>
          <text x="49" y="32" fill="#E65100" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.5">WORLD-CLASS STANDARDS</text>
          <text x="49" y="41" fill="#718096" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5">Enterprise Ireland Government Portal</text>
        </svg>
      );

    case 'Germany':
      // Study in Germany: Official DAAD & Land of Ideas
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* DAAD Blue Box */}
          <rect x="4" y="8" width="38" height="32" rx="4" fill="#003366" />
          <text x="8" y="28" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="12" letterSpacing="0.5">DAAD</text>
          {/* German flag strip */}
          <rect x="48" y="8" width="4" height="10" fill="#1A1A1A" />
          <rect x="48" y="18" width="4" height="10" fill="#DD0000" />
          <rect x="48" y="28" width="4" height="10" fill="#FFCE00" />
          {/* Study in Germany text */}
          <text x="58" y="21" fill="#1A1A1A" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="13.5" letterSpacing="-0.2">Study in Germany</text>
          <text x="59" y="32" fill="#DD0000" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="9">Land of Ideas</text>
          <text x="59" y="41" fill="#718096" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5">German Academic Exchange Service</text>
        </svg>
      );

    case 'Malaysia':
      // Education Malaysia: Official EMGS
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* EMGS Roundel */}
          <circle cx="22" cy="24" r="18" fill="#002B7F" />
          <circle cx="22" cy="24" r="15" fill="#FFFFFF" />
          {/* Crescent & Star in Gold */}
          <path d="M16 16a7 7 0 1 0 0 14 8 8 0 0 1 0-14z" fill="#FCBF49" />
          <circle cx="20.5" cy="22.5" r="2.2" fill="#CC0000" />
          {/* Wordmark */}
          <text x="46" y="21" fill="#002B7F" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="14" letterSpacing="-0.2">EDUCATION MALAYSIA</text>
          <text x="47" y="31" fill="#CC0000" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.4">GLOBAL SERVICES (EMGS)</text>
          <text x="47" y="40" fill="#718096" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5">Ministry of Higher Education Malaysia</text>
        </svg>
      );

    case 'Singapore':
      // Study Singapore: Official Singapore Global Network / EDB
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Red Singapore Shield with Crescent & 5 Stars */}
          <rect x="4" y="6" width="36" height="36" rx="8" fill="#ED2939" />
          <path d="M14 16a6 6 0 1 0 0 12 7 7 0 0 1 0-12z" fill="#FFFFFF" />
          <circle cx="19" cy="18" r="0.9" fill="#FFFFFF" />
          <circle cx="21" cy="20" r="0.9" fill="#FFFFFF" />
          <circle cx="21" cy="22" r="0.9" fill="#FFFFFF" />
          <circle cx="19" cy="24" r="0.9" fill="#FFFFFF" />
          <circle cx="17.5" cy="21" r="0.9" fill="#FFFFFF" />
          {/* Typography */}
          <text x="48" y="21" fill="#ED2939" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="15" letterSpacing="0.2">STUDY SINGAPORE</text>
          <text x="49" y="32" fill="#1A202C" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.8">PASSION MADE POSSIBLE</text>
          <text x="49" y="41" fill="#718096" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5">Economic Development Board • Global Hub</text>
        </svg>
      );

    case 'UAE':
      // Study in Dubai: Official KHDA / UAE Education
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* UAE 4-Color Motif */}
          <rect x="4" y="6" width="10" height="36" fill="#C41822" rx="2" />
          <rect x="14" y="6" width="24" height="12" fill="#00732F" />
          <rect x="14" y="18" width="24" height="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.5" />
          <rect x="14" y="30" width="24" height="12" fill="#000000" />
          {/* Dubai Text */}
          <text x="46" y="22" fill="#C41822" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" letterSpacing="-0.3">STUDY IN DUBAI</text>
          <text x="47" y="32" fill="#00732F" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.4">KHDA • UNITED ARAB EMIRATES</text>
          <text x="47" y="41" fill="#718096" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5">Dubai International Academic City (DIAC)</text>
        </svg>
      );

    case 'Malta':
      // Study in Malta: Official Ministry for Education
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* George Cross Shield */}
          <rect x="4" y="6" width="18" height="36" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.5" rx="3" />
          <rect x="22" y="6" width="18" height="36" fill="#C41822" rx="3" />
          {/* George Cross */}
          <path d="M9 12h8v5h5v6h-5v5H9v-5H4v-6h5v-5z" fill="#C41822" />
          {/* Typography */}
          <text x="48" y="21" fill="#C41822" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="15" letterSpacing="-0.2">STUDY IN MALTA</text>
          <text x="49" y="31" fill="#1A202C" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.4">MINISTRY FOR EDUCATION</text>
          <text x="49" y="40" fill="#718096" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5">Government of Malta • English European Hub</text>
        </svg>
      );

    case 'Spain':
      // Study in Spain: Official SEPIE / ICEX España
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Spanish Flag Bar with Joan Miró Sun */}
          <rect x="4" y="8" width="36" height="8" fill="#AA151B" rx="2" />
          <rect x="4" y="16" width="36" height="16" fill="#F1BF00" />
          <rect x="4" y="32" width="36" height="8" fill="#AA151B" rx="2" />
          {/* Miró Sun Symbol */}
          <circle cx="22" cy="24" r="5" fill="#AA151B" />
          <circle cx="22" cy="24" r="2.5" fill="#F1BF00" />
          {/* Typography */}
          <text x="48" y="21" fill="#AA151B" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="15" letterSpacing="-0.2">STUDY IN SPAIN</text>
          <text x="49" y="31" fill="#B7791F" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.4">SEPIE • ESPAÑA</text>
          <text x="49" y="40" fill="#718096" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5">Ministry of Science, Innovation and Universities</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="36" height="36" rx="8" fill="#103578" />
          <text x="12" y="28" fill="#FFFFFF" fontWeight="900" fontSize="14">{country.slice(0, 2).toUpperCase()}</text>
          <text x="48" y="24" fill="#103578" fontWeight="800" fontSize="14">Study in {country}</text>
          <text x="49" y="35" fill="#718096" fontWeight="600" fontSize="8">Official Higher Education Destination</text>
        </svg>
      );
  }
};

interface DestinationLogoProps {
  country: DestinationCountry | string;
  variant?: 'card-badge' | 'official-logo' | 'compact-pill' | 'white-box';
  className?: string;
}

export const DestinationLogo: React.FC<DestinationLogoProps> = ({
  country,
  variant = 'card-badge',
  className = ''
}) => {
  const brand = DESTINATION_BRANDS[country] || {
    country: country as DestinationCountry,
    brandName: `Study in ${country}`,
    subTitle: 'Official Education Destination',
    officialBody: 'Accredited Higher Education',
    primaryColor: '#103578',
    accentColor: '#C41822'
  };

  if (variant === 'card-badge') {
    // Pure white contrast badge with the authentic official logo
    return (
      <div
        className={`inline-flex items-center px-2 py-1 sm:px-2.5 sm:py-1 rounded-xl bg-white shadow-md border border-slate-200/90 hover:scale-102 transition-transform duration-200 ${className}`}
        title={`Official Board: ${brand.brandName} (${brand.officialBody})`}
      >
        <OfficialLogoSvg country={country} className="h-6 sm:h-7 w-auto max-w-[130px] sm:max-w-[155px]" />
      </div>
    );
  }

  if (variant === 'compact-pill') {
    return (
      <div
        className={`inline-flex items-center px-2 py-0.5 rounded-lg bg-white border border-slate-200 shadow-xs ${className}`}
      >
        <OfficialLogoSvg country={country} className="h-5 w-auto max-w-[125px]" />
      </div>
    );
  }

  if (variant === 'white-box') {
    return (
      <div
        className={`p-3 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-center justify-center ${className}`}
      >
        <OfficialLogoSvg country={country} className="h-8 w-auto max-w-[170px]" />
      </div>
    );
  }

  // official-logo: Full prominent lockup
  return (
    <div
      className={`p-2.5 sm:p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-3 ${className}`}
    >
      <OfficialLogoSvg country={country} className="h-8 sm:h-9 w-auto max-w-[210px]" />
    </div>
  );
};

/**
 * Recognized Destination Education Authorities & National Boards Strip
 */
export const DestinationLogosStrip: React.FC<{ title?: string; className?: string }> = ({
  title = 'Official Destination Education Boards & National Partner Portals',
  className = ''
}) => {
  const countries: DestinationCountry[] = [
    'UK',
    'Canada',
    'Australia',
    'USA',
    'Ireland',
    'Germany',
    'Malaysia',
    'Singapore',
    'UAE',
    'Malta',
    'Spain'
  ];

  return (
    <div className={`w-full bg-slate-50/90 rounded-2xl border border-slate-200/90 p-3 sm:p-4 ${className}`}>
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{title}</span>
        </span>
        <span className="text-[#103578] font-bold text-[10px] hidden sm:inline-block">
          Direct Embassy & Board Accreditations
        </span>
      </div>
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
        {countries.map((country) => (
          <div
            key={country}
            className="shrink-0 flex items-center px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#103578] hover:shadow-sm transition-all"
          >
            <OfficialLogoSvg country={country} className="h-7 w-auto max-w-[145px]" />
          </div>
        ))}
      </div>
    </div>
  );
};
