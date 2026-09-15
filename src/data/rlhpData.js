// Central Data Structure for Rural Literacy and Health Programme (RLHP)

export const orgDetails = {
  name: "Rural Literacy & Health Programme",
  acronym: "RLHP",
  tagline: "Empowering Communities. Transforming Lives.",
  location: "Mysuru, Karnataka, India",
  foundedYear: 1983,
  registeredYear: 1984,
  yearsOfService: "42+",
  address: "No. 343, 2nd Stage, Gayathripuram, Udayagiri Post, Mysuru, Karnataka, India – 570019.",
  phones: ["0821 2454696", "0821 2451216"],
  emails: ["mysore@rlhp.org", "rlhp@rlhp.org"],
  website: "www.rlhpmysore.com",
  social: {
    facebook: "https://facebook.com/rlhpmysore",
    twitter: "https://twitter.com/rlhpmysore",
    instagram: "https://instagram.com/rlhpmysore",
    youtube: "https://youtube.com/rlhpmysore"
  },
  statutory: {
    registrationNo: "36/83-84 (Registered under Karnataka Societies Registration Act 1960)",
    fcraNo: "094590059 (FCRA Validated)",
    taxExemption80G: "80G Certified (Tax Exemption under Sec 80G)",
    sec12A: "12A Approved",
    ngoDarpan: "KA/2017/0115894",
    csr1: "CSR00004523"
  },
  bankDetails: {
    localAccount: {
      bankName: "Indian Bank",
      branch: "Udayagiri Extension Branch, Mysore",
      accountName: "Rural Literacy and Health Programme",
      accountNo: "511560100",
      ifsc: "IDIB000U015",
      address: "47, SBM Colony, Mahadevapura Main Road, Udayagiri, Mysore – 570019"
    },
    fcraAccount: {
      bankName: "Indian Bank",
      branch: "Udayagiri Extension Branch (FCRA Cell), Mysore",
      accountName: "Rural Literacy and Health Programme",
      accountNo: "511530562",
      ifsc: "IDIB000U015",
      swiftCode: "IDIBINBBMSR",
      address: "47, SBM Colony, Mahadevapura Main Road, Udayagiri, Mysore – 570019"
    }
  },
  boardMembers: [
    { name: "Mr. Koshy Mathew", designation: "President", role: "President" },
    { name: "Mr. Jose V.K.", designation: "Secretary & Director", role: "Secretary / Director" },
    { name: "Mr. Santhosh Kumar", designation: "Treasurer", role: "Treasurer" },
    { name: "Ms. Rosy Sujatha K.", designation: "Board Member", role: "Member" },
    { name: "Mr. Prasanna N.", designation: "Board Member", role: "Member" },
    { name: "Mrs. Geetha Mitra", designation: "Board Member", role: "Member" },
    { name: "Mrs. Elizabeth John", designation: "Board Member", role: "Member" }
  ],
  approaches: [
    { title: "Child Centered", description: "The child is kept in focus when making decisions about their lives and working in partnership with them and their families." },
    { title: "Integrated Community Development", description: "The whole community is involved, respected and empowered with skills needed to effect lasting change and ensure local ownership." },
    { title: "Bottom Up Governance", description: "A bottom-up approach creating transparency and accountability from the village level to the district level for public scheme access." },
    { title: "Capacity Building", description: "Trainings for Panchayati Raj Institutions (PRIs) and local stakeholders to develop mutual and horizontal accountability." },
    { title: "People's Participation", description: "People are closely involved in the economic, social, cultural, and political processes affecting their communities." },
    { title: "Social Mobilisation", description: "Organizing communities to collectively think, advocate, and act upon their sustainable development goals." }
  ]
};

export const bankDetails = orgDetails.bankDetails;

export const impactStats = [
  { id: 1, count: "42+", label: "Years of Service", description: "Empowering marginalized communities since 1983", icon: "Clock" },
  { id: 2, count: "2,15,000+", label: "People Reached", description: "Direct beneficiaries across Karnataka", icon: "Users" },
  { id: 3, count: "10,000+", label: "Children Engaged", description: "Active members in 78 Child Rights Clubs", icon: "Heart" },
  { id: 4, count: "8", label: "Districts Active", description: "Comprehensive rural & urban coverage", icon: "MapPin" }
];

export const focusAreas = [
  {
    id: "child-development",
    title: "Child Development",
    shortDesc: "Protecting rights, preventing child labour, and running AshaKirana & AshaBhavana shelter homes.",
    icon: "Baby",
    link: "/programmes/child-development"
  },
  {
    id: "youth-empowerment",
    title: "Youth & Adolescent Empowerment",
    shortDesc: "Vocational skills, life skills training, gender equality, and leadership development.",
    icon: "GraduationCap",
    link: "/programmes/youth-empowerment"
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment",
    shortDesc: "Building Sanghas federated into DWANI and BELAKU for social & economic independence.",
    icon: "Users",
    link: "/programmes/women-empowerment"
  },
  {
    id: "health-sanitation",
    title: "Health & Sanitation",
    shortDesc: "Maternal nutrition, child immunization, hygiene drives, and organic farming.",
    icon: "Activity",
    link: "/programmes/health-sanitation"
  },
  {
    id: "education-livelihood",
    title: "Education & Livelihood",
    shortDesc: "IEP activities reducing learning disabilities from 25% down to 11.14%.",
    icon: "BookOpen",
    link: "/programmes/education"
  },
  {
    id: "people-development",
    title: "Community Development",
    shortDesc: "Mobilizing local communities with SDMCs & VHSNCs for rights and land access.",
    icon: "Handshake",
    link: "/programmes/peoples-development"
  },
  {
    id: "government-schemes",
    title: "Government Schemes",
    shortDesc: "Connecting rural population to last-mile welfare benefits in North Karnataka.",
    icon: "Building2",
    link: "/programmes/government-schemes"
  },
  {
    id: "humanitarian-assistance",
    title: "Humanitarian Relief",
    shortDesc: "Emergency response during Kerala floods, COVID-19, and migrant worker crises.",
    icon: "ShieldAlert",
    link: "/programmes/humanitarian-assistance"
  }
];

export const programmesData = [
  {
    id: "child-development",
    title: "Child Development",
    subtitle: "Protecting rights, ending child labor & fostering inclusive child-friendly environments",
    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    overview: "RLHP works tirelessly to protect children from abuse, neglect, and exploitation. Through specialized shelter homes, advocacy, education, and child participation networks, RLHP ensures every child enjoys their right to education, protection, and healthy growth.",
    keyInitiatives: [
      {
        name: "AshaKirana (Boys Shelter Home)",
        year: 1993,
        description: "Established in 1993 to provide comprehensive care, shelter, education, and rehabilitation for boys rescued from child labour, street situations, and difficult circumstances."
      },
      {
        name: "AshaBhavana (Girls Shelter Home)",
        year: 1999,
        description: "Started in 1999, offering safe sanctuary, psychological support, vocational guidance, and formal schooling for vulnerable girls."
      },
      {
        name: "Child Rights Clubs & Federations",
        year: 2005,
        description: "Formed 78 active Child Rights Clubs and 2 Children's Federations involving over 10,000 children who participate in democratic community decision-making."
      }
    ],
    highlights: [
      "Over 2,100+ children provided residential care and education at AshaKirana & AshaBhavana",
      "8,000+ children rescued and rehabilitated through CHILDLINE and emergency interventions",
      "Child-friendly schools & community safety monitoring systems",
      "Prevention of child marriage and school dropouts across 8 districts"
    ]
  },
  {
    id: "education",
    title: "Education & Learning Disability Support",
    subtitle: "Transforming classrooms into inclusive environments for every learner",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    overview: "RLHP believes education is the cornerstone of societal advancement. Our targeted interventions support children with learning difficulties and strengthen public school infrastructure in collaboration with parents and teachers.",
    keyInitiatives: [
      {
        name: "Individualized Education Plan (IEP)",
        year: 2012,
        description: "Structured diagnostic and remedial methodology addressing 7 core development areas: physical, sensory-motor, cognitive, literacy, communication, socio-emotional, and health."
      },
      {
        name: "School Development and Monitoring Committees (SDMC)",
        year: 2008,
        description: "Capacity building for parents, community elders, and local leaders to actively participate in school governance and teacher accountability."
      }
    ],
    highlights: [
      "Learning disability prevalence reduced from 25% to 11.14% in target intervention schools",
      "Regular Parent-Teacher Meetings (PTM) strengthening community ownership",
      "Publishing IEP learning books and video modules for rural educators"
    ]
  },
  {
    id: "youth-empowerment",
    title: "Adolescent & Youth Empowerment",
    subtitle: "Equipping young minds with skills, confidence, and leadership for a self-reliant future",
    heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    overview: "RLHP guides adolescents through critical transitions into adulthood by building life skills, offering vocational orientation, promoting gender equity, and instilling environmental stewardship.",
    keyInitiatives: [
      {
        name: "Vocational & Skill Training",
        description: "Market-oriented courses in computers, tailoring, electric work, and entrepreneurship for rural youth."
      },
      {
        name: "Gender Equality & Personal Growth",
        description: "Workshops addressing gender stereotypes, reproductive health, rights awareness, and leadership."
      }
    ],
    highlights: [
      "Over 3,500+ youth trained in leadership & life skills",
      "Youth-led community action programs focusing on environmental conservation",
      "Career counseling fairs connecting rural youth to mainstream employment"
    ]
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment & Sangha Federations",
    subtitle: "Empowering women to lead socio-economic transformation in rural and urban communities",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    overview: "RLHP organizes women into grassroot self-help groups (Sanghas) that collectively address domestic violence, financial exclusion, political participation, and legal rights.",
    keyInitiatives: [
      {
        name: "DWANI & BELAKU Federations",
        description: "Apex women federations uniting hundreds of Sanghas to advocate for women's rights at district and state government levels."
      },
      {
        name: "Income Generation & Micro-Finance",
        description: "Promoting financial literacy, micro-credit access, and sustainable livelihood units for rural women."
      }
    ],
    highlights: [
      "Formed 450+ active Self Help Groups (Sanghas)",
      "Federated into DWANI and BELAKU Women Federations representing 12,000+ women",
      "Prevented child marriages and supported domestic violence survivors through legal aid"
    ]
  },
  {
    id: "peoples-development",
    title: "People's Development & Local Governance",
    subtitle: "Mobilizing marginalized communities to claim their constitutional rights",
    heroImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    overview: "RLHP enables grassroot communities to identify their shared challenges, engage with Panchayats, and secure land rights, basic infrastructure, and public entitlement schemes.",
    keyInitiatives: [
      {
        name: "Community Action Groups",
        description: "Training local leaders to map community needs and interface directly with government officials."
      },
      {
        name: "Collaboration with VHSNCs & SDMCs",
        description: "Strengthening Village Health Sanitation and Nutrition Committees for better public service delivery."
      }
    ],
    highlights: [
      "Secured land rights and housing titles for hundreds of underprivileged families",
      "Active participation in Gram Sabha meetings for transparent fund allocation"
    ]
  },
  {
    id: "health-sanitation",
    title: "Health, Nutrition & Sanitation",
    subtitle: "Fostering healthy families through preventive healthcare and sustainable environment",
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
    overview: "Preventive healthcare, maternal care, clean water, and sanitation awareness form the core of RLHP's health initiatives in vulnerable rural habitats.",
    keyInitiatives: [
      {
        name: "Maternal & Child Nutrition Drives",
        description: "Targeted interventions for undernourished children and anemic pregnant and lactating mothers."
      },
      {
        name: "Sanitation & Organic Farming",
        description: "Constructing household toilets, promoting hygiene education, water harvesting, and chemical-free agriculture."
      }
    ],
    highlights: [
      "Over 15,000+ mothers and infants provided nutrition counseling and medical health checks",
      "100+ villages transformed through sanitation and clean drinking water initiatives"
    ]
  },
  {
    id: "government-schemes",
    title: "Government Schemes Facilitation",
    subtitle: "Bridging the last-mile gap between welfare entitlements and marginalized citizens",
    heroImage: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1200&auto=format&fit=crop",
    overview: "RLHP acts as a vital facilitator, ensuring government schemes reach the most remote populations in Mysuru, Bidar, Kalaburagi, and across North Karnataka.",
    keyInitiatives: [
      {
        name: "Awareness & Application Assistance",
        description: "Helping eligible citizens obtain ration cards, pension, housing grants, health insurance, and disability benefits."
      }
    ],
    highlights: [
      "Facilitated over 25,000+ government scheme applications",
      "Infographic facilitation model praised for last-mile delivery success"
    ]
  },
  {
    id: "humanitarian-assistance",
    title: "Humanitarian Relief & Disaster Response",
    subtitle: "Standing by vulnerable communities during natural disasters and severe crises",
    heroImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop",
    overview: "Whenever disaster strikes, RLHP mobilizes rapid relief teams to distribute food, medical kits, temporary shelter, and long-term rehabilitation support.",
    keyInitiatives: [
      {
        name: "Kerala Flood Relief",
        description: "Provided emergency food, water, clothing, and rebuilding assistance to 6,000+ affected families."
      },
      {
        name: "COVID-19 Emergency Relief",
        description: "Distributed dry ration kits, hygiene supplies, and cash assistance to 5,000+ distressed families."
      },
      {
        name: "Migrant Worker Rehabilitation",
        description: "Assisted 2,400 migrant families with food, transportation, and safety support during lockdowns."
      }
    ],
    highlights: [
      "13,400+ families supported across multiple major emergency response programs"
    ]
  }
];

export const districtsData = [
  {
    id: "mysuru",
    name: "Mysuru (HQ)",
    coordinates: { x: 46, y: 77 },
    isHq: true,
    projectsCount: 4,
    description: "State Headquarters. Home to AshaKirana Boys Shelter, AshaBhavana Girls Shelter, DWANI Women Federation, and city-wide Child Rights Clubs.",
    projects: ["AshaKirana Boys Shelter Home", "AshaBhavana Girls Shelter Home", "DWANI Women Federation", "Child Rights Clubs Network"]
  },
  {
    id: "chamarajanagar",
    name: "Chamarajanagar",
    coordinates: { x: 52, y: 84 },
    projectsCount: 2,
    description: "Tribal women empowerment, forest rights, maternal health, and sustainable organic farming.",
    projects: ["Tribal Livelihood Initiative", "Maternal & Child Health Care"]
  },
  {
    id: "kalaburagi",
    name: "Kalaburagi / Gulbarga",
    coordinates: { x: 58, y: 20 },
    projectsCount: 3,
    description: "North Karnataka focus: Government schemes facilitation, anti-child labour drives, and adolescent youth centers.",
    projects: ["North Karnataka Scheme Access Project", "Adolescent Skill Development Center", "Community Health Drive"]
  },
  {
    id: "bidar",
    name: "Bidar",
    coordinates: { x: 62, y: 11 },
    projectsCount: 2,
    description: "Northernmost district: Rural literacy programs, SDMC strengthening, and last-mile welfare delivery.",
    projects: ["Bidar Rural Literacy & IEP Program", "Gram Panchayat Linkage Project"]
  },
  {
    id: "raichur",
    name: "Raichur",
    coordinates: { x: 56, y: 31 },
    projectsCount: 2,
    description: "Child rights clubs, anti-child labor rehabilitation, and water conservation.",
    projects: ["Raichur Child Protection Unit", "Sanitation & Water Rights"]
  },
  {
    id: "chitradurga",
    name: "Chitradurga",
    coordinates: { x: 51, y: 50 },
    projectsCount: 2,
    description: "Women self-help group federations and learning disability diagnostic centers.",
    projects: ["BELAKU Women Sangha Project", "IEP Disability Remediation"]
  },
  {
    id: "davanagere",
    name: "Davanagere",
    coordinates: { x: 44, y: 46 },
    projectsCount: 1,
    description: "Youth vocational training, life skills, and government scheme awareness.",
    projects: ["Davanagere Skill & Governance Center"]
  },
  {
    id: "udupi",
    name: "Udupi",
    coordinates: { x: 27, y: 59 },
    projectsCount: 1,
    description: "Coastal Karnataka: Community health, disaster preparedness, and women's micro-credit.",
    projects: ["Coastal Health & Community Preparedness"]
  }
];

export const awardsData = [
  {
    id: 1,
    year: "2025",
    title: "Rajarshi Shree Nalwadi Krishnaraja Odeyar Award",
    conferredBy: "Government & Cultural Bodies of Karnataka",
    description: "Awarded for exceptional 42+ year legacy in uplifting rural marginalized communities and promoting holistic child education.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    year: "2024",
    title: "Chaitanya Shri Award",
    conferredBy: "State Social Welfare Federation",
    description: "Recognizing RLHP's pioneering work in forming DWANI and BELAKU Women Federations empowering over 12,000 rural women.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    year: "2023",
    title: "World Day Against Child Labour 2023 Recognition",
    conferredBy: "Department of Labour & Child Protection Board",
    description: "Honored for active rescue, rehabilitation, and education of over 8,000+ child laborers across Karnataka.",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    year: "2021",
    title: "Best Service Organization Award",
    conferredBy: "Mysuru District Administration",
    description: "Recognizing outstanding humanitarian relief during the COVID-19 pandemic and Kerala flood emergency operations.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop"
  }
];

export const newsArticlesData = [
  {
    id: "news-1",
    category: "News",
    title: "Child Rights Clubs Meet Organized in Mysuru",
    date: "May 18, 2025",
    author: "RLHP Media Team",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    excerpt: "Over 400 child representatives from 78 Child Rights Clubs convened in Mysuru to present their community safety recommendations to district authorities.",
    content: "Over 400 child representatives from 78 Child Rights Clubs convened in Mysuru to present their community safety recommendations to district authorities. The annual Child Rights Club convention brought together young leaders from urban and rural schools to present petitions on road safety near schools, clean drinking water facilities, and anti-bullying measures directly to government officials."
  },
  {
    id: "news-2",
    category: "Article",
    title: "Empowering Women Through Self Help Groups: The Story of BELAKU Federation",
    date: "May 05, 2025",
    author: "Development Desk",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    excerpt: "How thousands of rural women across Mysuru and Chitradurga turned micro-savings into economic independence and social advocacy.",
    content: "How thousands of rural women across Mysuru and Chitradurga turned micro-savings into economic independence and social advocacy. When RLHP introduced women sanghas 20 years ago, rural women faced severe financial constraints and social isolation. Today, federations like DWANI and BELAKU manage micro-enterprises, prevent child marriages, and participate actively in Gram Sabhas."
  },
  {
    id: "news-3",
    category: "News",
    title: "Health Camp Conducted in Rural Villages of Kalaburagi",
    date: "April 28, 2025",
    author: "Health & Nutrition Unit",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
    excerpt: "Comprehensive maternal check-ups, anemia screening, and child nutrition supplements provided to 650 families in North Karnataka.",
    content: "Comprehensive maternal check-ups, anemia screening, and child nutrition supplements provided to 650 families in North Karnataka. RLHP's mobile health unit conducted a 3-day health and immunization drive in remote hamlets of Kalaburagi to ensure pediatric screenings, nutritional supplements, and hygiene kits for all participants."
  }
];

export const successStoriesData = [
  {
    id: "story-1",
    title: "Children Green Team & Eco-Friendly School Kitchen Garden",
    programme: "Child Development & Environment",
    image: "/images/gallery/health_distribution_bheemanabeedu.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/27.05.2020-Free-educational-health-Material-distribution-Programme-Bheemanabeedu-3.jpg",
    summary: "Deviramma, studying in 5th standard at Govt. School in Puttegowdanahundi village, leads a 20-member Children Green Team. Supported by RLHP, they cultivated an organic herbal garden (Aloe vera, Mint, Papaya, Tulasi, Brahmi, Tomato, Radish) providing nutritious organic vegetables for midday school meals.",
    author: "Deviramma (Student Representative)",
    location: "Puttegowdanahundi Village, Mysuru",
    isPlaceholder: false
  },
  {
    id: "story-2",
    title: "COVID-19 Grocery Kit & Food Relief for Vulnerable Families",
    programme: "Humanitarian Relief & Disaster Response",
    image: "/images/gallery/emergency_ration_distribution.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/Picture44.jpg",
    summary: "Madamma, a 70-year-old widow from Chatnahalli village caring for her two orphaned grandchildren after losing both her son and daughter-in-law, received essential food grains, dry rations, and health precautionary materials from RLHP during lockdowns.",
    author: "Madamma (Beneficiary)",
    location: "Chatnahalli Village, Mysuru Taluk",
    isPlaceholder: false
  },
  {
    id: "story-3",
    title: "From Rescue to Master's Degree: Rehabilitation at AshaKirana",
    programme: "Child Protection (AshaKirana Shelter Home)",
    image: "/images/gallery/ashakirana_activities.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/IMG-20190923-WA0143.jpg",
    summary: "Rescued from child labour at age 9, Raju received comprehensive residential care, counseling, and schooling at AshaKirana Boys Shelter Home. Today he holds a Master's Degree in Social Work and advocates for child rights across Karnataka.",
    author: "RLHP Alumni Network",
    location: "Mysuru, Karnataka",
    isPlaceholder: false
  }
];

export const eventsData = [
  {
    id: "event-1",
    title: "Community Health & Nutrition Camp",
    date: "15 MAY 2025",
    location: "Mysuru, Karnataka",
    type: "Upcoming",
    description: "Free health check-up camp for communities in rural villages focusing on maternal and child health."
  },
  {
    id: "event-2",
    title: "Youth Leadership & Skill Workshop",
    date: "21 MAY 2025",
    location: "Kalaburagi, Karnataka",
    type: "Upcoming",
    description: "Workshop for rural youth on leadership, life skills, digital literacy, and career guidance."
  },
  {
    id: "event-3",
    title: "World Environment Day Tree Plantation",
    date: "05 JUN 2025",
    location: "Mysuru, Karnataka",
    type: "Upcoming",
    description: "Tree plantation drive and environment awareness program across target schools and villages."
  },
  {
    id: "event-4",
    title: "State Women Empowerment Convention",
    date: "25 APR 2025",
    location: "Chamarajanagar, Karnataka",
    type: "Past Event",
    description: "Annual experience sharing and training session for women self help groups and federations."
  }
];

export const publicationsData = [
  {
    id: "pub-1",
    title: "RLHP Annual Audit & Activity Report 2025-26",
    type: "Annual Report",
    year: "2025-26",
    format: "PDF Document",
    size: "4.2 MB",
    downloadUrl: "#"
  },
  {
    id: "pub-2",
    title: "RLHP Annual Audit & Activity Report 2024-25",
    type: "Annual Report",
    year: "2024-25",
    format: "PDF Document",
    size: "3.8 MB",
    downloadUrl: "#"
  },
  {
    id: "pub-3",
    title: "RLHP Annual Audit & Activity Report 2023-24",
    type: "Annual Report",
    year: "2023-24",
    format: "PDF Document",
    size: "3.5 MB",
    downloadUrl: "#"
  },
  {
    id: "pub-4",
    title: "Quarterly Newsletter - Child Rights & Protection",
    type: "Newsletter",
    year: "2025",
    format: "PDF Document",
    size: "1.9 MB",
    downloadUrl: "#"
  },
  {
    id: "pub-5",
    title: "Individualized Education Plan (IEP) Guidance Book",
    type: "Book Publication",
    year: "2024",
    format: "PDF Handbook",
    size: "6.1 MB",
    downloadUrl: "#"
  },
  {
    id: "pub-6",
    title: "IEP Classroom Activities & Sensory Training Video Module",
    type: "IEP Video",
    year: "2024",
    format: "MP4 Video",
    size: "45 MB",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    image: "/images/gallery/ashakirana_activities.jpg",
    summary: "Comprehensive diagnostic and remedial sensory-motor video training module for educators, special school teachers, and parents working with children with learning difficulties.",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "pub-7",
    title: "Child Protection & Rights Training Module for Community Leaders",
    type: "IEP Video",
    year: "2025",
    format: "MP4 Video",
    size: "38 MB",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    image: "/images/gallery/child_rights_workshop.jpg",
    summary: "Capacity building training video for Gram Panchayat members, SDMC leaders, and community elders on identifying child abuse, preventing child marriage, and reporting to CHILDLINE 1098.",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: "pub-8",
    title: "Women Sangha Financial Literacy & Micro-Banking Video Module",
    type: "IEP Video",
    year: "2024",
    format: "MP4 Video",
    size: "52 MB",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    image: "/images/gallery/women_shg_meeting.jpg",
    summary: "Practical training module for DWANI & BELAKU women self-help group members on savings management, bank credit linkages, digital transactions, and micro-enterprise book-keeping.",
    downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  }
];

export const galleryData = [
  {
    id: "gal-1",
    title: "Educational & Health Material Distribution in Bheemanabeedu",
    category: "Health Programmes",
    image: "/images/gallery/health_distribution_bheemanabeedu.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/27.05.2020-Free-educational-health-Material-distribution-Programme-Bheemanabeedu-3.jpg",
    description: "RLHP team distributing free health and educational kits to rural children and families."
  },
  {
    id: "gal-2",
    title: "Health & Nutrition Kit Distribution",
    category: "Health Programmes",
    image: "/images/gallery/nutrition_kit_distribution.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/27.05.2020-Free-educational-health-Material-distribution-Programme-Bheemanabeedu-2.jpg",
    description: "Maternal and child nutrition kit distribution drive in Bheemanabeedu."
  },
  {
    id: "gal-3",
    title: "Relief Supply Packing at Gundlupet",
    category: "Community Activities",
    image: "/images/gallery/relief_packing_gundlupet.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/26.05.2020-Material-Packing-Gundlupet.jpg",
    description: "Community volunteers and staff packing emergency relief materials in Gundlupet."
  },
  {
    id: "gal-4",
    title: "Child Rights & Protection Workshop",
    category: "Child Development",
    image: "/images/gallery/child_rights_workshop.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/page-no-4-child-prog.jpg",
    description: "Interactive child rights awareness session with school children in Mysuru."
  },
  {
    id: "gal-5",
    title: "AshaKirana Shelter Home Activities",
    category: "Child Development",
    image: "/images/gallery/ashakirana_activities.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/IMG-20190923-WA0143.jpg",
    description: "Boys at AshaKirana shelter home participating in evening learning activities."
  },
  {
    id: "gal-6",
    title: "Children's Cultural & Sports Meet",
    category: "Child Development",
    image: "/images/gallery/children_sports_meet.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/IMG-20190303-WA0006.jpg",
    description: "Annual sports and cultural meet organized for Child Rights Club members."
  },
  {
    id: "gal-7",
    title: "Adolescent Girls Skill Training Session",
    category: "Youth Programmes",
    image: "/images/gallery/adolescent_skill_training.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/IMG_6034.jpg",
    description: "Skill development and life skills workshop for young girls."
  },
  {
    id: "gal-8",
    title: "DWANI Women Federation Meeting",
    category: "Women Empowerment",
    image: "/images/gallery/dwani_federation_meeting.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_0105.jpg",
    description: "Monthly leadership and planning meeting of DWANI Women Federation."
  },
  {
    id: "gal-9",
    title: "Women Self-Help Group Leadership Training",
    category: "Women Empowerment",
    image: "/images/gallery/shg_leadership_training.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_0045.jpg",
    description: "Capacity building training for rural women Sangha leaders."
  },
  {
    id: "gal-10",
    title: "Rural Women Sangha Financial Literacy Session",
    category: "Women Empowerment",
    image: "/images/gallery/sangha_financial_literacy.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/16.jpg",
    description: "Women Sangha members learning micro-finance and savings management."
  },
  {
    id: "gal-11",
    title: "Gram Panchayat & Community Interface",
    category: "Community Activities",
    image: "/images/gallery/gram_panchayat_interface.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/7-2.jpg",
    description: "Dialogue between Gram Panchayat representatives and village community members."
  },
  {
    id: "gal-12",
    title: "Youth Vocational Computer Training",
    category: "Youth Programmes",
    image: "/images/gallery/youth_computer_training.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/a-1.jpg",
    description: "Digital literacy and computer foundation course for rural youth."
  },
  {
    id: "gal-13",
    title: "Maternal Health & Immunization Awareness",
    category: "Health Programmes",
    image: "/images/gallery/maternal_health_awareness.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/c.jpg",
    description: "Awareness drive on maternal nutrition and routine immunization."
  },
  {
    id: "gal-14",
    title: "Individualized Education Plan (IEP) Remedial Class",
    category: "Child Development",
    image: "/images/gallery/iep_remedial_class.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/17.jpg",
    description: "Remedial learning session for children with learning difficulties."
  },
  {
    id: "gal-15",
    title: "Annual RLHP Stakeholder Convention",
    category: "Events",
    image: "/images/gallery/annual_stakeholder_convention.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC00630.jpg",
    description: "Gathering of community leaders, partners, and beneficiaries."
  },
  {
    id: "gal-16",
    title: "Village Health Sanitation & Nutrition Committee Meeting",
    category: "Community Activities",
    image: "/images/gallery/vhsnc_committee_meeting.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_0230.jpg",
    description: "VHSNC members discussing village sanitation and clean water facilities."
  },
  {
    id: "gal-17",
    title: "Adolescent Life Skills Workshop",
    category: "Youth Programmes",
    image: "/images/gallery/life_skills_workshop.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_0155.jpg",
    description: "Interactive discussion on gender equality, health, and personal growth."
  },
  {
    id: "gal-18",
    title: "State-Level Child Rights Conference",
    category: "Events",
    image: "/images/gallery/child_rights_conference.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSCN0097.jpg",
    description: "Child representatives presenting petitions to state authorities."
  },
  {
    id: "gal-19",
    title: "Community Leadership Felicitation",
    category: "Events",
    image: "/images/gallery/community_leadership_felicitation.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSCN0077.jpg",
    description: "Honoring outstanding grassroot women leaders and volunteers."
  },
  {
    id: "gal-20",
    title: "Rural Sanitation & Water Hygiene Drive",
    category: "Health Programmes",
    image: "/images/gallery/sanitation_water_hygiene.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_1183.jpg",
    description: "Clean water awareness and household toilet construction drive."
  },
  {
    id: "gal-21",
    title: "AshaBhavana Shelter Girls Learning Hour",
    category: "Child Development",
    image: "/images/gallery/ashabhavana_girls_learning.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_0856.jpg",
    description: "Girls residing at AshaBhavana participating in study and creative arts."
  },
  {
    id: "gal-22",
    title: "Organic Farming & Kitchen Garden Project",
    category: "Women Empowerment",
    image: "/images/gallery/organic_farming_kitchen_garden.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_0205.jpg",
    description: "Women Sangha members cultivating organic kitchen gardens for household nutrition."
  },
  {
    id: "gal-23",
    title: "Emergency Relief Ration Distribution",
    category: "Community Activities",
    image: "/images/gallery/emergency_ration_distribution.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/Picture44.jpg",
    description: "Distributing food packets and essential kits to vulnerable families."
  },
  {
    id: "gal-24",
    title: "COVID-19 Hygiene Kit & Mask Distribution",
    category: "Health Programmes",
    image: "/images/gallery/covid_hygiene_mask_distribution.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/Picture34.jpg",
    description: "Distributing masks, soaps, and hand sanitizers during emergency relief."
  },
  {
    id: "gal-25",
    title: "Migrant Worker Rehabilitation Support",
    category: "Community Activities",
    image: "/images/gallery/migrant_worker_rehabilitation.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/Picture65.jpg",
    description: "Assisting migrant families with food, transit support, and medical aid."
  },
  {
    id: "gal-26",
    title: "Flood Relief Supply Mobilization",
    category: "Community Activities",
    image: "/images/gallery/flood_relief_supply.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/Picture50.jpg",
    description: "Mobilizing emergency aid and shelter supplies for flood victims."
  },
  {
    id: "gal-27",
    title: "Gram Sabha Rights & Entitlements Awareness",
    category: "Community Activities",
    image: "/images/gallery/gram_sabha_awareness.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_7293.jpg",
    description: "Community orientation on participating in Gram Sabhas and claiming entitlements."
  },
  {
    id: "gal-28",
    title: "School Development & Monitoring Committee (SDMC) Meet",
    category: "Child Development",
    image: "/images/gallery/sdmc_committee_meet.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_6648.jpg",
    description: "Parents and teachers planning school infrastructure improvements."
  },
  {
    id: "gal-29",
    title: "Community Food Security Distribution",
    category: "Health Programmes",
    image: "/images/gallery/food_security_distribution.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/20200526_113147.jpg",
    description: "Ration distribution drive supporting low-income rural households."
  },
  {
    id: "gal-30",
    title: "Youth Career Counseling & Skill Orientation",
    category: "Youth Programmes",
    image: "/images/gallery/youth_career_counseling.jpg",
    remoteImage: "https://www.rlhpmysore.com/wp-content/uploads/2020/07/DSC_0026.jpg",
    description: "Career guidance session helping youth explore vocational opportunities."
  }
];


export const fundingPartners = [
  { name: "Magneti Marelli", logoText: "Magneti Marelli", project: "Empowering backward districts to access public schemes" },
  { name: "WIPRO Cares / Wipro Foundation", logoText: "Wipro Cares", project: "Community development through Health & Sanitation" },
  { name: "AMADEUS", logoText: "AMADEUS", project: "Child focused integrated development" },
  { name: "Klüber Lubrication Pvt Ltd", logoText: "Klüber Lubrication", project: "Education support for underprivileged children" },
  { name: "Azim Premji Philanthropic Initiatives", logoText: "Azim Premji Foundation", project: "Early childhood development & rights" },
  { name: "Terre des Hommes (TdH - Germany)", logoText: "TdH (G)", project: "Child rights & protection network" },
  { name: "ChildFund India", logoText: "ChildFund", project: "Community health & sanitation" },
  { name: "Mission Inde", logoText: "Mission Inde", project: "Rural literacy & education initiatives" }
];

export const governmentDepartments = [
  "Department of Health & Family Welfare",
  "Department of School Education & Literacy",
  "Department of Women & Child Development",
  "Department of Labour",
  "Karnataka State Police Department",
  "Department of Rural Development & Panchayat Raj",
  "Department of Youth Affairs & Sports",
  "Skill Development, Entrepreneurship & Livelihood"
];

export const videoGalleryData = [
  {
    id: "vid-1",
    title: "RLHP Official Documentary & Ground Operations",
    youtubeId: "VqEL0QYI3ms",
    category: "Organization Overview",
    year: "2024",
    duration: "12:45",
    image: "/images/gallery/ashakirana_activities.jpg",
    description: "Official documentary highlighting 42+ years of ground-level community development across Mysuru and neighboring districts in Karnataka."
  },
  {
    id: "vid-2",
    title: "Child Rights & Protection Interventions in Mysuru",
    youtubeId: "9CE-JdqpBEY",
    category: "Child Development",
    year: "2024",
    duration: "08:30",
    image: "/images/gallery/child_rights_workshop.jpg",
    description: "Field video showcasing RLHP's 78 Child Rights Clubs, emergency child rescues, and community safety monitoring."
  },
  {
    id: "vid-3",
    title: "Women Empowerment & DWANI / BELAKU Sangha Federations",
    youtubeId: "ye_8ZO69kz0",
    category: "Women Empowerment",
    year: "2024",
    duration: "10:15",
    image: "/images/gallery/women_shg_meeting.jpg",
    description: "Empowering rural women through self-help groups, political participation, organic farming, and micro-banking."
  },
  {
    id: "vid-4",
    title: "AshaKirana & AshaBhavana Shelter Homes Life & Learning",
    youtubeId: "ytJbcXnSnaI",
    category: "Child Protection",
    year: "2023",
    duration: "09:20",
    image: "/images/gallery/ashakirana_activities.jpg",
    description: "Residential care, counseling, rehabilitation, and education for rescued child labourers and vulnerable children."
  },
  {
    id: "vid-5",
    title: "Community Based Health, Sanitation & Hygiene Drives",
    youtubeId: "Qs0gsc_sK8A",
    category: "Health & Sanitation",
    year: "2023",
    duration: "07:45",
    image: "/images/gallery/health_distribution_bheemanabeedu.jpg",
    description: "Maternal nutrition distribution, health awareness camps, and clean drinking water initiatives in rural villages."
  },
  {
    id: "vid-6",
    title: "Individualized Education Plan (IEP) Learning Disability Support",
    youtubeId: "nMgfI6-72YE",
    category: "Education & IEP",
    year: "2024",
    duration: "11:10",
    image: "/images/gallery/ashakirana_activities.jpg",
    description: "Diagnostic and remedial sensory-motor educational methodology transforming rural public school classrooms."
  },
  {
    id: "vid-7",
    title: "Humanitarian Emergency Relief & COVID-19 Ration Distribution",
    youtubeId: "uV5Arj4Dy-8",
    category: "Disaster Response",
    year: "2020",
    duration: "06:50",
    image: "/images/gallery/emergency_ration_distribution.jpg",
    description: "Emergency grocery kits, dry rations, and health precautionary materials distribution to vulnerable families."
  },
  {
    id: "vid-8",
    title: "Adolescent & Youth Leadership Skill Development Workshop",
    youtubeId: "vMSdQogzpL4",
    category: "Youth Empowerment",
    year: "2023",
    duration: "08:15",
    image: "/images/gallery/youth_career_counseling.jpg",
    description: "Vocational computer training, electric work, tailoring, and life skills for rural youth self-reliance."
  },
  {
    id: "vid-9",
    title: "Bottom-Up Governance & People's Participation in PRIs",
    youtubeId: "4vwufQQjG0k",
    category: "People Development",
    year: "2023",
    duration: "09:40",
    image: "/images/gallery/gram_sabha_participation.jpg",
    description: "Training Gram Panchayat members and local stakeholders for democratic community governance and public scheme access."
  },
  {
    id: "vid-10",
    title: "School Development and Monitoring Committee (SDMC) Training",
    youtubeId: "9X4jMXn0LjE",
    category: "Education & IEP",
    year: "2023",
    duration: "07:30",
    image: "/images/gallery/child_rights_workshop.jpg",
    description: "Capacity building for parents and teachers to strengthen public school infrastructure and teacher accountability."
  },
  {
    id: "vid-11",
    title: "Children Green Team & Organic Kitchen Garden Initiative",
    youtubeId: "ND-UyZZrrF4",
    category: "Child Development",
    year: "2024",
    duration: "06:25",
    image: "/images/gallery/health_distribution_bheemanabeedu.jpg",
    description: "Deviramma's 20-member Children Green Team cultivating organic herbal gardens for nutritious school midday meals."
  },
  {
    id: "vid-12",
    title: "Intervention & Rights Advocacy for Migrant Construction Families",
    youtubeId: "asjiX1ivQRk",
    category: "Migrant Support",
    year: "2023",
    duration: "08:50",
    image: "/images/gallery/emergency_ration_distribution.jpg",
    description: "Providing mobile education, healthcare, and rights awareness for children of migrant brick kiln & construction workers."
  },
  {
    id: "vid-13",
    title: "Maternal Health & Indigenous Child Nutrition Awareness Campaign",
    youtubeId: "GoT_XQZf5BQ",
    category: "Health & Sanitation",
    year: "2024",
    duration: "07:15",
    image: "/images/gallery/nutrition_kit_distribution.jpg",
    description: "Community health workers demonstrating nutritious indigenous food preparations for malnourished children."
  },
  {
    id: "vid-14",
    title: "Child Marriage Prevention & CHILDLINE 1098 Emergency Intervention",
    youtubeId: "ytlMMKpFpfI",
    category: "Child Protection",
    year: "2023",
    duration: "09:05",
    image: "/images/gallery/child_rights_workshop.jpg",
    description: "Statewide campaigns preventing illegal child marriages and safeguarding children in crisis."
  },
  {
    id: "vid-15",
    title: "State Nalwadi Krishnaraja Odeyar Award Ceremony Presentation",
    youtubeId: "BkzLhFgkko8",
    category: "Awards & Honors",
    year: "2025",
    duration: "05:40",
    image: "/images/gallery/ashakirana_activities.jpg",
    description: "State government recognition honoring RLHP for 42+ years of exemplary social development work in Karnataka."
  },
  {
    id: "vid-16",
    title: "RLHP 42+ Years Impact Milestone Retrospective",
    youtubeId: "JPjiyxoabpw",
    category: "Organization Overview",
    year: "2024",
    duration: "14:20",
    image: "/images/gallery/ashakirana_activities.jpg",
    description: "Retrospective journey celebrating over 2,15,000 lives impacted across Mysuru and Karnataka."
  },
  {
    id: "vid-17",
    title: "Message from Founder & Executive Secretary Mr. Jose V.K.",
    youtubeId: "FOoGObCZI8g",
    category: "Leadership Message",
    year: "2024",
    duration: "06:10",
    image: "/images/gallery/ashakirana_activities.jpg",
    description: "Founder Mr. Jose V.K. addressing RLHP supporters, partners, and community leaders on future development goals."
  }
];

