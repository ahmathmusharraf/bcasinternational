export type DestinationCountry = 
  | 'USA'
  | 'Canada'
  | 'UK'
  | 'Australia'
  | 'Ireland'
  | 'Germany'
  | 'Malaysia'
  | 'Singapore'
  | 'UAE'
  | 'Malta'
  | 'Spain';

export type StudyLevel = 
  | 'Undergraduate'
  | 'Postgraduate'
  | "Master's"
  | 'MBA'
  | 'Diploma'
  | 'Postgraduate Diploma';

export type CourseCategory =
  | 'Business'
  | 'IT & Computing'
  | 'Engineering'
  | 'Health'
  | 'Hospitality'
  | 'Arts & Design'
  | 'Law'
  | 'Education'
  | 'Accounting & Finance';

export interface University {
  id: string;
  name: string;
  country: DestinationCountry;
  city: string;
  campusImage: string;
  logoPlaceholder?: string;
  popularCourses: string[];
  studyLevels: StudyLevel[];
  intakes: string[];
  scholarshipInfo?: string;
  estimatedTuition?: string;
  overview: string;
  entryRequirements: string[];
  keyHighlights: string[];
  partnerSince?: string;
}

export interface Destination {
  id: string;
  country: DestinationCountry;
  flagEmoji: string;
  headline: string;
  description: string;
  image: string;
  popularStudyAreas: string[];
  postStudyWork: string;
  typicalIntakes: string[];
  averageTuitionYearly: string;
  livingCostsYearly: string;
  topCities: string[];
}

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  level: StudyLevel;
  duration: string;
  availableDestinations: DestinationCountry[];
  overview: string;
  careerOutcomes: string[];
}

export interface Scholarship {
  id: string;
  universityName: string;
  country: DestinationCountry;
  studyLevel: string;
  awardTitle: string;
  awardValue: string;
  eligibilityNote: string;
  deadline: string;
  applicationMode: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  photoUrl: string;
  country: DestinationCountry;
  university: string;
  course: string;
  intake: string;
  quote: string;
  homeCity?: string;
}

export interface Advisor {
  id: string;
  name: string;
  position: string;
  specialization: string;
  destinations: DestinationCountry[];
  photoUrl: string;
  experienceYears: number;
  languages: string[];
}

export interface LeadFormData {
  fullName: string;
  whatsappNumber: string;
  email: string;
  preferredDestination: DestinationCountry | '';
  studyLevel: StudyLevel | '';
  interestedCourse: string;
  preferredIntake: string;
  notes?: string;
}

export interface CountryWorkPrPathway {
  id: string;
  country: DestinationCountry;
  countryName: string;
  flagEmoji: string;
  heroHeadline: string;
  partTimeWork: {
    termHours: string;
    vacationHours: string;
    minimumWageHourly: string;
    monthlyEarningsEst: string;
    popularStudentJobs: string[];
    regulationsNote: string;
  };
  postStudyWork: {
    visaName: string;
    duration: string;
    stemExtension?: string;
    workRights: string;
    qualificationThreshold: string;
    averageGraduateSalary: string;
  };
  prPathway: {
    prSchemeName: string;
    difficultyRating: 'Very Accessible' | 'High Opportunity' | 'Points-Competitive' | 'Strategic Pathway';
    processingTimeline: string;
    eligibilityCriteria: string[];
    inDemandOccupations: string[];
    settlementAdvantages: string[];
  };
  spousalRights: string;
  bcasSupportNote: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'PR & Immigration' | 'Post-Study Work' | 'Scholarships' | 'Student Visa Guides' | 'IELTS Preparation' | 'University Guides';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export type PageView = 
  | 'home'
  | 'destinations'
  | 'universities'
  | 'courses'
  | 'scholarships'
  | 'services'
  | 'about'
  | 'contact'
  | 'work-pr'
  | 'blog';
