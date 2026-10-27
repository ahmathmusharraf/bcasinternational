import {
  Campus,
  University,
  Course,
  Destination,
  Scholarship,
  SuccessStory,
  BlogPost,
  StudentPortalProfile,
  StudyAbroadEvent,
  TestimonialVideo
} from '../types';

export const BCAS_CAMPUSES: Campus[] = [
  {
    id: 'colombo',
    name: 'Colombo Campus',
    role: 'Colombo Regional Campus & Placement Center',
    title: 'BCAS Colombo Regional Campus',
    address: ['356, Galle Road', 'Colombo 03, Sri Lanka'],
    city: 'Colombo',
    phone: '+94 76 141 5273',
    whatsapp: 'https://wa.me/94761415273',
    mapQuery: 'BCAS City Campus 356 Galle Road Colombo 03',
    email: 'Digital_Int@bcas.lk',
    hours: 'Monday – Saturday: 8:30 AM – 5:00 PM'
  },
  {
    id: 'jaffna',
    name: 'Jaffna Campus',
    role: 'Jaffna Regional Campus & Placement Center',
    title: 'BCAS Northern Regional Campus',
    address: ['16, Point Pedro Road', 'Jaffna, Sri Lanka'],
    city: 'Jaffna',
    phone: '+94 76 141 5273',
    whatsapp: 'https://wa.me/94761415273',
    mapQuery: 'BCAS Northern Regional Campus 16 Point Pedro Road Jaffna',
    email: 'Digital_Int@bcas.lk',
    hours: 'Monday – Saturday: 8:30 AM – 5:00 PM'
  },
  {
    id: 'kalmunai',
    name: 'Kalmunai Campus',
    role: 'Kalmunai Regional Campus & Placement Center',
    title: 'BCAS Eastern Regional Campus',
    address: ['392/1, Main Street', 'Kalmunai, Sri Lanka'],
    city: 'Kalmunai',
    phone: '+94 76 141 5273',
    whatsapp: 'https://wa.me/94761415273',
    mapQuery: 'BCAS Eastern Regional Campus 392/1 Main Street Kalmunai',
    email: 'Digital_Int@bcas.lk',
    hours: 'Monday – Saturday: 8:30 AM – 5:00 PM'
  },
  {
    id: 'kandy',
    name: 'Kandy Campus',
    role: 'Kandy Regional Campus & Placement Center',
    title: 'BCAS Central Province Campus',
    address: ['344, Peradeniya Road', 'Kandy, Sri Lanka'],
    city: 'Kandy',
    phone: '+94 76 141 5273',
    whatsapp: 'https://wa.me/94761415273',
    mapQuery: 'BCAS Central Province Campus 344 Peradeniya Road Kandy',
    email: 'Digital_Int@bcas.lk',
    hours: 'Monday – Saturday: 8:30 AM – 5:00 PM'
  }
];

export const BCAS_SOCIAL_LINKS = [
  {
    name: 'Facebook',
    handle: '@bcasinternationalcentre',
    url: 'https://www.facebook.com/bcasinternationalcentre',
    icon: 'facebook'
  },
  {
    name: 'Instagram',
    handle: '@bcasinternational',
    url: 'https://www.instagram.com/bcasinternational/',
    icon: 'instagram'
  },
  {
    name: 'LinkedIn',
    handle: 'BCAS International University Placements',
    url: 'https://www.linkedin.com/company/bcasinternationaluniversityplacements/',
    icon: 'linkedin'
  },
  {
    name: 'TikTok',
    handle: '@bcasstudyabroad',
    url: 'https://www.tiktok.com/@bcasstudyabroad',
    icon: 'tiktok'
  },
  {
    name: 'YouTube',
    handle: 'BCAS International Placements',
    url: 'https://www.youtube.com/@bcasinternationalplacements',
    icon: 'youtube'
  },
  {
    name: 'Official BCAS Website',
    handle: 'bcas.lk',
    url: 'https://bcas.lk/',
    icon: 'external'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'UK',
    flag: '🇬🇧',
    tagline: 'World-renowned degrees, 1-year Master’s & 2-year Graduate Route visa',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    overview: 'The UK continues to be a premier choice for Sri Lankan students. Offering internationally accredited qualifications, accelerated 3-year bachelor’s and 1-year master’s programmes, and the Graduate Route visa allowing up to 2 years of post-study work.',
    avgTuitionPerYear: '£12,000 – £22,000',
    avgLivingPerYear: '£9,207 (outside London) / £12,006 (inside London)',
    workDuringStudy: 'Up to 20 hours/week during term time, full-time in holidays',
    postStudyWorkVisa: 'Graduate Route: 2 years (3 years for PhD graduates)',
    primaryIntakes: 'September/October (Major) and January/February (Secondary)',
    currency: 'GBP (£)',
    officialImmigrationName: 'GOV.UK Student Visa Guidance',
    officialImmigrationUrl: 'https://www.gov.uk/student-visa',
    popularCities: ['London', 'Birmingham', 'Manchester', 'Coventry', 'Leeds', 'Edinburgh'],
    topReasons: [
      'Fast-track completion: 1-Year Master’s save substantial living and tuition costs',
      'Graduate Route allows 2 full years of post-graduation employment in the UK',
      'Direct pathway and credit exemptions from BCAS diplomas and HND qualifications',
      'Multicultural student cities with strong Sri Lankan student communities'
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    tagline: 'High quality of life, leading research universities and post-study work',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
    overview: 'Australia combines exceptional educational standards with an enviable lifestyle. Renowned for practical research, modern campuses, and regional migration incentives that reward study in vibrant regional university cities.',
    avgTuitionPerYear: 'AUD 24,000 – 42,000',
    avgLivingPerYear: 'AUD 29,710 / year (Official migration guideline)',
    workDuringStudy: 'Up to 48 hours per fortnight during study semesters',
    postStudyWorkVisa: 'Temporary Graduate Visa (Subclass 485): 2 to 4 years depending on degree level and regional location',
    primaryIntakes: 'February (Semester 1) and July (Semester 2)',
    currency: 'AUD ($)',
    officialImmigrationName: 'Department of Home Affairs Student Visa (Subclass 500)',
    officialImmigrationUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
    popularCities: ['Melbourne', 'Sydney', 'Brisbane', 'Perth', 'Adelaide', 'Wollongong'],
    topReasons: [
      'Universities consistently ranked in the global top 100 with world-class facilities',
      'Flexible work rights of 48 hours per fortnight during university terms',
      'Generous post-study work visas with extra duration for regional university campuses',
      'Clear vocational and higher education progression pathways'
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    tagline: 'Co-op work placements, high safety index and Post-Graduation Work Permits',
    heroImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80',
    overview: 'Canada is celebrated for its welcoming society, safe university towns, and comprehensive Co-op work-integrated learning programmes that give students paid Canadian work experience prior to graduating.',
    avgTuitionPerYear: 'CAD 18,000 – 35,000',
    avgLivingPerYear: 'CAD 20,635 / year (Official IRCC guideline)',
    workDuringStudy: 'Up to 24 hours per week off-campus during academic sessions; full-time during scheduled breaks',
    postStudyWorkVisa: 'Post-Graduation Work Permit (PGWP): Up to 3 years based on programme length',
    primaryIntakes: 'September (Fall) and January (Winter)',
    currency: 'CAD ($)',
    officialImmigrationName: 'Immigration, Refugees and Citizenship Canada (IRCC)',
    officialImmigrationUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
    popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary', 'Halifax'],
    topReasons: [
      'Paid Co-op semesters provide invaluable North American work experience',
      'Post-Graduation Work Permit (PGWP) of up to 3 years',
      'High safety index and student-friendly immigration policies',
      'Strong industries in Technology, Biomedical, AI and Project Management'
    ]
  },
  {
    id: 'sweden',
    name: 'Sweden',
    code: 'SE',
    flag: '🇸🇪',
    tagline: 'Global innovation capital, English-taught degrees & 1-year job seeker residence permit',
    heroImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80',
    overview: 'Sweden is the birthplace of global tech giants like Spotify, Skype, and IKEA, and consistently ranks among the most innovative societies on earth. Swedish universities offer cutting-edge English-taught bachelor’s and master’s programmes with generous working rights and post-study opportunities.',
    avgTuitionPerYear: 'SEK 85,000 – 145,000 (~EUR €7,500 – €13,000)',
    avgLivingPerYear: 'SEK 9,500 – 12,000 / month (~EUR €850 – €1,050/mo)',
    workDuringStudy: 'No statutory hourly limit on working during studies for degree students with a valid residence permit',
    postStudyWorkVisa: '1-Year Residence Permit to Seek Employment or Explore Starting a Business after graduation',
    primaryIntakes: 'August/September (Autumn) and January (Spring)',
    currency: 'SEK (Swedish Krona)',
    officialImmigrationName: 'Migrationsverket (Swedish Migration Agency)',
    officialImmigrationUrl: 'https://www.migrationsverket.se/English/Private-individuals/Studying-and-researching-in-Sweden.html',
    popularCities: ['Stockholm', 'Gothenburg', 'Uppsala', 'Lund', 'Malmö'],
    topReasons: [
      'Pioneer of global technology, sustainability, and clean tech innovation',
      'Unrestricted working hours during academic semesters with a valid residence permit',
      '1-Year post-graduation residence permit to secure professional employment or launch a startup',
      'Ranked among the top 10 happiest and safest nations with over 90% English fluency'
    ]
  },
  {
    id: 'finland',
    name: 'Finland',
    code: 'FI',
    flag: '🇫🇮',
    tagline: 'World’s #1 education system, 2-year post-study job search visa & 30 hrs/wk work rights',
    heroImage: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=1200&q=80',
    overview: 'Ranked the happiest country in the world for seven consecutive years, Finland boasts the globe’s most admired education model, exceptional safety, and an advanced tech and green-energy economy. International graduates benefit from a 2-year job-search visa.',
    avgTuitionPerYear: 'EUR €8,000 – €14,000',
    avgLivingPerYear: 'EUR €8,000 – €11,000 / year',
    workDuringStudy: 'Up to 30 hours per week during term time and unrestricted hours during holidays',
    postStudyWorkVisa: '2-Year Post-Study Job Search Residence Permit (can be split or extended)',
    primaryIntakes: 'August/September (Autumn) and January (Spring)',
    currency: 'EUR (€)',
    officialImmigrationName: 'Migri (Finnish Immigration Service)',
    officialImmigrationUrl: 'https://migri.fi/en/residence-permit-application-for-studies',
    popularCities: ['Helsinki', 'Espoo', 'Tampere', 'Oulu', 'Turku'],
    topReasons: [
      'Consistently ranked #1 Happiest Country in the World with unmatched quality of life',
      'Generous 30 hours per week part-time student work rights',
      '2-Year post-study residence permit for job search or tech entrepreneurship',
      'Global pioneer in Artificial Intelligence, communications, gaming, and sustainability'
    ]
  },
  {
    id: 'malta',
    name: 'Malta',
    code: 'MT',
    flag: '🇲🇹',
    tagline: 'English-speaking EU island, affordable Schengen degrees & 9-month post-study visa',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    overview: 'Malta is an English-speaking European Union archipelago located in the sunny Mediterranean. With affordable tuition rates, recognized European bachelor’s and master’s programmes, and Schengen visa privileges, it offers unmatched value for international students.',
    avgTuitionPerYear: 'EUR €7,500 – €14,000',
    avgLivingPerYear: 'EUR €7,000 – €11,000 / year',
    workDuringStudy: 'Up to 20 hours/week after completing the first 90 days of study',
    postStudyWorkVisa: '9-Month post-study work visa for graduates to seek employment across Malta and the EU',
    primaryIntakes: 'October (Autumn) and February (Spring)',
    currency: 'EUR (€)',
    officialImmigrationName: 'Identità Malta (Central Visa Unit)',
    officialImmigrationUrl: 'https://identita.gov.mt/',
    popularCities: ['Valletta', 'Msida', 'St. Julian’s', 'Sliema'],
    topReasons: [
      'Official English-speaking nation within the European Union',
      'Highly affordable tuition and living expenses compared to Western Europe',
      'Full Schengen visa mobility to travel throughout 29 European countries',
      'Fast-growing European center for Financial Technology, iGaming, and Tourism'
    ]
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    code: 'AE',
    flag: '🇦🇪',
    tagline: 'Dubai Academic City, tax-free career opportunities & world-class branch campuses',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    overview: 'The UAE, specifically Dubai and Abu Dhabi, hosts the world’s largest concentration of international university branch campuses (including British, Australian, and American institutions). Study an internationally accredited degree in a dynamic, tax-free economy.',
    avgTuitionPerYear: 'AED 35,000 – 75,000 (Approx. USD 9,500 – 20,000)',
    avgLivingPerYear: 'AED 30,000 – 48,000 / year',
    workDuringStudy: 'Part-time work permitted with university No Objection Certificate (NOC)',
    postStudyWorkVisa: 'Green Visa (5 years) for skilled graduates, and Golden Visa options for outstanding academic achievers',
    primaryIntakes: 'September (Fall) and January (Spring)',
    currency: 'AED (Dh)',
    officialImmigrationName: 'Federal Authority for Identity, Citizenship & Customs (ICP)',
    officialImmigrationUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/student-visa',
    popularCities: ['Dubai (DIAC & Knowledge Park)', 'Abu Dhabi', 'Sharjah University City'],
    topReasons: [
      'Study at world-class British or Australian universities located in Dubai',
      'Tax-free income environment with vibrant regional employment hubs',
      'Rapid visa issuance with straightforward processing and low documentation hurdles',
      'Short 4-hour direct flight connection to Colombo'
    ]
  }
];

export const UNIVERSITIES: University[] = [
  {
    id: 'uel',
    name: 'University of East London',
    country: 'United Kingdom',
    city: 'London',
    established: 1898,
    type: 'Public Modern University',
    tuitionRange: '£14,500 – £17,500 / yr',
    intakes: ['September', 'January'],
    popularSubjects: ['Computing & IT', 'Business & Management', 'Engineering', 'Health & Applied Science'],
    level: ['Foundation', 'Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 (Undergraduate) / 6.5 (Postgraduate)',
    highlights: [
      'Modern Docklands campus with on-campus student accommodation',
      'Direct pathway and generous credit recognition for BCAS diploma holders',
      'Close proximity to Canary Wharf financial center and Tech City London',
      'International merit scholarships up to £3,000'
    ],
    scholarshipAvailable: true,
    description: 'A career-focused university known for diversity, practical industry partnerships, and strong support for international students starting in London.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wlv',
    name: 'University of Wolverhampton',
    country: 'United Kingdom',
    city: 'Wolverhampton / West Midlands',
    established: 1992,
    type: 'Public University',
    tuitionRange: '£13,950 – £15,950 / yr',
    intakes: ['September', 'January'],
    popularSubjects: ['Engineering', 'Law & Legal Studies', 'Computing & IT', 'Business'],
    level: ['Diploma', 'Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 (min 5.5 in each component)',
    highlights: [
      'Low cost of living compared to London, making study very affordable',
      'Outstanding engineering labs and moot court facilities',
      'Well-established Top-Up degree arrangements for BCAS HND students',
      'Lord Paul international scholarships available'
    ],
    scholarshipAvailable: true,
    description: 'Renowned for high graduate employability, state-of-the-art STEM facilities, and exceptional value for international students.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coventry',
    name: 'Coventry University',
    country: 'United Kingdom',
    city: 'Coventry / London',
    established: 1843,
    type: 'Top Modern University',
    tuitionRange: '£16,000 – £19,800 / yr',
    intakes: ['September', 'January', 'May'],
    popularSubjects: ['Business & Management', 'Engineering', 'Computing & IT', 'Hospitality & Tourism'],
    level: ['Foundation', 'Bachelor’s', 'Postgraduate'],
    minIELTS: '6.5 overall',
    highlights: [
      'Ranked among top modern universities for student satisfaction',
      'Dedicated international student onboarding and career center',
      'Three intake options (September, January, and May)',
      'Innovative project-based learning with automotive & corporate ties'
    ],
    scholarshipAvailable: true,
    description: 'Award-winning university recognised for forward-thinking teaching methods, vibrant campus, and strong employability coaching.',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'deakin',
    name: 'Deakin University',
    country: 'Australia',
    city: 'Melbourne / Geelong',
    established: 1974,
    type: 'World Top 1% University',
    tuitionRange: 'AUD 32,000 – 41,000 / yr',
    intakes: ['February', 'July', 'November'],
    popularSubjects: ['Computing & IT', 'Health & Applied Science', 'Business & Management'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.5 (min 6.0)',
    highlights: [
      'Ranked top 1% of universities globally',
      'Geelong campuses qualify for Australian regional migration visa incentives',
      'Leader in cloud campus and digital learning tools',
      'Deakin STEM scholarships and Vice-Chancellor awards'
    ],
    scholarshipAvailable: true,
    description: 'Progressive, globally minded institution with top-tier research, flexible trimester intakes, and strong graduate outcomes across Victoria.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'uow',
    name: 'University of Wollongong (UOW)',
    country: 'Australia',
    city: 'Wollongong / Sydney',
    established: 1951,
    type: 'Top 1% Global University',
    tuitionRange: 'AUD 31,000 – 43,000 / yr',
    intakes: ['February', 'July'],
    popularSubjects: ['Engineering', 'Computing & IT', 'Business & Management', 'Health'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 – 6.5',
    highlights: [
      'Coastal campus located just 1 hour from central Sydney',
      'Designated regional location with additional post-study work visa rights',
      'Internationally ranked engineering and computer science schools',
      'UOW University Excellence Scholarship: Up to 30% fee reduction'
    ],
    scholarshipAvailable: true,
    description: 'Renowned for high research output, beautiful seaside campus environment, and exceptional links with global tech and engineering firms.',
    image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'brock',
    name: 'Brock University',
    country: 'Canada',
    city: 'St. Catharines / Niagara, Ontario',
    established: 1964,
    type: 'Comprehensive Public University',
    tuitionRange: 'CAD 29,000 – 34,000 / yr',
    intakes: ['September', 'January'],
    popularSubjects: ['Business & Management', 'Computing & IT', 'Health & Applied Science'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.5 (no band below 6.0)',
    highlights: [
      'Renowned Goodman School of Business with AACSB accreditation',
      'One of the top Co-op programmes in Canada with 95% placement rate',
      'Low cost of living in beautiful Niagara region, 1 hour from Toronto',
      'Brock Scholars Awards based on academic performance'
    ],
    scholarshipAvailable: true,
    description: 'Known for student-centered learning, safe community, and paid co-op placements providing students with practical Canadian work experience.',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ucsi',
    name: 'UCSI University',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    established: 1986,
    type: 'Top Malaysian Private University',
    tuitionRange: 'MYR 28,000 – 45,000 / yr (Approx. $6,500 – $10,500)',
    intakes: ['January', 'May', 'September'],
    popularSubjects: ['Computing & IT', 'Hospitality & Tourism', 'Engineering', 'Business'],
    level: ['Foundation', 'Diploma', 'Bachelor’s', 'Postgraduate'],
    minIELTS: '5.5 – 6.0',
    highlights: [
      'Ranked in top 300 universities worldwide in QS World University Rankings',
      'Direct credit transfer and twinning programmes with UK and Australia',
      'Very affordable living expenses in central Kuala Lumpur',
      'Co-op education pioneer with global corporate partner network'
    ],
    scholarshipAvailable: true,
    description: 'Malaysia’s leading private institution offering internationally accredited degrees, dynamic industry integration, and cost-effective tuition.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'teesside',
    name: 'Teesside University',
    country: 'United Kingdom',
    city: 'Middlesbrough',
    established: 1930,
    type: 'Public Modern University',
    tuitionRange: '£14,000 – £16,500 / yr',
    intakes: ['September', 'January'],
    popularSubjects: ['Computing & IT', 'Engineering', 'Health & Applied Science', 'Business'],
    level: ['Foundation', 'Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 (no band below 5.5)',
    highlights: [
      'Consistently ranked as one of the most affordable student towns in the UK',
      'World-leading animation, games design, and digital tech programmes',
      'Global Excellence Scholarships worth up to £2,000/year',
      'Dedicated international advice service for visa, housing, and careers'
    ],
    scholarshipAvailable: true,
    description: 'Pioneering university with high student satisfaction, modern digital campus facilities, and generous scholarships for international candidates.',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'neu-usa',
    name: 'Northeastern University',
    country: 'United States of America',
    city: 'Boston, Massachusetts',
    established: 1898,
    type: 'Top Tier Tier-1 Research University',
    tuitionRange: 'USD $36,000 – $48,000 / yr',
    intakes: ['September (Fall)', 'January (Spring)'],
    popularSubjects: ['Computing & IT', 'Engineering', 'Business & Management', 'Health & Applied Science'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.5 – 7.0',
    highlights: [
      'Ranked #1 for Co-op and internships in the United States',
      'Eligible for up to 3 years of STEM OPT post-study employment',
      'Historic Boston campus surrounded by top global biotech and tech firms',
      'Merit-based Dean’s Scholarship awards for high achievers'
    ],
    scholarshipAvailable: true,
    description: 'World-renowned private research university famous for its experiential Co-op education system and strong ties to international industry.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'asu-usa',
    name: 'Arizona State University (ASU)',
    country: 'United States of America',
    city: 'Phoenix / Tempe, Arizona',
    established: 1885,
    type: 'Public Research University',
    tuitionRange: 'USD $28,000 – $36,000 / yr',
    intakes: ['August (Fall)', 'January (Spring)'],
    popularSubjects: ['Business & Management', 'Engineering', 'Computing & IT'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 – 6.5',
    highlights: [
      'Ranked #1 in the US for Innovation ahead of MIT and Stanford',
      'Ira A. Fulton Schools of Engineering with cutting-edge labs',
      'New American University Scholarships up to $15,000 per year',
      'Wide range of on-campus research and teaching assistantships'
    ],
    scholarshipAvailable: true,
    description: 'A major public research university recognized for innovation, student success, and extensive STEM research programs with full OPT eligibility.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'iu-germany',
    name: 'IU International University of Applied Sciences',
    country: 'Germany',
    city: 'Berlin & Bad Honnef',
    established: 1998,
    type: 'State-Accredited German University',
    tuitionRange: 'EUR €7,500 – €11,500 / yr (English Taught)',
    intakes: ['October (Winter)', 'April (Summer)'],
    popularSubjects: ['Computing & IT', 'Business & Management', 'Engineering'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 (or English medium certificate)',
    highlights: [
      '100% English-taught degree programmes in the heart of Berlin',
      'Eligible for 18-month German post-study work visa and EU Blue Card',
      'Up to 35% early bird international tuition reductions',
      'Close connections to Berlin’s thriving tech startup ecosystem'
    ],
    scholarshipAvailable: true,
    description: 'Germany’s largest state-accredited private university, specializing in career-focused digital tech, software, and international business degrees.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jcu-singapore',
    name: 'James Cook University (Singapore Campus)',
    country: 'Singapore',
    city: 'Singapore (Kallang)',
    established: 2003,
    type: 'Australian University Branch Campus in Singapore',
    tuitionRange: 'SGD $22,000 – $32,000 / yr',
    intakes: ['March', 'July', 'November'],
    popularSubjects: ['Computing & IT', 'Business & Management', 'Hospitality & Tourism'],
    level: ['Foundation', 'Diploma', 'Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 (Undergraduate) / 6.5 (Postgraduate)',
    highlights: [
      'Earn an identical Australian James Cook University degree in Singapore',
      'Inter-campus mobility: Option to transfer or spend semesters in Australia',
      'Awarded EduTrust Star certification (highest quality mark in Singapore)',
      'Merit scholarships awarding up to 100% tuition for top entrance exam scorers'
    ],
    scholarshipAvailable: true,
    description: 'Direct Asian branch campus of JCU Australia offering accelerated trimesters, allowing students to graduate with an Australian Bachelor’s in just 2 years.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'uowd-uae',
    name: 'University of Wollongong in Dubai (UOWD)',
    country: 'United Arab Emirates',
    city: 'Dubai (Knowledge Park)',
    established: 1993,
    type: 'Premier Australian University in UAE',
    tuitionRange: 'AED 48,000 – 68,000 / yr (Approx. $13,000 – $18,500)',
    intakes: ['September (Autumn)', 'January (Spring)'],
    popularSubjects: ['Computing & IT', 'Engineering', 'Business & Management', 'Health & Applied Science'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 overall',
    highlights: [
      'Accredited by UAE Ministry of Education (CAA) and TEQSA Australia',
      'Brand new high-tech campus in Dubai Knowledge Park',
      'Option to transfer to UOW Australia campus anytime during degree',
      'Academic excellence scholarships up to 50% tuition reduction'
    ],
    scholarshipAvailable: true,
    description: 'The oldest and most prestigious foreign university in the UAE, providing Australian-accredited degrees and direct access to Dubai’s multinational job market.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'um-malta',
    name: 'University of Malta',
    country: 'Malta',
    city: 'Msida / Valletta',
    established: 1592,
    type: 'Historic Public European University',
    tuitionRange: 'EUR €8,500 – €13,500 / yr',
    intakes: ['October (Annual Intake)'],
    popularSubjects: ['Computing & IT', 'Health & Applied Science', 'Business & Management', 'Law & Legal Studies'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 (Undergraduate) / 6.5 (Postgraduate)',
    highlights: [
      '400-year academic tradition with full European Union Bologna recognition',
      'English is the official language of instruction and everyday life in Malta',
      'Affordable tuition and Mediterranean living costs with 9-month stay-back visa',
      'Extensive research in Maritime, Artificial Intelligence, and Biomedical sciences'
    ],
    scholarshipAvailable: true,
    description: 'Malta’s national university, renowned for high academic standards, vibrant international student community, and affordable EU accredited degrees.',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eu-spain',
    name: 'EU Business School Barcelona',
    country: 'Spain',
    city: 'Barcelona (Diagonal & Ganduxer)',
    established: 1973,
    type: 'Top-Ranked International Business School',
    tuitionRange: 'EUR €12,500 – €15,500 / yr',
    intakes: ['October', 'February', 'June'],
    popularSubjects: ['Business & Management', 'Computing & IT', 'Hospitality & Tourism'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 overall',
    highlights: [
      'Ranked in top tier for global MBA and international business education',
      'English-taught programmes in one of Europe’s most vibrant smart cities',
      'Dual degree options with University of Derby and London Metropolitan University',
      '1-Year job search residence authorization for graduates in Spain'
    ],
    scholarshipAvailable: true,
    description: 'High-caliber international business school combining North American and European business education in the heart of Barcelona.',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nci-ireland',
    name: 'National College of Ireland (NCI)',
    country: 'Ireland',
    city: 'Dublin (IFSC Tech District)',
    established: 1951,
    type: 'State-Supported Higher Education College',
    tuitionRange: 'EUR €11,500 – €15,000 / yr',
    intakes: ['September', 'January'],
    popularSubjects: ['Computing & IT', 'Business & Management'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 – 6.5',
    highlights: [
      'Located in Dublin’s Silicon Docks next to Google, Meta, and Citi',
      '2-Year Third Level Graduate stay-back visa for Master’s students',
      'NCI International Dean’s scholarships up to €4,000',
      'Exceptional graduate employment rate in Irish tech and financial services'
    ],
    scholarshipAvailable: true,
    description: 'Specialist college renowned for cloud computing, cybersecurity, data analytics, and business management in Dublin.',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kth-sweden',
    name: 'KTH Royal Institute of Technology',
    country: 'Sweden',
    city: 'Stockholm',
    established: 1827,
    type: 'Top European Technical University (QS World Top 100)',
    tuitionRange: 'SEK 120,000 – 155,000 / yr (~EUR €10,500 – €13,800)',
    intakes: ['August (Autumn)'],
    popularSubjects: ['Computing & IT', 'Engineering & Technology', 'Data Science'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.5 (minimum 5.5 in each component)',
    highlights: [
      'Sweden’s largest and top-ranked technical university; global QS Top 75',
      'Strong career pipelines to Stockholm tech cluster (Spotify, Klarna, Ericsson)',
      '1-Year post-study residence permit with no weekly working hour restriction during studies',
      'KTH Scholarship covering 100% tuition for outstanding international students'
    ],
    scholarshipAvailable: true,
    description: 'Renowned world-leading technical university at the forefront of European software engineering, telecommunications, and green tech innovation.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aalto-finland',
    name: 'Aalto University',
    country: 'Finland',
    city: 'Espoo / Helsinki',
    established: 2010,
    type: 'Leading Multidisciplinary Nordic University (QS Top 110)',
    tuitionRange: 'EUR €12,000 – €15,000 / yr',
    intakes: ['August/September (Autumn)'],
    popularSubjects: ['Computing & IT', 'Business & Management', 'Design & Technology'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.5 (minimum 6.0 in writing)',
    highlights: [
      'Otaniemi campus is the largest high-tech and startup innovation hub in the Nordic countries',
      '2-Year post-study residence permit for international graduates',
      'Generous 30 hours per week student employment rights during semesters',
      'Aalto University Scholarship Programme awards up to 100% tuition fee waivers'
    ],
    scholarshipAvailable: true,
    description: 'A global powerhouse where science and art meet business and technology, located in the world’s happiest country with direct industry immersion.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lund-sweden',
    name: 'Lund University',
    country: 'Sweden',
    city: 'Lund & Malmö',
    established: 1666,
    type: 'World Top 100 Comprehensive European University',
    tuitionRange: 'SEK 110,000 – 145,000 / yr (~EUR €9,800 – €12,900)',
    intakes: ['August/September (Autumn)'],
    popularSubjects: ['Business & Management', 'Computing & IT', 'Engineering & Construction', 'Health & Applied Science'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.5 overall (no band below 5.5)',
    highlights: [
      'Ranked in the global top 85 universities (QS World Rankings)',
      'Vibrant student city located 35 minutes by train from Copenhagen Airport',
      'No weekly work restriction during studies for full-time degree students',
      'Lund University Global Scholarship awards partial to full tuition waivers'
    ],
    scholarshipAvailable: true,
    description: 'One of Scandinavia’s oldest and most prestigious research institutions, offering over 100 international master’s and bachelor’s degrees in English.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'helsinki-finland',
    name: 'University of Helsinki',
    country: 'Finland',
    city: 'Helsinki',
    established: 1640,
    type: 'Leading Nordic Research University',
    tuitionRange: 'EUR €13,000 – €15,000 / yr',
    intakes: ['August/September (Autumn)'],
    popularSubjects: ['Computing & IT', 'Health & Applied Science', 'Business & Management'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.5 (minimum 6.0 in writing)',
    highlights: [
      'Finland’s largest and oldest academic institution; consistently in global Top 100',
      'Generous 30 hours per week student employment rights during semester',
      '2-Year post-study residence permit for international career integration',
      'Tuition waiver grants covering 50% to 100% of study fees'
    ],
    scholarshipAvailable: true,
    description: 'Pioneering global research in data science, artificial intelligence, and public health in Helsinki, with exceptional international student services.',
    image: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gcm-malta',
    name: 'Global College Malta (GCM)',
    country: 'Malta',
    city: 'SmartCity Malta, Kalkara',
    established: 2012,
    type: 'Accredited European Higher Education Institution',
    tuitionRange: 'EUR €6,500 – €9,500 / yr',
    intakes: ['October (Autumn)', 'February (Spring)'],
    popularSubjects: ['Business & Management', 'Computing & IT', 'Hospitality & Tourism'],
    level: ['Foundation', 'Diploma', 'Bachelor’s', 'Postgraduate'],
    minIELTS: '5.5 – 6.0 (or English Medium Certificate)',
    highlights: [
      'Dual award pathways with leading British universities (University of Chester)',
      'Located in SmartCity Malta, the Mediterranean’s leading business and tech park',
      'Low cost of living, 20 hrs/week student work rights & 9-month EU graduate visa',
      'Direct credit recognition and fast-track admissions for BCAS HND holders'
    ],
    scholarshipAvailable: true,
    description: 'Dynamic British-modeled business and technology college in Malta offering affordable European qualifications with UK university progression.',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hwu-dubai',
    name: 'Heriot-Watt University Dubai',
    country: 'United Arab Emirates',
    city: 'Dubai International Academic City (DIAC)',
    established: 2005,
    type: 'Royal Charter British Branch Campus in Dubai',
    tuitionRange: 'AED 54,000 – 72,000 / yr (~USD $14,700 – $19,600)',
    intakes: ['September (Autumn)', 'January (Spring)'],
    popularSubjects: ['Engineering & Construction', 'Business & Management', 'Computing & IT'],
    level: ['Bachelor’s', 'Postgraduate'],
    minIELTS: '6.0 overall',
    highlights: [
      'First British campus to establish in Dubai Knowledge/Academic City',
      'Identical degree certificate issued by Heriot-Watt University UK Edinburgh',
      'Seamless inter-campus transfer to UK or Malaysia campuses at any stage',
      'Merit scholarships awarding up to 30% reduction on tuition fees'
    ],
    scholarshipAvailable: true,
    description: 'Renowned for world-class engineering, business, and computer science degrees in Dubai with direct connections to GCC corporate networks.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  }
];

export const COURSES: Course[] = [
  {
    id: 'ossd-cambridge',
    title: 'Ontario Secondary School Diploma (OSSD) - BCAS International University Placements',
    category: 'High School & Pre-University',
    level: 'Foundation',
    duration: '10 - 12 Months (Fast-Track available)',
    popularDestinations: ['Canada', 'United Kingdom', 'Australia', 'United States'],
    overview: 'Earn the prestigious Canadian High School Diploma delivered in Sri Lanka through the official partnership between Cambridge International Academy and BCAS International University Placements. Fully recognized by the Ontario Ministry of Education, the OSSD provides direct admission to premier universities across Canada (University of Toronto, Waterloo, UBC, McGill) and worldwide without requiring a local foundation year.',
    keyModules: [
      'Grade 12 University Preparation English (ENG4U)',
      'Advanced Functions (MHF4U)',
      'Calculus & Vectors (MCV4U)',
      'Mathematics of Data Management (MDM4U)',
      'Business Leadership & Management Fundamentals',
      'Computer Science & Information Technology',
      'Canadian & International Law'
    ],
    careerOpportunities: [
      'Direct Canadian University Admissions (U of T, Waterloo, UBC, McGill)',
      'Direct Entry to UK Russell Group & Australian Group of Eight (Go8)',
      'Higher Eligibility for High-Tier Canadian Entrance Scholarships',
      'Smooth Study Permit & Canadian Student Visa Processing'
    ],
    entryRequirements: 'G.C.E. O/L completed with minimum 5 passes/credits including English and Mathematics, or partial G.C.E. A/L studies. Direct assessment available.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bcas-ielts-prep',
    title: 'IELTS Academic Preparation & Official Testing Coaching',
    category: 'English Proficiency',
    level: 'Foundation',
    duration: '6 - 8 Weeks (Regular & Fast-Track Intensive Batches)',
    popularDestinations: ['United Kingdom', 'Australia', 'Canada', 'Sweden', 'Finland', 'Malta', 'United Arab Emirates'],
    overview: 'Master the IELTS Academic exam with BCAS certified language instructors. Comprehensive training across Listening, Reading, Writing, and Speaking with timed mock examinations, individual diagnostic rubrics, official British Council / IDP test registration support, and Band 7.0+ score guarantees for student visa requirements.',
    keyModules: [
      'Academic Writing Task 1 (Data Synthesis, Charts, Diagrams & Process Maps)',
      'Academic Writing Task 2 (Discursive Essays, Balanced Arguments & Stances)',
      'Advanced Academic Reading Tactics (Skimming, Scanning & Speed Inference)',
      'Interactive Accent & Fluency Speaking Drills with Native Examiner Rubrics',
      'Listening Comprehension Across All 4 Real Exam Formats',
      'Weekly Full-Length Timed Computer-Delivered & Paper Mock Tests'
    ],
    careerOpportunities: [
      'Fulfill UKVI / Australian / Canadian Student Visa Language Standards',
      'Secure Unconditional University Admission Offers Without Pre-Sessional Fees',
      'Attain Band 7.0+ to Unlock Merit & International Excellence Scholarships',
      'Direct Exemption from Foundation English Requirements'
    ],
    entryRequirements: 'Open to all students preparing for overseas study or professional migration. Free initial placement assessment test provided on registration.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'computing-it',
    title: 'Computing, Software Engineering & AI',
    category: 'Computing',
    level: 'Bachelor’s',
    duration: '3 Years (or 1-Year Top-Up after BCAS HND)',
    popularDestinations: ['United Kingdom', 'Australia', 'Canada', 'Sweden', 'Finland'],
    overview: 'Gain comprehensive mastery of modern software development, data structures, algorithms, cybersecurity, cloud architecture, and artificial intelligence.',
    keyModules: [
      'Object-Oriented Programming (Java / Python)',
      'Database Architecture & SQL/NoSQL',
      'Cloud Computing & Distributed Systems',
      'Full-Stack Web & Mobile App Development',
      'Machine Learning & Artificial Intelligence Principles',
      'Cybersecurity & Network Defense'
    ],
    careerOpportunities: [
      'Software Engineer',
      'Full-Stack Developer',
      'Data Analyst & Engineer',
      'Cybersecurity Specialist',
      'Cloud Systems Architect'
    ],
    entryRequirements: 'G.C.E. A/L (2 passes) or BCAS International Foundation Diploma; IELTS 6.0 or equivalent English proficiency.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'business-mgmt',
    title: 'Business Administration & International Management',
    category: 'Business',
    level: 'Bachelor’s',
    duration: '3 Years (or 1-Year Top-Up after BCAS HND)',
    popularDestinations: ['United Kingdom', 'Australia', 'Canada', 'Malta', 'United Arab Emirates'],
    overview: 'Equip yourself for global corporate leadership, modern strategic management, digital marketing, business analytics, and global trade operations.',
    keyModules: [
      'Strategic Corporate Management',
      'Digital Marketing & Consumer Psychology',
      'Financial Accounting & Corporate Valuation',
      'International Business Strategy & Trade',
      'Human Resource Management & Leadership',
      'Business Analytics & Data-Driven Decision Making'
    ],
    careerOpportunities: [
      'Business Development Manager',
      'Management Consultant',
      'Digital Marketing Strategist',
      'Operations & Supply Chain Lead',
      'Corporate Financial Analyst'
    ],
    entryRequirements: 'G.C.E. A/L (2 passes) or BCAS Foundation; IELTS 6.0.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'engineering-construction',
    title: 'Civil & Construction Engineering',
    category: 'Engineering',
    level: 'Bachelor’s',
    duration: '3 to 4 Years (Transferable from BCAS HND in Civil Engineering)',
    popularDestinations: ['United Kingdom', 'Australia', 'Canada', 'Finland', 'United Arab Emirates'],
    overview: 'Design, build and maintain resilient infrastructure. Learn structural mechanics, geotechnical engineering, sustainable construction materials, and BIM.',
    keyModules: [
      'Structural Analysis & Design (Concrete & Steel)',
      'Fluid Mechanics & Hydraulics',
      'Geotechnical Engineering & Soil Mechanics',
      'Construction Project Management & Contract Law',
      'Building Information Modelling (BIM) & CAD',
      'Environmental Engineering & Sustainable Infrastructure'
    ],
    careerOpportunities: [
      'Structural Design Engineer',
      'Site Construction Engineer',
      'Project Planning Engineer',
      'Geotechnical Consultant',
      'Infrastructure Project Manager'
    ],
    entryRequirements: 'G.C.E. A/L in Mathematics stream (or BCAS Engineering Foundation); IELTS 6.0.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'health-biomedical',
    title: 'Biomedical Science & Applied Health',
    category: 'Health',
    level: 'Bachelor’s',
    duration: '3 Years',
    popularDestinations: ['United Kingdom', 'Australia', 'Canada', 'Sweden'],
    overview: 'Explore human biology, pathology, biochemistry, pharmacology, and medical laboratory diagnostics. Ideal preparation for clinical, research, or diagnostic laboratory careers.',
    keyModules: [
      'Human Anatomy & Clinical Physiology',
      'Cellular Pathology & Diagnostic Cytology',
      'Medical Microbiology & Immunology',
      'Clinical Biochemistry & Hematology',
      'Molecular Genetics & Genomic Medicine',
      'Pharmacology & Therapeutics'
    ],
    careerOpportunities: [
      'Biomedical Diagnostic Scientist',
      'Clinical Research Associate',
      'Pharmaceutical Specialist',
      'Public Health Officer',
      'Laboratory Diagnostics Manager'
    ],
    entryRequirements: 'G.C.E. A/L Biology and Chemistry; IELTS 6.5.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hospitality-tourism',
    title: 'International Hospitality & Tourism Management',
    category: 'Hospitality',
    level: 'Bachelor’s',
    duration: '3 Years with Built-in Industry Internship',
    popularDestinations: ['United Kingdom', 'Australia', 'Malta', 'United Arab Emirates'],
    overview: 'Prepare for leadership in luxury hotel management, resort operations, global events, destination marketing, and airline passenger services.',
    keyModules: [
      'Hospitality Operational Management',
      'Global Tourism Marketing & Branding',
      'Revenue Management & Hotel Analytics',
      'Event Planning, Conferencing & Exhibition (MICE)',
      'Customer Experience & Service Quality Management',
      'Sustainable Tourism & Eco-Resort Development'
    ],
    careerOpportunities: [
      'Hotel & Resort General Manager',
      'International Events Director',
      'Guest Experience & Operations Manager',
      'Tourism Destination Consultant',
      'Airline & Cruise Operations Specialist'
    ],
    entryRequirements: 'G.C.E. A/L (2 passes in any stream) or BCAS Foundation; IELTS 5.5 – 6.0.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'law-legal-studies',
    title: 'Law & International Legal Studies (LLB Pathways)',
    category: 'Law',
    level: 'Bachelor’s',
    duration: '3 Years (Qualifying Law Degree)',
    popularDestinations: ['United Kingdom', 'Australia'],
    overview: 'Master foundational legal reasoning, criminal law, constitutional governance, contract law, human rights, and international commercial arbitration.',
    keyModules: [
      'Contract Law & Commercial Obligations',
      'Constitutional & Administrative Law',
      'Criminal Law & Evidence',
      'Law of Torts & Civil Liability',
      'International Commercial Law & Arbitration',
      'Human Rights & International Law'
    ],
    careerOpportunities: [
      'Legal Adviser / Corporate Counsel',
      'Compliance Officer',
      'Arbitration & Dispute Specialist',
      'Advocate / Solicitor Pathway',
      'International NGO Policy Officer'
    ],
    entryRequirements: 'G.C.E. A/L (3 passes with good English grade); IELTS 6.5.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'institution-merit',
    title: 'University Vice-Chancellor’s & International Merit Awards',
    provider: 'Partner Universities (UK, Australia, Canada, Malaysia)',
    destination: 'United Kingdom / Australia / Canada',
    type: 'Merit-Based',
    coverage: '£1,500 – £5,000 / AUD 5,000 – 10,000 tuition fee reduction',
    eligibility: 'Awarded to applicants with strong academic performance in A/Levels, BCAS HND, or bachelor’s degree.',
    deadline: 'Varies by university; recommended application 3–4 months prior to intake',
    requirements: [
      'Official academic transcripts demonstrating high academic grades (e.g., Distinction or Merit)',
      'Unconditional or conditional admission offer from the university',
      'Strong Personal Statement detailing academic ambition and leadership',
      'English proficiency results (IELTS/PTE) meeting university direct entry criteria'
    ]
  },
  {
    id: 'early-acceptance',
    title: 'Early Bird Acceptance & Deposit Fee Reductions',
    provider: 'Selected UK & Australian Universities',
    destination: 'United Kingdom / Australia',
    type: 'Early Acceptance',
    coverage: '£1,000 – £2,000 direct tuition deduction upon early deposit',
    eligibility: 'Available to students who accept their offer and pay their initial tuition deposit before early cut-off dates.',
    deadline: 'Usually June (for September intake) / November (for January intake)',
    requirements: [
      'Valid offer letter issued by the partner university',
      'Payment of tuition deposit before university stipulated deadline',
      'No separate essay required; applied automatically upon fee confirmation'
    ]
  },
  {
    id: 'south-asia-grant',
    title: 'South Asian Regional Bursaries',
    provider: 'Participating UK & Australian Institutions',
    destination: 'United Kingdom / Australia',
    type: 'Institutional Award',
    coverage: '10% – 25% recurring tuition reduction per year of study',
    eligibility: 'All qualified passport holders residing in Sri Lanka and South Asian region applying for eligible degree programmes.',
    deadline: 'Assessed on rolling basis alongside standard degree application',
    requirements: [
      'Citizen and resident of Sri Lanka',
      'Accepted into full-time undergraduate or postgraduate taught programme',
      'Maintain satisfactory academic progress during degree for annual renewal'
    ]
  },
  {
    id: 'chevening',
    title: 'Chevening Scholarships (UK Government)',
    provider: 'UK Foreign, Commonwealth & Development Office (FCDO)',
    destination: 'United Kingdom',
    type: 'Government',
    coverage: 'Fully funded: 100% Tuition fees, monthly living stipend, return flights & visa costs',
    eligibility: 'Sri Lankan professionals with minimum 2 years of work experience pursuing a 1-year master’s degree in the UK.',
    deadline: 'Early November annually for the following academic year',
    requirements: [
      'Undergraduate degree (2:1 equivalent or above)',
      'Minimum 2 years (2,800 hours) of demonstrable work experience',
      'Application to three eligible UK master’s courses',
      'Four detailed essays on leadership, networking, studying in the UK, and long-term career goals'
    ],
    officialUrl: 'https://www.chevening.org/scholarship/sri-lanka/'
  },
  {
    id: 'australia-awards',
    title: 'Australia Awards Scholarships',
    provider: 'Australian Department of Foreign Affairs and Trade (DFAT)',
    destination: 'Australia',
    type: 'Government',
    coverage: 'Full tuition, return air travel, establishment allowance, contribution to living expenses, health cover',
    eligibility: 'Sri Lankan mid-career professionals committed to contributing to national development priorities upon return.',
    deadline: 'End of April annually for the following year intake',
    requirements: [
      'Minimum bachelor’s degree qualification',
      'Professional experience in target development sectors',
      'Return to Sri Lanka for at least two years following graduation',
      'Official application submitted via Australian Government portal'
    ],
    officialUrl: 'https://www.dfat.gov.au/people-to-people/australia-awards'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    studentName: 'Dinuk Senanayake',
    fromCampus: 'BCAS Colombo Campus',
    currentUniversity: 'University of East London, UK',
    destination: 'United Kingdom',
    degreeProgramme: 'BSc (Hons) Cloud Computing & Software Systems',
    graduationYear: '2025 Graduate',
    currentRole: 'Associate Cloud Engineer at London Fintech',
    storyQuote: 'Completing my HND at BCAS Colombo and transferring directly into the final year in London was the most cost-effective and seamless path to a UK career.',
    fullJourney: 'Dinuk began his journey by studying the BTEC HND in Computing at BCAS City Campus in Colombo. Upon completion with Distinction, the BCAS International Placements team secured him an unconditional offer with significant credit transfer into the final year (Top-Up) at UEL in London. After excelling in his final project, he transitioned to the Graduate Route visa and now works in London.',
    adviceForStudents: 'Start your visa and document preparation early. BCAS helped me organize my bank statements properly so I experienced zero delays in my visa grant.',
    category: 'Computing & IT',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'story-2',
    studentName: 'Fathima Risma',
    fromCampus: 'BCAS Kalmunai Campus',
    currentUniversity: 'Deakin University, Australia',
    destination: 'Australia',
    degreeProgramme: 'Master of International Business Analytics',
    graduationYear: '2024 Graduate',
    currentRole: 'Business Intelligence Consultant, Melbourne',
    storyQuote: 'The counselors at BCAS understood my aspirations and walked me through every scholarship option until I secured a 25% Vice-Chancellor award.',
    fullJourney: 'Coming from Kalmunai, Risma wanted a globally recognized master’s degree in Australia. BCAS guided her through course selection, IELTS preparation advice, and scholarship essays. She completed her degree at Deakin’s Melbourne campus and now works as a BI consultant.',
    adviceForStudents: 'Do not be intimidated by the paperwork. Ask every question, be honest about your financial budget, and trust the guidance provided by experienced counselors.',
    category: 'Business & Management',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'story-3',
    studentName: 'Karthik Sivakumar',
    fromCampus: 'BCAS Jaffna Campus',
    currentUniversity: 'University of Wollongong, Australia',
    destination: 'Australia',
    degreeProgramme: 'Bachelor of Civil & Structural Engineering',
    graduationYear: '2025 Graduate',
    currentRole: 'Graduate Site Engineer, New South Wales',
    storyQuote: 'Studying in a designated regional university city gave me world-class engineering education and an additional year of post-study work rights.',
    fullJourney: 'Karthik started with the BCAS Foundation in Science and Technology in Jaffna, then applied through BCAS to UOW Australia. BCAS managed his GTE (Genuine Student) statement review and financial documentation with precision.',
    adviceForStudents: 'Look closely at regional universities in Australia. The campus community is tight-knit, living costs are lower, and post-study opportunities are tremendous.',
    category: 'Engineering & Construction',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'story-4',
    studentName: 'Nipuni Wickramasinghe',
    fromCampus: 'BCAS Kandy Campus',
    currentUniversity: 'Brock University, Canada',
    destination: 'Canada',
    degreeProgramme: 'BSc in Biomedical Sciences & Biotechnology',
    graduationYear: '2024 Graduate',
    currentRole: 'Clinical Research Laboratory Associate, Ontario',
    storyQuote: 'The Co-op work term was the highlight of my degree. I graduated with 12 months of Canadian work experience already on my resume.',
    fullJourney: 'Nipuni began her consultations at the BCAS Kandy Campus. The team helped her evaluate Canadian universities offering paid Co-op education. She secured admission at Brock University in Ontario, completed two paid research terms, and transitioned seamlessly into a clinical laboratory position.',
    adviceForStudents: 'Always check if your Canadian programme includes Co-op. It makes transitioning from student life to professional employment so much easier.',
    category: 'Health & Applied Science',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'story-5',
    studentName: 'Malsha Fernando',
    fromCampus: 'BCAS Colombo Campus',
    currentUniversity: 'KTH Royal Institute of Technology, Sweden',
    destination: 'Sweden',
    degreeProgramme: 'MSc in Software Engineering of Distributed Systems',
    graduationYear: '2025 Graduate',
    currentRole: 'Backend Developer at Stockholm Tech Unicorn',
    storyQuote: 'Studying in Sweden opened the door to Europe’s most innovative tech ecosystem. BCAS guided my admissions portfolio and Swedish migration application flawlessly.',
    fullJourney: 'After excelling in the Computing HND at BCAS Colombo, Malsha aimed for Scandinavian research excellence. BCAS advisers evaluated Sweden’s unique admissions system (Universityadmissions.se) and helped compile her academic dossier. She received an offer from KTH in Stockholm and graduated with immediate job placement.',
    adviceForStudents: 'Sweden values practical critical thinking. Apply during the early Swedish Autumn window and take advantage of the 1-year job search permit.',
    category: 'Computing & IT',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'story-6',
    studentName: 'Tharindu Alwis',
    fromCampus: 'BCAS Kandy Campus',
    currentUniversity: 'Aalto University, Finland',
    destination: 'Finland',
    degreeProgramme: 'Master in Sustainable Clean Technologies',
    graduationYear: '2025 Graduate',
    currentRole: 'Green Energy Systems Analyst, Helsinki',
    storyQuote: 'Finland is ranked #1 in happiness for a reason. With a 2-year post-study job seeker visa and 30 hours per week working rights, studying here has been life-changing.',
    fullJourney: 'Starting his academic inquiries at BCAS Kandy Campus, Tharindu explored Nordic clean technology programmes. The BCAS team guided him through Finland’s Migri electronic residence permit and scholarship application, securing a 50% tuition waiver at Aalto University.',
    adviceForStudents: 'Finland’s tech sector is hungry for international talent. The work-life balance is incredible and student support is the best in the world.',
    category: 'Engineering & Construction',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'story-7',
    studentName: 'Ayesha Zahra',
    fromCampus: 'BCAS Kalmunai Campus',
    currentUniversity: 'Heriot-Watt University Dubai, UAE',
    destination: 'United Arab Emirates',
    degreeProgramme: 'MSc in International Financial Technology',
    graduationYear: '2024 Graduate',
    currentRole: 'Fintech Compliance Officer, Dubai DIFC',
    storyQuote: 'BCAS provided a swift 4-week turnaround from my Kalmunai counseling session to my Dubai university visa stamp. Dubai offers high tax-free earning potential.',
    fullJourney: 'Ayesha sought a high-prestige UK degree without European winters and long flight times. BCAS Placements recommended Heriot-Watt’s Dubai International Academic City campus. She secured a 20% academic merit bursary and is now employed in the Dubai International Financial Centre (DIFC).',
    adviceForStudents: 'UAE is just a 4-hour flight from Sri Lanka and the economy is booming. It is one of the quickest and smoothest visa pathways available.',
    category: 'Business & Management',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'story-8',
    studentName: 'Jeremy Rodrigo',
    fromCampus: 'BCAS Jaffna Campus',
    currentUniversity: 'Global College Malta / University of Chester',
    destination: 'Malta',
    degreeProgramme: 'Bachelor of International Business Management',
    graduationYear: '2024 Graduate',
    currentRole: 'Operations Analyst, Valletta',
    storyQuote: 'Affordable tuition, English-speaking environment, and Schengen visa travel across Europe made Malta the ideal European starting point for me.',
    fullJourney: 'Jeremy visited the BCAS Jaffna campus looking for European degree options on a sensible budget. BCAS matched him with Global College Malta in SmartCity. He completed his degree with European accreditation and leveraged the 9-month post-study visa.',
    adviceForStudents: 'Do not overlook Malta. It is completely English-speaking, remarkably welcoming, and offers Schengen access throughout Europe.',
    category: 'Business & Management',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'story-9',
    studentName: 'Kasun Rathnayake',
    fromCampus: 'BCAS Colombo Campus',
    currentUniversity: 'Coventry University, UK',
    destination: 'United Kingdom',
    degreeProgramme: 'BSc (Hons) Automotive & Mechanical Engineering',
    graduationYear: '2025 Graduate',
    currentRole: 'Junior Design Engineer, West Midlands',
    storyQuote: 'BCAS Colombo transferred all my Pearson BTEC credits directly to Coventry. I completed my final year with First Class Honours.',
    fullJourney: 'Starting his engineering foundation at BCAS Colombo Campus, Kasun progressed through the Higher National Diploma before transferring into Coventry University with direct credit recognition. The BCAS visa advisory team provided complete bank verification and interview coaching.',
    adviceForStudents: 'Make the most of the Pearson BTEC HND pathway. It cuts your overseas tuition fees by more than half while graduating with the exact same prestigious degree.',
    category: 'Engineering & Construction',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-plan',
    slug: 'study-abroad-plan-made-simple',
    title: 'Your Study-Abroad Plan, Made Simple: 5 Actionable Milestones',
    category: 'Study abroad',
    readTime: '6 min read',
    publishedDate: 'October 2026',
    excerpt: 'Not sure where to begin? Break a major life decision into smaller, stress-free milestones: goals, course options, budget realities, documents, and key questions to ask.',
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'BCAS International Advisory Team',
      role: 'Head of Student Placements'
    },
    relatedPostIds: ['blog-documents', 'blog-destination'],
    content: [
      {
        heading: '01. Start with Your Personal Goals, Not Just the Country',
        paragraphs: [
          'It is common for students to pick a country because a friend or family member lives there. While community matters, your chosen programme should first align with your academic aptitude, career aspirations, and long-term residency goals.',
          'Ask yourself: What field genuinely engages me? Do I want an accelerated 1-year master’s (like in the UK) or a programme with 48 hours per fortnight working flexibility and 2 to 4 years post-study rights (like Australia)?'
        ],
        bulletPoints: [
          'List 2 or 3 career roles you would love to step into after graduating.',
          'Verify whether the professional qualification requires specific accreditation in Sri Lanka (e.g., IESL for engineers or Sri Lanka Law College for law).'
        ]
      },
      {
        heading: '02. Compare Total Cost, Not Just Headline Tuition',
        paragraphs: [
          'Tuition is only one part of your study-abroad budget. Living expenses vary dramatically depending on whether you live in London/Sydney or student towns like Wolverhampton, Newcastle, or Geelong.',
          'Always account for initial visa application fees, immigration healthcare surcharges (IHS in the UK), mandatory overseas student health cover (OSHC in Australia), flights, and an emergency cushion.'
        ],
        proTip: 'Student towns located 1–2 hours away from capital cities typically offer 30%–45% lower rental costs with identical quality of education.'
      },
      {
        heading: '03. Understand Realistic Timelines',
        paragraphs: [
          'The biggest mistake students make is leaving visa and financial paperwork until the last month. We recommend starting your consultations 6 to 9 months before your target intake.',
          'This provides sufficient time to sit for your English proficiency test (IELTS Academic or PTE Academic), obtain certified academic transcripts, and maintain financial evidence in your bank account for the legally required duration.'
        ]
      }
    ]
  },
  {
    id: 'blog-documents',
    slug: 'application-documents-checklist',
    title: 'Application Documents: The Definitive Checklist Before You Apply',
    category: 'Applications',
    readTime: '4 min read',
    publishedDate: 'October 2026',
    excerpt: 'Know exactly what paperwork to gather early, how to format your certified translations, and how to write a compelling Statement of Purpose.',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Academic Admissions Desk',
      role: 'BCAS Placements Officer'
    },
    relatedPostIds: ['blog-visa', 'blog-plan'],
    content: [
      {
        heading: 'The Core Document Dossier',
        paragraphs: [
          'Every university application requires a verified bundle of official records. Preparing clean, high-resolution color scans in PDF format speeds up offer turnaround by weeks.'
        ],
        bulletPoints: [
          'Valid Passport (with at least 18 months remaining validity)',
          'G.C.E. O/L and A/L Official Certificates issued by the Department of Examinations',
          'BCAS Diploma or HND Transcripts and Completion Certificates (if applying for Top-Up)',
          'Valid IELTS Academic, PTE Academic, or TOEFL iBT test report form',
          'Two Academic or Professional Reference Letters on official letterhead',
          'Detailed Curriculum Vitae (CV) outlining education, projects, and work history'
        ]
      },
      {
        heading: 'Crafting Your Statement of Purpose (SOP)',
        paragraphs: [
          'Your SOP or Personal Statement is your direct voice to the university admissions committee. Avoid generic templates found online. Focus on three essential questions:',
          'Why this specific course? Why this specific institution? And how will this qualification empower your return to your professional career?'
        ],
        proTip: 'Admissions tutors spot AI-generated copy immediately. Authentic, personal stories about what ignited your interest in the subject always win offers.'
      }
    ]
  },
  {
    id: 'blog-scholarships',
    slug: 'how-to-start-looking-for-scholarships',
    title: 'How to Win University Merit Scholarships in 2026/2027',
    category: 'Scholarships',
    readTime: '5 min read',
    publishedDate: 'October 2026',
    excerpt: 'Where to search, what eligibility criteria actually mean, and how to structure your scholarship application to stand out from thousands of global applicants.',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Scholarship & Funding Advisory',
      role: 'BCAS Senior Counselor'
    },
    relatedPostIds: ['blog-budget', 'blog-plan'],
    content: [
      {
        heading: 'Demystifying International Scholarships',
        paragraphs: [
          'Many students believe scholarships are reserved only for top 1% academic geniuses. In reality, most international scholarships take the form of automatic institutional tuition fee discounts ranging from £1,500 to £5,000.',
          'Universities offer these discounts to encourage cultural diversity and reward motivated students from countries like Sri Lanka.'
        ]
      },
      {
        heading: 'Three Types of Funding to Target',
        bulletPoints: [
          'Automatic Regional Bursaries: Applied directly to your tuition if you meet minimum academic entry standards.',
          'Merit Scholarships: Competitive awards (20% to 50% tuition reduction) requiring a separate scholarship application essay and interview.',
          'Early Bird Acceptance Incentives: Direct fee reductions given to students who pay their deposit by the university early deadline.'
        ]
      },
      {
        heading: 'Golden Rule: Beware of Unverified Promises',
        paragraphs: [
          'Never pay anyone who promises or guarantees you a 100% scholarship. Genuine scholarships are awarded solely by the universities or accredited government bodies (like Chevening or Australia Awards).'
        ]
      }
    ]
  },
  {
    id: 'blog-destination',
    slug: 'choosing-a-destination-beyond-the-photos',
    title: 'Choosing a Destination Beyond the Photos: Cost, Climate & Reality',
    category: 'Study abroad',
    readTime: '5 min read',
    publishedDate: 'September 2026',
    excerpt: 'Compare the day-to-day realities of studying in the UK, Australia, Canada, New Zealand and Malaysia before making your final commitment.',
    heroImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Global Study Desk',
      role: 'BCAS Placements Team'
    },
    relatedPostIds: ['blog-budget', 'blog-plan'],
    content: [
      {
        heading: 'Everyday Details Matter',
        paragraphs: [
          'It is easy to get dazzled by pictures of Sydney Harbour or the London Eye. But when choosing where you will live for 1 to 4 years, everyday factors will govern your daily happiness.',
          'Consider public transportation networks, local part-time job markets, winter climate extremes, and accommodation availability.'
        ],
        bulletPoints: [
          'United Kingdom: Compact geography, extensive train network, rich history, mild maritime climate.',
          'Australia: Warm sunny weather, outdoor lifestyle, higher minimum wage, larger geographical distances.',
          'Canada: Welcoming community, paid Co-op opportunities, cold winters requiring good preparation.',
          'Malaysia: Warm tropical climate, familiar food culture, exceptionally low living expenses.'
        ]
      }
    ]
  },
  {
    id: 'blog-visa',
    slug: 'visa-preparation-start-with-official-guidance',
    title: 'Student Visa Preparation: Start with Official Government Guidance',
    category: 'Applications',
    readTime: '4 min read',
    publishedDate: 'September 2026',
    excerpt: 'Learn how to verify the latest immigration criteria, organize your financial proof, and avoid common application traps.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Visa Compliance Officer',
      role: 'BCAS International Placements'
    },
    relatedPostIds: ['blog-documents', 'blog-plan'],
    content: [
      {
        heading: 'Official Sources Are Your Only Source of Truth',
        paragraphs: [
          'Immigration policies change periodically. Social media rumors or outdated forum threads are the fastest route to visa refusal. Always verify rules directly on official portals like GOV.UK, HomeAffairs.gov.au, or Canada.ca.'
        ],
        bulletPoints: [
          'Financial Evidence: Funds must be held in acceptable financial institutions for the mandatory period (e.g. 28 consecutive days for the UK) prior to application date.',
          'Tuberculosis (TB) Testing: Required for UK visa applicants from Sri Lanka; must be completed at the designated IOM clinic in Colombo.',
          'Biometrics & Passport Submission: Book your appointment at VFS Global Colombo or the relevant visa center.'
        ]
      }
    ]
  },
  {
    id: 'blog-budget',
    slug: 'building-a-realistic-student-budget',
    title: 'Building a Realistic Student Budget: Beyond Tuition Fees',
    category: 'Student life',
    readTime: '5 min read',
    publishedDate: 'August 2026',
    excerpt: 'Calculate accommodation, groceries, transport, utilities, mobile plans, and emergency funds so you start your international journey with peace of mind.',
    heroImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85',
    author: {
      name: 'Student Welfare & Finance',
      role: 'BCAS Placements Officer'
    },
    relatedPostIds: ['blog-scholarships', 'blog-destination'],
    content: [
      {
        heading: 'The 4 Pillars of a Student Budget',
        paragraphs: [
          'When planning funding with your family or sponsor, divide your budget into 4 distinct buckets to prevent unexpected shortfalls.'
        ],
        bulletPoints: [
          'Accommodation (40% - 50% of living budget): University halls or private student shared flats.',
          'Food & Groceries (20%): Cooking at home vs eating out can save up to £250 / AUD 400 per month.',
          'Transport & Connectivity (10%): Student discounted travel cards and SIM-only mobile plans.',
          'Health Insurance & Personal (15%): Mandatory health covers, clothing, books, and social activities.',
          'Emergency Buffer (5% - 10%): Reserved strictly for unexpected travel or health needs.'
        ]
      }
    ]
  }
];

export const DEMO_STUDENT_PROFILE: StudentPortalProfile = {
  id: 'bcas-std-2026-084',
  studentId: 'BCAS-INT-9428',
  fullName: 'Kasun Bandara Perera',
  email: 'kasun.perera@bcas.edu.lk',
  phone: '+94 77 348 2910',
  registeredCampus: 'Colombo Campus',
  targetUniversity: 'University of East London, UK',
  chosenCourse: 'BSc (Hons) Cloud Computing & Software Systems',
  destination: 'United Kingdom',
  applicationProgress: 65,
  currentStage: 'Conditional Offer Received & Financial Verification',
  checklist: [
    {
      title: 'Valid Passport Bio-Page Scan',
      completed: true,
      mandatory: true,
      description: 'Submitted & verified by BCAS admissions'
    },
    {
      title: 'G.C.E. A/L Official Results Certificate',
      completed: true,
      mandatory: true,
      description: 'Department of Examinations certified copy uploaded'
    },
    {
      title: 'BCAS HND Transcript & Completion Letter',
      completed: true,
      mandatory: true,
      description: 'Submitted for university credit exemption evaluation'
    },
    {
      title: 'IELTS Academic / PTE Test Report Form',
      completed: true,
      mandatory: true,
      description: 'Overall 6.5 with no band below 6.0 achieved'
    },
    {
      title: 'Statement of Purpose (SOP)',
      completed: true,
      mandatory: true,
      description: 'Reviewed and finalized with BCAS counselor'
    },
    {
      title: '28-Day Bank Statement for Visa CAS',
      completed: false,
      mandatory: true,
      description: 'Bank balance seasoning in progress (Day 18 of 28)'
    },
    {
      title: 'TB Clearance Certificate (IOM Colombo)',
      completed: false,
      mandatory: true,
      description: 'Appointment scheduled for upcoming Tuesday'
    }
  ],
  counselor: {
    name: 'Mrs. Shani Jayawardena',
    role: 'Senior International Placements Adviser',
    campus: 'Colombo City Campus',
    whatsapp: 'https://wa.me/94761415273'
  }
};

export const STUDY_ABROAD_EVENTS: StudyAbroadEvent[] = [
  {
    id: 'world-education-fair-colombo',
    title: 'BCAS World Education Fair & Spot Assessment Day',
    type: 'World Education Fair',
    date: 'Saturday, 15 November 2026',
    time: '10:00 AM – 4:30 PM',
    location: 'BCAS Colombo Regional Campus, 356 Galle Road',
    city: 'Colombo',
    participatingUniversities: [
      'Coventry University (UK)',
      'University of Portsmouth (UK)',
      'Deakin University (Australia)',
      'University of Wollongong (Australia)',
      'Cambridge International Academy (Canada)'
    ],
    description: 'Meet official university international admission officers face-to-face. Bring academic transcripts for instant eligibility checks, up to 50% scholarship evaluations, and on-the-spot offer letters.',
    badge: 'Spot Assessment Open',
    isVirtual: false
  },
  {
    id: 'spot-assessment-kandy',
    title: 'UK & Australia Spot Admission Sessions',
    type: 'Spot Assessment',
    date: 'Wednesday, 19 November 2026',
    time: '10:00 AM – 3:30 PM',
    location: 'BCAS Kandy Regional Campus, 344 Peradeniya Road',
    city: 'Kandy',
    participatingUniversities: [
      'Northumbria University (UK)',
      'University of Greenwich (UK)',
      'Swinburne University of Technology (Australia)'
    ],
    description: 'Direct 1-on-1 counseling with university delegates. Free application fee waivers and priority visa guidance for upcoming major intakes.',
    badge: 'Priority Intake',
    isVirtual: false
  },
  {
    id: 'spot-assessment-jaffna',
    title: 'Northern Province Global Study & Visa Forum',
    type: 'Spot Assessment',
    date: 'Saturday, 22 November 2026',
    time: '10:00 AM – 4:00 PM',
    location: 'BCAS Jaffna Regional Campus, 16 Point Pedro Road',
    city: 'Jaffna',
    participatingUniversities: [
      'University of Hertfordshire (UK)',
      'Edith Cowan University (Australia)',
      'Middlesex University Dubai (UAE)'
    ],
    description: 'Comprehensive pathway seminar and document review for G.C.E. A/L and diploma students looking to complete degrees in the UK, Australia, or UAE.',
    badge: 'Free Entry & Profiling',
    isVirtual: false
  },
  {
    id: 'spot-assessment-kalmunai',
    title: 'Eastern Province Study Abroad Open Day & IELTS Diagnostic',
    type: 'University Open Day',
    date: 'Tuesday, 25 November 2026',
    time: '9:30 AM – 3:30 PM',
    location: 'BCAS Kalmunai Regional Campus, 392/1 Main Street',
    city: 'Kalmunai',
    participatingUniversities: [
      'University of the West of England (UK)',
      'Murdoch University (Australia)',
      'Cambridge International Academy (Canada)'
    ],
    description: 'Free IELTS diagnostic assessment, course matching, and budget breakdown session for students and parents from the Eastern Province.',
    badge: 'IELTS Mock Included',
    isVirtual: false
  },
  {
    id: 'canadian-ossd-webinar',
    title: 'Canadian High School OSSD & University Direct Entry Webinar',
    type: 'Webinar',
    date: 'Thursday, 27 November 2026',
    time: '6:30 PM – 8:00 PM (IST)',
    location: 'Online via Zoom / Live Stream',
    city: 'Online',
    participatingUniversities: [
      'Cambridge International Academy (Ontario)',
      'University of Toronto (Canada)',
      'University of Waterloo (Canada)'
    ],
    description: 'Discover how studying the Ontario Secondary School Diploma (OSSD) in Sri Lanka unlocks direct entrance into top Canadian and global universities without foundation years.',
    badge: 'Live Virtual Session',
    isVirtual: true
  }
];

export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    id: 'video-dinuka',
    studentName: 'Dinuka Jayasuriya',
    fromCampus: 'Colombo Campus',
    currentUniversity: 'Coventry University, UK',
    destination: 'United Kingdom',
    flag: '🇬🇧',
    degreeProgramme: 'BSc (Hons) Computer Science & Cloud Computing',
    currentRole: 'Cloud Systems Engineer at TechCorp, London',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    videoDuration: '2:15',
    storyHighlight: 'Saved 2 years of London living expenses by completing the Pearson BTEC HND at BCAS Colombo before transferring into Year 3 at Coventry.',
    viewsCount: '4.8k'
  },
  {
    id: 'video-fathima',
    studentName: 'Fathima Rishada',
    fromCampus: 'Kandy Campus',
    currentUniversity: 'Deakin University, Melbourne',
    destination: 'Australia',
    flag: '🇦🇺',
    degreeProgramme: 'Bachelor of Biomedical Science',
    currentRole: 'Clinical Research Associate, Melbourne Health',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    videoDuration: '1:48',
    storyHighlight: 'Secured an AUD 10,000 international student merit scholarship through BCAS Kandy counseling and cleared the Australian visa in 14 days.',
    viewsCount: '6.2k'
  },
  {
    id: 'video-kavishka',
    studentName: 'Kavishka Wickramasinghe',
    fromCampus: 'Jaffna Campus',
    currentUniversity: 'University of Toronto',
    destination: 'Canada',
    flag: '🇨🇦',
    degreeProgramme: 'Ontario Secondary School Diploma ➔ BSc Software Eng',
    currentRole: 'Software Developer, Toronto Tech Hub',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    videoDuration: '2:40',
    storyHighlight: 'Completed the Canadian OSSD course with BCAS International University Placements and received direct admission without foundation.',
    viewsCount: '5.1k'
  },
  {
    id: 'video-aashif',
    studentName: 'Mohamed Aashif',
    fromCampus: 'Kalmunai Campus',
    currentUniversity: 'Middlesex University Dubai & UK',
    destination: 'United Arab Emirates',
    flag: '🇦🇪',
    degreeProgramme: 'BA (Hons) Business Management & Finance',
    currentRole: 'Financial Operations Associate, DIFC Dubai',
    thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    videoDuration: '1:55',
    storyHighlight: 'Studied from BCAS Eastern Campus in Kalmunai. BCAS managed my entire offer letter, student visa, and accommodation in Dubai.',
    viewsCount: '3.9k'
  }
];

