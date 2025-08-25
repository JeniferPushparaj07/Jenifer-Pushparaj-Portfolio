import React, { useEffect, useMemo, useState } from 'react';
import {
  User, GraduationCap, Briefcase, Mail, Linkedin, Github, Award, FileText, Quote, FileSpreadsheet,
  LineChart, ShieldCheck, Menu, X, Sun, Moon, Filter, ChevronRight, ChevronLeft, ArrowUp, Images,
  BarChart, Database, ClipboardList, Download, CheckCircle2,
} from 'lucide-react';

const ASSETS = {
  headshot: '/assets/1724629082521.jpg',
  fallbackHeadshotA: '/assets/jenifer.jpg',
  fallbackHeadshotB: '/1724629082521.jpg',
  fallbackHeadshotC: '1724629082521.jpg',
  agileCycle: '/assets/REASON1-1.webp',

  unileverCanteen: '/assets/Unilever Canteen project.jpg',
  tableauGfdd: '/assets/Tableau.png',
  stanfordLms: '/assets/Scope diagram stanford Library Management.jpg',
  googlePlay: '/assets/Google app rating prediction.png',
  bookclubErd: '/assets/Data Modelling.jpg',
  decisionTreeFull: '/assets/Fully grown decision tree.jpg',
  decisionTreePruned: '/assets/Pruned decision tree.jpg',
  qlikDashboard: '/assets/Qlik dashboard.jpg',
  kmeansMain: '/assets/K - means clustering.jpg',
  kmeansClusterDist: '/assets/Distribution of each cluster.jpg',
  kmeansFeatureDist: '/assets/distribution of each feature across cluster.jpg',
  spotifyConfusion: '/assets/Confusion matrix (Spotify).jpg',
  spotifyTop20: '/assets/top 20 (Spotify).jpg',
  dissertationModel: '/assets/Dynamic capabilities (Dissertation).jpg',
  dissertationWordcloud: '/assets/word cloud (Dissertation).jpg',

  charityLogo: '/assets/Charity home.jpg',
  trendLogo: '/assets/Trend Clothing.jpg',
  aviobyLogo: '/assets/avioby_logo.jpg',

  certCBAP: '/assets/CBAP.pdf',
  certAWS: '/assets/CertificateOfCompletion_AWS%20Certified%20Data%20Analytics%20%20Specialty%20DASC01%20Cert%20Prep%203%20Processing.pdf',
  certDataQuality: '/assets/CertificateOfCompletion_Data%20Quality%20Core%20Concepts.pdf',
  certSalesforce: '/assets/CertificateOfCompletion_Salesforce%20Essential%20Training.pdf',
  certSnowflake: '/assets/CertificateOfCompletion_Snowflake%20SnowPro%20Core%20Cert%20Prep.pdf',
  certIBMAnalysis: '/assets/Data%20Analytics%20with%20Python%20IBM%20Certificate.pdf',
  certIBMViz: '/assets/Data%20visualization%20with%20python%20IBM.pdf',
  certTableauImg: '/assets/Tableau.png',
  certGCPFundamentals: '/assets/Google%20Cloud%20certificate.pdf',
  certGCPBatch: '/assets/Building%20batch%20data%20pipelines%20on%20google%20cloud.pdf',
  hackerRankSqlUrl: 'https://www.hackerrank.com/certificates/60f0b79dd34f',
  cv: '/assets/Jenifer%20CV.pdf',
};

const PROFILE = {
  name: 'Jenifer Pushparaj',
  role: 'Junior Data & Business Analyst',
  location: 'United Kingdom',
  email: 'jeniferpushparaj@gmail.com',
  github: 'https://github.com/JeniferPushparaj07',
  linkedin: 'https://www.linkedin.com/in/jenifer-pushparaj',
  cvUrl: ASSETS.cv,
  values: ['Transparency', 'Accountability', 'Diversity'],
};

const achievements = [
  { title: 'Selected — Barclays Demo Directory (2024)', detail: 'Presented GENZAI (AI-integrated SaaS concept) to investor/mentor network; recognised for KPI-led, visual communication to mixed audiences.' },
  { title: 'Dissertation distinction (module)', detail: 'Dynamic Capabilities & Business-Model Innovation for SME Generative-AI Adoption (University of Liverpool, 2024).' },
  { title: 'Peer-reviewed publication (IJSART, 2020)', detail: 'SOSOL — Security of Soldiers (battery-first SOS tech for field reliability).' },
];

const experience = [
  { company: 'GENZAI (SaaS concept)', role: 'Founder & Business Analyst', time: 'Aug 2024 - Jul 2025 · UK (Hybrid)', points: [
      'Designed an AI-integrated business model (OpenAI APIs) and streamlined onboarding flows (~30% step reduction).',
      'Ran research (100+ surveys, 20+ interviews); MVP requirements achieved ~70% alignment with target users.',
      'Built end-to-end process maps (Visio/Whimsical) and KPI framework to align product, ops and finance.',
      'Co-defined KPIs with a senior financial analyst; Excel-based scenarios indicated 15–20% resource-allocation gains.',
      'Selected for Barclays Bank’s Demo Directory; translated AI value clearly to non-technical stakeholders.',
    ],
    skills: ['Python','Power BI','Excel forecasting','Process mapping','KPI design','Stakeholder management','Presentation'],
    category: 'Business Analysis',
  },
  { company: 'KultureHire', role: 'Business Analyst Intern', time: 'May 2023 - Jun 2023 · Remote (India)', points: [
      'Analysed 5k+ Gen‑Z datapoints; improved engagement recommendations by ~25%.',
      'Built ETL → dashboard workflow that reduced reporting time by ~35% and expanded access for non‑technical users by ~50%.',
      'Insights contributed to two platform feature updates.',
    ],
    skills: ['Power BI','Excel','ETL','DAX','Dashboarding','Reporting','Data analysis'],
    category: 'Analytics',
  },
];

const projects = [
  { title: 'Canteen Ordering System – Unilever (Simulated Client Project)', tags: ['Stakeholders','UML/ERD','Wireframes','Process'],
    summary: 'End-to-end BA for a simulated Unilever case: as-is/to-be, use cases, ERD and wireframes to reduce queues, food waste and operating cost across 1,500 employees on 12 floors.',
    category: 'Business Analysis', media: [{ src: ASSETS.unileverCanteen, alt: 'Unilever canteen ordering flow' }] },
  { title: 'Global Financial Development & Insurance – Tableau', tags: ['Tableau','KPI','Maps','Growth'],
    summary: 'Interactive dashboard blending World Bank GFDD with insurance sample data: parameters, KPI tables, growth indicators and trend trails.',
    category: 'BI / Visualisation', media: [{ src: ASSETS.tableauGfdd, alt: 'Tableau certification / dashboard' }] },
  { title: 'Stanford Library Management System (LMS)', tags: ['Use cases','RFID','Cloud'],
    summary: 'Digital LMS replacing manual ops: stakeholder requirements, flows for issue/return, RFID anti-theft and automated fines; kiosk, web and mobile access.',
    category: 'Business Analysis', media: [{ src: ASSETS.stanfordLms, alt: 'Stanford LMS scope diagram' }] },
  { title: 'Google Play Store – App Rating Prediction', tags: ['EDA','Cleaning','Feature engineering','Python'],
    summary: 'End-to-end EDA and modelling to explain/predict app ratings; handled nulls/outliers/duplicates; visualised category patterns; delivered recs to improve ratings.',
    category: 'Analytics', media: [{ src: ASSETS.googlePlay, alt: 'Google Play rating analysis plot' }] },
  { title: "Children's Book Club – SQL + NoSQL Data Design", tags: ['ERD','MongoDB','Recommendations'],
    summary: 'Hybrid data strategy: relational core (orders/feedback/recommendations) plus MongoDB for semi-structured signals to power personalisation and demand planning.',
    category: 'Business Analysis', media: [{ src: ASSETS.bookclubErd, alt: "Children's book club ERD" }] },
  { title: "Decision Tree – Car Acceptance (Hunt's + Gini)", tags: ['Decision Tree','Gini','Explainability','Python'],
    summary: 'Transparent classifier (acc/unacc). Pruned tree improved generalisation; evaluated via confusion matrix, precision/recall and F1.',
    category: 'Analytics', media: [{ src: ASSETS.decisionTreeFull, alt: 'Fully grown decision tree' }, { src: ASSETS.decisionTreePruned, alt: 'Pruned decision tree' }] },
  { title: 'US Retail – Qlik Sense Performance Dashboard', tags: ['Revenue','Margin','City'],
    summary: 'Executive view with KPIs, map and trends; actions for margin lift and city prioritisation.',
    category: 'BI / Visualisation', media: [{ src: ASSETS.qlikDashboard, alt: 'Qlik Sense retail dashboard' }] },
  { title: 'Predictive Maintenance in Manufacturing – K-Means Clustering', tags: ['K-Means','Elbow','Clusters'],
    summary: 'Clustered temp/speed/torque/wear; identified a high-risk operating state (~2× failure) to drive risk‑based maintenance.',
    category: 'Analytics', media: [{ src: ASSETS.kmeansMain, alt: 'K-means clustering' }, { src: ASSETS.kmeansClusterDist, alt: 'Cluster distribution' }, { src: ASSETS.kmeansFeatureDist, alt: 'Feature distribution per cluster' }] },
  { title: 'Big Data Analytics for Business – Spotify Case Study', tags: ['EDA','Feature importance','Confusion matrix'],
    summary: 'Explored personalisation and hit prediction; roadmap across infra, skills and governance to operationalise insights.',
    category: 'Analytics', media: [{ src: ASSETS.spotifyConfusion, alt: 'Spotify confusion matrix' }, { src: ASSETS.spotifyTop20, alt: 'Top 20 words chart' }] },
  { title: 'MSc Dissertation – Dynamic Capabilities & Business Model Innovation through GenAI (SMEs)', tags: ['SLR','Case studies','GenAI','Dynamic capabilities'],
    summary: 'PRISMA-guided SLR + case studies; conceptual model linking sensing/seizing/transforming to GenAI adoption and measurable innovation outcomes.',
    category: 'Business Analysis', media: [{ src: ASSETS.dissertationModel, alt: 'Dynamic capabilities conceptual model' }, { src: ASSETS.dissertationWordcloud, alt: 'Dissertation word cloud' }] },
];

const recommendations = [
  { name: 'Dr Omar Khaled (MSc Supervisor)', quote: 'Jenifer transforms complex AI into practical, business‑ready solutions. Distinction for the dissertation and strong BA/analytics capability.' },
  { name: 'Alexis Mathai (Barclays)', quote: 'Outstanding, collaborative problem‑solver who delivers excellence in everything she does.' },
  { name: 'Jennifer Kwakwa‑Sarpong (MSc cohort)', quote: 'Creative + precise: turns analytics into business impact with Python/SQL/visualisation.' },
  { name: 'Paolo Boccafresca (Co‑founder, startup)', quote: 'Jenifer led the AI/ML work in our early‑stage startup, acting as a de‑facto CTO—shaping the business model, applying modern ML tools for analysis/diagnostics, and coordinating the team.' },
];

const certsGallery = [
  { title: 'CBAP Training (IIBA‑endorsed)', issuer: 'Simplilearn', date: 'Jul 2022', asset: ASSETS.certCBAP, type: 'pdf', image: null, tags: ['Business Analysis'] },
  { title: 'AWS Data Analytics Specialty (Cert Prep: Processing)', issuer: 'LinkedIn Learning', date: 'Apr 2023', asset: ASSETS.certAWS, type: 'pdf', image: null, tags: ['Cloud','AWS'] },
  { title: 'Data Quality: Core Concepts', issuer: 'LinkedIn Learning', date: 'Feb 2025', asset: ASSETS.certDataQuality, type: 'pdf', image: null, tags: ['Data Quality'] },
  { title: 'Salesforce Essential Training', issuer: 'LinkedIn Learning', date: 'Feb 2025', asset: ASSETS.certSalesforce, type: 'pdf', image: null, tags: ['CRM'] },
  { title: 'Snowflake SnowPro Core Cert Prep', issuer: 'LinkedIn Learning', date: 'Mar 2025', asset: ASSETS.certSnowflake, type: 'pdf', image: null, tags: ['Cloud','Snowflake'] },
  { title: 'IBM Data Analysis with Python', issuer: 'Simplilearn / IBM', date: 'Aug 2022', asset: ASSETS.certIBMAnalysis, type: 'pdf', image: null, tags: ['Analytics','Python'] },
  { title: 'IBM Data Visualisation with Python', issuer: 'Simplilearn / IBM', date: 'Oct 2022', asset: ASSETS.certIBMViz, type: 'pdf', image: null, tags: ['Analytics','Python'] },
  { title: 'Tableau Desktop 10 (Training)', issuer: 'Simplilearn', date: 'Jul 2022', asset: ASSETS.certTableauImg, type: 'image', image: ASSETS.certTableauImg, tags: ['BI','Tableau'] },
  { title: 'Google Cloud Big Data & ML Fundamentals', issuer: 'Coursera / Google Cloud', date: 'Mar 2023', asset: ASSETS.certGCPFundamentals, type: 'pdf', image: null, tags: ['Cloud','GCP'] },
  { title: 'Building Batch Data Pipelines on Google Cloud', issuer: 'Coursera / Google Cloud', date: 'Apr 2023', asset: ASSETS.certGCPBatch, type: 'pdf', image: null, tags: ['Cloud','GCP'] },
  { title: 'SQL (Advanced)', issuer: 'HackerRank', date: 'Mar 2025', asset: ASSETS.hackerRankSqlUrl, type: 'url', image: null, tags: ['SQL'] },
];

const volunteering = [
  { org: 'Missionaries of Charity (Local Convent)', role: 'Student Volunteer', time: 'Nov 2023 – Jun 2025', text: 'Weekend meal prep and distribution for the homeless; rota/stock support during busy periods.', logo: ASSETS.charityLogo },
  { org: 'Trend Clothing', role: 'Business Analyst (Volunteer)', time: 'Oct 2022 – May 2023', text: 'Built Excel/Sheets trackers and Power BI KPIs; reduced reporting delays and late deliveries.', logo: ASSETS.trendLogo },
  { org: 'Avioby', role: 'Business & Operations Support (Volunteer)', time: 'May 2025 – Aug 2025', text: 'Hiring ops, onboarding coordination and competitor research to inform product positioning.', logo: ASSETS.aviobyLogo },
];

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ');

const Button: React.FC<{ children: React.ReactNode; variant?: 'default'|'outline'|'ghost'|'link'; size?: 'default'|'sm'|'lg'|'icon'; className?: string; onClick?: () => void; type?: 'button'|'submit'|'reset'; }>
= ({ children, variant = 'default', size = 'default', className, onClick, type = 'button', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700 dark:bg-fuchsia-500 dark:text-white dark:hover:bg-fuchsia-600',
    outline: 'border border-slate-200 bg-white hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-slate-800',
    ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800',
    link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
  } as const;
  const sizes = { default: 'h-10 px-4 py-2', sm: 'h-9 px-3', lg: 'h-11 px-8', icon: 'h-10 w-10' } as const;
  return (<button type={type} className={cx(base, variants[variant], sizes[size], className)} onClick={onClick} {...props}>{children}</button>);
};

const Card: React.FC<{ className?: string; onClick?: () => void; children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, onClick, ...props }) => (
  <div className={cx('rounded-lg border bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50', className)} onClick={onClick} {...props}>{children}</div>
);
const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ children, className }) => <div className={cx('flex flex-col space-y-1.5 p-6', className)}>{children}</div>;
const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ children, className }) => <h3 className={cx('text-2xl font-semibold leading-none tracking-tight', className)}>{children}</h3>;
const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ children, className }) => <div className={cx('p-6 pt-0', className)}>{children}</div>;

const Badge: React.FC<{ className?: string; children: React.ReactNode; variant?: 'default'|'secondary' }> = ({ children, variant = 'default', className }) => {
  const base = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = { default: 'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900',
    secondary: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50', } as const;
  return <span className={cx(base, variants[variant], className)}>{children}</span>;
};

const Section: React.FC<{ id: string; title: string; icon: React.ReactNode; className?: string; children: React.ReactNode }> = ({ id, title, icon, children, className }) => (
  <section id={id} className={cx('max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16', className)}>
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 flex items-center gap-3 text-slate-900 dark:text-slate-50">{icon} {title}</h2>
    {children}
  </section>
);

const Dialog: React.FC<{ open: boolean; onOpenChange: (v: boolean) => void; className?: string; children: React.ReactNode }> = ({ open, onOpenChange, children, className }) => (
  <div className={cx('fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all', open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none')}>
    <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
    <div className={cx('relative z-10 w-full max-w-lg md:max-w-3xl rounded-lg border bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50', className)}>
      <button aria-label="Close dialog" className="absolute top-4 right-4" onClick={() => onOpenChange(false)}><X className="h-5 w-5" /></button>
      {children}
    </div>
  </div>
);
const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="flex flex-col space-y-1.5 text-center sm:text-left">{children}</div>;
const DialogTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-lg font-semibold leading-none tracking-tight">{children}</h3>;
const DialogDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => <p className="text-sm text-slate-500 dark:text-slate-400">{children}</p>;

const SmartImage: React.FC<{ sources: string[]; alt: string; className?: string }> = ({ sources, alt, className }) => {
  const [idx, setIdx] = useState(0);
  const src = sources[idx];
  if (!src) return null;
  return <img src={encodeURI(src)} alt={alt} className={className} loading="lazy" onError={() => setIdx((i) => (i + 1 < sources.length ? i + 1 : i))} />;
};
const ProjectImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const candidates: string[] = [src];
  if (!src.includes('%20') && src.includes(' ')) candidates.push(src.replace(/ /g, '%20'));
  if (src.lower().endswith('.jpg')) candidates.append(src[:-4] + '.png');
  return <SmartImage sources={candidates} alt={alt} className={className} />;
};

// Corrected ProjectImage (override)
const ProjectImage2: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const list: string[] = [src];
  if (!src.includes('%20') && src.includes(' ')) list.push(src.replace(/ /g, '%20'));
  if (src.endsWith('.jpg')) list.push(src.replace(/\.jpg$/i, '.png'));
  if (src.endsWith('.jpeg')) list.push(src.replace(/\.jpeg$/i, '.png'));
  if (src.endsWith('.png')) list.push(src.replace(/\.png$/i, '.jpg'));
  return <SmartImage sources={list} alt={alt} className={className} />;
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const getInitialTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored as 'light' | 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme());
  const [projFilter, setProjFilter] = useState('All');
  const [activeRec, setActiveRec] = useState(0);
  const [openProject, setOpenProject] = useState<null | (typeof projects)[number]>(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [openCert, setOpenCert] = useState<null | (typeof certsGallery)[number]>(null);
  const [certFilter, setCertFilter] = useState('All');
  const [certQuery, setCertQuery] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveRec((i) => (i + 1) % recommendations.length), 5000);
    return () => clearInterval(id);
  }, []);

  const categories = useMemo(() => ['All', 'Business Analysis', 'Analytics', 'BI / Visualisation'], []);
  const filteredProjects = useMemo(() => (projFilter === 'All' ? projects : projects.filter((p) => p.category === projFilter)), [projFilter]);

  const certTags = useMemo(() => ['All', ...Array.from(new Set(certsGallery.flatMap((c) => c.tags)))], []);
  const filteredCerts = useMemo(() => {
    const byTag = certFilter === 'All' ? certsGallery : certsGallery.filter((c) => c.tags.includes(certFilter));
    if (!certQuery.trim()) return byTag;
    const q = certQuery.toLowerCase();
    return byTag.filter((c) => c.title.toLowerCase().includes(q) || c.issuer.toLowerCase().includes(q));
  }, [certFilter, certQuery]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector('header');
    const offset = header ? (header as HTMLElement).offsetHeight : 0;
    window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className={cx('min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100', 'scroll-smooth')}>
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200/80 dark:border-slate-700/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }} className="hover:underline flex items-center gap-1"><User size={16}/> About</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleScrollTo('experience'); }} className="hover:underline flex items-center gap-1"><Briefcase size={16}/> Experience</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }} className="hover:underline flex items-center gap-1"><FileText size={16}/> Projects</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleScrollTo('skills'); }} className="hover:underline flex items-center gap-1"><LineChart size={16}/> Skills</a>
            <a href="#achievements" onClick={(e) => { e.preventDefault(); handleScrollTo('achievements'); }} className="hover:underline flex items-center gap-1"><Award size={16}/> Achievements</a>
            <a href="#education" onClick={(e) => { e.preventDefault(); handleScrollTo('education'); }} className="hover:underline flex items-center gap-1"><GraduationCap size={16}/> Education</a>
            <a href="#references" onClick={(e) => { e.preventDefault(); handleScrollTo('references'); }} className="hover:underline flex items-center gap-1"><Quote size={16}/> Recommendations</a>
            <a href="#certs" onClick={(e) => { e.preventDefault(); handleScrollTo('certs'); }} className="hover:underline flex items-center gap-1"><FileSpreadsheet size={16}/> Certifications</a>
            <a href="#volunteering" onClick={(e) => { e.preventDefault(); handleScrollTo('volunteering'); }} className="hover:underline flex items-center gap-1"><FileText size={16}/> Volunteering</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }} className="hover:underline flex items-center gap-1"><Mail size={16}/> Get in touch</a>
          </nav>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}>
              {theme === 'dark' ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
            </Button>
            <a href={PROFILE.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Button variant="ghost" size="icon"><Linkedin className="h-5 w-5"/></Button></a>
            <a href={PROFILE.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Button variant="ghost" size="icon"><Github className="h-5 w-5"/></Button></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Button variant="ghost" size="icon"><Mail className="h-5 w-5"/></Button></a>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu className="h-6 w-6"/></Button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/30" onClick={() => setMenuOpen(false)}>
            <div className="ml-auto bg-white dark:bg-slate-900 h-full w-72 p-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold">Menu</span>
                <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X className="h-5 w-5"/></Button>
              </div>
              <div className="flex flex-col gap-4 text-sm">
                {[
                  ['About','about', <User size={16} key="i"/>],
                  ['Experience','experience', <Briefcase size={16} key="i"/>],
                  ['Projects','projects', <FileText size={16} key="i"/>],
                  ['Skills','skills', <LineChart size={16} key="i"/>],
                  ['Achievements','achievements', <Award size={16} key="i"/>],
                  ['Education','education', <GraduationCap size={16} key="i"/>],
                  ['Recommendations','references', <Quote size={16} key="i"/>],
                  ['Certifications','certs', <FileSpreadsheet size={16} key="i"/>],
                  ['Volunteering','volunteering', <FileText size={16} key="i"/>],
                  ['Get in touch','contact', <Mail size={16} key="i"/>],
                ].map(([label, id, icon]) => (
                  <a key={label as string} href={`#${id}`} onClick={(e) => { e.preventDefault(); handleScrollTo(id as string); }} className="hover:underline flex items-center gap-2">{icon} {label}</a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <section id="hero" className="relative overflow-hidden pt-10 pb-6 min-h-[calc(100vh-64px)] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{PROFILE.name}</h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{PROFILE.role} · {PROFILE.location}</p>
              <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300">I'm a Junior Data & Business Analyst who turns messy problems into clear flows, measurable KPIs and stakeholder‑friendly dashboards.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {PROFILE.values.map((v) => (<Badge key={v} variant="secondary" className="rounded-full text-sm py-1 px-3">{v}</Badge>))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={encodeURI(PROFILE.cvUrl)} download><Button className="gap-2"><Download className="h-4 w-4"/> Download CV</Button></a>
                <a href={`mailto:${PROFILE.email}`}><Button variant="outline" className="gap-2"><Mail className="h-4 w-4"/> Email</Button></a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex md:justify-end">
              <SmartImage sources={[ASSETS.headshot, ASSETS.fallbackHeadshotA, ASSETS.fallbackHeadshotB, ASSETS.fallbackHeadshotC]} alt="Jenifer headshot" className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-lg" />
            </div>
          </div>
        </div>
        <div className="sm:hidden fixed bottom-3 inset-x-3 z-40">
          <div className="rounded-2xl shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur p-2 flex gap-2">
            <a className="flex-1" href={`mailto:${PROFILE.email}`}><Button className="w-full">Email</Button></a>
            <a className="flex-1" href={encodeURI(PROFILE.cvUrl)} download><Button variant="outline" className="w-full">Download CV</Button></a>
          </div>
        </div>
      </section>

      <Section id="about" title="About" icon={<User className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 hover:shadow-md transition-shadow">
            <CardContent className="pt-6 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>I'm a Junior Data & Business Analyst who connects data with strategy. During my MSc, I delivered predictive/prescriptive analytics in Python, built relational models in SQL, and completed a PRISMA‑guided SLR with case studies on how SMEs adopt Generative AI through dynamic capabilities—producing a practical conceptual model for leaders.</p>
              <p className="mt-3">Alongside academics, I founded <span className="font-semibold">GENZAI</span>—an AI‑integrated SaaS concept—where I led research, as‑is/to‑be flows, KPI validation with a senior financial analyst, and Excel forecasting; the concept was selected for Barclays’ Demo Directory. I prefer visuals over jargon and design dashboards people can actually use.</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {['𝐈 𝐋𝐢𝐬𝐭𝐞𝐧 𝐟𝐢𝐫𝐬𝐭','𝐕𝐢𝐬𝐮𝐚𝐥𝐢𝐬𝐞𝐝 𝐭𝐡𝐞 𝐰𝐨𝐫𝐤','𝐓𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞 𝐚𝐜𝐫𝐨𝐬𝐬 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐬','𝐃𝐞𝐟𝐢𝐧𝐞 𝐊𝐏𝐈𝐬 & 𝐦𝐨𝐝𝐞𝐥 𝐢𝐦𝐩𝐚𝐜𝐭','𝐁𝐮𝐢𝐥𝐝 𝐝𝐚𝐭𝐚 𝐬𝐭𝐨𝐫𝐢𝐞𝐬','𝐃𝐨 𝐭𝐡𝐞 𝐡𝐨𝐦𝐞𝐰𝐨𝐫𝐤.'].map((step, i, arr) => (
                  <React.Fragment key={step}><Badge variant="secondary" className="rounded-full">{step}</Badge>{i < arr.length - 1 && <ChevronRight className="h-4 w-4 opacity-60" />}</React.Fragment>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader><CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400"/> Ways of working (Agile)</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 dark:text-slate-300">
              <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                <ProjectImage2 src={ASSETS.agileCycle} alt="Agile methodology cycle" className="w-full h-auto object-contain" />
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="experience" title="Experience" icon={<Briefcase className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((e, idx) => (
            <div key={e.company} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{e.role} — <span className="text-slate-600 dark:text-slate-300">{e.company}</span></CardTitle>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{e.time}</div>
                </CardHeader>
                <CardContent className="text-sm text-slate-700 dark:text-slate-300">
                  <ul className="list-disc pl-5 space-y-2">{e.points.map((p, i) => (<li key={i}>{p}</li>))}</ul>
                  {e.skills && e.skills.length > 0 && (<div className="mt-4 flex flex-wrap gap-2">{e.skills.map((s) => (<Badge key={s} variant="secondary" className="rounded-full">{s}</Badge>))}</div>)}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" icon={<FileText className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="flex flex-nowrap items-center gap-2 mb-6 overflow-x-auto no-scrollbar snap-x">
          <Badge className="rounded-full whitespace-nowrap"><Filter className="h-3.5 w-3.5 mr-1" /> Filter</Badge>
          {['All','Business Analysis','Analytics','BI / Visualisation'].map((c) => (
            <Button key={c} onClick={() => setProjFilter(c)} className={cx('px-3 py-1.5 rounded-full border text-sm whitespace-nowrap snap-start', projFilter === c ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700')} variant="ghost">{c}</Button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(projFilter === 'All' ? projects : projects.filter(p => p.category === projFilter)).map((p, idx) => (
            <div key={p.title} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.03}s` }}>
              <Card onClick={() => { setOpenProject(p); setCarouselIdx(0); }} className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                {p.media?.[0] ? (
                  <div className="p-3 pt-3">
                    <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                      <ProjectImage2 src={p.media[0].src} alt={p.media[0].alt} className="h-full w-full object-contain" />
                    </div>
                  </div>
                ) : (
                  <div className="p-3 pt-3">
                    <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-slate-500"><Images className="h-6 w-6 mr-2"/> Preview</div>
                  </div>
                )}
                <CardHeader><CardTitle className="text-base flex items-center justify-between gap-3">{p.title}<ChevronRight className="h-4 w-4 opacity-60"/></CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
                  <p>{p.summary}</p>
                  <div className="flex flex-wrap gap-2">{p.tags.map((t) => (<Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>))}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <Dialog open={!!openProject} onOpenChange={(v) => { if (!v) setOpenProject(null); }}>
          <DialogHeader><DialogTitle>{openProject?.title}</DialogTitle><DialogDescription>{openProject?.summary}</DialogDescription></DialogHeader>
          {openProject?.media && openProject.media.length > 0 && (
            <div className="mt-3">
              <div className="relative">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                  <ProjectImage2 src={openProject.media[carouselIdx].src} alt={openProject.media[carouselIdx].alt} className="h-full w-full object-contain" />
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button variant="outline" size="icon" className="ml-2 bg-white/70 dark:bg-slate-900/70" onClick={() => setCarouselIdx((i) => (i - 1 + openProject.media.length) % openProject.media.length)} aria-label="Previous image"><ChevronLeft className="h-4 w-4"/></Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button variant="outline" size="icon" className="mr-2 bg-white/70 dark:bg-slate-900/70" onClick={() => setCarouselIdx((i) => (i + 1) % openProject.media.length)} aria-label="Next image"><ChevronRight className="h-4 w-4"/></Button>
                </div>
              </div>
              <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar">
                {openProject.media.map((m, i) => (
                  <button key={m.src} onClick={() => setCarouselIdx(i)} className={cx('h-16 w-28 flex-shrink-0 rounded-lg overflow-hidden border transition-all duration-200', i === carouselIdx ? 'ring-2 ring-fuchsia-600 dark:ring-fuchsia-400 border-transparent' : 'opacity-80 hover:opacity-100 border-slate-200 dark:border-slate-700')}>
                    <ProjectImage2 src={m.src} alt={m.alt} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </Dialog>
      </Section>

      <Section id="skills" title="Skills" icon={<LineChart className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-md transition-shadow h-full"><CardHeader><CardTitle className="text-lg flex items-center gap-2"><BarChart className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" /> Data & Analytics</CardTitle></CardHeader><CardContent className="text-sm text-slate-700 dark:text-slate-300"><ul className="list-disc pl-5 space-y-1"><li>Python (pandas, NumPy, scikit‑learn, matplotlib, seaborn)</li><li>SQL</li><li>EDA, cleaning, feature engineering</li><li>Classification, K‑Means clustering</li></ul></CardContent></Card>
          <Card className="hover:shadow-md transition-shadow h-full"><CardHeader><CardTitle className="text-lg flex items-center gap-2"><Database className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" /> BI & Visualisation</CardTitle></CardHeader><CardContent className="text-sm text-slate-700 dark:text-slate-300"><ul className="list-disc pl-5 space-y-1"><li>Power BI (incl. DAX)</li><li>Tableau (blending, parameters, calculated fields)</li><li>Qlik Sense</li><li>Advanced Excel (pivots, Power Query)</li></ul></CardContent></Card>
          <Card className="hover:shadow-md transition-shadow h-full"><CardHeader><CardTitle className="text-lg flex items-center gap-2"><ClipboardList className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" /> Data Modelling & Engineering</CardTitle></CardHeader><CardContent className="text-sm text-slate-700 dark:text-slate-300"><ul className="list-disc pl-5 space-y-1"><li>Data modelling (ERD, PK/FK, normalisation)</li><li>ETL & data pipelines</li><li>Data warehousing</li></ul></CardContent></Card>
          <Card className="hover:shadow-md transition-shadow h-full"><CardHeader><CardTitle className="text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" /> Business Analysis</CardTitle></CardHeader><CardContent className="text-sm text-slate-700 dark:text-slate-300"><ul className="list-disc pl-5 space-y-1"><li>Requirements gathering</li><li>Process mapping (Visio/Whimsical)</li><li>KPI design & reporting</li><li>SWOT, PESTLE, GAP analysis</li></ul></CardContent></Card>
        </div>
      </Section>

      <Section id="achievements" title="Achievements" icon={<Award className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <Card key={a.title} className="hover:shadow-md transition-shadow h-full">
              <CardHeader><CardTitle className="text-base flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400"/> {a.title}</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 dark:text-slate-300">{a.detail}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education" icon={<GraduationCap className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader><CardTitle className="text-lg">University of Liverpool — Master’s in Business Analytics & Big Data</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 dark:text-slate-300 space-y-4">
              <div className="text-slate-600 dark:text-slate-400">Sep 2023 – Sep 2024</div>
              <p>Academic projects across business data analytics and high‑quality research; achieved <strong>dissertation distinction</strong>.</p>
              <div><div className="font-medium mb-1">Modules</div><ul className="list-disc pl-5 space-y-1"><li>Data Mining & Machine Learning</li><li>Digital Business Technology & Management</li><li>Big Data Management</li><li>Big Data Analytics for Business</li><li>Digital Strategy</li><li>Sustainable Supply Chain Management</li><li>Project & Portfolio Management</li><li>Global Corporate Strategy</li><li>M.Sc. Project (Distinction)</li></ul></div>
              <div><div className="font-medium mb-2">Skills</div><div className="flex flex-wrap gap-2">{['Python','SQL','Power BI','Tableau','Qlik Sense','Machine Learning','ETL','Data Modelling','Dashboarding','Business Analysis','Data Analysis','Project Management','DAX','SWOT/PESTLE','Presentation','Teamwork'].map((s) => (<Badge key={s} variant="secondary" className="rounded-full">{s}</Badge>))}</div></div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader><CardTitle className="text-lg">Simplilearn Alumni — Master’s Programme, Business Analysis (IIBA‑endorsed)</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 dark:text-slate-300 space-y-4">
              <div className="text-slate-600 dark:text-slate-400">Jun 2022 – Sep 2022 • Grade: Distinction</div>
              <p>Industry‑aligned programme covering BA methodologies, stakeholder management, process mapping, data analysis and visualisation; completed with distinction.</p>
              <div><div className="font-medium mb-1">Core Learning</div><ul className="list-disc pl-5 space-y-1"><li>CBAP® Training — BA Planning, Elicitation, Requirements, Solution Evaluation</li><li>Mathematical Optimisation — Linear programming for decision‑making</li><li>Harvard Business Publishing case studies</li><li>Data Analysis & Visualisation with Python (IBM Skills Network)</li><li>Tableau for interactive dashboarding</li></ul></div>
              <div><div className="font-medium mb-2">Skills</div><div className="flex flex-wrap gap-2">{['Business Analysis','Requirements Gathering','Process Mapping','Stakeholder Management','CBAP (training)','Python (Pandas/NumPy/Matplotlib/Seaborn)','Tableau'].map((s) => (<Badge key={s} variant="secondary" className="rounded-full">{s}</Badge>))}</div></div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow md:col-span-2">
            <CardHeader><CardTitle className="text-lg">Sri Manakula Vinayagar Engineering College (Pondicherry University) — B.Tech, Electronics & Communications Engineering</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
              <div className="text-slate-600 dark:text-slate-400">2018 – 2022 • Grade: 2:1</div>
              <p>Activities & societies: National conference participation and an international‑journal publication.</p>
              <div><div className="font-medium mb-2">Skills</div><div className="flex flex-wrap gap-2">{['Problem Solving','Team Leadership','Creativity','Communication'].map((s) => (<Badge key={s} variant="secondary" className="rounded-full">{s}</Badge>))}</div></div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="references" title="Recommendations" icon={<Quote className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm opacity-70">Auto‑rotating every 5s</div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => setActiveRec((i) => (i - 1 + recommendations.length) % recommendations.length)} aria-label="Previous testimonial"><ChevronLeft className="h-4 w-4"/></Button>
              <Button variant="outline" size="icon" onClick={() => setActiveRec((i) => (i + 1) % recommendations.length)} aria-label="Next testimonial"><ChevronRight className="h-4 w-4"/></Button>
            </div>
          </div>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6 text-sm text-slate-700 dark:text-slate-300 min-h-[140px] flex flex-col justify-center">
              <p key={activeRec} className="italic">“{recommendations[activeRec].quote}”</p>
              <p className="mt-3 font-medium">— {recommendations[activeRec].name}</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="certs" title="Licences & Certifications" icon={<FileSpreadsheet className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {['All', ...Array.from(new Set(certsGallery.flatMap(c => c.tags)))].map((t) => (<Button key={t} variant={'All'===t ? 'default' : 'outline'} size="sm" onClick={() => setCertFilter(t as string)}>{t}</Button>))}
          <input value={certQuery} onChange={(e) => setCertQuery(e.target.value)} placeholder="Search by title or issuer" className="ml-auto w-full md:w-72 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {(certFilter === 'All' ? certsGallery : certsGallery.filter(c => c.tags.includes(certFilter))).filter(c => !certQuery.trim() || c.title.toLowerCase().includes(certQuery.toLowerCase()) || c.issuer.toLowerCase().includes(certQuery.toLowerCase())).map((c) => (
            <Card key={c.title} className="hover:shadow-md transition-shadow">
              <CardHeader><CardTitle className="text-lg">{c.title}</CardTitle><div className="text-sm text-slate-500 dark:text-slate-400">{c.issuer} • {c.date}</div></CardHeader>
              <CardContent className="text-sm">
                {c.type === 'image' && (<div className="rounded-md overflow-hidden border border-slate-200 dark:border-slate-700"><ProjectImage2 src={c.image as string} alt={c.title} className="w-full h-auto object-contain" /></div>)}
                {c.type === 'pdf' && (<Button onClick={() => setOpenCert(c)} className="mt-2">View certificate</Button>)}
                {c.type === 'url' && (<a href={c.asset} target="_blank" rel="noreferrer"><Button className="mt-2">Open certificate</Button></a>)}
              </CardContent>
            </Card>
          ))}
        </div>
        <Dialog open={!!openCert} onOpenChange={(v) => { if (!v) setOpenCert(null); }}>
          <DialogHeader><DialogTitle>{openCert?.title}</DialogTitle><DialogDescription>{openCert?.issuer} • {openCert?.date}</DialogDescription></DialogHeader>
          {openCert?.type === 'pdf' && (<div className="mt-3"><iframe src={openCert.asset} className="w-full h-[70vh] rounded-md border border-slate-200 dark:border-slate-700" title="Certificate" /></div>)}
          {openCert?.type === 'image' && (<div className="mt-3"><ProjectImage2 src={openCert.image as string} alt={openCert.title} className="w-full h-auto object-contain" /></div>)}
        </Dialog>
      </Section>

      <Section id="volunteering" title="Volunteering" icon={<FileText className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="grid md:grid-cols-2 gap-6">
          {volunteering.map((v) => (
            <Card key={v.org} className="hover:shadow-md transition-shadow h-full">
              <CardHeader><CardTitle className="text-lg">{v.org} — <span className="text-slate-600 dark:text-slate-300">{v.role}</span></CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-700 dark:text-slate-300">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{v.time}</div>
                <p>{v.text}</p>
                {v.logo && (<div className="mt-4 rounded-md overflow-hidden border border-slate-200 dark:border-slate-700 w-40"><ProjectImage2 src={v.logo} alt={`${v.org} logo`} className="w-full h-auto object-contain" /></div>)}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get In Touch" icon={<Mail className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" /> }>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">I'm always open to new opportunities, collaborations, and interesting conversations. Connect with me via the channels below.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400"/><a className="hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
              <div className="flex items-center gap-3"><Linkedin className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400"/><a className="hover:underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer">{PROFILE.linkedin.replace('https://','')}</a></div>
              <div className="flex items-center gap-3"><Github className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400"/><a className="hover:underline" href={PROFILE.github} target="_blank" rel="noreferrer">{PROFILE.github.replace('https://','')}</a></div>
            </div>
          </div>
          <div>
            <Card className="border-dashed">
              <CardHeader><CardTitle className="text-lg">Download my CV</CardTitle></CardHeader>
              <CardContent>
                <a href={encodeURI(PROFILE.cvUrl)} download><Button className="gap-2"><Download className="h-4 w-4"/> Download CV (PDF)</Button></a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">File: Jenifer CV.pdf</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <footer className="bg-slate-800 dark:bg-slate-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Jenifer Pushparaj. All rights reserved.</p>
        </div>
      </footer>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 bg-fuchsia-600 text-white p-3 rounded-full shadow-lg hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 transition-all duration-300 z-50 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600" aria-label="Scroll to top">
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
