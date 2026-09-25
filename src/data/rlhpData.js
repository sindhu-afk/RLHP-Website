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
    registrationNo: "36/83-84 (Registered on 24th May 1984 under Karnataka Societies Registration Act 1960 and FCRA)",
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
  vision: "To create a just, free, equitable and sustainable society",
  mission: "To empower the marginalised poor in slums and villages, vulnerable children and others affected by natural calamities and climate changes to respond to the challenges of growing poverty and rights violations, through collective and affirmative action leading to sustainable development and self reliance.",
  founders: [
    { name: "Mr. Joy Maliekal", designation: "Founder", image: "/images/team/joy_maliekal.jpg" },
    { name: "Mrs. Philomena Joy", designation: "Founder" }
  ],
  boardMembers: [
    { name: "Mrs. Gita Mitra", designation: "President", role: "President", image: "/images/team/gita_mithra.jpg" },
    { name: "Mr. Jose V.K.", designation: "Secretary & Director", role: "Secretary / Director", image: "/images/team/jose_vk.jpg" },
    { name: "Mr. Santhosh Kumar", designation: "Treasurer", role: "Treasurer", image: "/images/team/santhosh_kumar.jpg" },
    { name: "Mr. Prasanna N", designation: "Board Member", role: "Board Member" },
    { name: "Ms. Elizabeth John", designation: "Board Member", role: "Board Member" },
    { name: "Ms. Rosy Sujatha K", designation: "Board Member", role: "Board Member" },
    { name: "Mr. Johnson Joseph", designation: "Board Member", role: "Board Member" }
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
  { id: 1, count: "42+", label: "Years of Service", description: "Empowering marginalized communities since 1984", icon: "Clock" },
  { id: 2, count: "9.65 Lakh+", label: "People Reached", description: "Reaching over 9.65 lakh people across South & North Karnataka", icon: "Users" },
  { id: 3, count: "10,000+", label: "Children Engaged", description: "Active members in 78 Child Rights Clubs", icon: "Heart" },
  { id: 4, count: "10", label: "Districts Active", description: "Covering 10 districts in South & North Karnataka", icon: "MapPin" }
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
      "Prevention of child marriage and school dropouts across 10 districts"
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
    description: "South Karnataka: Tribal women empowerment, forest rights, maternal health, and sustainable organic farming.",
    projects: ["Tribal Livelihood Initiative", "Maternal & Child Health Care"]
  },
  {
    id: "mandya",
    name: "Mandya",
    coordinates: { x: 50, y: 72 },
    projectsCount: 2,
    description: "South Karnataka focus: Women sangha federations, maternal nutrition, and rural sanitation initiatives.",
    projects: ["Women Sangha Empowerment Initiative", "Rural Health & Sanitation Campaign"]
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
    description: "North Karnataka: Child rights clubs, anti-child labor rehabilitation, and water conservation.",
    projects: ["Raichur Child Protection Unit", "Sanitation & Water Rights"]
  },
  {
    id: "yadgir",
    name: "Yadgir",
    coordinates: { x: 60, y: 25 },
    projectsCount: 2,
    description: "North Karnataka focus: Government schemes facilitation, child rights protection, and rural education.",
    projects: ["Yadgir Child Rights Protection Center", "North Karnataka Welfare Scheme Facilitation"]
  },
  {
    id: "chitradurga",
    name: "Chitradurga",
    coordinates: { x: 51, y: 50 },
    projectsCount: 2,
    description: "Central/North Karnataka: Women self-help group federations and learning disability diagnostic centers.",
    projects: ["BELAKU Women Sangha Project", "IEP Disability Remediation"]
  },
  {
    id: "davanagere",
    name: "Davanagere",
    coordinates: { x: 44, y: 46 },
    projectsCount: 1,
    description: "Central Karnataka: Youth vocational training, life skills, and government scheme awareness.",
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
    title: "Testimonial – Nagarathna",
    programme: "Asha Bhavana Girls’ Home & Child Rights",
    image: "/images/stories/nagarathna.jpg",
    summary: "I always dreamed of wearing a school uniform, tie, belt and shoes, and carrying a lunchbox like other schoolchildren. RLHP brought me to Asha Bhavana Girls’ Home. Today, I am an advocate practising at the Magistrate Court in Bengaluru.",
    author: "Nagarathna",
    location: "Advocate, Bengaluru",
    fullStory: `“I always dreamed of wearing a school uniform, tie, belt and shoes, and carrying a lunchbox like other schoolchildren. Unfortunately, I was not fortunate enough to experience that childhood. I spent many years on the streets, struggling to earn my daily bread and facing numerous hardships. I was often chased by the police and spent many sleepless nights. Despite these challenges, I managed to pay my school fees from Grade 2 to Grade 7 by begging on the streets.

RLHP identified me and brought me to Asha Bhavana Girls’ Home, where I received the care, education and support I needed. With the guidance and opportunities provided by RLHP, I was able to continue my education and build a better future.

Today, I am an advocate practising at the Magistrate Court in Bengaluru. The support I received from RLHP transformed my life and enabled me to live with dignity and independence. I am deeply grateful to RLHP for believing in me and giving me the opportunity to build a meaningful future. Today, I am proud to serve and support people in need.”

— Nagarathna, Advocate, Bengaluru`,
    isPlaceholder: false
  },
  {
    id: "story-2",
    title: "Testimonial – Prashanth",
    programme: "Asha Kirana Boys’ Shelter Home & Vocational Skills",
    image: "/images/stories/prashanth.jpg",
    summary: "Orphaned at age 7 in Kalyanagiri, Mysuru, Prashanth joined Asha Kirana. He scored 437 marks in SSLC, completed a 2-year motorcycle repair course, and now works as a mechanic at a TVS showroom earning ₹14,000/month.",
    author: "Prashanth",
    location: "Mysuru, Karnataka",
    fullStory: `“I was born in Kalyanagiri, Mysuru, and lost both my parents at a very young age. My life changed when I joined Asha Kirana Boys’ Shelter Home at the age of seven. Asha Kirana gave me a safe place to live, along with care, guidance and the confidence to dream about my future.

Growing up at Asha Kirana taught me discipline, responsibility and good values. I enjoyed playing kabaddi and developed a strong interest in agriculture and animal husbandry. Although I was a slow learner, I never gave up. I worked hard in my studies, particularly in mathematics, and successfully completed my 10th standard with 437 marks.

With the support of RLHP, I later completed a two-year vocational training course in two-wheeler repair in Hunsur. The training gave me valuable technical skills and helped me become financially independent.

Today, I work as a mechanic at a reputed TVS showroom in Mysuru and earn ₹14,000 per month. I live independently in a rented house and look forward to opening my own garage, building a home and starting a family.

I am deeply grateful to RLHP and Asha Kirana for the care, education and guidance they provided throughout my journey. Their support helped me build a safe, stable and dignified life. I hope my journey inspires other children at Asha Kirana to work hard, believe in themselves and never give up on their dreams.”

— Prashanth, Mysuru`,
    isPlaceholder: false
  },
  {
    id: "story-3",
    title: "Once a Rag Picker, Now a Dignified Carpenter",
    programme: "Asha Kirana & Seva Sadhana Vocational Training",
    image: "/images/gallery/migrant_worker_rehabilitation.jpg",
    summary: "Orphaned at age 3, Narayana picked rags at Boti Bazaar to survive. Rescued by RLHP to Asha Kirana, he completed SSLC and trained in woodwork at Seva Sadhana Bengaluru. Today he earns ₹15,000/month as a skilled carpenter.",
    author: "Narayana",
    location: "Bengaluru, Karnataka",
    fullStory: `“We were four children in our family. My parents worked at the City Bus Stand in Mysuru, and we did not own a house. The streets were our home. When I was only three years old, my parents passed away after suffering from severe health problems. I do not know exactly what happened to them, but their loss changed our lives completely.

After my parents’ death, my aunt took care of us. She worked as a rag picker, and I often accompanied her along with my siblings. We wandered around the city collecting waste to earn money. Sometimes, I had to beg for a single meal, and many times we went to sleep on an empty stomach. Those were extremely difficult days, and I would never want any child to experience such a life.

One day, while I was collecting rags with my aunt and siblings at Boti Bazaar, members of RLHP noticed us. They spoke to my aunt and me about education, childhood and the importance of giving children a safe and secure environment. They visited us regularly and eventually invited us to Asha Kirana Boys’ Shelter Home. We agreed to go with them, and that decision changed our lives.

At Asha Kirana, I was welcomed with warmth and care. I was provided with new clothes, nutritious food and a safe place to live. Initially, I joined the non-formal education programme and was later admitted to a government school. For the first time, I experienced the care and affection of people who treated me like family.

I successfully completed my SSLC. Later, I developed a strong interest in carpentry and decided to pursue it as a career. With RLHP’s support, I was sent to Seva Sadhana, a vocational training centre in Bengaluru, where I received training in woodwork and carpentry.

Today, I am a skilled carpenter and earn around ₹15,000 per month. I am self-reliant and no longer depend on anyone to meet my basic needs. Asha Kirana not only transformed my life but also gave my brother a better future, while my sister received support through Asha Bhavana. I am proud to have grown up under the care and guidance of RLHP.

My dream is to start my own carpentry business and create opportunities for children who come from difficult backgrounds like mine. I want to support other children and contribute to society, especially those from deprived communities. I will always be grateful to RLHP and Asha Kirana for giving me a safe home, education, skills and, most importantly, a dignified life.”

— Narayana, Bengaluru`,
    isPlaceholder: false
  },
  {
    id: "story-4",
    title: "Construction of a CC Road in Kashiram Thanda",
    programme: "Bottom-Up Governance & Community Advocacy",
    image: "/images/gallery/gram_sabha_awareness.jpg",
    summary: "For over 3 decades, 50 households in Kashiram Thanda lacked a motorable road. After advocacy through RLHP's Mass Contact Programme and Application Mela, government sanctioned and completed a cement concrete (CC) road.",
    author: "Kashiram Thanda Community",
    location: "Chincholi Taluk, Kalaburagi",
    fullStory: `Kashiram Thanda, located under Ainoli Gram Panchayat in Chincholi Taluk, is home to around 50 households and more than 500 residents. For over three decades, the community struggled with a poorly maintained mud road that became muddy and waterlogged during the rainy season.

The poor road conditions created serious difficulties for the community. Children faced challenges in reaching school, while villagers struggled to access healthcare, markets, workplaces and other essential services. A tragic incident in which a pregnant woman reportedly lost her life after an ambulance or private vehicle could not reach the village in time further highlighted the urgent need for a permanent road.

During RLHP’s Mass Contact Programme (MCP) and Application Mela, the Youth and Women’s Groups came together and submitted a written request to the concerned government authorities for the construction of a cement concrete (CC) road.

RLHP staff facilitated community meetings, coordinated with the Gram Panchayat and relevant government officials, and ensured continuous follow-up until the request received attention. As a result of the community’s collective efforts and persistent advocacy, the government sanctioned and completed the CC road.

The new road has brought a significant change to everyday life in Kashiram Thanda. Villagers now have improved year-round access to schools, healthcare facilities, markets and workplaces. Children can travel to school more safely, attendance has improved, and parents have greater confidence in supporting their children’s education.

This case demonstrates how community mobilisation, collective action and sustained advocacy, supported by RLHP, can help rural communities address long-standing challenges and bring lasting improvements to their quality of life.`,
    isPlaceholder: false
  },
  {
    id: "story-5",
    title: "Community Action Against Illegal Liquor Sales",
    programme: "Women Empowerment & Social Action",
    image: "/images/gallery/shg_leadership_training.jpg",
    summary: "In Mirzapur village (Basavakalyana Taluk), widespread illegal liquor sales led to domestic violence and child neglect. Guided by RLHP, women submitted a written petition to the Excise Department, stopping illegal sales overnight.",
    author: "Mirzapur Village Women & Community",
    location: "Basavakalyana Taluk, Kalaburagi",
    fullStory: `Mirzapur village, under Sastapur Gram Panchayat in Basavakalyana Taluk, had been struggling with illegal liquor sales for several years. The widespread availability of alcohol contributed to addiction, domestic violence, financial hardship, child neglect and disturbances in the community.

During regular household visits and meetings with women and Adolescent Girls’ Groups, RLHP identified illegal liquor sales as a serious concern affecting the safety and well-being of families. RLHP conducted awareness programmes on the harmful effects of alcohol abuse and encouraged women and community members to come together and take collective action.

With guidance and support from RLHP, the women submitted a written petition to the Excise Department, requesting immediate action against the illegal liquor sellers. The very next day, Excise Department officials visited the village, conducted an inspection and stopped the illegal sale of liquor. The offenders were also warned of strict legal action.

The intervention brought positive changes to the community. Domestic violence, family disputes and public disturbances were reduced, creating a safer environment for women, children and elderly people. Families also experienced greater financial stability as household income was no longer being spent on alcohol. Young people became more focused on their education and livelihoods.

This case demonstrates how community mobilisation, women’s leadership and sustained support from RLHP, in coordination with government departments, can help address long-standing social issues and create safer, healthier and more peaceful communities.`,
    isPlaceholder: false
  },
  {
    id: "story-6",
    title: "Breaking Gender Barriers Through Folk Art",
    programme: "Adolescent Girls Empowerment & Kamsale Folk Art",
    image: "/images/gallery/child_rights_conference.jpg",
    summary: "In Bannithalapura, girls formed the Kiran Bedi Kishori Group and broke gender taboos by learning Kamsale folk dance. They won 1st prize at Hobli and Taluk levels, 3rd at District level, and performed at Rangayana Theatre Mysuru.",
    author: "Kiran Bedi Kishori Group",
    location: "Bannithalapura, Chamarajanagar",
    fullStory: `Bannithalapura is located 12 km from Gundlupete and has 1,090 households with a population of around 4,080. The village has a school from Class 1 to 10, with more than 300 children enrolled, along with three Anganwadi centres, a milk dairy, Gram Panchayat office and Primary Health Centre. Agriculture is the main source of livelihood, while traditional beliefs and practices continue to influence community life.

For the past four years, RLHP has been working in Bannithalapura with women, children, adolescent girls and youth, promoting group formation and community participation. With the support of teachers, children have also been encouraged to participate in sports such as volleyball, kabaddi and kho-kho.

RLHP formed the Kiran Bedi Kishori Group and conducted weekly meetings to promote adolescent girls’ participation, rights, confidence and overall development, with a special focus on addressing gender discrimination. Sports, cultural activities and traditional folk arts were used as effective tools to develop leadership and self-confidence among the girls.

During one such meeting, the girls expressed their interest in learning Kamsale, a traditional folk-art form. However, a long-standing belief in the village held that girls should not touch or perform Kamsale. When the girls began learning the art, some community members discouraged them and warned them against participating. Despite these challenges, the girls remained determined and continued their practice with the encouragement and support of RLHP.

Their hard work soon brought recognition. The girls won first prize at both the Hobli and Taluk levels and secured third prize at the district level. They were later invited to perform at Rangayana Theatre, Mysuru, during a training programme for district-level officers, where their performance was highly appreciated.

The girls’ achievements gradually changed community attitudes. Villagers who had once questioned their participation began to take pride in their accomplishments and recognise their abilities.

This success story demonstrates how cultural activities can become powerful tools for challenging gender stereotypes and creating opportunities for girls. Through the Kiran Bedi Kishori Group, RLHP enabled adolescent girls to develop confidence, leadership and skills while gaining recognition within and beyond their community. Their journey shows that when girls are given opportunities and support, they can challenge traditional barriers and become confident leaders in their communities.`,
    isPlaceholder: false
  },
  {
    id: "story-7",
    title: "Sneha’s Story",
    programme: "Asha Bhavana Girls’ Home & Paramedical Education",
    image: "/images/gallery/ashabhavana_girls_learning.jpg",
    summary: "Arrived at Asha Bhavana in 2009 at age 5 after losing her parents' care. Received love, schooling, and guidance, and went on to complete paramedical studies in Channarayapatna. Today, she works independently.",
    author: "Sneha",
    location: "Channarayapatna, Hassan",
    fullStory: `“I came to Asha Bhavana in 2009 when I was only five years old. At such a young age, I had lost my parents’ care and had no one who could take responsibility for me. I was brought to Asha Bhavana by members of a women’s organization in Kurimandi, Mysuru, who understood my situation and wanted me to have a safe and secure future.

When I first arrived, I was very small and weak and found it difficult to adjust to my new surroundings. I needed support in many ways, including maintaining personal hygiene and developing discipline. At Asha Bhavana, I received love, care, counselling and guidance. I was enrolled in school and encouraged to attend regularly. The support and encouragement I received helped me grow in confidence and improve both in my studies and in my personal life.

With continued guidance, I completed my schooling and later pursued paramedical studies. I joined a paramedical course in Channarayapatna and successfully completed my studies. Today, I am working independently and am able to support myself.

I am grateful for the care, education and guidance I received at Asha Bhavana. The support I received during my childhood helped me become confident, independent and self-reliant. Asha Bhavana gave me the opportunity to build a better future and live my life with dignity.”

— Sneha`,
    isPlaceholder: false
  },
  {
    id: "story-8",
    title: "Guna’s Journey from Vulnerability to Independence",
    programme: "Asha Kirana & Electrician Vocational Skills",
    image: "/images/gallery/youth_computer_training.jpg",
    summary: "Son of sanitation workers, Guna joined Asha Kirana after losing his father to alcoholism. He scored 501 marks in SSLC and completed electrician training at Seva Sadhana. Today he earns ₹18,000/month as an Electrician at St. John’s Hospital Bengaluru.",
    author: "Guna",
    location: "Mysuru / Bengaluru",
    fullStory: `“I am Guna, a resident of Mysuru. My parents worked as sanitation workers. My father struggled with alcohol addiction and later passed away due to health complications. After his death, my mother, Bannamma, took complete responsibility for raising my elder brother Subramanya and me. Despite facing many difficulties, she worked hard to give us a better life.

About 12 years ago, RLHP staff identified our vulnerable situation and admitted both my brother and me to the Asha Kirana Child Care Centre. Coming to Asha Kirana brought a major change in my life. I received regular health care, nutritious food, proper hygiene and grooming, a safe environment and, most importantly, love and guidance.

When I was around six years old, I was enrolled in MC Hundi School in the first standard. Initially, I was slow in learning and often fell asleep in the classroom. The staff and senior children at Asha Kirana patiently supported me and encouraged me to improve. Gradually, I became more confident and started doing better in my studies.

Asha Kirana also gave me opportunities to participate in cultural activities such as folk dance, Kamsale, art and craft. These activities helped me develop confidence and discover my interests beyond academics.

In the 2019–20 academic year, I appeared for the SSLC examination. With the support of special classes, TV lessons and my own hard work, I secured 501 marks. This achievement gave me the confidence to think about my future and become independent.

I was always interested in vocational skills, so I joined a two-year Electrician and Plumbing course at Seva Sadhana Institute in Bengaluru. With the guidance of my mentors and support from Asha Kirana staff, I successfully completed the training and gained one year of practical work experience in Mysuru.

My skills and dedication helped me secure a job as an Electrician at St. John’s Hospital in Bengaluru. Today, I earn ₹18,000 per month and am proud to be financially independent.

I now have several dreams for my future. I want to build a house in Mysuru, support my mother, help arrange my brother’s marriage and, most importantly, support the children of Asha Kirana in the future.

I am grateful to Asha Kirana for giving me care, education, skills and the confidence to build my own life. The support I received has transformed my life and helped me become independent. I hope that one day I can give back by helping other children who are going through difficulties, just as I was helped.”

— Guna`,
    isPlaceholder: false
  },
  {
    id: "story-9",
    title: "A Mother’s Joy in Her Child’s Recovery",
    programme: "Maternal & Child Health & Nutrition",
    image: "/images/gallery/maternal_health_awareness.jpg",
    summary: "3-year-old Manoj from Kumbrallimata weighed only 10.5 kg and was weak. RLHP guided Shruti to enroll him in Anganwadi with regular nutritious meals, eggs, ragi mixture, and Spirulina. Manoj now weighs a healthy 13.1 kg.",
    author: "Shruti",
    location: "Kumbrallimata Village, Mysuru",
    fullStory: `“My name is Shruti, and I am the mother of my three-year-old son, Manoj. There was a time when I felt deeply worried and helpless seeing my child so weak. At an age when he should have been active and healthy, he weighed only 10.5 kg. As a mother, it was painful to see him that way, but I did not know what to do or how to help him.

Manoj was not attending the Anganwadi and spent most of his time playing outside. He was not receiving proper food at regular intervals, and I was not aware of how important good nutrition is for a child’s growth and development.

Everything began to change when the Rural Literacy and Health Programme (RLHP) visited our village. The RLHP team identified my child’s condition and guided me with care and patience. They did not simply give us advice; they supported us throughout the process. With their guidance, we enrolled Manoj in the Anganwadi, where he began receiving regular nutritious meals, eggs and supplements such as ragi mixture and Spirulina.

Slowly, I began to notice a positive change in my child. He became more active, started eating better and gradually regained his happiness and energy. As a mother, seeing these changes brought me immense relief and joy.

Today, Manoj weighs 13.1 kg. He is healthy, happy and enjoys playing with other children. Seeing him grow and play with confidence fills my heart with happiness.

I am deeply thankful to RLHP and the Anganwadi worker for their care and support. RLHP not only helped my child move towards a healthier life but also helped me understand the importance of nutrition and better childcare. Their support has truly made a meaningful difference in our lives.”

— Shruti, Kumbrallimata Village`,
    isPlaceholder: false
  },
  {
    id: "story-10",
    title: "A Journey Towards a Brighter Future",
    programme: "Child Sponsorship & Entrepreneurship Development (EDP)",
    image: "/images/gallery/nutrition_kit_distribution.jpg",
    summary: "Zoya joined the RLHP & ChildFund sponsorship programme 8 years ago. Support guided her education while her mother completed EDP training and received a ₹20,000 seed grant to start a flower business.",
    author: "Zoya Sulthana",
    location: "Mysuru, Karnataka",
    fullStory: `“My name is Zoya Sulthana. I live with my parents, Syed Vaseem and Farhana, and my two sisters, Zaiba and Asiya. My family faced financial difficulties for many years. My father worked as a daily wage labourer, and his income was irregular. My mother took care of our home, and supporting the education of three children was often a challenge for my family.

I became part of the sponsorship programme supported by Rural Literacy and Health Programme (RLHP) in partnership with ChildFund International eight years ago. The support and guidance we received brought hope to our family during difficult times. Through the programme, we received guidance on child protection, health, hygiene and the importance of education. The letters and greetings I received from my sponsor were especially encouraging and made me feel supported and motivated.

As I grew older, I participated in youth development sessions conducted through the programme. These sessions helped me develop good hygiene practices, life skills and greater confidence in my education.

The support also helped my mother build a livelihood. She participated in an Entrepreneurship Development Programme (EDP) conducted with support from RLHP. Through the training, she learned about business skills, financial management and government schemes. She later received a seed grant of ₹20,000, which helped her start a small flower business.

Today, my mother’s business provides an additional source of income for our family. It helps us meet household expenses and has made it easier for my sisters and me to continue our education.

I am deeply grateful to RLHP and ChildFund International for supporting me and my family. Their guidance has given us confidence, opportunities and hope. Inspired by my mother’s hard work and the support we have received, I want to complete my education, build a bright future, support my family and become a positive role model for other children facing similar challenges.

This support has taught me that with the right opportunities, guidance and encouragement, families can overcome difficulties and children can move towards a better future.”

— Zoya Sulthana`,
    isPlaceholder: false
  },
  {
    id: "story-11",
    title: "Testimonial – Neha Anjum",
    programme: "Child Support & DFC Sponsorship",
    image: "/images/stories/neha_anjum.jpg",
    summary: "Supported by ChildFund and RLHP including DFC assistance, Neha completed her M.Com with Distinction. An aspiring Bank Manager, she developed strong leadership, teamwork, and communication skills through youth meetings.",
    author: "Neha Anjum",
    location: "M.Com Graduate, Mysuru",
    fullStory: `“I am very grateful to ChildFund and my sponsor for the support and encouragement they have given me throughout my education. With their continued support, including DFC assistance, I was able to meet my educational needs and successfully complete my M. Com with Distinction.

Accountancy has always been my favourite subject, and my dream is to become a Bank Manager. During my college studies, I completed a project and received a good grade, which gave me greater confidence in my abilities.

One of my most memorable experiences with the ChildFund programme was participating in a youth meeting. Meeting young people from different communities, sharing ideas and experiences, and taking part in group discussions, games and activities helped me develop my leadership, teamwork, confidence and communication skills.

I sincerely thank my sponsor and ChildFund for believing in me and supporting my educational journey. Their encouragement has motivated me to work towards my goals. I look forward to building a bright future and achieving my dream of becoming a Bank Manager.”

— Neha Anjum`,
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
  { name: "Azim Premji Philanthropic Initiatives (APPI)", logoText: "APPI", logoImage: "/images/partners/azim-premji-logo.png", project: "Early childhood development & rights" },
  { name: "Wipro Foundation", logoText: "Wipro Foundation", logoImage: "/images/partners/wipro-foundation-logo.jpg", project: "Community development through Health & Sanitation" },
  { name: "ChildFund International", logoText: "ChildFund International", logoImage: "/images/partners/childfund-logo.png", project: "Child protection & youth sponsorship" },
  { name: "Mission Inde", logoText: "Mission Inde", logoImage: "/images/partners/mission-inde-logo.jpg", project: "Rural literacy & education initiatives" },
  { name: "Klüber Lubrication Pvt. Ltd.", logoText: "Klüber Lubrication", logoImage: "/images/partners/kluber-lubrication-logo.png", project: "Education support for underprivileged children" },
  { name: "Magneti Marelli", logoText: "Magneti Marelli", logoImage: null, project: "Empowering backward districts to access public schemes" },
  { name: "AMADEUS", logoText: "AMADEUS", logoImage: null, project: "Child focused integrated development" },
  { name: "Terre des Hommes (TdH - Germany)", logoText: "TdH (G)", logoImage: null, project: "Child rights & protection network" }
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
    description: "Retrospective journey celebrating over 9.65 lakh lives impacted across South & North Karnataka."
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

