export type Expertise = { no: string; title: string; body: string };

export const expertise: Expertise[] = [
  {
    no: "01",
    title: "Civil Engineering",
    body: "Site supervision, drainage, irrigation, land preparation, road works, and construction execution.",
  },
  {
    no: "02",
    title: "Structural Drafting",
    body: "Structural drawings, steel structures, warehouse structures, foundations, and construction details.",
  },
  {
    no: "03",
    title: "Piping Engineering",
    body: "Piping plan, isometric drawings, P&ID, BOM, and technical coordination.",
  },
  {
    no: "04",
    title: "Quantity Surveying",
    body: "BOQ, RAB, material take-off, quantity calculation, and cost estimation.",
  },
  {
    no: "05",
    title: "Site Supervision",
    body: "Construction monitoring, contractor coordination, technical execution, quality control, and project timelines.",
  },
  {
    no: "06",
    title: "Digital Development",
    body: "Full-stack web development and digital solutions.",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary?: string;
  points?: string[];
};

export const experience: Experience[] = [
  {
    company: "PT. Semiter",
    role: "Engineering / Drafter Piping",
    period: "May 2025 — Jan 2026",
    points: [
      "Piping plan, isometric drawings, and P&ID",
      "AutoCAD Plant 3D modelling and clash detection",
      "ASME / API / ASTM compliance",
      "Engineering coordination and bill of materials",
    ],
  },
  {
    company: "PT. Global Engegi Power",
    role: "Supervisor",
    period: "Jan 2025 — Apr 2025",
    summary: "Irrigation channels for wastewater treatment.",
  },
  {
    company: "PT. Timah Industri",
    role: "Drafter Engineering",
    period: "Jun 2024 — Dec 2024",
    summary: "Technical drawings for a chemical storage warehouse.",
  },
  {
    company: "PT. Tridaya Teknikan Tama",
    role: "Supervisor",
    period: "Dec 2022 — Apr 2023",
    summary:
      "Supervision of land preparation and cut & fill work for industrial areas at PT. Krakatau Posco Cilegon.",
  },
  {
    company: "PT. Safiq Cakradaya Mandiri",
    role: "Drafter Engineering & Quantity Surveyor",
    period: "Mar 2021 — Dec 2022",
    summary: "Structural drawings for monorail hoist cranes and steel volume calculations.",
  },
  {
    company: "PT. Centra Multi Elektrindo",
    role: "Supervisor",
    period: "Sep 2019 — Jan 2020",
    summary:
      "Supervision of underground cable drilling using HDD machines and river diversion channels.",
  },
  {
    company: "PT. Royal Cilegon Abadi",
    role: "Engineering Drafter / Quantity Surveyor / Supervisor",
    period: "2015 — 2019",
    points: [
      "Road maintenance and warehouse access roads",
      "Warehouse foundation structures and structural drawings",
      "Drainage, land preparation, and cut & fill",
      "Industrial wastewater drainage and water treatment channels",
      "Construction supervision",
    ],
  },
  {
    company: "PT. Karunia Rosita Group",
    role: "Supervisor",
    period: "Aug 2014 — Feb 2015",
    summary: "Supervision of land preparation and wastewater drainage works.",
  },
  {
    company: "PT. Seantero Pangestu",
    role: "Supervisor",
    period: "Jul 2014 — Aug 2014",
    summary: "Supervision of aviation fuel pipe welding at Soekarno-Hatta Airport.",
  },
  {
    company: "PT. Wijaya Karya (Persero)",
    role: "Drafter Engineering",
    period: "2013 — 2014",
    points: [
      "Aviation fuel piping drawings",
      "Technical drawings",
      "Road maintenance project in Batugade, Maliana, Timor-Leste",
    ],
  },
];

export type Project = {
  no: string;
  title: string;
  category: string;
  role: string;
  year: string;
  scope: string;
  tools: string;
  drawing: "warehouse" | "crane" | "channel" | "earthwork" | "piping" | "road";
};

export const projects: Project[] = [
  {
    no: "01",
    title: "Industrial Warehouse",
    category: "Structural / Industrial",
    role: "Engineering Drafter",
    year: "2024",
    scope: "Production of technical drawings for a chemical storage warehouse.",
    tools: "AutoCAD / Technical Drawing",
    drawing: "warehouse",
  },
  {
    no: "02",
    title: "Monorail Hoist Crane",
    category: "Structural / Drafting",
    role: "Drafter Engineering & Quantity Surveyor",
    year: "2021 — 2022",
    scope: "Structural drawings and steel quantity calculations.",
    tools: "AutoCAD / Material Take-Off",
    drawing: "crane",
  },
  {
    no: "03",
    title: "Wastewater & Irrigation",
    category: "Civil / Infrastructure",
    role: "Supervisor",
    year: "2025",
    scope: "Irrigation and wastewater treatment channels.",
    tools: "Site Supervision / Technical Drawing",
    drawing: "channel",
  },
  {
    no: "04",
    title: "Cut & Fill",
    category: "Earthwork / Site Development",
    role: "Supervisor",
    year: "2022 — 2023",
    scope: "Industrial area land preparation and cut & fill execution.",
    tools: "Site Supervision / Quantity Calculation",
    drawing: "earthwork",
  },
  {
    no: "05",
    title: "Aviation Fuel Piping",
    category: "Piping / Industrial",
    role: "Drafter / Supervisor",
    year: "2013 — 2014",
    scope: "Technical drawings and welding supervision of aviation fuel piping.",
    tools: "AutoCAD / Piping Drawing",
    drawing: "piping",
  },
  {
    no: "06",
    title: "Road & Drainage",
    category: "Civil / Infrastructure",
    role: "Engineering Drafter / Supervisor",
    year: "2015 — 2019",
    scope: "Road maintenance, drainage, and warehouse access roads.",
    tools: "AutoCAD / Site Supervision",
    drawing: "road",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "CAD / BIM / Structural",
    items: ["AutoCAD", "AutoCAD Plant 3D", "Revit Structure", "Tekla Structures", "ETABS"],
  },
  { label: "Project / Office", items: ["Microsoft Office", "Microsoft Project"] },
  {
    label: "Engineering",
    items: [
      "Technical Drawing",
      "Structural Detailing",
      "Piping Drawing",
      "P&ID",
      "Isometric Drawing",
      "Bill of Materials",
      "Bill of Quantities",
      "RAB / Cost Estimation",
      "Material Take-Off",
      "Site Supervision",
      "Cut & Fill",
      "Drainage",
      "Irrigation",
    ],
  },
  { label: "Digital", items: ["Full-Stack Development"] },
];

export const navItems = [
  { no: "01", label: "About", id: "about" },
  { no: "02", label: "Expertise", id: "expertise" },
  { no: "03", label: "Experience", id: "experience" },
  { no: "04", label: "Projects", id: "projects" },
  { no: "05", label: "Skills", id: "skills" },
  { no: "06", label: "Contact", id: "contact" },
];
