import { Destination, University, Course, Scholarship, Testimonial, Advisor } from '../types';
import heroStudentsImg from '../assets/images/hero_international_campus_1790913377422.jpg';
import destinationUsaImg from '../assets/images/destination_usa_1791005444408.jpg';
import destinationCanadaImg from '../assets/images/destination_canada_campus_1790914014315.jpg';
import destinationUkImg from '../assets/images/destination_uk_london_1790913388578.jpg';
import destinationAusImg from '../assets/images/destination_australia_sydney_1790914025860.jpg';
import destinationIrelandImg from '../assets/images/destination_ireland_1791005368066.jpg';
import destinationGermanyImg from '../assets/images/destination_germany_1791005384971.jpg';
import destinationMalaysiaImg from '../assets/images/destination_malaysia_1791005399111.jpg';
import destinationSingaporeImg from '../assets/images/destination_singapore_1791005414565.jpg';
import destinationUaeImg from '../assets/images/destination_global_students_1790913400602.jpg';
import destinationMaltaImg from '../assets/images/destination_malta_1791004698994.jpg';
import destinationSpainImg from '../assets/images/destination_spain_1791005431852.jpg';

export {
  heroStudentsImg,
  destinationUsaImg,
  destinationCanadaImg,
  destinationUkImg,
  destinationAusImg,
  destinationIrelandImg,
  destinationGermanyImg,
  destinationMalaysiaImg,
  destinationSingaporeImg,
  destinationUaeImg,
  destinationMaltaImg,
  destinationSpainImg
};

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'usa',
    country: 'USA',
    flagEmoji: '🇺🇸',
    headline: 'Unparalleled Academic Diversity, Research Scale & 3-Year STEM OPT',
    description: 'The United States of America provides extensive academic flexibility, prestigious tier-one degrees, cutting-edge campus life, and up to 36 months of Optional Practical Training for STEM programs.',
    image: destinationUsaImg,
    popularStudyAreas: ['Computer Science & AI', 'Data Science & FinTech', 'Biotechnology', 'Mechanical Engineering', 'Global MBA'],
    postStudyWork: 'OPT: 12 months (Plus 24-month STEM extension for qualifying degrees — total 3 years)',
    typicalIntakes: ['August / September (Fall)', 'January (Spring)', 'May (Summer)'],
    averageTuitionYearly: 'USD 22,000 – 42,000 / year',
    livingCostsYearly: 'USD 14,000 – 20,000 / year',
    topCities: ['Boston', 'New York', 'San Francisco Bay Area', 'Chicago', 'Austin']
  },
  {
    id: 'canada',
    country: 'Canada',
    flagEmoji: '🇨🇦',
    headline: 'Globally Acclaimed Education, Co-Op Degrees & High Quality of Life',
    description: 'Canada is celebrated for its multicultural communities, research-intensive colleges and universities, and post-graduation open work permits in growing economic hubs.',
    image: destinationCanadaImg,
    popularStudyAreas: ['Software Engineering', 'Business & Analytics', 'Project Management', 'Health Informatics', 'Hospitality Management'],
    postStudyWork: 'Post-Graduation Work Permit (PGWP): Up to 3 years',
    typicalIntakes: ['September (Fall)', 'January (Winter)', 'May (Spring)'],
    averageTuitionYearly: 'CAD 18,000 – 32,000 / year',
    livingCostsYearly: 'CAD 15,000 – 20,000 / year',
    topCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa']
  },
  {
    id: 'uk',
    country: 'UK',
    flagEmoji: '🇬🇧',
    headline: 'World-Renowned Academic Tradition & 2-Year Graduate Route Work Rights',
    description: 'Home to historic institutions and high-impact research, the United Kingdom offers focused 1-year Master’s and 3-year Bachelor’s degrees recognized internationally.',
    image: destinationUkImg,
    popularStudyAreas: ['Business Management', 'Artificial Intelligence & Computing', 'Engineering', 'Law', 'Biomedical Sciences'],
    postStudyWork: 'Graduate Route: Up to 2 years post-study work visa (3 years for PhD)',
    typicalIntakes: ['September / October', 'January / February', 'May (select courses)'],
    averageTuitionYearly: '£13,000 – £22,000 / year',
    livingCostsYearly: '£10,000 – £14,000 / year (dependent on location)',
    topCities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Edinburgh', 'Coventry']
  },
  {
    id: 'australia',
    country: 'Australia',
    flagEmoji: '🇦🇺',
    headline: 'Innovative Teaching, Vibrant Cities & Subclass 485 Graduate Visas',
    description: 'Australian universities feature cutting-edge research facilities, flexible degree pathways, and practical industry-integrated learning across key metropolitan and regional hubs.',
    image: destinationAusImg,
    popularStudyAreas: ['Information Technology', 'Civil & Mechanical Engineering', 'Accounting & Finance', 'Nursing & Public Health', 'Cybersecurity'],
    postStudyWork: 'Temporary Graduate Visa (Subclass 485): 2 to 4 years depending on degree level and campus',
    typicalIntakes: ['February (Semester 1)', 'July (Semester 2)', 'November (Summer Trimester)'],
    averageTuitionYearly: 'AUD 22,000 – 38,000 / year',
    livingCostsYearly: 'AUD 21,000 – 26,000 / year',
    topCities: ['Melbourne', 'Sydney', 'Brisbane', 'Perth', 'Adelaide']
  },
  {
    id: 'ireland',
    country: 'Ireland',
    flagEmoji: '🇮🇪',
    headline: 'Silicon Valley of Europe & 2-Year Third Level Graduate Work Scheme',
    description: 'Ireland hosts the European headquarters of Google, Apple, Meta, and Pfizer. An English-speaking EU powerhouse offering focused Master’s degrees with high post-graduation career placement.',
    image: destinationIrelandImg,
    popularStudyAreas: ['Cloud Computing & Data Analytics', 'Cybersecurity', 'Pharmaceutical Science', 'International Business', 'FinTech'],
    postStudyWork: 'Third Level Graduate Scheme (Stamp 1G): Up to 2 years for Master’s / 1 year for Bachelor’s',
    typicalIntakes: ['September (Autumn)', 'January / February (Spring)'],
    averageTuitionYearly: '€11,000 – €19,000 / year',
    livingCostsYearly: '€10,000 – €14,000 / year',
    topCities: ['Dublin', 'Cork', 'Galway', 'Limerick']
  },
  {
    id: 'germany',
    country: 'Germany',
    flagEmoji: '🇩🇪',
    headline: 'European Industrial Powerhouse, Affordable Tuition & 18-Month Job Seeker Visa',
    description: 'Germany combines engineering prestige, low tuition fees, and rich career opportunities in automotive, robotics, and international management, with an 18-month stay-back permit for graduates.',
    image: destinationGermanyImg,
    popularStudyAreas: ['Automotive & Mechanical Engineering', 'Computer Science & Software', 'Renewable Energy', 'International Management', 'Data Science'],
    postStudyWork: 'Job-Seeker Residence Permit: Up to 18 months post-graduation across Germany and Schengen',
    typicalIntakes: ['September / October (Winter Semester)', 'March / April (Summer Semester)'],
    averageTuitionYearly: '€3,000 – €14,000 / year (State universities often under €1,500/yr)',
    livingCostsYearly: '€11,200 / year (Blocked account requirement)',
    topCities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Stuttgart']
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    flagEmoji: '🇲🇾',
    headline: 'Leading Southeast Asian Higher Ed Hub & UK/Australian Branch Campuses',
    description: 'Study for genuine British and Australian university degrees at accredited branch campuses in Kuala Lumpur and Penang with lower tuition, affordable cost of living, and rapid student passes.',
    image: destinationMalaysiaImg,
    popularStudyAreas: ['Computer Science', 'Business & Finance', 'Civil Engineering', 'Biomedical Science', 'Hospitality & Culinary'],
    postStudyWork: 'Employment Pass & regional ASEAN corporate placement pathways',
    typicalIntakes: ['February / March', 'July / September', 'October'],
    averageTuitionYearly: 'MYR 25,000 – 48,000 / year (~USD 5,500 – 10,500)',
    livingCostsYearly: 'MYR 15,000 – 22,000 / year (~USD 3,500 – 5,000)',
    topCities: ['Kuala Lumpur', 'Penang', 'Johor Bahru', 'Subang Jaya']
  },
  {
    id: 'singapore',
    country: 'Singapore',
    flagEmoji: '🇸🇬',
    headline: 'Global Financial Hub, Tech Epicenter & World-Class Industry Links',
    description: 'Singapore offers pristine safety, global financial headquarters, and high-impact degree pathways through leading Australian and British university centers with strong corporate internships.',
    image: destinationSingaporeImg,
    popularStudyAreas: ['Banking & International Finance', 'Artificial Intelligence', 'Logistics & Supply Chain', 'Digital Marketing', 'Hospitality Management'],
    postStudyWork: 'Long Term Visit Pass (LTVP) for eligible graduates & Employment Pass / S-Pass routes',
    typicalIntakes: ['March', 'July', 'November'],
    averageTuitionYearly: 'SGD 18,000 – 32,000 / year',
    livingCostsYearly: 'SGD 14,000 – 20,000 / year',
    topCities: ['Singapore Downtown', 'Queenstown', 'Marina Bay']
  },
  {
    id: 'uae',
    country: 'UAE',
    flagEmoji: '🇦🇪',
    headline: 'Global Hub for UK & Australian Branch Campuses & Regional Careers',
    description: 'Study with leading UK and Australian universities situated in Dubai and Sharjah Knowledge Parks, offering identical degrees at competitive cost with streamlined visas and London campus transfer routes.',
    image: destinationUaeImg,
    popularStudyAreas: ['International Business', 'Digital Marketing', 'Logistics & Supply Chain', 'Artificial Intelligence', 'Architecture'],
    postStudyWork: 'UAE Golden / Green Visa and graduate employment sponsorship routes',
    typicalIntakes: ['September', 'January'],
    averageTuitionYearly: 'AED 45,000 – 75,000 / year',
    livingCostsYearly: 'AED 30,000 – 45,000 / year',
    topCities: ['Dubai Knowledge Park', 'Dubai International Academic City', 'Sharjah']
  },
  {
    id: 'malta',
    country: 'Malta',
    flagEmoji: '🇲🇹',
    headline: 'English-Speaking European Schengen Hub with Affordable Fees',
    description: 'An official English-speaking EU island member in the sunny Mediterranean, Malta provides British-accredited degrees, 20 hrs/week student work rights, and European Schengen mobility.',
    image: destinationMaltaImg,
    popularStudyAreas: ['Hospitality & Tourism Management', 'iGaming & Web Tech', 'Business Administration', 'Maritime Logistics', 'Cybersecurity'],
    postStudyWork: 'Post-Study Work Permit: Up to 9 months across the European Schengen area',
    typicalIntakes: ['October (Autumn)', 'February (Spring)'],
    averageTuitionYearly: '€6,000 – €11,000 / year',
    livingCostsYearly: '€7,000 – €9,500 / year',
    topCities: ['Valletta', 'Msida', 'St. Julian’s', 'Birkirkara']
  },
  {
    id: 'spain',
    country: 'Spain',
    flagEmoji: '🇪🇸',
    headline: 'World-Renowned Business Schools, Vibrant Culture & Schengen Access',
    description: 'Spain boasts top-ranked European business institutions in Barcelona and Madrid, offering 100% English-taught Bachelor’s and Master’s programs, 30 hrs/week student work rights, and 1-year job seeker permits.',
    image: destinationSpainImg,
    popularStudyAreas: ['International MBA & Entrepreneurship', 'Sports Management', 'Digital Marketing', 'Tourism Management', 'Fashion & Luxury Business'],
    postStudyWork: 'Residence Permit for Job Search: 12 months across Spain and European Schengen',
    typicalIntakes: ['October (Autumn)', 'February (Spring)', 'June (Summer)'],
    averageTuitionYearly: '€7,500 – €15,000 / year',
    livingCostsYearly: '€8,000 – €11,000 / year',
    topCities: ['Barcelona', 'Madrid', 'Valencia', 'Seville']
  }
];

export const UNIVERSITIES_DATA: University[] = [
  {
    id: 'wolverhampton',
    name: 'University of Wolverhampton',
    country: 'UK',
    city: 'Wolverhampton, West Midlands',
    campusImage: destinationUkImg,
    popularCourses: ['BSc (Hons) Computer Science', 'MSc Information Technology Management', 'BSc Biomedical Science', 'MBA Business Administration'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's", 'MBA'],
    intakes: ['September 2026', 'January 2027', 'May 2027'],
    scholarshipInfo: 'International Student Regional Award up to £2,000 fee reduction for eligible applicants',
    estimatedTuition: '£14,450 – £16,250 / year',
    overview: 'A career-focused institution known for strong industry ties, contemporary engineering workshops, and a welcoming international student body.',
    entryRequirements: [
      'Undergraduate: A-levels, Foundation diploma, or recognized equivalent secondary qualification',
      'Postgraduate: Bachelor’s degree in related field or equivalent accredited qualification',
      'English requirement: IELTS 6.0 overall (min 5.5 in each band) or recognized institutional English waiver'
    ],
    keyHighlights: ['Dedicated careers and placement service', 'Campus accommodation guaranteed for early international applicants', 'Affordable living cost in West Midlands'],
    partnerSince: '2008'
  },
  {
    id: 'coventry',
    name: 'Coventry University',
    country: 'UK',
    city: 'Coventry & London',
    campusImage: destinationUkImg,
    popularCourses: ['BSc Computing', 'MSc Data Science & AI', 'MSc Automotive Engineering', 'MSc Global Business'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's", 'MBA'],
    intakes: ['September 2026', 'January 2027', 'May 2027'],
    scholarshipInfo: 'International Academic Excellence Merit Award up to £3,000 for top performing students',
    estimatedTuition: '£16,800 – £20,500 / year',
    overview: 'Recognized for forward-thinking teaching methods, strong ties with automotive and tech enterprises, and campus hubs in Coventry and central London.',
    entryRequirements: [
      'Undergraduate: Completed high school / A-Levels / equivalent foundation pathway',
      'Postgraduate: 2:2 equivalent UK Bachelor’s degree',
      'English: IELTS 6.5 (min 5.5 per component) or approved equivalent'
    ],
    keyHighlights: ['Top tier modern university facilities', 'London financial district campus option', 'Extensive professional networking links'],
    partnerSince: '2012'
  },
  {
    id: 'hertfordshire',
    name: 'University of Hertfordshire',
    country: 'UK',
    city: 'Hatfield, Greater London Area',
    campusImage: destinationUkImg,
    popularCourses: ['BSc Computer Science (Software Engineering)', 'MSc Cybersecurity', 'BSc Aerospace Engineering', 'MBA'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's", 'MBA', 'Postgraduate Diploma'],
    intakes: ['September 2026', 'January 2027'],
    scholarshipInfo: 'Vice-Chancellor’s International Scholarship (£1,000 to £2,500) automatically assessed upon offer',
    estimatedTuition: '£15,000 – £17,500 / year',
    overview: 'Located just 25 minutes by train from central London, Hertfordshire boasts world-class business incubator units, space science labs, and flight simulators.',
    entryRequirements: [
      'Undergraduate: Recognized secondary diploma / Pearson BTEC / A-Level equivalent',
      'Postgraduate: Recognized Bachelor’s degree',
      'English: IELTS 6.0 – 6.5 depending on course tier'
    ],
    keyHighlights: ['Just 25 mins north of London King’s Cross', 'Close partnerships with aerospace and technology firms', 'Generous international student welfare services'],
    partnerSince: '2010'
  },
  {
    id: 'deakin',
    name: 'Deakin University',
    country: 'Australia',
    city: 'Melbourne & Geelong, Victoria',
    campusImage: destinationAusImg,
    popularCourses: ['Bachelor of Business Analytics', 'Master of Information Technology', 'Bachelor of Nursing', 'Master of Applied AI'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's", 'MBA'],
    intakes: ['February 2027', 'July 2027', 'November 2026'],
    scholarshipInfo: 'Deakin STEM Scholarship (20% tuition reduction) and Deakin Global Scholarship (25% fee waiver for high achievers)',
    estimatedTuition: 'AUD 34,000 – 41,000 / year',
    overview: 'A leading innovative university in Australia renowned for world-class digital learning, student satisfaction, and practical industry attachments.',
    entryRequirements: [
      'Undergraduate: Australian Year 12 equivalent or recognized higher education diploma',
      'Postgraduate: Bachelor’s degree from an accredited university',
      'English: IELTS 6.5 (min 6.0 in each band) or equivalent PTE Academic'
    ],
    keyHighlights: ['Multiple vibrant campuses across Melbourne & Geelong', 'Regional study points toward extended graduate work visas in Geelong', 'High graduate employment satisfaction'],
    partnerSince: '2015'
  },
  {
    id: 'swinburne',
    name: 'Swinburne University of Technology',
    country: 'Australia',
    city: 'Melbourne, Victoria',
    campusImage: destinationAusImg,
    popularCourses: ['Bachelor of Computer Science', 'Master of Information Technology', 'Bachelor of Aviation', 'Master of Construction Management'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's"],
    intakes: ['March 2027', 'August 2027'],
    scholarshipInfo: 'Swinburne International Excellence Scholarship up to 30% tuition fee reduction for entire program duration',
    estimatedTuition: 'AUD 33,000 – 39,500 / year',
    overview: 'Known for hands-on technology education, work-integrated learning, and a bustling central Melbourne campus in Hawthorn.',
    entryRequirements: [
      'Undergraduate: Recognized secondary education or polytechnic diploma',
      'Postgraduate: Bachelor’s degree in related or quantitative discipline',
      'English: IELTS 6.5 with no band less than 6.0'
    ],
    keyHighlights: ['Guaranteed Work Integrated Learning opportunities', 'Hawthorn campus located 10 minutes from Melbourne CBD', 'Pioneering design and tech research hubs'],
    partnerSince: '2014'
  },
  {
    id: 'yorkville',
    name: 'Yorkville University',
    country: 'Canada',
    city: 'Toronto, Ontario & Vancouver, BC',
    campusImage: destinationCanadaImg,
    popularCourses: ['Bachelor of Business Administration (BBA - Project Management)', 'BBA Supply Chain Management', 'Bachelor of Interior Design'],
    studyLevels: ['Undergraduate', 'Diploma'],
    intakes: ['October 2026', 'January 2027', 'April 2027', 'July 2027'],
    scholarshipInfo: 'Regional Bursary awards up to CAD 10,000 for qualifying South Asian and international students',
    estimatedTuition: 'CAD 20,000 – 24,000 / year',
    overview: 'Offers accelerated year-round bachelor programs in Canada’s largest commercial centers, allowing students to fast-track career-focused degrees.',
    entryRequirements: [
      'Secondary school graduation diploma with English and Mathematics requirements',
      'IELTS 6.5 overall (min 6.0 in each skill) or equivalent Duolingo score'
    ],
    keyHighlights: ['Accelerated graduation timelines available', 'Urban campuses in downtown Toronto and Vancouver', 'Continuous intake intakes throughout the year'],
    partnerSince: '2018'
  },
  {
    id: 'nci-ireland',
    name: 'National College of Ireland (NCI)',
    country: 'Ireland',
    city: 'Dublin (IFSC Financial District)',
    campusImage: destinationIrelandImg,
    popularCourses: ['MSc Data Analytics', 'MSc Cybersecurity', 'MSc Cloud Computing', 'BSc (Hons) Computing'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's"],
    intakes: ['September 2026', 'January 2027'],
    scholarshipInfo: 'Dean’s International Award offering up to €4,000 tuition fee reduction for eligible master’s candidates',
    estimatedTuition: '€14,500 – €17,000 / year',
    overview: 'Situated directly in the heart of Dublin’s Silicon Docks and International Financial Services Centre, NCI boasts near-perfect graduate employment rates with global tech firms.',
    entryRequirements: [
      'Undergraduate: High school certificate / A-Levels with strong mathematical aptitude',
      'Postgraduate: 2.2 or higher Bachelor’s degree in related technical field',
      'English: IELTS 6.5 (min 6.0 in each skill)'
    ],
    keyHighlights: ['Located right next to Google, Meta & Citi headquarters in Dublin', '2-Year post-study work visa (Stamp 1G)', 'Over 96% graduate employment rate'],
    partnerSince: '2019'
  },
  {
    id: 'iu-germany',
    name: 'IU International University of Applied Sciences',
    country: 'Germany',
    city: 'Berlin & Bad Honnef, Germany',
    campusImage: destinationGermanyImg,
    popularCourses: ['MSc Artificial Intelligence', 'MBA International Healthcare', 'BSc Computer Science', 'MSc Industrial & Organizational Psychology'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's", 'MBA'],
    intakes: ['October 2026', 'January 2027', 'April 2027'],
    scholarshipInfo: 'Up to 35% tuition fee scholarship for international students completing applications through BCAS',
    estimatedTuition: '€7,800 – €11,500 / year',
    overview: 'State-accredited institution in Berlin offering 100% English-taught degrees, blended learning modes, and direct industry ties with Germany’s top tech corporations.',
    entryRequirements: [
      'Undergraduate: Secondary school qualification or foundation year diploma',
      'Postgraduate: Bachelor’s degree in relevant discipline from an accredited university',
      'English: IELTS 6.0 or recognized institutional language evaluation'
    ],
    keyHighlights: ['18-Month job seeker visa upon graduation', '100% English-taught degree options', 'Dynamic Berlin startup ecosystem'],
    partnerSince: '2020'
  },
  {
    id: 'nottingham-malaysia',
    name: 'University of Nottingham Malaysia',
    country: 'Malaysia',
    city: 'Kuala Lumpur / Semenyih',
    campusImage: destinationMalaysiaImg,
    popularCourses: ['BSc (Hons) Computer Science', 'BEng Mechanical Engineering', 'BSc Finance, Accounting & Management', 'MSc International Business'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's"],
    intakes: ['February 2027', 'September 2026'],
    scholarshipInfo: 'High Achievers Scholarship offering 25% tuition fee waiver for academic excellence',
    estimatedTuition: 'MYR 38,000 – 52,000 / year (~USD 8,500 – 11,500)',
    overview: 'A world-top 100 UK university branch campus in Malaysia offering identical British degree qualifications at a fraction of the living and tuition expense.',
    entryRequirements: [
      'Undergraduate: GCE A-Levels / Pearson BTEC Diploma with required grades',
      'Postgraduate: Second class upper equivalent Bachelor’s degree',
      'English: IELTS 6.5 (min 6.0 in each band)'
    ],
    keyHighlights: ['Identical University of Nottingham UK degree awarded', 'Stunning 125-acre modern campus near Kuala Lumpur', 'Inter-campus transfer options to the UK campus'],
    partnerSince: '2017'
  },
  {
    id: 'curtin-singapore',
    name: 'Curtin Singapore',
    country: 'Singapore',
    city: 'Singapore (The Alpha, Science Park 2)',
    campusImage: destinationSingaporeImg,
    popularCourses: ['Bachelor of Information Technology', 'Master of International Business', 'Bachelor of Commerce (Finance)', 'Master of Supply Chain Management'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's"],
    intakes: ['March 2027', 'July 2027', 'November 2026'],
    scholarshipInfo: 'Merit Academic Scholarship providing 25% tuition fee reduction on first academic year',
    estimatedTuition: 'SGD 22,000 – 30,000 / year',
    overview: 'An offshore campus of Curtin University Australia, providing accelerated tri-semester programs in Singapore with global industry placements and Australian transfer rights.',
    entryRequirements: [
      'Undergraduate: A-levels, recognized international diploma, or foundation pathway',
      'Postgraduate: Bachelor’s degree from an accredited university',
      'English: IELTS 6.5 (min 6.0 each) or equivalent'
    ],
    keyHighlights: ['Direct Australian university degree awarded in Singapore', 'Fast-track 2-year bachelor completion via 3 trimesters/year', 'Proximity to Asia’s top corporate headquarters'],
    partnerSince: '2018'
  },
  {
    id: 'eu-spain',
    name: 'EU Business School (Barcelona & Madrid)',
    country: 'Spain',
    city: 'Barcelona & Madrid, Spain',
    campusImage: destinationSpainImg,
    popularCourses: ['Bachelor of Business Administration (BBA)', 'Master in Digital Marketing & Transformation', 'MBA Global Banking & Finance', 'Master in Blockchain & FinTech'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's", 'MBA'],
    intakes: ['October 2026', 'February 2027', 'June 2027'],
    scholarshipInfo: 'Merit and Diversity Scholarships up to 30% reduction on tuition fees',
    estimatedTuition: '€11,000 – €14,800 / year',
    overview: 'A premier European business school with high global rankings for employability and entrepreneurship, offering dynamic campuses in Barcelona and Madrid.',
    entryRequirements: [
      'Undergraduate: High school certificate / A-Levels or recognized diploma',
      'Postgraduate: Bachelor’s degree in related discipline',
      'English: IELTS 6.0 – 6.5 or institutional English test'
    ],
    keyHighlights: ['100% English-taught business degrees in Spain', '30 Hours/week legal student working rights', '1-Year Spanish job seeker residence permit in Schengen'],
    partnerSince: '2021'
  },
  {
    id: 'univ-malta',
    name: 'University of Malta / American University of Malta',
    country: 'Malta',
    city: 'Msida & Bormla, Malta',
    campusImage: destinationMaltaImg,
    popularCourses: ['BSc (Hons) Computer Information Systems', 'Master of Business Administration', 'BSc Tourism & Event Management', 'MSc Digital Health'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's", 'Diploma'],
    intakes: ['October 2026', 'February 2027'],
    scholarshipInfo: 'Tuition Fee Discount of up to 25% for international students with high GPA ratings',
    estimatedTuition: '€7,500 – €10,800 / year',
    overview: 'Located in the sunny European Mediterranean, Malta offers English-taught EU qualifications, 20 hrs/week part-time work rights, and pathways across Europe.',
    entryRequirements: [
      'Undergraduate: High school certificate / A-Levels or recognized foundation diploma',
      'Postgraduate: Accredited Bachelor’s degree in related field',
      'English: IELTS 6.0 overall (min 5.5 each) or Pearson BTEC waiver'
    ],
    keyHighlights: ['Official English-speaking European Union nation', 'Low cost of living compared to Western Europe', 'European Schengen visa mobility'],
    partnerSince: '2019'
  },
  {
    id: 'middlesex-dubai',
    name: 'Middlesex University Dubai',
    country: 'UAE',
    city: 'Dubai Knowledge Park',
    campusImage: destinationUaeImg,
    popularCourses: ['BSc Information Technology', 'MSc Robotics & Artificial Intelligence', 'BA Business Management', 'MBA Corporate Strategy'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's", 'MBA'],
    intakes: ['September 2026', 'January 2027'],
    scholarshipInfo: 'Academic Excellence Scholarship offering up to 20% to 50% tuition reduction for top academic scores',
    estimatedTuition: 'AED 54,000 – 68,000 / year',
    overview: 'The first overseas campus of the prestigious Middlesex University London, offering identical British degree awards in the cosmopolitan heart of Dubai.',
    entryRequirements: [
      'Undergraduate: High school certificate with minimum 65% aggregate or equivalent',
      'Postgraduate: Recognized Bachelor’s degree with second class honors equivalent',
      'English: IELTS 6.0 – 6.5 depending on course tier'
    ],
    keyHighlights: ['Award-winning UK degree validated in London', 'No embassy visa delays – institutional student visa sponsorship', 'Pathway options to transfer to London campus'],
    partnerSince: '2016'
  },
  {
    id: 'usf-usa',
    name: 'University of South Florida (Pathways)',
    country: 'USA',
    city: 'Tampa, Florida, USA',
    campusImage: destinationUsaImg,
    popularCourses: ['BSc Computer Science', 'MSc Cybersecurity', 'Master of Business Analytics & Information Systems', 'BSc Biomedical Engineering'],
    studyLevels: ['Undergraduate', 'Postgraduate', "Master's"],
    intakes: ['August 2026', 'January 2027'],
    scholarshipInfo: 'Green & Gold Presidential International Award up to USD 12,000 / year for qualifying GPA/SAT scores',
    estimatedTuition: 'USD 24,000 – 32,000 / year',
    overview: 'A Tier-1 major American public research university with top 50 national rankings for patents and innovation, offering expansive collegiate life and STEM OPT work rights.',
    entryRequirements: [
      'Undergraduate: High school transcript with minimum 3.0 GPA equivalent, SAT/ACT optional for select programs',
      'Postgraduate: 4-Year Bachelor degree or equivalent accredited international diploma',
      'English: IELTS 6.5 or TOEFL iBT 79 or Duolingo 110'
    ],
    keyHighlights: ['Top-tier US research university campus', 'Up to 3-Year STEM OPT extension in the United States', 'Warm Florida climate with high tech sector hiring'],
    partnerSince: '2018'
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'cs-software',
    title: 'BSc (Hons) Computer Science & Software Engineering',
    category: 'IT & Computing',
    level: 'Undergraduate',
    duration: '3–4 Years (Accredited)',
    availableDestinations: ['USA', 'UK', 'Australia', 'Canada', 'Ireland', 'Germany', 'Malaysia', 'Singapore'],
    overview: 'Covers core algorithmic foundations, full-stack web and cloud architectures, mobile systems, and collaborative agile engineering.',
    careerOutcomes: ['Software Engineer', 'Systems Architect', 'Cloud DevOps Engineer', 'Mobile App Developer']
  },
  {
    id: 'data-ai',
    title: 'MSc Artificial Intelligence & Applied Data Science',
    category: 'IT & Computing',
    level: "Master's",
    duration: '1–2 Years',
    availableDestinations: ['USA', 'UK', 'Australia', 'Canada', 'Ireland', 'Germany', 'Singapore', 'UAE'],
    overview: 'Practical deep dive into machine learning models, statistical inference, neural network architectures, and big-data engineering pipelines.',
    careerOutcomes: ['AI Solutions Specialist', 'Machine Learning Engineer', 'Data Scientist', 'Quantitative Analyst']
  },
  {
    id: 'business-analytics',
    title: 'Bachelor of Business Administration (Business Analytics)',
    category: 'Business',
    level: 'Undergraduate',
    duration: '3–4 Years',
    availableDestinations: ['USA', 'UK', 'Australia', 'Canada', 'Singapore', 'Malaysia', 'Spain', 'UAE'],
    overview: 'Blends classical management strategy, finance, and marketing with practical data visualization, SQL modeling, and digital operations.',
    careerOutcomes: ['Management Consultant', 'Business Analyst', 'Commercial Operations Lead', 'Market Intelligence Associate']
  },
  {
    id: 'global-mba',
    title: 'Master of Business Administration (Global MBA)',
    category: 'Business',
    level: 'MBA',
    duration: '1–2 Years',
    availableDestinations: ['USA', 'UK', 'Australia', 'Canada', 'Spain', 'Ireland', 'Germany', 'UAE', 'Malta'],
    overview: 'Intensive executive training covering corporate governance, international finance, leadership psychology, and entrepreneurial expansion.',
    careerOutcomes: ['Operations Director', 'Senior Strategy Manager', 'Product Executive', 'Entrepreneur / Founder']
  },
  {
    id: 'cybersecurity-postgrad',
    title: 'MSc / Postgraduate Diploma in Cybersecurity & Information Assurance',
    category: 'IT & Computing',
    level: "Master's",
    duration: '1–2 Years',
    availableDestinations: ['USA', 'UK', 'Ireland', 'Canada', 'Australia', 'Germany', 'Singapore', 'Malta'],
    overview: 'Focused hands-on curriculum examining network penetration testing, threat hunting, compliance frameworks, and digital forensics.',
    careerOutcomes: ['Cybersecurity Analyst', 'Information Security Officer', 'SOC Analyst', 'Penetration Tester']
  },
  {
    id: 'intl-hospitality',
    title: 'Bachelor of International Hospitality & Tourism Management',
    category: 'Hospitality',
    level: 'Undergraduate',
    duration: '3 Years (Includes Paid Industry Internship)',
    availableDestinations: ['Spain', 'Malta', 'UAE', 'Australia', 'Malaysia', 'Singapore'],
    overview: 'Comprehensive training in luxury hotel operations, guest relations, event production, resort logistics, and international service standards.',
    careerOutcomes: ['Hotel Operations Manager', 'Events Director', 'F&B Strategic Planner', 'Tourism Marketing Consultant']
  },
  {
    id: 'accounting-fintech',
    title: 'MSc International Accounting & Financial Analytics',
    category: 'Accounting & Finance',
    level: "Master's",
    duration: '1–2 Years',
    availableDestinations: ['UK', 'Ireland', 'Australia', 'Singapore', 'UAE'],
    overview: 'Prepares graduates with professional accounting exemptions (ACCA/CPA) combined with modern algorithmic finance and auditing software.',
    careerOutcomes: ['Financial Analyst', 'Senior Audit Associate', 'Tax Advisor', 'Risk Management Consultant']
  },
  {
    id: 'biomedical-health',
    title: 'BSc (Hons) Biomedical Science & Health Diagnostics',
    category: 'Health',
    level: 'Undergraduate',
    duration: '3–4 Years',
    availableDestinations: ['USA', 'UK', 'Australia', 'Canada', 'Ireland', 'Malaysia'],
    overview: 'Laboratory-centered study of human pathology, immunology, clinical biochemistry, and pharmaceutical genetics.',
    careerOutcomes: ['Clinical Research Associate', 'Biomedical Scientist', 'Laboratory Technologist', 'Pharmaceutical Regulatory Specialist']
  }
];

export const SCHOLARSHIPS_DATA: Scholarship[] = [
  {
    id: 'sch-1',
    universityName: 'University of South Florida (Pathways)',
    country: 'USA',
    studyLevel: 'Undergraduate & Postgraduate',
    awardTitle: 'Green & Gold Presidential International Award',
    awardValue: 'Up to USD 12,000 / Year Fee Waiver',
    eligibilityNote: 'Awarded to high-achieving international applicants meeting qualifying GPA / high school transcript credentials.',
    deadline: 'February 15 for Fall (August) Intake',
    applicationMode: 'Automatic assessment during application submission'
  },
  {
    id: 'sch-2',
    universityName: 'University of Hertfordshire',
    country: 'UK',
    studyLevel: 'Undergraduate & Postgraduate',
    awardTitle: 'Chancellor’s International Merit Scholarship',
    awardValue: '£1,000 – £2,500 Tuition Fee Reduction',
    eligibilityNote: 'Automatically evaluated upon receiving an unconditional academic offer. Awarded on prior academic performance.',
    deadline: 'July 15 for September Intake / November 30 for January Intake',
    applicationMode: 'Automatic assessment during application submission'
  },
  {
    id: 'sch-3',
    universityName: 'Deakin University',
    country: 'Australia',
    studyLevel: 'Undergraduate & Postgraduate',
    awardTitle: 'Deakin STEM Scholarship',
    awardValue: '20% Reduction of Annual Tuition Fees',
    eligibilityNote: 'Applicants with an equivalent minimum 65% aggregate score enrolling in eligible Science, Technology, Engineering or IT programs.',
    deadline: 'Open year-round prior to semester intake deadlines',
    applicationMode: 'Application with supporting academic transcripts via BCAS'
  },
  {
    id: 'sch-4',
    universityName: 'National College of Ireland (NCI)',
    country: 'Ireland',
    studyLevel: "Master's Degrees",
    awardTitle: 'Dean’s International Academic Award',
    awardValue: 'Up to €4,000 Fixed Fee Deduction',
    eligibilityNote: 'Available to self-funded international applicants holding a first-class or second-class upper honors equivalent bachelor degree.',
    deadline: 'June 30 for September Intake',
    applicationMode: 'Direct institutional evaluation via BCAS'
  },
  {
    id: 'sch-5',
    universityName: 'IU International University of Applied Sciences',
    country: 'Germany',
    studyLevel: 'Undergraduate & Master’s',
    awardTitle: 'German Future Leaders Study Scholarship',
    awardValue: 'Up to 35% Total Tuition Reduction',
    eligibilityNote: 'Available to qualified international applicants beginning on-campus studies in Berlin or Bad Honnef.',
    deadline: 'Rolling intake deadline',
    applicationMode: 'Applied during initial program screening'
  },
  {
    id: 'sch-6',
    universityName: 'University of Nottingham Malaysia',
    country: 'Malaysia',
    studyLevel: 'Undergraduate & Postgraduate',
    awardTitle: 'High Achievers International Scholarship',
    awardValue: '25% Tuition Fee Waiver',
    eligibilityNote: 'Awarded to applicants with stellar A-Level or diploma scores enrolling in undergraduate degree tracks.',
    deadline: 'July 1 for September Intake',
    applicationMode: 'Direct assessment upon credential evaluation'
  },
  {
    id: 'sch-7',
    universityName: 'Curtin Singapore',
    country: 'Singapore',
    studyLevel: 'Undergraduate & Master’s',
    awardTitle: 'Curtin Academic Merit Bursary',
    awardValue: '25% Tuition Reduction for First Year',
    eligibilityNote: 'Granted on high high-school or bachelor GPA ratings for qualifying degree programs.',
    deadline: '8 weeks prior to trimester start',
    applicationMode: 'Assessed with transcripts via BCAS'
  },
  {
    id: 'sch-8',
    universityName: 'Middlesex University Dubai',
    country: 'UAE',
    studyLevel: 'Undergraduate & Postgraduate',
    awardTitle: 'Academic Excellence & Early Enrollment Grant',
    awardValue: '15% – 30% Tuition Fee Scholarship',
    eligibilityNote: 'Graded tier based on high school or bachelor GPA scores, plus early seat deposit fee concession.',
    deadline: 'Rolling evaluation until course cohort capacity',
    applicationMode: 'Assessed by BCAS international admissions advisor'
  },
  {
    id: 'sch-9',
    universityName: 'EU Business School',
    country: 'Spain',
    studyLevel: 'Bachelor & Master Degrees',
    awardTitle: 'European Innovation & Diversity Scholarship',
    awardValue: 'Up to 30% Tuition Fee Deduction',
    eligibilityNote: 'Open to international applicants applying for Barcelona and Madrid campuses with strong leadership background.',
    deadline: 'Rolling admission for October & February intakes',
    applicationMode: 'Scholarship essay and interview via BCAS'
  },
  {
    id: 'sch-10',
    universityName: 'Yorkville University',
    country: 'Canada',
    studyLevel: 'Undergraduate (BBA Programs)',
    awardTitle: 'International Student Regional Achievement Bursary',
    awardValue: 'Up to CAD 10,000 disbursed across terms',
    eligibilityNote: 'Available for international students maintaining continuous full-time study enrollment.',
    deadline: 'Evaluated continuously for each term intake',
    applicationMode: 'Direct institutional bursary assessment upon credential evaluation'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    studentName: 'Kasun Wijesinghe',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    country: 'UK',
    university: 'University of Hertfordshire',
    course: 'MSc Artificial Intelligence & Robotics',
    intake: 'September 2025',
    quote: 'The BCAS team guided me through every milestone—from verifying my course modules and writing a strong personal statement to organizing my CAS interview preparation. I felt completely supported from day one.',
    homeCity: 'Colombo'
  },
  {
    id: 'test-2',
    studentName: 'Fathima Nuha',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    country: 'Australia',
    university: 'Deakin University',
    course: 'Master of Information Technology',
    intake: 'February 2026',
    quote: 'Choosing between Melbourne and Sydney felt overwhelming until my BCAS advisor laid out the course structures, tuition comparisons, and genuine post-study pathways. Their visa guidance was meticulous and calm.',
    homeCity: 'Kandy'
  },
  {
    id: 'test-3',
    studentName: 'Mohamed Rishad',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    country: 'UK',
    university: 'Coventry University',
    course: 'BSc (Hons) Computer Science',
    intake: 'September 2025',
    quote: 'BCAS International University Placement helped me transfer directly after my foundation studies with full credit transfer recognition. Today I am studying on campus with top-tier labs and great lecturers.',
    homeCity: 'Batticaloa'
  },
  {
    id: 'test-4',
    studentName: 'Shalini Perera',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    country: 'Canada',
    university: 'Yorkville University',
    course: 'Bachelor of Business Administration (Project Management)',
    intake: 'January 2026',
    quote: 'What sets BCAS apart is their honesty. They never made false promises—they gave my parents and me clear financial estimates, realistic timelines, and step-by-step document guidance.',
    homeCity: 'Kurunegala'
  }
];

export const ADVISORS_DATA: Advisor[] = [
  {
    id: 'adv-1',
    name: 'Nalaka Bandara',
    position: 'Head of International Placements & Senior European Advisor',
    specialization: 'UK, Ireland, Germany, Spain & Malta Admissions',
    destinations: ['UK', 'Ireland', 'Germany', 'Spain', 'Malta'],
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    experienceYears: 14,
    languages: ['English', 'Sinhala']
  },
  {
    id: 'adv-2',
    name: 'Amina Farooq',
    position: 'Lead Counselor — Australia, Singapore & Malaysia',
    specialization: 'Australia GTE, Singapore & Malaysia Branch Campuses',
    destinations: ['Australia', 'Singapore', 'Malaysia'],
    photoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    experienceYears: 10,
    languages: ['English', 'Tamil', 'Sinhala']
  },
  {
    id: 'adv-3',
    name: 'Dinesh Wickramasinghe',
    position: 'North America Admissions Specialist',
    specialization: 'USA F-1 STEM OPT & Canada Study Permits / PGWP',
    destinations: ['USA', 'Canada'],
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    experienceYears: 11,
    languages: ['English', 'Sinhala']
  },
  {
    id: 'adv-4',
    name: 'Hassan Rameez',
    position: 'Regional Manager — Middle East & UK Pathways',
    specialization: 'UAE Dubai Branch Campuses & Credit Transfers',
    destinations: ['UAE', 'UK'],
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    experienceYears: 9,
    languages: ['English', 'Tamil', 'Arabic']
  }
];

export const WHY_BCAS_ITEMS = [
  {
    iconName: 'ShieldCheck',
    title: '27+ Years of Educational Legacy',
    description: 'Since 1999, BCAS has equipped over 21,000 Sri Lankan graduates with high-impact qualifications, accredited Pearson BTEC pathways, and direct degrees.'
  },
  {
    iconName: 'Award',
    title: 'Official British Council IELTS Partner',
    description: 'Accredited test registration and preparation center with master trainers offering free diagnostic exams across Colombo, Jaffna, Kalmunai, and Kandy.'
  },
  {
    iconName: 'Globe',
    title: 'Direct University Representation',
    description: 'Authorized representative agreements with leading universities across USA, Canada, UK, Australia, Ireland, Germany, Malaysia, Singapore, UAE, Malta, and Spain.'
  },
  {
    iconName: 'FileCheck2',
    title: 'High Visa Approval Track Record',
    description: 'Meticulous document vetting, financial affidavit auditing, and 1-on-1 embassy mock interview preparation tailored to Sri Lankan candidates.'
  },
  {
    iconName: 'UserCheck',
    title: '100% Free Placement Guidance',
    description: 'Zero agency fees or surprise service costs. Students receive transparent counseling and free document assistance throughout the entire process.'
  },
  {
    iconName: 'BookOpen',
    title: 'Course Credit Transfer Linkages',
    description: 'Seamless pathway recognition for Pearson BTEC HND, diplomas, and partially completed university degrees directly into final-year Top-Ups.'
  },
  {
    iconName: 'Compass',
    title: 'Full Scholarship Optimization',
    description: 'Dedicated identification and submission for merit awards, regional bursaries, and tuition fee reductions ranging from 10% to 50%.'
  },
  {
    iconName: 'PlaneTakeoff',
    title: 'Pre-Departure & Settlement Care',
    description: 'Guidance on foreign exchange, airport reception, student accommodation bookings, health insurance, and local SIM cards before departure.'
  }
];

export const JOURNEY_STEPS = [
  {
    stepNumber: 1,
    phase: '01',
    title: 'Profile Assessment & Course Shortlisting',
    description: 'Meet our certified university advisors at Colombo, Jaffna, Kalmunai, or Kandy to review your academics, career ambitions, and budget.'
  },
  {
    stepNumber: 2,
    phase: '02',
    title: 'Application Submission & Offer Letter',
    description: 'Direct submission to chosen institutions across USA, Canada, UK, Australia, Ireland, Germany, Malaysia, Singapore, UAE, Malta, or Spain with fast-track offer turnaround.'
  },
  {
    stepNumber: 3,
    phase: '03',
    title: 'Scholarship Grant & Acceptance (I-20 / CAS / CoE)',
    description: 'Secure regional merit scholarships and complete tuition deposit to receive your official I-20, CAS, or Confirmation of Enrolment.'
  },
  {
    stepNumber: 4,
    phase: '04',
    title: 'Visa Documentation & Mock Interview',
    description: 'Rigorous financial checking, bank letter verification, biometric booking, and 1-on-1 embassy mock interview coaching.'
  },
  {
    stepNumber: 5,
    phase: '05',
    title: 'Pre-Departure Briefing & Campus Arrival',
    description: 'Guidance on overseas currency exchange, packing, airport pickup, student housing contracts, and joining international alumni groups.'
  }
];
