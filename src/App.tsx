import React, { useState, useEffect } from "react";
import heroImage from "./imports/image.png";
import {
  Zap,
  Layers,
  Globe,
  Lightbulb,
  Bot,
  BarChart3,
  Table2,
  Plug,
  AlertTriangle,
  Search,
  RefreshCw,
  Eye,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
  GitMerge,
  Shield,
  TrendingUp,
  Settings2,
  Activity,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Lang = "en" | "pt";
type Theme = "dark" | "light";

// ─── Translations ─────────────────────────────────────────────────────────────

const t = {
  en: {
    nav: {
      services: "Services",
      solutions: "Solutions",
      about: "About",
      contact: "Contact",
      cta: "Schedule a Diagnosis",
    },
    hero: {
      badge: "Technology Consulting",
      headline1: "When operations work,",
      headline2: "business grows.",
      sub: "Technology, automation and AI solutions designed to modernize operations, reduce rework and improve efficiency.",
      cta1: "Talk to a specialist",
      cta2: "See solutions",
    },
    stats: [
      { value: "3×", label: "faster operations" },
      { value: "60%", label: "less rework" },
      { value: "100+", label: "processes automated" },
      { value: "48h", label: "avg. time to first result" },
    ],
    services: {
      label: "Services",
      title: "Everything you need to scale your operations.",
      sub: "Integrated solutions that connect people, processes and data—without the overhead.",
      items: [
        { icon: Zap, title: "Process Automation", desc: "Eliminate repetitive tasks and reduce errors with intelligent automation across your workflows." },
        { icon: Layers, title: "Internal Systems", desc: "Custom platforms built to fit how your team actually works—not the other way around." },
        { icon: Globe, title: "Digital Platforms", desc: "Web systems, dashboards and integrations that connect your data and teams in real time." },
        { icon: Lightbulb, title: "Technology Consulting", desc: "Strategic guidance to map, prioritize and modernize your technology stack with precision." },
        { icon: Bot, title: "AI Solutions", desc: "Applied AI that automates decisions, extracts insights, and accelerates results where it counts." },
        { icon: BarChart3, title: "Dashboards & Integrations", desc: "Real-time visibility across all your tools—connected, consolidated and always current." },
      ],
    },
    problems: {
      label: "The Challenge",
      title: "Sound familiar?",
      sub: "Most companies grow faster than their processes. That gap has a cost.",
      items: [
        { icon: Table2, text: "Critical work done in spreadsheets" },
        { icon: Plug, text: "Disconnected tools that don't talk to each other" },
        { icon: AlertTriangle, text: "Bottlenecks nobody can trace to a root cause" },
        { icon: Search, text: "No visibility into what's actually happening" },
        { icon: RefreshCw, text: "Manual processes eating hours every day" },
        { icon: Eye, text: "Decisions made on gut feeling, not data" },
      ],
      bridge: "Maxor maps each friction point and builds the right solution—fast.",
      outcomes: [
        "End-to-end process visibility",
        "Integrated, automated workflows",
        "Data-driven decisions",
        "Measurable results from week one",
      ],
    },
    how: {
      label: "Our Process",
      title: "From diagnosis to results in weeks, not months.",
      steps: [
        { num: "01", title: "Discovery", desc: "We map your operation end-to-end: tools, flows, friction and gaps." },
        { num: "02", title: "Process Mapping", desc: "Every step documented visually so nothing gets lost in translation." },
        { num: "03", title: "Solution Strategy", desc: "We propose the most effective path—technology chosen to fit the problem." },
        { num: "04", title: "Implementation", desc: "We build, test and deploy. Then stay close to ensure it works." },
      ],
    },
    about: {
      label: "About",
      title: "We think like engineers. Work like a product team.",
      sub: "Maxor was built for companies that are done with patch fixes. We embed ourselves in your operation, understand the real constraints, and deliver technology that fits—not technology for its own sake.",
      points: [
        "Product-driven, not project-driven",
        "Operational expertise across industries",
        "Fast delivery, no unnecessary overhead",
        "Strategic and technical in equal measure",
      ],
      values: [
        { icon: Shield, label: "Trustworthy" },
        { icon: Zap, label: "Efficient" },
        { icon: TrendingUp, label: "Strategic" },
        { icon: Settings2, label: "Precise" },
      ],
    },
    cta: {
      title: "Ready to build an operation that scales?",
      sub: "The first conversation is free. Let's find your biggest bottleneck and build a plan.",
      cta1: "Schedule a Diagnosis",
      cta2: "Explore services",
    },
    footer: {
      tagline: "Technology that flows. Results that scale.",
      links: ["Services", "Solutions", "About", "Contact"],
      legal: "© 2025 Maxor. All rights reserved.",
    },
  },
  pt: {
    nav: {
      services: "Serviços",
      solutions: "Soluções",
      about: "Sobre",
      contact: "Contato",
      cta: "Agendar Diagnóstico",
    },
    hero: {
      badge: "Consultoria em Tecnologia",
      headline1: "Quando as operações funcionam,",
      headline2: "o negócio cresce.",
      sub: "Tecnologia, automação e IA projetadas para modernizar operações, reduzir retrabalho e aumentar a eficiência.",
      cta1: "Falar com um especialista",
      cta2: "Ver soluções",
    },
    stats: [
      { value: "3×", label: "operações mais rápidas" },
      { value: "60%", label: "menos retrabalho" },
      { value: "100+", label: "processos automatizados" },
      { value: "48h", label: "tempo médio p/ 1º resultado" },
    ],
    services: {
      label: "Serviços",
      title: "Tudo que você precisa para escalar as operações.",
      sub: "Soluções integradas que conectam pessoas, processos e dados—sem burocracia.",
      items: [
        { icon: Zap, title: "Automação de Processos", desc: "Elimine tarefas repetitivas e reduza erros com automação inteligente em todos os seus fluxos." },
        { icon: Layers, title: "Sistemas Internos", desc: "Plataformas personalizadas construídas para se adaptar ao jeito que seu time realmente trabalha." },
        { icon: Globe, title: "Plataformas Digitais", desc: "Sistemas web, dashboards e integrações que conectam seus dados e equipes em tempo real." },
        { icon: Lightbulb, title: "Consultoria em Tecnologia", desc: "Orientação estratégica para mapear, priorizar e modernizar seu stack com precisão." },
        { icon: Bot, title: "Soluções de IA", desc: "IA aplicada que automatiza decisões, extrai insights e acelera resultados onde importa." },
        { icon: BarChart3, title: "Dashboards & Integrações", desc: "Visibilidade em tempo real de todas as suas ferramentas—conectadas e sempre atualizadas." },
      ],
    },
    problems: {
      label: "O Desafio",
      title: "Soa familiar?",
      sub: "A maioria das empresas cresce mais rápido do que seus processos. Essa lacuna tem um custo.",
      items: [
        { icon: Table2, text: "Trabalho crítico feito em planilhas" },
        { icon: Plug, text: "Ferramentas desconectadas que não se comunicam" },
        { icon: AlertTriangle, text: "Gargalos que ninguém consegue rastrear até a causa raiz" },
        { icon: Search, text: "Sem visibilidade do que está realmente acontecendo" },
        { icon: RefreshCw, text: "Processos manuais consumindo horas todos os dias" },
        { icon: Eye, text: "Decisões tomadas por intuição, não por dados" },
      ],
      bridge: "A Maxor mapeia cada ponto de atrito e constrói a solução certa—rápido.",
      outcomes: [
        "Visibilidade total do processo",
        "Fluxos integrados e automatizados",
        "Decisões baseadas em dados",
        "Resultados mensuráveis desde a semana 1",
      ],
    },
    how: {
      label: "Nossa Metodologia",
      title: "Do diagnóstico aos resultados em semanas, não meses.",
      steps: [
        { num: "01", title: "Descoberta", desc: "Mapeamos sua operação de ponta a ponta: ferramentas, fluxos, atritos e lacunas." },
        { num: "02", title: "Mapeamento", desc: "Cada etapa documentada visualmente para que nada se perca na tradução." },
        { num: "03", title: "Estratégia", desc: "Propomos o caminho mais eficaz—tecnologia escolhida para resolver o problema." },
        { num: "04", title: "Implementação", desc: "Construímos, testamos e implantamos. E ficamos por perto para garantir." },
      ],
    },
    about: {
      label: "Sobre",
      title: "Pensamos como engenheiros. Trabalhamos como um time de produto.",
      sub: "A Maxor foi criada para empresas que cansaram de soluções paliativas. Nos integramos à sua operação, entendemos as restrições reais e entregamos tecnologia que se encaixa.",
      points: [
        "Orientados a produto, não a projeto",
        "Expertise operacional em múltiplos setores",
        "Entrega rápida, sem burocracia",
        "Estratégicos e técnicos em igual medida",
      ],
      values: [
        { icon: Shield, label: "Confiável" },
        { icon: Zap, label: "Eficiente" },
        { icon: TrendingUp, label: "Estratégico" },
        { icon: Settings2, label: "Preciso" },
      ],
    },
    cta: {
      title: "Pronto para uma operação que escala?",
      sub: "A primeira conversa é gratuita. Vamos encontrar seu maior gargalo e construir um plano.",
      cta1: "Agendar Diagnóstico",
      cta2: "Explorar serviços",
    },
    footer: {
      tagline: "Tecnologia que flui. Resultados que escalam.",
      links: ["Serviços", "Soluções", "Sobre", "Contato"],
      legal: "© 2025 Maxor. Todos os direitos reservados.",
    },
  },
};

// ─── Theme tokens ─────────────────────────────────────────────────────────────

const themes = {
  dark: {
    bg: "#050505",
    bgAlt: "#0B0B0B",
    surface: "rgba(255,255,255,0.03)",
    surfaceHover: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.08)",
    borderStrong: "rgba(255,255,255,0.12)",
    text: "#FAFAF9",
    textSub: "#71717A",
    textMuted: "#52525B",
    accent: "#FACC15",
    accentSoft: "rgba(250,204,21,0.08)",
    accentBorder: "rgba(250,204,21,0.2)",
    accentText: "#FACC15",
    navBg: "rgba(5,5,5,0.85)",
    cardBg: "#0B0B0B",
    statsBg: "rgba(255,255,255,0.02)",
  },
  light: {
    bg: "#FAFAF9",
    bgAlt: "#F4F4F5",
    surface: "#FFFFFF",
    surfaceHover: "#F9F9F9",
    border: "rgba(0,0,0,0.08)",
    borderStrong: "rgba(0,0,0,0.12)",
    text: "#0B0B0B",
    textSub: "#71717A",
    textMuted: "#A1A1AA",
    accent: "#FACC15",
    accentSoft: "rgba(250,204,21,0.1)",
    accentBorder: "rgba(250,204,21,0.3)",
    accentText: "#EAB308",
    navBg: "rgba(250,250,249,0.9)",
    cardBg: "#FFFFFF",
    statsBg: "#FFFFFF",
  },
};

const WHATSAPP_PHONE = "5511985059102";

const whatsappMessages: Record<Lang, string> = {
  en: "Hello! I would like to schedule a diagnosis with Maxor.",
  pt: "Ola! Gostaria de agendar um diagnostico com a Maxor.",
};

function getWhatsAppUrl(lang: Lang) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMessages[lang])}`;
}

function WhatsAppIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      style={style}
    >
      <path d="M16.01 3.2C9 3.2 3.3 8.9 3.3 15.9c0 2.3.6 4.5 1.8 6.5L3.2 29l6.8-1.8c1.9 1 4 1.5 6.1 1.5 7 0 12.7-5.7 12.7-12.7S23 3.2 16.01 3.2Zm0 23.3c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4 .1 1.1-3.9-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.6 0-5.8 4.8-10.6 10.6-10.6s10.6 4.8 10.6 10.6-4.8 10.6-10.6 10.6Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1c-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.2.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z" />
    </svg>
  );
}

// ─── Dashboard Visual ─────────────────────────────────────────────────────────

function DashboardVisual({ theme }: { theme: Theme }) {
  const tk = themes[theme];
  const isDark = theme === "dark";

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          background: tk.cardBg,
          border: `1px solid ${tk.border}`,
          boxShadow: isDark
            ? "0 20px 50px rgba(0,0,0,0.5)"
            : "0 20px 50px rgba(0,0,0,0.06)",
        }}
      >
        {/* Titlebar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: `1px solid ${tk.border}` }}
        >
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: tk.textMuted }} />
            <div className="w-2 h-2 rounded-full" style={{ background: tk.textMuted }} />
            <div className="w-2 h-2 rounded-full" style={{ background: tk.textMuted }} />
          </div>
          <div className="flex-1" />
          <div
            className="text-[10px] px-2 py-0.5 rounded font-semibold"
            style={{
              background: tk.accentSoft,
              color: tk.accent,
              letterSpacing: "0.03em",
            }}
          >
            MAXOR OPS
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Active", value: "247", sub: "processes" },
              { label: "Uptime", value: "98.4%", sub: "systems" },
              { label: "Saved", value: "1.2k", sub: "hours" },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-lg p-3"
                style={{
                  background: tk.surface,
                  border: `1px solid ${tk.border}`,
                }}
              >
                <div className="text-[9px] mb-1 uppercase tracking-wide" style={{ color: tk.textMuted }}>{k.label}</div>
                <div className="text-lg font-bold" style={{ color: tk.text }}>{k.value}</div>
                <div className="text-[9px] mt-0.5" style={{ color: tk.textSub }}>{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Sparkline */}
          <div
            className="rounded-lg p-4"
            style={{
              background: tk.statsBg,
              border: `1px solid ${tk.border}`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: tk.textSub }}>Flow</span>
              <span
                className="text-[9px] px-2 py-0.5 rounded-full font-semibold"
                style={{
                  background: tk.accentSoft,
                  color: tk.accent,
                }}
              >
                LIVE
              </span>
            </div>
            <svg viewBox="0 0 280 52" className="w-full" style={{ height: 52 }}>
              <defs>
                <linearGradient id={`sg-${theme}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FACC15" stopOpacity={isDark ? "0.2" : "0.15"} />
                  <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,38 C40,34 60,18 90,20 C120,22 135,34 160,26 C185,18 205,8 230,12 C250,15 265,18 280,13"
                fill="none"
                stroke="#FACC15"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0,38 C40,34 60,18 90,20 C120,22 135,34 160,26 C185,18 205,8 230,12 C250,15 265,18 280,13 L280,52 L0,52 Z"
                fill={`url(#sg-${theme})`}
              />
            </svg>
          </div>

          {/* Process rows */}
          <div className="space-y-3">
            {[
              { name: "Invoice Processing", pct: 94 },
              { name: "Data Sync", pct: 78 },
              { name: "Reports", pct: 61 },
            ].map((row) => (
              <div key={row.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[10px]" style={{ color: tk.textSub }}>{row.name}</span>
                  <span className="text-[10px] font-semibold tabular-nums" style={{ color: tk.text }}>{row.pct}%</span>
                </div>
                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{ background: tk.border }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${row.pct}%`, background: tk.accent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <div
        className="absolute -top-2.5 right-4 text-[10px] px-2.5 py-1 rounded-full font-semibold hidden sm:flex items-center gap-1.5 uppercase tracking-wide"
        style={{
          background: tk.cardBg,
          border: `1px solid ${tk.border}`,
          color: tk.textSub,
        }}
      >
        <Activity className="w-2.5 h-2.5" style={{ color: tk.accent }} />
        98.4%
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const [theme, setTheme] = useState<Theme>("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const tx = t[lang];
  const tk = themes[theme];
  const isDark = theme === "dark";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Shared style helpers
  const sectionBorder = `1px solid ${tk.border}`;
  const labelStyle: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: tk.accent,
  };
  const headingStyle: React.CSSProperties = {
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
    color: tk.text,
  };

  return (
    <div
      style={{
        fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
        background: tk.bg,
        color: tk.text,
        minHeight: "100vh",
        transition: "background 0.25s, color 0.25s",
      }}
    >
      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 60,
          display: "flex",
          alignItems: "center",
          background: scrolled ? tk.navBg : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: scrolled ? sectionBorder : "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => go("hero")}
            style={{
              fontWeight: 800,
              fontSize: "clamp(28px, 3vw, 38px)",
              letterSpacing: "-0.02em",
              color: tk.text,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            maxor
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="hidden md:flex">
            {[
              { label: tx.nav.services, id: "services" },
              { label: tx.nav.solutions, id: "problems" },
              { label: tx.nav.about, id: "about" },
              { label: tx.nav.contact, id: "cta-section" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                style={{
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: tk.textSub,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = tk.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = tk.textSub)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Lang */}
            <button
              onClick={() => setLang(lang === "en" ? "pt" : "en")}
              className="hidden md:flex"
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: 8,
                border: `1px solid ${tk.border}`,
                background: tk.surface,
                color: tk.textSub,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = tk.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = tk.textSub)}
            >
              {lang === "en" ? "PT" : "EN"}
            </button>

            {/* Theme */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                border: `1px solid ${tk.border}`,
                background: tk.surface,
                color: tk.textSub,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = tk.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = tk.textSub)}
            >
              {isDark ? <Sun style={{ width: 15, height: 15 }} /> : <Moon style={{ width: 15, height: 15 }} />}
            </button>

            {/* CTA */}
            <button
              onClick={() => go("cta-section")}
              className="hidden md:flex"
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: "9px 20px",
                borderRadius: 7,
                background: tk.accent,
                color: "#050505",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              {tx.nav.cta}
              <ArrowRight style={{ width: 13, height: 13 }} />
            </button>

            {/* Mobile toggle */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                width: 34,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                border: `1px solid ${tk.border}`,
                background: "transparent",
                color: tk.textSub,
                cursor: "pointer",
              }}
            >
              {mobileOpen ? <X style={{ width: 16, height: 16 }} /> : <Menu style={{ width: 16, height: 16 }} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              position: "absolute",
              top: 60,
              left: 0,
              right: 0,
              background: isDark ? "#0B1120" : "#FFFFFF",
              borderBottom: sectionBorder,
              padding: "16px 24px 24px",
            }}
          >
            {[
              { label: tx.nav.services, id: "services" },
              { label: tx.nav.solutions, id: "problems" },
              { label: tx.nav.about, id: "about" },
              { label: tx.nav.contact, id: "cta-section" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "12px 0",
                  fontSize: 15,
                  fontWeight: 500,
                  color: tk.textSub,
                  background: "none",
                  border: "none",
                  borderBottom: `1px solid ${tk.border}`,
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button
                onClick={() => setLang(lang === "en" ? "pt" : "en")}
                style={{
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: `1px solid ${tk.border}`,
                  background: "transparent",
                  color: tk.textSub,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {lang === "en" ? "PT" : "EN"}
              </button>
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                style={{
                  width: 42,
                  borderRadius: 8,
                  border: `1px solid ${tk.border}`,
                  background: "transparent",
                  color: tk.textSub,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {isDark ? <Sun style={{ width: 15, height: 15 }} /> : <Moon style={{ width: 15, height: 15 }} />}
              </button>
              <button
                onClick={() => go("cta-section")}
                style={{
                  flex: 1,
                  padding: "10px 0",
                  borderRadius: 7,
                  background: tk.accent,
                  color: "#050505",
                  fontSize: 13,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {tx.nav.cta}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 60,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background elements */}
        {isDark && (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(250,204,21,0.04) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "-5%",
                transform: "translateY(-50%)",
                fontSize: "clamp(300px, 30vw, 500px)",
                fontWeight: 800,
                color: "rgba(250,204,21,0.015)",
                lineHeight: 1,
                fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              m
            </div>
          </>
        )}

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            padding: "80px 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="lg:grid-cols-[1fr_auto] bg-[#00000000]"
          >
            {/* Copy */}
            <div style={{ maxWidth: 620 }}>
              {/* Label */}
              <div style={{ marginBottom: 32 }}>
                <span
                  style={{
                    ...labelStyle,
                    background: tk.accentSoft,
                    border: `1px solid ${tk.border}`,
                    borderRadius: 6,
                    padding: "6px 14px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: tk.accent,
                      display: "inline-block",
                    }}
                  />
                  {tx.hero.badge}
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  ...headingStyle,
                  fontSize: "clamp(36px, 5vw, 62px)",
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >{tx.hero.headline1}<br /><span style={{ color: tk.accent }}>{tx.hero.headline2}</span></h1>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: tk.textSub,
                  marginBottom: 40,
                  maxWidth: 500,
                }}
              >
                {tx.hero.sub}
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button
                  onClick={() => go("cta-section")}
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "14px 28px",
                    borderRadius: 8,
                    background: tk.accent,
                    color: "#050505",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                >
                  {tx.hero.cta1}
                  <ArrowRight style={{ width: 15, height: 15 }} />
                </button>
                <button
                  onClick={() => go("services")}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "14px 28px",
                    borderRadius: 8,
                    background: "transparent",
                    color: tk.textSub,
                    border: `1px solid ${tk.border}`,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = tk.text;
                    (e.currentTarget as HTMLElement).style.borderColor = tk.borderStrong;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = tk.textSub;
                    (e.currentTarget as HTMLElement).style.borderColor = tk.border;
                  }}
                >
                  {tx.hero.cta2}
                  <ChevronRight style={{ width: 15, height: 15 }} />
                </button>
              </div>
            </div>

            {/* Visual — hidden on small screens */}
            <div className="hidden lg:block" style={{ width: 500, position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: `1px solid ${tk.border}`,
                  background: isDark ? tk.cardBg : "#FFFFFF",
                  padding: "60px 40px",
                }}
              >
                <img
                  src={heroImage}
                  alt="Maxor Flow"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    opacity: isDark ? 1 : 0.95,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              marginTop: 100,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              borderTop: sectionBorder,
              borderLeft: sectionBorder,
            }}
            className="md:grid-cols-4"
          >
            {tx.stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "36px 32px",
                  borderRight: sectionBorder,
                  borderBottom: sectionBorder,
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: tk.text,
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: tk.textSub, letterSpacing: "0.01em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────────── */}
      <section
        id="services"
        style={{ padding: "140px 0", borderTop: sectionBorder }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 80,
            }}
            className="lg:flex-row lg:items-end lg:justify-between"
          >
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <p style={{ ...labelStyle, margin: 0 }}>{tx.services.label}</p>
                <div style={{ flex: 1, height: 1, background: tk.border, maxWidth: 60 }} />
              </div>
              <h2
                style={{
                  ...headingStyle,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 700,
                  maxWidth: 480,
                }}
              >
                {tx.services.title}
              </h2>
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: tk.textSub,
                maxWidth: 340,
              }}
              className="lg:text-right"
            >
              {tx.services.sub}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              border: sectionBorder,
            }}
            className="sm:grid-cols-2 lg:grid-cols-3"
          >
            {tx.services.items.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  style={{
                    padding: "44px 36px",
                    borderRight: sectionBorder,
                    borderBottom: sectionBorder,
                    transition: "background 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = tk.surface;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      background: tk.surface,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                    }}
                  >
                    <Icon style={{ width: 16, height: 16, color: tk.accent }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      marginBottom: 12,
                      color: tk.text,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: tk.textSub }}>
                    {svc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Problems ────────────────────────────────────────────────────────── */}
      <section
        id="problems"
        style={{ padding: "140px 0", borderTop: sectionBorder }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <p style={{ ...labelStyle, margin: 0 }}>{tx.problems.label}</p>
            <div style={{ flex: 1, height: 1, background: tk.border, maxWidth: 60 }} />
          </div>

          <div
            style={{ display: "grid", gap: 80, alignItems: "start" }}
            className="lg:grid-cols-2"
          >
            {/* Left */}
            <div>
              <h2
                style={{
                  ...headingStyle,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                {tx.problems.title}
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: tk.textSub, marginBottom: 44 }}>
                {tx.problems.sub}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {tx.problems.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "16px 18px",
                        borderRadius: 6,
                        border: `1px solid ${tk.border}`,
                        background: tk.surface,
                        transition: "border-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = tk.borderStrong;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = tk.border;
                      }}
                    >
                      <Icon
                        style={{
                          width: 14,
                          height: 14,
                          color: tk.textMuted,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: 14, color: tk.textSub }}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: solution card */}
            <div>
              <div
                style={{
                  padding: "40px",
                  borderRadius: 12,
                  border: `1px solid ${tk.border}`,
                  background: tk.surface,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    background: tk.accentSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <GitMerge style={{ width: 17, height: 17, color: tk.accent }} />
                </div>

                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: tk.accent,
                    marginBottom: 12,
                  }}
                >
                  Maxor
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: tk.textSub,
                    marginBottom: 32,
                  }}
                >
                  {tx.problems.bridge}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {tx.problems.outcomes.map((text, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <CheckCircle2
                        style={{
                          width: 14,
                          height: 14,
                          color: tk.accent,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: 14, color: tk.text }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => go("cta-section")}
                  style={{
                    marginTop: 36,
                    width: "100%",
                    padding: "14px 0",
                    borderRadius: 7,
                    background: tk.accent,
                    color: "#050505",
                    fontSize: 14,
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.9")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  {lang === "en" ? "Let's fix this →" : "Vamos resolver →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ─────────────────────────────────────────────────────── */}
      <section
        id="how"
        style={{ padding: "140px 0", borderTop: sectionBorder }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <p style={{ ...labelStyle, margin: 0 }}>{tx.how.label}</p>
            <div style={{ flex: 1, height: 1, background: tk.border, maxWidth: 60 }} />
          </div>
          <h2
            style={{
              ...headingStyle,
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              maxWidth: 540,
              marginBottom: 80,
            }}
          >
            {tx.how.title}
          </h2>

          <div
            style={{ display: "grid", gap: 0, border: sectionBorder }}
            className="sm:grid-cols-2 lg:grid-cols-4"
          >
            {tx.how.steps.map((step, i) => (
              <div
                key={i}
                style={{
                  padding: "44px 36px",
                  borderRight: sectionBorder,
                  borderBottom: sectionBorder,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: tk.accent,
                    marginBottom: 24,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: tk.text,
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: tk.textSub }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section
        id="about"
        style={{ padding: "140px 0", borderTop: sectionBorder }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{ display: "grid", gap: 80, alignItems: "center" }}
            className="lg:grid-cols-2"
          >
            {/* Text */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <p style={{ ...labelStyle, margin: 0 }}>{tx.about.label}</p>
                <div style={{ flex: 1, height: 1, background: tk.border, maxWidth: 60 }} />
              </div>
              <h2
                style={{
                  ...headingStyle,
                  fontSize: "clamp(26px, 3vw, 40px)",
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >
                {tx.about.title}
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: tk.textSub,
                  marginBottom: 40,
                }}
              >
                {tx.about.sub}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {tx.about.points.map((pt, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: tk.accent,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 14, color: isDark ? "#CBD5E1" : "#475569" }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                border: sectionBorder,
              }}
            >
              {tx.about.values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={i}
                    style={{
                      padding: "44px 36px",
                      borderRight: i % 2 === 0 ? sectionBorder : "none",
                      borderBottom: i < 2 ? sectionBorder : "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <Icon
                      style={{
                        width: 18,
                        height: 18,
                        color: tk.accent,
                      }}
                    />
                    <span style={{ fontSize: 15, fontWeight: 600, color: tk.text }}>
                      {val.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────────── */}
      <section
        id="cta-section"
        style={{
          padding: "140px 24px",
          borderTop: sectionBorder,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle m watermark */}
        {isDark && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(250px, 25vw, 400px)",
              fontWeight: 800,
              color: "rgba(250,204,21,0.02)",
              lineHeight: 1,
              fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            m
          </div>
        )}
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2
            style={{
              ...headingStyle,
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            {tx.cta.title}
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: tk.textSub,
              marginBottom: 48,
            }}
          >
            {tx.cta.sub}
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={getWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lang === "pt" ? "Abrir conversa no WhatsApp" : "Open WhatsApp chat"}
              style={{
                fontSize: 14,
                fontWeight: 600,
                padding: "15px 32px",
                borderRadius: 8,
                background: tk.accent,
                color: "#050505",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              {tx.cta.cta1}
              <ArrowRight style={{ width: 15, height: 15 }} />
            </a>
            <button
              onClick={() => go("services")}
              style={{
                fontSize: 14,
                fontWeight: 500,
                padding: "15px 32px",
                borderRadius: 8,
                background: "transparent",
                color: tk.textSub,
                border: `1px solid ${tk.border}`,
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = tk.text;
                (e.currentTarget as HTMLElement).style.borderColor = tk.borderStrong;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = tk.textSub;
                (e.currentTarget as HTMLElement).style.borderColor = tk.border;
              }}
            >
              {tx.cta.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: sectionBorder, padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            alignItems: "center",
          }}
          className="md:flex-row md:justify-between"
        >
          <div>
            <div className="text-center"
              style={{
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: tk.text,
                marginBottom: 6,
              }}
            >
              maxor
            </div>
            <div style={{ fontSize: 11, color: tk.textMuted, letterSpacing: "0.01em" }}>{tx.footer.tagline}</div>
          </div>

          <nav style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
            {tx.footer.links.map((link, i) => (
              <button
                key={i}
                style={{
                  fontSize: 13,
                  color: tk.textSub,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = tk.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = tk.textSub)}
              >
                {link}
              </button>
            ))}
          </nav>

          <div style={{ fontSize: 11, color: tk.textMuted }}>{tx.footer.legal}</div>
        </div>
      </footer>
    </div>
  );
}
