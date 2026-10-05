import { CountryWorkPrPathway } from '../types';

export const COUNTRY_WORK_PR_DATA: CountryWorkPrPathway[] = [
  {
    id: 'work-pr-canada',
    country: 'Canada',
    countryName: 'Canada',
    flagEmoji: '🇨🇦',
    heroHeadline: 'Direct PR Streams via Express Entry (CEC & PNP) with up to 3-Year Open Work Permit',
    partTimeWork: {
      termHours: '20 to 24 hrs / week',
      vacationHours: 'Full-time (40 hrs / week)',
      minimumWageHourly: 'CAD $16.55 – $19.00 / hr',
      monthlyEarningsEst: 'CAD $1,400 – $2,200 / month',
      popularStudentJobs: ['Campus Assistant', 'Retail & Customer Service', 'Hospitality & Barista', 'Digital Marketing Intern', 'IT Helpdesk'],
      regulationsNote: 'Off-campus work permit embedded in student visa. Work allowed immediately upon commencement of studies.'
    },
    postStudyWork: {
      visaName: 'Post-Graduation Work Permit (PGWP)',
      duration: 'Up to 3 Years (Unrestricted Open Work Permit)',
      stemExtension: 'Not restricted to STEM — all eligible DLI 2-year programs qualify for 3-year PGWP',
      workRights: 'Full-time employment with any employer anywhere across Canadian provinces and territories',
      qualificationThreshold: 'Graduation from designated learning institution (DLI) minimum 8-month credential',
      averageGraduateSalary: 'CAD $58,000 – $88,000 / year'
    },
    prPathway: {
      prSchemeName: 'Express Entry (Canadian Experience Class CEC) & Provincial Nominee Programs (PNP)',
      difficultyRating: 'Very Accessible',
      processingTimeline: '6 to 12 months after 1 year of Canadian skilled work experience (TEER 0, 1, 2, 3)',
      eligibilityCriteria: [
        '1 year of Canadian skilled work experience under PGWP',
        'Language benchmark: CLB 7 (IELTS General 6.0 in each band for professional occupations)',
        'Educational Credential Assessment (ECA) points for Canadian university degrees',
        'Additional 30 CRS points awarded directly for Canadian tertiary education credentials'
      ],
      inDemandOccupations: [
        'Software Engineers & Full-Stack Developers',
        'Registered Nurses & Healthcare Specialists',
        'Data Analysts & AI Specialists',
        'Civil & Construction Project Managers',
        'Financial Auditors & Accountants'
      ],
      settlementAdvantages: [
        'Universal public healthcare coverage for permanent residents and their dependents',
        'Path to Canadian Citizenship within 3 years of living as a Permanent Resident',
        'Free high-quality public schooling for children from kindergarten to Grade 12'
      ]
    },
    spousalRights: 'Spouses of Master’s & Doctoral students are eligible for open work permits (SOWP) throughout the duration of study.',
    bcasSupportNote: 'BCAS advisers guide students toward high-retention provinces with targeted PNP categories such as Ontario, British Columbia, Alberta, and Atlantic Canada.'
  },
  {
    id: 'work-pr-australia',
    country: 'Australia',
    countryName: 'Australia',
    flagEmoji: '🇦🇺',
    heroHeadline: 'World’s Highest Minimum Wage & General Skilled Migration (Subclass 189/190/491) PR Pathway',
    partTimeWork: {
      termHours: '48 hours per fortnight (24 hrs/wk)',
      vacationHours: 'Unrestricted / Full-time during scheduled study breaks',
      minimumWageHourly: 'AUD $24.10 / hr + 25% casual loading (~$30.12/hr)',
      monthlyEarningsEst: 'AUD $2,200 – $3,200 / month',
      popularStudentJobs: ['Hospitality & Dining', 'Aged Care & Support Work', 'Warehouse & Logistics', 'Administrative Support', 'Junior Developer'],
      regulationsNote: 'Casual loading applies for temporary staff, ensuring top earning power for students during their degree.'
    },
    postStudyWork: {
      visaName: 'Temporary Graduate Visa (Subclass 485) – Post-Higher Education Stream',
      duration: '2 Years (Bachelor’s), 2 Years (Master’s), 3 Years (PhD)',
      stemExtension: '+1 to +2 additional years for graduates from designated regional universities (Perth, Adelaide, Gold Coast, Wollongong)',
      workRights: 'Unrestricted full-time work rights in any profession across Australia',
      qualificationThreshold: 'CRICOS-registered degree of at least 2 academic years (92 weeks) in Australia',
      averageGraduateSalary: 'AUD $68,000 – $98,000 / year'
    },
    prPathway: {
      prSchemeName: 'General Skilled Migration (GSM): Subclass 189 (Independent), 190 (State Nominated), 491 (Regional)',
      difficultyRating: 'Points-Competitive',
      processingTimeline: '8 to 14 months upon receiving an Invitation to Apply (ITA) via SkillSelect',
      eligibilityCriteria: [
        'Minimum 65 points on the GSM points test (Points awarded for age, Australian study, regional study, NAATI, Professional Year)',
        'Positive Skills Assessment from governing bodies (ACS, Engineers Australia, VETASSESS, ANMAC)',
        'Competent or Proficient English (IELTS 7.0 or PTE 65+ scores extra points)'
      ],
      inDemandOccupations: [
        'Software Engineers, Cyber Security Analysts & ICT Systems Analysts',
        'Registered Nurses, Midwives & Physiotherapists',
        'Civil, Electrical & Mining Engineers',
        'Early Childhood & Secondary Teachers',
        'Social Workers & Clinical Psychologists'
      ],
      settlementAdvantages: [
        'Medicare universal subsidized healthcare coverage for PR holders',
        'Eligible for Australian citizenship after 4 years of lawful residence (including 1 year as PR)',
        'Visa-free access and reciprocal work rights in New Zealand'
      ]
    },
    spousalRights: 'Spouse or de facto partner on student visa has work rights; partners of master’s/doctoral students enjoy full-time work privileges.',
    bcasSupportNote: 'BCAS regional university linkages in Adelaide, Western Australia, and Newcastle maximize regional PR points and post-study visa extensions.'
  },
  {
    id: 'work-pr-uk',
    country: 'UK',
    countryName: 'United Kingdom',
    flagEmoji: '🇬🇧',
    heroHeadline: '2-Year Graduate Route (PSW) Transitioning to Skilled Worker Visa & Indefinite Leave to Remain (ILR)',
    partTimeWork: {
      termHours: 'Up to 20 hrs / week during term time',
      vacationHours: 'Full-time (up to 40 hrs / week during official breaks)',
      minimumWageHourly: '£11.44 / hr (UK National Living Wage)',
      monthlyEarningsEst: '£900 – £1,450 / month',
      popularStudentJobs: ['University Student Ambassador', 'Retail & High-Street Stores', 'Coffee Shops & Hospitality', 'Tutoring & Academic Mentoring', 'Customer Service Representative'],
      regulationsNote: 'Students on degree-level programs at higher education institutions are legally authorized to work 20 hours/week.'
    },
    postStudyWork: {
      visaName: 'Graduate Route Visa (Post-Study Work)',
      duration: '2 Years for Bachelor’s & Master’s Graduates (3 Years for Doctoral / PhD)',
      stemExtension: 'No sponsor required; graduates can switch jobs or work in any industry freely',
      workRights: 'Full-time work, self-employment, contracting, or freelancing permitted',
      qualificationThreshold: 'Successful completion of UK undergraduate or postgraduate degree',
      averageGraduateSalary: '£32,000 – £55,000 / year'
    },
    prPathway: {
      prSchemeName: 'Skilled Worker Visa leading to Indefinite Leave to Remain (ILR / Permanent Settlement)',
      difficultyRating: 'High Opportunity',
      processingTimeline: 'ILR achieved after 5 consecutive years of continuous lawful employment on a Skilled Worker Visa',
      eligibilityCriteria: [
        'Job offer from an authorized UK Home Office licensed sponsor',
        'Role meeting skill level RQF 3 or above (graduate/specialist positions qualify)',
        'Salary meeting the applicable going rate or qualifying discounts (new entrants / STEM shortage list)',
        'English language proficiency at CEFR B1 level (automatically fulfilled by UK degree)'
      ],
      inDemandOccupations: [
        'Data Scientists, AI Engineers & Software Architects',
        'NHS Doctors, Nurses & Biomedical Scientists',
        'Civil, Mechanical & Electrical Engineers',
        'FinTech Analysts & Financial Risk Managers',
        'Management Consultants & Supply Chain Planners'
      ],
      settlementAdvantages: [
        'National Health Service (NHS) access without immigrant health surcharge upon ILR',
        'British Citizenship & Passport application 12 months after holding ILR',
        'Full freedom of employment and enterprise in one of the world’s top financial capitals'
      ]
    },
    spousalRights: 'Partners of government-sponsored and postgraduate research (PhD / research master’s) students are entitled to dependent work rights.',
    bcasSupportNote: 'Over 10,000 BCAS alumni are thriving in the UK. Our counselors review university career placement rankings and licensed sponsor connections.'
  },
  {
    id: 'work-pr-usa',
    country: 'USA',
    countryName: 'United States of America',
    flagEmoji: '🇺🇸',
    heroHeadline: '36-Month STEM OPT Work Authorization & High-Compensation H-1B / EB-2 NIW Career Pathways',
    partTimeWork: {
      termHours: 'Up to 20 hrs / week on-campus during semester',
      vacationHours: 'Full-time (up to 40 hrs / week) during annual vacation breaks',
      minimumWageHourly: 'USD $15.00 – $22.00 / hr (depending on state/campus)',
      monthlyEarningsEst: 'USD $1,200 – $2,000 / month',
      popularStudentJobs: ['Campus Library & Tech Lab Assistant', 'Dining Services Supervisor', 'Department Research Assistant (RA)', 'Teaching Assistant (TA)', 'Curricular Practical Training (CPT) Intern'],
      regulationsNote: 'Curricular Practical Training (CPT) allows off-campus paid corporate internships after completing one academic year.'
    },
    postStudyWork: {
      visaName: 'Optional Practical Training (OPT) + STEM OPT Extension',
      duration: '12 Months Initial OPT + 24-Month STEM Extension (Total 36 Months / 3 Years)',
      stemExtension: 'Designated STEM degree holders qualify for 2-year extension with E-Verify employers',
      workRights: 'Full-time paid professional employment directly related to your major field of study',
      qualificationThreshold: 'Completion of Bachelor’s, Master’s, or Doctorate from an SEVP-certified institution',
      averageGraduateSalary: 'USD $72,000 – $115,000 / year'
    },
    prPathway: {
      prSchemeName: 'H-1B Specialty Occupation Visa → EB-2 (National Interest Waiver) or EB-3 Employment-Based Green Card',
      difficultyRating: 'Strategic Pathway',
      processingTimeline: 'H-1B lottery annually (20,000 extra cap for US Master’s graduates); Green Card processing varies by category',
      eligibilityCriteria: [
        'Employer sponsorship for H-1B specialty occupation petition',
        '20,000 dedicated master’s cap increases odds for US postgraduate alumni',
        'EB-2 National Interest Waiver (NIW) allows self-petition for high-impact STEM/academic researchers',
        'Labor Certification (PERM) filing by corporate sponsor for permanent residency'
      ],
      inDemandOccupations: [
        'Artificial Intelligence & Machine Learning Engineers',
        'Cloud Architects & Cyber Defense Consultants',
        'Quantitative Finance & Investment Analysts',
        'Biopharmaceutical & Genetic Researchers',
        'Hardware & Semiconductor Engineers'
      ],
      settlementAdvantages: [
        'Highest starting salaries and stock option compensation globally for tech and business graduates',
        'World’s largest venture capital and entrepreneurial startup ecosystem in Silicon Valley, Austin, NYC & Boston',
        'Green Card holders access federal education grants, social security, and US citizenship after 5 years'
      ]
    },
    spousalRights: 'F-2 dependents cannot work, but once transitioned to H-1B with an approved I-140 immigrant petition, H-4 spouses receive open work permits (H-4 EAD).',
    bcasSupportNote: 'BCAS specializes in shortlisting STEM-designated degree programs across US universities to secure full 3-year OPT work rights.'
  },
  {
    id: 'work-pr-ireland',
    country: 'Ireland',
    countryName: 'Ireland',
    flagEmoji: '🇮🇪',
    heroHeadline: 'European Tech & Pharma Hub with 2-Year Stamp 1G & Fast-Track Critical Skills PR in 2 Years',
    partTimeWork: {
      termHours: 'Up to 20 hrs / week during academic term',
      vacationHours: 'Full-time (40 hrs / week) June–September & 15 Dec – 15 Jan',
      minimumWageHourly: '€12.70 / hr (One of the highest in the European Union)',
      monthlyEarningsEst: '€1,100 – €1,800 / month',
      popularStudentJobs: ['Tech Support & Retail', 'Customer Experience Associate', 'Hotel & Hospitality Staff', 'Administrative Clerk', 'Campus Student Ambassador'],
      regulationsNote: 'Valid Irish Residence Permit (IRP) Stamp 2 permits immediate legal employment.'
    },
    postStudyWork: {
      visaName: 'Third Level Graduate Scheme (Stamp 1G)',
      duration: '2 Years for Master’s (Level 9) / 1 Year for Bachelor’s (Level 8)',
      stemExtension: 'Enables graduates to work full-time up to 40 hours/week without needing an employment permit',
      workRights: 'Full-time employment in any sector; pathway to Critical Skills Employment Permit',
      qualificationThreshold: 'Recognized degree from an accredited Irish university or Institute of Technology',
      averageGraduateSalary: '€38,000 – €65,000 / year'
    },
    prPathway: {
      prSchemeName: 'Critical Skills Employment Permit (CSEP) → Stamp 4 (Permanent Residency) in Just 2 Years',
      difficultyRating: 'Very Accessible',
      processingTimeline: 'Only 24 months of working under Critical Skills Permit to receive Stamp 4 Permanent Residence permission',
      eligibilityCriteria: [
        'Job offer in an occupation on the Critical Skills Occupations List (min. €38,000/yr) or any skilled job paying €64,000+',
        '2 years of continuous employment on Stamp 1 / Critical Skills Permit',
        'No labor market test required for Critical Skills permits',
        'Transition straight to Stamp 4 (unrestricted open permanent work rights) after 24 months'
      ],
      inDemandOccupations: [
        'Software Developers, Cloud Engineers & DevOps Specialists',
        'Pharmaceutical Scientists & Quality Assurance Specialists',
        'Data Analysts & Financial Technologists',
        'Biomedical & Medical Device Engineers',
        'Accountancy & Tax Specialists'
      ],
      settlementAdvantages: [
        'European Union citizenship and Irish Passport after 5 years of legal residence',
        'European headquarters of Google, Apple, Meta, Pfizer, Stripe, LinkedIn, and TikTok located in Dublin',
        'Dual freedom of movement: unrestricted access to work and live across both the EU and the United Kingdom (Common Travel Area)'
      ]
    },
    spousalRights: 'Spouses of Critical Skills Employment Permit holders receive immediate Stamp 1G giving full, unrestricted work rights in Ireland.',
    bcasSupportNote: 'BCAS has direct tie-ups with leading Irish universities in Dublin, Cork, Galway, and Limerick where over 85% of tech grads secure CSEP roles.'
  },
  {
    id: 'work-pr-germany',
    country: 'Germany',
    countryName: 'Germany',
    flagEmoji: '🇩🇪',
    heroHeadline: 'Tuition-Free Public Higher Ed with 18-Month Job Search Visa & EU Blue Card PR in 21 Months',
    partTimeWork: {
      termHours: '140 full days or 280 half days per calendar year (recently expanded)',
      vacationHours: 'Flexible allocation throughout the year; student contracts (Werkstudent) up to 20 hrs/wk',
      minimumWageHourly: '€12.41 / hr statutory minimum wage',
      monthlyEarningsEst: '€1,000 – €1,750 / month',
      popularStudentJobs: ['Werkstudent (Working Student in Tech/Engineering)', 'Research Assistant (HiWi)', 'E-Commerce Logistics', 'Café & Restaurant Staff', 'English Language Tutor'],
      regulationsNote: 'Working student contracts (Werkstudent) are exempt from pension and health insurance deductions, maximizing take-home pay.'
    },
    postStudyWork: {
      visaName: '18-Month Job Seeker Residence Permit (Section 20(3) AufenthG)',
      duration: '18 Months (Extendable into EU Blue Card or Skilled Work Permit)',
      stemExtension: 'Unrestricted work rights in any profession while searching for career-level employment',
      workRights: 'No restriction on secondary part-time work while seeking corporate engineering or business roles',
      qualificationThreshold: 'Degree completion from a state-recognized German university or UAS',
      averageGraduateSalary: '€45,000 – €72,000 / year'
    },
    prPathway: {
      prSchemeName: 'EU Blue Card → Settlement Permit (Niederlassungserlaubnis / Permanent Residency)',
      difficultyRating: 'Very Accessible',
      processingTimeline: 'PR granted in only 21 months with German B1 language certificate (or 27 months with basic A1)',
      eligibilityCriteria: [
        'German university graduates qualify for settlement permit after only 2 years of skilled employment and pension contributions',
        'EU Blue Card salary threshold reduced for bottleneck STEM professions and young graduates (~€41,000/yr)',
        'Basic German language proficiency: A1 level grants PR in 27 months, B1 level in just 21 months'
      ],
      inDemandOccupations: [
        'Mechanical, Automotive & Mechatronics Engineers',
        'Embedded Software & Industrial IoT Developers',
        'Renewable Energy & Battery Systems Specialists',
        'Healthcare Professionals & Clinical Doctors',
        'Supply Chain & Industrial Logistics Managers'
      ],
      settlementAdvantages: [
        'Near-zero tuition fees at top-ranked public universities across Germany',
        'Permanent settlement allows unrestricted living and working anywhere in Germany',
        'New German Nationality Law permits dual citizenship after 5 years (reduced to 3 years for exceptional integration)'
      ]
    },
    spousalRights: 'Spouses of EU Blue Card holders receive immediate, unrestricted employment rights in Germany without needing prior German language certificates.',
    bcasSupportNote: 'BCAS offers dual-track counseling for German university applications and provides pre-departure German language foundation classes.'
  },
  {
    id: 'work-pr-malaysia',
    country: 'Malaysia',
    countryName: 'Malaysia',
    flagEmoji: '🇲🇾',
    heroHeadline: 'UK & Australian Branch Campuses at 1/3rd Cost with ASEAN Digital Nomad & Regional Work Visas',
    partTimeWork: {
      termHours: 'Up to 20 hrs / week during semester breaks of over 7 days',
      vacationHours: 'Designated service sectors (restaurants, petrol kiosks, mini-marts, hotels)',
      minimumWageHourly: 'MYR 8.00 – 12.00 / hr',
      monthlyEarningsEst: 'MYR 1,200 – 2,200 / month',
      popularStudentJobs: ['Campus Lab Assistant', 'Hospitality & Café Barista', 'Peer Tutor', 'Digital Content Assistant', 'Retail Customer Care'],
      regulationsNote: 'Application made through university international office with Immigration Department approval.'
    },
    postStudyWork: {
      visaName: 'Employment Pass (Category I, II, III) & DE Rantau Digital Nomad Pass',
      duration: '1 to 5 Years renewable corporate Employment Pass; 1 to 2 Years Digital Nomad Pass',
      stemExtension: 'Fast-track transition to multinational corporations headquartered in Cyberjaya & Kuala Lumpur',
      workRights: 'Professional full-time work under sponsor corporation or remote tech freelancer status',
      qualificationThreshold: 'Bachelor’s or Master’s degree from MQA-accredited institution in Malaysia',
      averageGraduateSalary: 'MYR 42,000 – 78,000 / year'
    },
    prPathway: {
      prSchemeName: 'Resident Pass-Talent (RP-T) 10-Year Renewable Visa & Entry Permit PR',
      difficultyRating: 'Strategic Pathway',
      processingTimeline: 'RP-T eligible after 3 years on Employment Pass Category I/II with established professional track record',
      eligibilityCriteria: [
        'High-skilled foreign professionals with minimum 3 years of work experience in Malaysia',
        'Monthly basic salary of at least MYR 15,000 (RP-T allows changing employers freely without re-application)',
        'Malaysian Permanent Residence (Entry Permit) points-based evaluation via TalentCorp Malaysia'
      ],
      inDemandOccupations: [
        'FinTech & Islamic Banking Professionals',
        'AI, Big Data & Cloud Architecture Specialists',
        'Petroleum & Chemical Engineers',
        'Global Shared Services (GSS) Operations Managers',
        'Biomedical & Healthcare Administrators'
      ],
      settlementAdvantages: [
        'Earn an identical UK or Australian degree (Nottingham, Monash, Curtin, Heriot-Watt) at 60-70% lower tuition costs',
        'Kuala Lumpur consistently ranked among the world’s most affordable and livable student cities',
        'Strategic spring-board for multinational leadership across Southeast Asia and the Middle East'
      ]
    },
    spousalRights: 'Spouses of Employment Pass (Category I & II) holders are entitled to dependent passes with work endorsement permissions.',
    bcasSupportNote: 'BCAS facilitates 2+1 and 1+2 credit transfer pathways allowing students to start in Malaysia and finish in the UK or Australia.'
  },
  {
    id: 'work-pr-singapore',
    country: 'Singapore',
    countryName: 'Singapore',
    flagEmoji: '🇸🇬',
    heroHeadline: 'Asia’s Premier Financial & Tech Capital with 1-Year Graduate Pass & Fast COMPASS Work Visa',
    partTimeWork: {
      termHours: 'Up to 16 hrs / week during term time (for MOM-approved institutions)',
      vacationHours: 'Full-time without work pass during official university vacation',
      minimumWageHourly: 'SGD $14.00 – $22.00 / hr (market competitive rates)',
      monthlyEarningsEst: 'SGD $1,200 – $2,000 / month',
      popularStudentJobs: ['University Research Aide', 'FinTech Intern', 'Corporate Marketing Support', 'Event Coordinator', 'Hospitality Assistant'],
      regulationsNote: 'Full-time international students at approved public universities and partner institutes are exempt from work permits.'
    },
    postStudyWork: {
      visaName: 'Long-Term Visit Pass (LTVP) for Job Search',
      duration: '1 Year non-renewable visit pass to seek full-time employment in Singapore',
      stemExtension: 'Immediate transition to Employment Pass (EP) or S-Pass upon receiving a qualifying job offer',
      workRights: 'Graduates can attend interviews and participate in structured assessment centers freely',
      qualificationThreshold: 'Graduation from approved Institute of Higher Learning (IHL) in Singapore',
      averageGraduateSalary: 'SGD $48,000 – $82,000 / year'
    },
    prPathway: {
      prSchemeName: 'Employment Pass (EP) under COMPASS framework → Singapore Permanent Resident (SPR)',
      difficultyRating: 'Points-Competitive',
      processingTimeline: 'Eligible to apply for SPR after 1 to 2 years of continuous skilled employment under EP or S-Pass',
      eligibilityCriteria: [
        'Employment Pass approval based on COMPASS (Complementarity Assessment Framework) points scoring system',
        'Bonus COMPASS points awarded for graduating from top global institutions',
        'Immigration & Checkpoints Authority (ICA) assessment reviewing economic contributions, skill set, and community integration'
      ],
      inDemandOccupations: [
        'FinTech Engineers & Quantitative Traders',
        'Cybersecurity Architects & AI Research Engineers',
        'Biopharmaceutical & MedTech Quality Leads',
        'Supply Chain & Global Logistics Specialists',
        'Asset Management & Corporate Finance Analysts'
      ],
      settlementAdvantages: [
        'One of the safest, cleanest, and most politically stable global metropolitan financial hubs',
        'Highest concentration of Fortune 500 Asia-Pacific corporate headquarters',
        'Central Provident Fund (CPF) retirement & healthcare benefits upon securing SPR'
      ]
    },
    spousalRights: 'Employment Pass holders earning SGD $6,000+ per month can sponsor spouses on Dependant’s Passes (with Letter of Consent work eligibility for business owners).',
    bcasSupportNote: 'BCAS guides students to premier Singapore partner institutions offering British and Australian accredited degrees with strong industry placement pipelines.'
  },
  {
    id: 'work-pr-uae',
    country: 'UAE',
    countryName: 'United Arab Emirates (Dubai)',
    flagEmoji: '🇦🇪',
    heroHeadline: '0% Personal Income Tax with 10-Year Golden Visa for Top Graduates & 5-Year Green Visa',
    partTimeWork: {
      termHours: 'Up to 20 hrs / week with student work permit',
      vacationHours: 'Full-time during semester breaks with employer clearance',
      minimumWageHourly: 'AED 30 – 50 / hr',
      monthlyEarningsEst: 'AED 2,500 – 4,500 / month',
      popularStudentJobs: ['Event Operations & Hospitality', 'Retail Brand Ambassador', 'Digital Marketing Intern', 'Customer Support Associate', 'Campus IT Assistant'],
      regulationsNote: 'Student work permits issued by UAE Ministry of Human Resources and Emiratisation (MOHRE).'
    },
    postStudyWork: {
      visaName: 'UAE Green Visa (5 Years) & 10-Year Golden Visa for Outstanding University Graduates',
      duration: '5 Years (Green Visa for skilled graduates) or 10 Years (Golden Visa for high achievers)',
      stemExtension: 'Golden Visa awarded to graduates from UAE universities with GPA 3.8+ or top 100 global universities worldwide',
      workRights: 'Sponsor-free self-residency with 100% unrestricted right to work, start a company, or freelance',
      qualificationThreshold: 'Bachelor’s, Master’s, or PhD from accredited UAE or international university',
      averageGraduateSalary: 'AED 96,000 – 190,000 / year (100% Tax-Free)'
    },
    prPathway: {
      prSchemeName: '10-Year Renewable Golden Visa (UAE’s Permanent Settlement Framework)',
      difficultyRating: 'High Opportunity',
      processingTimeline: '1 to 3 months application turnaround through General Directorate of Residency and Foreigners Affairs (GDRFA)',
      eligibilityCriteria: [
        'Graduates of top UAE universities with cumulative GPA of 3.8 or above',
        'Graduates from top 100 universities globally (Ministry of Education rating A or B)',
        'Skilled professionals with basic salary of AED 30,000/month in professional tier 1 or 2',
        'Valid employment contract in knowledge-economy, engineering, or executive management sectors'
      ],
      inDemandOccupations: [
        'AI Specialists, Machine Learning & Cloud Architects',
        'FinTech, Wealth Management & Private Banking Experts',
        'Aviation, Aerospace & Logistics Directors',
        'Sustainable Energy, Solar & Civil Project Engineers',
        'Luxury Tourism & Hospitality Brand Managers'
      ],
      settlementAdvantages: [
        '0% Personal Income Tax, 0% capital gains tax, and high purchasing power',
        'Golden Visa holders can stay outside the UAE for any length of time without losing visa validity',
        'Sponsorship of family members, spouses, children, and domestic helpers with no age restrictions'
      ]
    },
    spousalRights: 'Golden and Green Visa holders can sponsor spouses and children for the full duration of their 5 to 10-year residency with full right to work.',
    bcasSupportNote: 'BCAS Colombo maintains direct representation for prestigious British university campuses in Dubai International Academic City.'
  },
  {
    id: 'work-pr-malta',
    country: 'Malta',
    countryName: 'Malta',
    flagEmoji: '🇲🇹',
    heroHeadline: 'English-Speaking Mediterranean EU Hub with 9-Month PSW & Long-Term EU Resident Status',
    partTimeWork: {
      termHours: 'Up to 20 hrs / week after the first 90 days in Malta',
      vacationHours: 'Full-time during scheduled holidays and summer breaks',
      minimumWageHourly: '€9.20 – €11.50 / hr',
      monthlyEarningsEst: '€750 – €1,200 / month',
      popularStudentJobs: ['iGaming Customer Support', 'Hospitality & Resort Services', 'English Academy Assistant', 'Administrative Clerk', 'Tour & Activity Operations'],
      regulationsNote: 'Jobsplus Employment Licence granted after completing initial 90 days of study in Malta.'
    },
    postStudyWork: {
      visaName: '9-Month Post-Study Work Visa (National D Visa Extension)',
      duration: '9 Months dedicated job search permit upon graduation',
      stemExtension: 'Enables graduates to convert directly into a Single Work Permit with any local or EU registered enterprise',
      workRights: 'Full-time employment in Malta with visa-free travel throughout 29 European Schengen member countries',
      qualificationThreshold: 'Graduation with Level 6 (Bachelor’s), Level 7 (Master’s), or Level 8 from Maltese accredited colleges',
      averageGraduateSalary: '€24,000 – €44,000 / year'
    },
    prPathway: {
      prSchemeName: 'Single Work Permit → Long-Term Resident (EC Directive / EU Permanent Residence)',
      difficultyRating: 'Very Accessible',
      processingTimeline: 'Permanent EU Long-Term Resident status eligible after 5 years of legal, continuous residence in Malta',
      eligibilityCriteria: [
        '5 years of continuous legal residence in Malta under a valid Single Work Permit',
        'Proof of stable and regular financial resources and healthcare coverage',
        'Integration certificate (Maltese history, language, and culture foundations)'
      ],
      inDemandOccupations: [
        'iGaming Software Developers & Compliance Analysts',
        'Maritime, Aviation & Supply Chain Officers',
        'FinTech, Crypto & Blockchain Regulatory Specialists',
        'Hospitality & Tourism Executives',
        'Healthcare & Nursing Specialists'
      ],
      settlementAdvantages: [
        'Fully English-speaking country with an idyllic Mediterranean lifestyle and high safety index',
        'EU Long-Term Residency grants reciprocal mobility to seek employment across the entire European Union',
        'Affordable European tuition fees and living expenses compared to northern Europe'
      ]
    },
    spousalRights: 'Single Work Permit holders in managerial and specialist roles can sponsor family reunification with work authorization.',
    bcasSupportNote: 'BCAS students enjoy high visa approval rates for Malta with simplified bank statement requirements and English waiver options.'
  },
  {
    id: 'work-pr-spain',
    country: 'Spain',
    countryName: 'Spain',
    flagEmoji: '🇪🇸',
    heroHeadline: 'Top European Business Schools with 30h Part-Time Work & 1-Year Job Search Residence Permit',
    partTimeWork: {
      termHours: 'Up to 30 hrs / week on student visa (Reformed Spanish Immigration Law)',
      vacationHours: 'Full-time during vacation periods, provided work does not conflict with study timetables',
      minimumWageHourly: '€8.50 – €11.00 / hr (SMI statutory minimum wage adjusted)',
      monthlyEarningsEst: '€900 – €1,400 / month',
      popularStudentJobs: ['English Language Assistant / Tutor', 'Tech & Startup Intern', 'Hospitality & Tourism Concierge', 'Digital Content Creator', 'Customer Service Representative'],
      regulationsNote: 'Recent reform allows international university students to work up to 30 hours per week automatically without individual work permits.'
    },
    postStudyWork: {
      visaName: '1-Year Job Search Residence Permit (Autorización de residencia para la búsqueda de empleo)',
      duration: '12 Months to seek employment or start an entrepreneurial project',
      stemExtension: 'Directly converts into a Work and Residence Permit (Cuenta Ajena) upon receiving a qualifying employment contract',
      workRights: 'Full-time professional employment or self-employed entrepreneurial enterprise (Cuenta Propia)',
      qualificationThreshold: 'Completion of degree Level 6, 7 or 8 from an accredited Spanish university or business school',
      averageGraduateSalary: '€26,000 – €50,000 / year'
    },
    prPathway: {
      prSchemeName: 'Initial Work Residence Permit → Permanent EU Residence (Residencia de Larga Duración)',
      difficultyRating: 'High Opportunity',
      processingTimeline: 'Permanent Residence achieved after 5 continuous years of legal residence in Spain',
      eligibilityCriteria: [
        'Job contract of at least 1 year in duration meeting Spanish collective bargaining agreements',
        'Modification from student status to initial work authorization without leaving the country',
        'Proof of 5 years of continuous legal residence (student years count 50% toward EU long-term residency qualification)'
      ],
      inDemandOccupations: [
        'International Business & Export Managers',
        'Full-Stack & Mobile Software Developers',
        'Renewable Energy & Solar Project Engineers',
        'Data Analysts & Digital Marketing Strategists',
        'Hospitality & Luxury Hotel Managers'
      ],
      settlementAdvantages: [
        'Home to world’s premier triple-accredited business schools in Madrid and Barcelona (IE, ESADE, EADA, TBS)',
        'Unrestricted permanent living and working rights throughout Spain and EU Schengen territories',
        'World-renowned lifestyle, culture, climate, and low living expenses compared to other major EU hubs'
      ]
    },
    spousalRights: 'Family members on student dependent visas can apply for employment modification upon primary applicant securing a work permit.',
    bcasSupportNote: 'BCAS guides students toward English-taught degrees at top Spanish business schools with direct career placement support in Barcelona and Madrid.'
  }
];
