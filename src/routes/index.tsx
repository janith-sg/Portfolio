import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  ArrowRight,
  Code2,
  Smartphone,
  Layout,
  Database,
  Wrench,
  Terminal,
  GraduationCap,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiKotlin,
  SiPhp,
  SiCplusplus,
  SiC,
  SiR,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiSqlite,
  SiAndroid,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiPostman,
  SiJsonwebtokens,
  SiFigma,
  SiCloudflare,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import janithImage from "@/assets/janith.jpg";
import cvFile from "@/assets/janith_cv.pdf";

import projCampus from "@/assets/proj-campus.jpg";
import projFood from "@/assets/proj-food.jpg";
import projStock from "@/assets/proj-stock.jpg";
import projPet from "@/assets/proj-pet.jpg";
import projWellnest from "@/assets/proj-wellnest.jpg";
import projEle from "@/assets/proj-elerescue.jpg";
import projAuto from "@/assets/proj-auto.jpg";
import projNotice from "@/assets/proj-notice.jpg";
import projPortfolio from "@/assets/proj-portfolio.jpg";
import { SiWhatsapp } from "react-icons/si";
import { MessageCircle } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Boxes, Cable, Plug, Cloud, Palette, Upload, Layers, FileCode2, Database as DbIcon, Smartphone as PhoneIcon, Brush } from "lucide-react";

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const techMeta: Record<string, { Icon: IconType; color?: string; dark?: boolean }> = {
  Python: { Icon: SiPython, color: "#3776AB" },
  Java: { Icon: FaJava, color: "#E76F00" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E", dark: true },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  "C++": { Icon: SiCplusplus, color: "#00599C" },
  C: { Icon: SiC, color: "#5C6BC0" },
  R: { Icon: SiR, color: "#276DC3" },
  SQL: { Icon: SiMysql, color: "#4479A1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Oracle: { Icon: DbIcon, color: "#F80000" },
  SQLite: { Icon: SiSqlite, color: "#003B57" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#0F172A" },
  "Spring Boot": { Icon: SiSpring, color: "#6DB33F" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { Icon: SiExpress, color: "#111827" },
  Tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  "HTML/CSS": { Icon: SiHtml5, color: "#E34F26" },
  Android: { Icon: SiAndroid, color: "#3DDC84" },
  "Android (Kotlin/Java)": { Icon: SiAndroid, color: "#3DDC84" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "Git/GitHub": { Icon: SiGithub, color: "#111827" },
  "CI/CD": { Icon: SiGithubactions, color: "#2088FF" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  JWT: { Icon: SiJsonwebtokens, color: "#111827" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Cloud: { Icon: SiCloudflare, color: "#F38020" },
  // generic lucide-backed entries
  MERN: { Icon: Layers, color: "#10B981" },
  Microservices: { Icon: Boxes, color: "#6366F1" },
  "REST APIs": { Icon: Cable, color: "#0EA5E9" },
  "API Integration": { Icon: Plug, color: "#0EA5E9" },
  "Cross-platform": { Icon: PhoneIcon, color: "#7C3AED" },
  "Responsive UI/UX": { Icon: Brush, color: "#EC4899" },
  "UI/UX": { Icon: Brush, color: "#EC4899" },
  OOP: { Icon: Boxes, color: "#0EA5E9" },
  MVC: { Icon: Layers, color: "#F59E0B" },
  MVVM: { Icon: Layers, color: "#F59E0B" },
  "Material 3": { Icon: Palette, color: "#3DDC84" },
  Multer: { Icon: Upload, color: "#F97316" },
  JSP: { Icon: FileCode2, color: "#E76F00" },
};

const languages = ["Python", "Java", "JavaScript", "TypeScript", "Kotlin", "PHP", "C++", "C", "R", "SQL"];

function TechChip({ name }: { name: string }) {
  const meta = techMeta[name];
  const Icon = meta?.Icon;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-full bg-muted border border-border group-hover:border-primary/40 transition-smooth">
      {Icon && (
        <Icon
          className="w-3.5 h-3.5 shrink-0"
          style={
            meta?.dark
              ? { color: "#111827", background: meta.color, borderRadius: 3, padding: 1 }
              : { color: meta?.color }
          }
        />
      )}
      <span className="text-foreground">{name}</span>
    </span>
  );
}



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Janith S Gunasekara — Full-Stack & Mobile Developer" },
      {
        name: "description",
        content:
          "Portfolio of Janith S Gunasekara — IT undergraduate building scalable web and mobile apps with MERN, Spring Boot, Next.js and Kotlin.",
      },
      { property: "og:title", content: "Janith S Gunasekara — Portfolio" },
      {
        property: "og:description",
        content:
          "Full-stack & mobile engineer crafting clean, user-focused digital experiences.",
      },
    ],
  }),
  component: Portfolio,
});

const skills = [
  {
    icon: Terminal,
    title: "Programming & Query",
    items: ["Python", "R", "Java", "JavaScript", "PHP", "SQL", "Kotlin", "C", "C++"],
  },
  {
    icon: Code2,
    title: "Web & Full-Stack",
    items: ["MERN", "Next.js", "Spring Boot", "REST APIs", "Microservices"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    items: ["Android (Kotlin/Java)", "Cross-platform", "API Integration", "SQLite"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML/CSS", "Tailwind", "Responsive UI/UX"],
  },
  {
    icon: Database,
    title: "Backend & Databases",
    items: ["Node.js", "Express", "Spring Boot", "PHP", "MySQL", "MongoDB", "Oracle", "SQLite"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    items: ["Docker", "CI/CD", "Git/GitHub", "Postman", "OOP", "MVC", "Cloud"],
  },
];

const projects: Array<{ title: string; image: string; description: string; tags: string[]; links: { github?: string; demo?: string; live?: string } }> = [
  {
    title: "Smart Campus Operations Hub – Resource Catalogue & Asset Management",
    image: projCampus,
    description:
      "Campus operations webapp for managing campus resources, equipment, and facilities. I owned the resource catalogue and asset management functionality — search/filter/detail views, CRUD workflows, asset categorization & lifecycle tracking, validation, role-based admin tools, and integration across operational modules.",
    tags: ["React", "Spring Boot", "Java", "MongoDB", "REST API", "JWT", "Tailwind"],
    links: {
      github: "https://github.com/janith-sg/Smart-Campus-Operations-Hub-.git",
      demo: "https://www.linkedin.com/posts/janith-s-gunasekara-7900522b6_springboot-java-react-ugcPost-7468355206787862529-HHKr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvTRtwB2cI-SZ9pzCdw2rIpSHBcg_BjpKE",
    },
  },
  {
    title: "Campus Food Ordering – Menu & Feedback Management",
    image: projFood,
    description:
      "Campus food ordering webapp for managing food items, menu categories, and customer feedback. I owned the food menu management functionality — catalogue with search/filter/category browsing, CRUD with availability control, ratings & reviews, admin monitoring tools, and RESTful menu services backed by MongoDB.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "JWT", "Multer"],
    links: {
      github: "https://github.com/janith-sg/Food-Delivery-System-For-University-Boarding-Students.git",
      demo: "https://www.linkedin.com/posts/janith-s-gunasekara-7900522b6_mern-mongodb-expressjs-activity-7469002523186708480-VK5O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvTRtwB2cI-SZ9pzCdw2rIpSHBcg_BjpKE",
    },
  },
  {
    title: "TECH STOCK – User & Inventory Management",
    image: projStock,
    description:
      "Online tech inventory system for digital products and electronics. I owned user management and inventory management — JWT auth and profiles, product catalogue with search/filter, CRUD workflows, real-time stock tracking, product categorization, and admin tools for both users and inventory.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "JWT", "Multer"],
    links: {
      github: "https://github.com/janith-sg/Tech-stock-Inventory-system.git",
      demo: "https://www.linkedin.com/posts/janith-s-gunasekara-7900522b6_mern-mongodb-expressjs-ugcPost-7472351110020808705-UzEK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvTRtwB2cI-SZ9pzCdw2rIpSHBcg_BjpKE",
    },
  },
  {
    title: "Pet Care Plus – User, Pet, Inventory & Appointment Management",
    image: projPet,
    description:
      "Animal clinic management platform for pet records, appointments, and pet-related products. I owned user management, pet registration, inventory management, and appointments — JWT auth, detailed pet records, product catalogue with stock tracking, cart & orders, online booking with status tracking, and full admin tooling.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "JWT", "Multer"],
    links: {
      github: "https://github.com/janith-sg/Pet-care-plus-animal-clinic-management-system.git",
      demo: "https://www.linkedin.com/posts/janith-s-gunasekara-7900522b6_mern-mongodb-expressjs-ugcPost-7469758695569039360-KM3D/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvTRtwB2cI-SZ9pzCdw2rIpSHBcg_BjpKE",
    },
  },
  {
    title: "Wellnest – Personal Wellness Companion",
    image: projWellnest,
    description:
      "Android application for building healthier lifestyles through habit tracking, hydration monitoring, and mood management. Includes daily habit tracking, hydration reminders, mood logging, a personalized dashboard, smart notifications, Material Design 3 UI, and an MVVM architecture.",
    tags: ["Kotlin", "Android Studio", "XML", "Material Design 3", "MVVM"],
    links: {
      github: "https://github.com/janith-sg/WellNest-Mobile-Application-MAD.git",
      demo: "https://www.linkedin.com/posts/janith-s-gunasekara-7900522b6_androiddevelopment-kotlin-mobileappdevelopment-share-7468318619534409730-DvB0/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvTRtwB2cI-SZ9pzCdw2rIpSHBcg_BjpKE",
    },
  },
  {
    title: "Ele Rescue – Wildlife Conservation Mobile App Design",
    image: projEle,
    description:
      "Mobile app concept supporting elephant conservation through real-time tracking, rescue reporting, and safety monitoring. Designed onboarding/auth flows, live tracking screens, emergency reporting, interactive maps, alerts, user profiles, and educational content — focused on reducing human-elephant conflict.",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "User Flow Design", "Mobile Design"],
    links: { demo: "https://lnkd.in/gi5d3gpi" },
  },
  {
    title: "Auto Care – Customer Service Request Management",
    image: projAuto,
    description:
      "Vehicle service and fuel station management platform. I owned the customer service request management — request submission and tracking, full CRUD operations, admin-friendly UIs, MySQL-backed data layer, Java/JSP frontend-backend integration, and Apache Tomcat deployment.",
    tags: ["Java", "JSP", "CSS", "MySQL", "Apache Tomcat", "Eclipse IDE"],
    links: { github: "https://github.com/janith-sg/Vehicle-service-and-fuel-station-management.git" },
  },
  {
    title: "Institute of Information & Web Technologies – Notice Management",
    image: projNotice,
    description:
      "University student help desk platform improving communication between students and the institution. I owned the notice management functionality — CRUD workflows, dynamic publishing/display, MySQL-driven storage, responsive admin and student interfaces, and PHP-based notice processing.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    links: { github: "https://github.com/janith-sg/Online-help-desk-for-university-students.git" },
  },
  {
    title: "Personal Portfolio Website",
    image: projPortfolio,
    description:
      "Modern portfolio website developed to present my projects, technical expertise, and professional achievements. Features responsive design, project filtering, technology tags, contact integration, CV downloads, and seamless deployment for internship and career outreach.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "GitHub Pages", "Git/GitHub"],
    links: { github: "https://github.com/janith-sg/Portfolio.git", live: "soon" },
  },
];

function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-gradient">janith</span>.
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-smooth">About</a>
            <a href="#skills" className="hover:text-foreground transition-smooth">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-smooth">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative inline-flex items-center h-8 w-14 rounded-full bg-muted border border-border transition-smooth hover:border-primary"
            >
              <span
                className={`absolute top-0.5 left-0.5 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-primary text-primary-foreground shadow-soft transition-smooth ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
              >
                {theme === "dark" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              </span>
            </button>
            <a
              href={cvFile}
              download="Janith_Gunasekara_CV.pdf"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground shadow-soft hover:opacity-90 transition-smooth"
            >
              <Download className="w-4 h-4" /> CV
            </a>
          </div>

        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground shadow-soft">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for internship
              </div>

              <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                Janith S<br />
                <span className="text-gradient">Gunasekara</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Full-stack developer crafting modern web & mobile experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:translate-y-[-2px] transition-smooth"
                >
                  Explore work <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border font-medium hover:border-primary transition-smooth"
                >
                  Contact me
                </a>
              </div>

              <div className="mt-10 flex items-center gap-5 text-muted-foreground">
                <a href="https://github.com/janith-sg" className="hover:text-primary transition-smooth"><Github className="w-5 h-5" /></a>
                <a href="#" className="hover:text-primary transition-smooth"><Linkedin className="w-5 h-5" /></a>
                <a href="mailto:janithsgunasekara003@gmail.com" className="hover:text-primary transition-smooth"><Mail className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Profile image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-25 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-glow aspect-[4/5] max-w-sm mx-auto">
                <img
                  src={janithImage}
                  alt="Janith S Gunasekara portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Building software that's <span className="text-gradient">clear, useful, and fast.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              IT undergraduate with hands-on experience across full-stack web and
              Android development. Comfortable across the modern stack —
              Spring Boot, MERN, Next.js, Java, Kotlin, PHP — with a strong
              foundation in building scalable APIs, clean databases, and
              user-focused interfaces.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I care about shipping quality work, understanding the problem
              deeply before writing a line of code, and continuously learning
              the technologies shaping tomorrow's products.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-card card-3d">
            <div className="flex items-center gap-3 text-primary mb-5">
              <GraduationCap className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">Education</span>
            </div>
            <h3 className="text-xl font-semibold">BSc (Hons) in Information Technology</h3>
            <p className="text-muted-foreground mt-2">
              Sri Lanka Institute of Information Technology (SLIIT)
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              Nov 2023 — Present
            </p>
            <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gradient">8+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">15+</div>
                <div className="text-xs text-muted-foreground mt-1">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">2+</div>
                <div className="text-xs text-muted-foreground mt-1">Years coding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Toolkit</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Technical arsenal
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A curated set of languages, frameworks and tools I use to take
              ideas from sketch to shipped product.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="group rounded-2xl bg-card border border-border p-6 shadow-card card-3d"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground mb-4 shadow-soft">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(title === "Programming & Query" ? languages : items).map((s) => (
                    <TechChip key={s} name={s} />
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Work</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-gradient">engineering</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A selection of projects spanning full-stack web, Android, and
              product design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden shadow-card card-3d flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <TechChip key={t} name={t} />
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-border flex items-center gap-4 text-sm flex-wrap">
                    {p.links.github && (
                      <a href={p.links.github} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-smooth">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {p.links.demo && (
                      <a href={p.links.demo} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-smooth">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    )}
                    {p.links.live && (
                      p.links.live === "soon" ? (
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground/70 cursor-not-allowed">
                          <ExternalLink className="w-4 h-4" /> Live site (coming soon)
                        </span>
                      ) : (
                        <a href={p.links.live} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-smooth">
                          <ExternalLink className="w-4 h-4" /> Live site
                        </a>
                      )
                    )}
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="py-24 md:py-32 bg-muted/40 border-t border-border">
  <div className="max-w-4xl mx-auto px-6">
    <div className="rounded-3xl bg-card border border-border p-10 md:p-14 shadow-glow text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
        Contact
      </p>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Let's <span className="text-gradient">build something</span> great.
      </h2>

      <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
        Open for internships and collaborations. Drop a line — I usually
        reply within a day.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
        
        {/* Email */}
        <a
          href="mailto:janithsgunasekara003@gmail.com"
          className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary transition-smooth"
        >
          <Mail className="w-5 h-5 text-primary" />
          <div>
            <div className="text-xs text-muted-foreground">Email</div>
            <div className="text-sm font-medium">
              janithsgunasekara003@gmail.com
            </div>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+94703254385"
          className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary transition-smooth"
        >
          <Phone className="w-5 h-5 text-primary" />
          <div>
            <div className="text-xs text-muted-foreground">Phone</div>
            <div className="text-sm font-medium">
              +94 70 325 4385
            </div>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/janith-sg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary transition-smooth"
        >
          <Github className="w-5 h-5 text-primary" />
          <div>
            <div className="text-xs text-muted-foreground">GitHub</div>
            <div className="text-sm font-medium">
              github.com/janith-sg
            </div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/janith-s-gunasekara"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary transition-smooth"
        >
          <Linkedin className="w-5 h-5 text-primary" />
          <div>
            <div className="text-xs text-muted-foreground">LinkedIn</div>
            <div className="text-sm font-medium">
              linkedin.com/in/janith-s-gunasekara
            </div>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/94703254385?text=Hi%20Janith%2C%20I%20saw%20your%20portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary transition-smooth"
        >
          <SiWhatsapp className="w-5 h-5 text-primary" />
          <div>
            <div className="text-xs text-muted-foreground">WhatsApp</div>
            <div className="text-sm font-medium">
              Chat on WhatsApp
            </div>
          </div>
        </a>

        {/* CV Download */}
        <a
          href={cvFile}
          download="Janith_Gunasekara_CV.pdf"
          className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary transition-smooth"
        >
          <Download className="w-5 h-5 text-primary" />
          <div>
            <div className="text-xs text-muted-foreground">CV</div>
            <div className="text-sm font-medium">
              Download CV
            </div>
          </div>
        </a>

      </div>
    </div>
  </div>
</section>


      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/94703254385?text=Hi%20Janith%2C%20I%20saw%20your%20portfolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-glow hover:scale-105 transition-smooth"
      >
        <SiWhatsapp className="w-7 h-7" />
      </a>

      <footer className="py-10 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© 2026 Janith S Gunasekara — Crafted with care.</p>
          <p className="font-mono text-xs">Built with React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
