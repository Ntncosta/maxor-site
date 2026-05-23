import React, { useState, useEffect } from "react";
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
  Linkedin,
  Instagram,
  MessageCircle,
  MapPin,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Lang = "en" | "pt";
type Theme = "dark" | "light";
type SubmitStatus = "idle" | "success" | "error";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const COMPANY_ADDRESS = "Rua Benjamin Constant 228, Sala 1, Extrema, Minas Gerais 37640-040, BR";
const LANGUAGE_STORAGE_KEY = "maxor.language";
const DEFAULT_LANG: Lang = "pt";
const HERO_IMAGE_URL = new URL("./imports/home_image.png", import.meta.url).href;
const LOCALE_CONFIG: Record<Lang, { htmlLang: string; locale: string }> = {
  en: { htmlLang: "en-US", locale: "en_US" },
  pt: { htmlLang: "pt-BR", locale: "pt_BR" },
};

// ─── Translations ─────────────────────────────────────────────────────────────

const t = {
  en: {
    seo: {
      title: "Maxor | Technology Consulting",
      description: "Technology, automation, and AI solutions for operations that need to scale.",
    },
    a11y: {
      goHome: "Go to home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainMenu: "Main menu",
      openSocial: "Open Maxor {channel} in a new tab",
    },
    nav: {
      services: "Services",
      solutions: "Solutions",
      about: "About",
      contact: "Contact",
      cta: "Contact Us",
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
    dashboard: {
      kpis: [
        { label: "Active", value: "247", sub: "processes" },
        { label: "Uptime", value: "98.4%", sub: "systems" },
        { label: "Saved", value: "1.2k", sub: "hours" },
      ],
      flow: "Flow",
      live: "LIVE",
      rows: [
        { name: "Invoice Processing", pct: 94 },
        { name: "Data Sync", pct: 78 },
        { name: "Reports", pct: 61 },
      ],
    },
    services: {
      label: "Services",
      title: "Everything you need to scale your operations.",
      sub: "Integrated solutions that connect people, processes and data—without the overhead.",
      visualTags: ["Automation layer", "Core systems", "Digital platform", "Tech roadmap", "AI engine", "Data flow"],
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
      cta: "Let's fix this →",
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
      title: "About Maxor",
      eyebrow: "Strategy, product and engineering working as one.",
      paragraphs: [
        "Maxor was created through the union of strategy, product thinking, and software engineering, connecting business vision, user experience, and technology to solve real operational and growth challenges.",
        "Founded by Natan Costa and Marcos Felipe Gomes, the company brings together expertise in digital product management, UX, branding, software architecture, and technical leadership, working on corporate, industrial, educational, and commercial projects.",
        "Together, they combine strategic vision and technical depth to develop platforms, applications, administrative systems, automations, and digital solutions aligned with real business needs.",
        "More than simply developing technology, Maxor believes in creating solutions capable of simplifying operations, accelerating growth, and transforming processes through innovation applied to business.",
      ],
      dualityTitle: "Two complementary views. One execution standard.",
      duality: [
        {
          label: "Product and commercial vision",
          desc: "Maps business priorities, user experience, brand positioning, and operational opportunities before defining the solution.",
          icon: TrendingUp,
        },
        {
          label: "Technical and engineering vision",
          desc: "Transforms strategy into scalable architecture, reliable systems, integrations, and software built for long-term operation.",
          icon: Settings2,
        },
      ],
      foundersTitle: "Founders and partners",
      founders: [
        {
          name: "Natan Costa",
          role: "Product Strategy & Experience",
          bio: "Experience in Product Management, discovery, UX, branding, and operational transformation, focusing on digital product creation and management, process structuring, and solutions aimed at efficiency and user experience.",
          focus: ["Product Management", "Discovery & UX", "Branding", "Operational transformation"],
          icon: Lightbulb,
        },
        {
          name: "Marcos Felipe Gomes",
          role: "Software Engineering & Architecture",
          bio: "Works in software engineering and systems architecture, with experience in technical leadership, scalable application development, enterprise integrations, and high-complexity projects for industrial and educational environments.",
          focus: ["Software architecture", "Technical leadership", "Enterprise integrations", "Scalable applications"],
          icon: Settings2,
        },
      ],
      pillars: [
        { icon: Shield, label: "Institutional trust", desc: "Clear positioning, responsible execution, and senior technical judgment." },
        { icon: TrendingUp, label: "Strategic growth", desc: "Solutions aligned with business outcomes, not isolated technology decisions." },
        { icon: Bot, label: "Applied innovation", desc: "Automation, systems, and digital products designed for real operations." },
        { icon: GitMerge, label: "Integrated delivery", desc: "Business vision, user experience, and software engineering connected end to end." },
      ],
      metrics: [
        { value: "4", label: "markets served" },
        { value: "2", label: "partner disciplines" },
        { value: "1", label: "integrated method" },
      ],
    },
    cta: {
      title: "Ready to build an operation that scales?",
      sub: "The first conversation is free. Let's find your biggest bottleneck and build a plan.",
      cta1: "Contact Us",
      cta2: "Explore services",
      trust: ["Secure first contact", "Response within 1 business day", "No obligation"],
      socialTitle: "Direct channels",
      socialSub: "Prefer a social channel? Reach Maxor where your team already works.",
      addressTitle: "Headquarters",
      addressSub: "Institutional presence in Minas Gerais, ready for future map integration.",
      form: {
        title: "Tell us about your operation",
        sub: "Share the context. We'll come back with a focused next step.",
        name: "Name",
        email: "Email",
        company: "Company",
        companyOptional: "Company (optional)",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@company.com",
        companyPlaceholder: "Company name",
        messagePlaceholder: "What process, system, or bottleneck should we look at first?",
        submit: "Send message",
        emailSubject: "Contact from Maxor website",
        success: "Message ready. Your email client opened with everything prefilled.",
        error: "Please review the highlighted fields before sending.",
        emailError: "Use a valid email so we can reply.",
        requiredError: "This field is required.",
        messageError: "Tell us a little more so we can help.",
      },
    },
    footer: {
      tagline: "Technology that flows. Results that scale.",
      links: ["Services", "Solutions", "About", "Contact"],
      navigation: "Navigation",
      contact: "Contact",
      channels: "Channels",
      trustTitle: "Built for reliable digital operations",
      trustBadges: [
        { icon: Shield, label: "Secure architecture", desc: "Privacy-minded technical decisions" },
        { icon: Activity, label: "Performance focus", desc: "Systems designed for operational continuity" },
        { icon: GitMerge, label: "Enterprise integrations", desc: "Connected workflows and scalable foundations" },
      ],
      trustMetrics: [
        { value: "4", label: "business contexts" },
        { value: "24h", label: "first response target" },
        { value: "100%", label: "senior-led delivery" },
      ],
      address: COMPANY_ADDRESS,
      legal: "© 2025 Maxor. All rights reserved.",
    },
  },
  pt: {
    seo: {
      title: "Maxor | Consultoria em Tecnologia",
      description: "Soluções de tecnologia, automação e IA para operações que precisam escalar.",
    },
    a11y: {
      goHome: "Ir para o início",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      mainMenu: "Menu principal",
      openSocial: "Abrir {channel} da Maxor em nova aba",
    },
    nav: {
      services: "Serviços",
      solutions: "Soluções",
      about: "Sobre",
      contact: "Contato",
      cta: "Entre em Contato",
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
    dashboard: {
      kpis: [
        { label: "Ativos", value: "247", sub: "processos" },
        { label: "Disponibilidade", value: "98.4%", sub: "sistemas" },
        { label: "Economia", value: "1.2k", sub: "horas" },
      ],
      flow: "Fluxo",
      live: "AO VIVO",
      rows: [
        { name: "Processamento fiscal", pct: 94 },
        { name: "Sincronização de dados", pct: 78 },
        { name: "Relatórios", pct: 61 },
      ],
    },
    services: {
      label: "Serviços",
      title: "Tudo que você precisa para escalar as operações.",
      sub: "Soluções integradas que conectam pessoas, processos e dados—sem burocracia.",
      visualTags: ["Camada de automação", "Sistemas centrais", "Plataforma digital", "Roadmap técnico", "Motor de IA", "Fluxo de dados"],
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
      cta: "Vamos resolver →",
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
      title: "Sobre a Maxor",
      eyebrow: "Estratégia, produto e engenharia atuando como um só time.",
      paragraphs: [
        "A Maxor nasceu da união entre estratégia, pensamento de produto e engenharia de software, conectando visão de negócio, experiência do usuário e tecnologia para resolver desafios reais de operação e crescimento.",
        "Fundada por Natan Costa e Marcos Felipe Gomes, a empresa reúne experiência em gestão de produtos digitais, UX, branding, arquitetura de software e liderança técnica, atuando em projetos corporativos, industriais, educacionais e comerciais.",
        "Juntos, combinam visão estratégica e profundidade técnica para desenvolver plataformas, aplicações, sistemas administrativos, automações e soluções digitais alinhadas às necessidades reais do negócio.",
        "Mais do que simplesmente desenvolver tecnologia, a Maxor acredita em criar soluções capazes de simplificar operações, acelerar o crescimento e transformar processos por meio da inovação aplicada aos negócios.",
      ],
      dualityTitle: "Duas visões complementares. Um padrão de execução.",
      duality: [
        {
          label: "Visão de produto e negócio",
          desc: "Mapeia prioridades de negócio, experiência do usuário, posicionamento de marca e oportunidades operacionais antes de definir a solução.",
          icon: TrendingUp,
        },
        {
          label: "Visão técnica e de engenharia",
          desc: "Transforma estratégia em arquitetura escalável, sistemas confiáveis, integrações e software preparado para operação contínua.",
          icon: Settings2,
        },
      ],
      foundersTitle: "Fundadores e sócios",
      founders: [
        {
          name: "Natan Costa",
          role: "Estratégia de Produto & Experiência",
          bio: "Experiência em Product Management, discovery, UX, branding e transformação operacional, com foco na criação e gestão de produtos digitais, estruturação de processos e desenvolvimento de soluções voltadas à eficiência e experiência do usuário.",
          focus: ["Product Management", "Discovery & UX", "Branding", "Transformação operacional"],
          icon: Lightbulb,
        },
        {
          name: "Marcos Felipe Gomes",
          role: "Engenharia de Software & Arquitetura",
          bio: "Atua em engenharia de software e arquitetura de sistemas, com experiência em liderança técnica, desenvolvimento de aplicações escaláveis, integrações corporativas e projetos de alta complexidade para ambientes industriais e educacionais.",
          focus: ["Arquitetura de software", "Liderança técnica", "Integrações corporativas", "Aplicações escaláveis"],
          icon: Settings2,
        },
      ],
      pillars: [
        { icon: Shield, label: "Confiança institucional", desc: "Posicionamento claro, execução responsável e senioridade técnica." },
        { icon: TrendingUp, label: "Crescimento estratégico", desc: "Soluções alinhadas a resultados de negócio, não a decisões isoladas de tecnologia." },
        { icon: Bot, label: "Inovação aplicada", desc: "Automações, sistemas e produtos digitais desenhados para operações reais." },
        { icon: GitMerge, label: "Entrega integrada", desc: "Visão de negócio, experiência do usuário e engenharia conectadas de ponta a ponta." },
      ],
      metrics: [
        { value: "4", label: "mercados atendidos" },
        { value: "2", label: "disciplinas complementares" },
        { value: "1", label: "método integrado" },
      ],
    },
    cta: {
      title: "Pronto para uma operação que escala?",
      sub: "A primeira conversa é gratuita. Vamos encontrar seu maior gargalo e construir um plano.",
      cta1: "Entre em Contato",
      cta2: "Explorar serviços",
      trust: ["Primeiro contato seguro", "Resposta em até 1 dia útil", "Sem compromisso"],
      socialTitle: "Canais diretos",
      socialSub: "Prefere uma rede social? Fale com a Maxor pelo canal mais prático para o seu time.",
      addressTitle: "Sede",
      addressSub: "Presença institucional em Minas Gerais, pronta para futura integração com mapa.",
      form: {
        title: "Conte sobre sua operação",
        sub: "Compartilhe o contexto. Voltamos com um próximo passo objetivo.",
        name: "Nome",
        email: "Email",
        company: "Empresa",
        companyOptional: "Empresa (opcional)",
        message: "Mensagem",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "voce@empresa.com",
        companyPlaceholder: "Nome da empresa",
        messagePlaceholder: "Qual processo, sistema ou gargalo devemos analisar primeiro?",
        submit: "Enviar mensagem",
        emailSubject: "Contato pelo site Maxor",
        success: "Mensagem pronta. Seu cliente de email abriu com tudo preenchido.",
        error: "Revise os campos destacados antes de enviar.",
        emailError: "Use um email válido para podermos responder.",
        requiredError: "Este campo é obrigatório.",
        messageError: "Conte um pouco mais para conseguirmos ajudar.",
      },
    },
    footer: {
      tagline: "Tecnologia que flui. Resultados que escalam.",
      links: ["Serviços", "Soluções", "Sobre", "Contato"],
      navigation: "Navegação",
      contact: "Contato",
      channels: "Canais",
      trustTitle: "Construído para operações digitais confiáveis",
      trustBadges: [
        { icon: Shield, label: "Arquitetura segura", desc: "Decisões técnicas orientadas à privacidade" },
        { icon: Activity, label: "Foco em performance", desc: "Sistemas pensados para continuidade operacional" },
        { icon: GitMerge, label: "Integrações corporativas", desc: "Fluxos conectados e bases escaláveis" },
      ],
      trustMetrics: [
        { value: "4", label: "contextos de negócio" },
        { value: "24h", label: "meta de primeira resposta" },
        { value: "100%", label: "entrega liderada por seniors" },
      ],
      address: COMPANY_ADDRESS,
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
const CONTACT_EMAIL = "contato@maxor.com.br";
const LINKEDIN_URL = "https://www.linkedin.com/company/maxortech/about/?viewAsMember=true";
const INSTAGRAM_URL = "https://www.instagram.com/maxor_tech/";

const initialContactForm: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const whatsappMessages: Record<Lang, string> = {
  en: "Hello! I would like to schedule a diagnosis with Maxor.",
  pt: "Ola! Gostaria de agendar um diagnostico com a Maxor.",
};

function getWhatsAppUrl(lang: Lang) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMessages[lang])}`;
}

const SECTION_IDS = ["hero", "services", "problems", "about", "cta-section"];

// ─── Dashboard Visual ─────────────────────────────────────────────────────────

function DashboardVisual({ theme, copy }: { theme: Theme; copy: (typeof t)[Lang]["dashboard"] }) {
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
            {copy.kpis.map((k) => (
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
              <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: tk.textSub }}>{copy.flow}</span>
              <span
                className="text-[9px] px-2 py-0.5 rounded-full font-semibold"
                style={{
                  background: tk.accentSoft,
                  color: tk.accent,
                }}
              >
                {copy.live}
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
            {copy.rows.map((row) => (
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

function ServiceVisual({ index, theme }: { index: number; theme: Theme }) {
  const tk = themes[theme];
  const isDark = theme === "dark";
  const uid = `svc-${theme}-${index}`;
  const motifs = [
    { nodes: [[42, 112], [92, 70], [154, 96], [210, 52]], bars: [72, 108, 146], cube: [162, 86] },
    { nodes: [[48, 62], [112, 104], [174, 58], [222, 112]], bars: [58, 96, 134], cube: [78, 82] },
    { nodes: [[38, 118], [86, 80], [142, 112], [196, 70], [230, 118]], bars: [76, 116, 156], cube: [150, 72] },
    { nodes: [[48, 88], [102, 54], [166, 92], [218, 56]], bars: [66, 104, 142], cube: [164, 104] },
    { nodes: [[48, 108], [100, 58], [156, 90], [218, 48]], bars: [84, 124, 164], cube: [86, 96] },
    { nodes: [[38, 74], [92, 118], [148, 74], [204, 116], [236, 72]], bars: [64, 102, 140], cube: [154, 94] },
  ];
  const motif = motifs[index % motifs.length];

  return (
    <svg viewBox="0 0 280 180" role="img" aria-hidden="true" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <linearGradient id={`${uid}-panel`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={isDark ? "rgba(255,255,255,0.16)" : "#FFFFFF"} />
          <stop offset="100%" stopColor={isDark ? "rgba(255,255,255,0.035)" : "#F4F4F5"} />
        </linearGradient>
        <linearGradient id={`${uid}-accent`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0.24" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor={isDark ? "#000000" : "#64748B"} floodOpacity={isDark ? "0.32" : "0.14"} />
        </filter>
      </defs>

      <path d="M34 130 L140 70 L246 130 L140 170 Z" fill={isDark ? "rgba(255,255,255,0.035)" : "rgba(15,23,42,0.035)"} />
      <path d="M56 112 L140 64 L224 112 L140 160 Z" fill={`url(#${uid}-panel)`} stroke={tk.borderStrong} filter={`url(#${uid}-shadow)`} />
      <path d="M56 112 L140 160 L140 174 L56 126 Z" fill={isDark ? "rgba(255,255,255,0.025)" : "#E4E4E7"} />
      <path d="M224 112 L140 160 L140 174 L224 126 Z" fill={isDark ? "rgba(250,204,21,0.06)" : "rgba(250,204,21,0.16)"} />

      {motif.bars.map((x, i) => (
        <g key={x}>
          <path d={`M${x} ${126 - i * 18} L${x + 34} ${106 - i * 18} L${x + 64} ${122 - i * 18} L${x + 30} ${142 - i * 18} Z`} fill={i === 1 ? `url(#${uid}-accent)` : isDark ? "rgba(255,255,255,0.08)" : "#FFFFFF"} stroke={i === 1 ? "rgba(250,204,21,0.65)" : tk.borderStrong} />
          <path d={`M${x + 30} ${142 - i * 18} L${x + 64} ${122 - i * 18} L${x + 64} ${130 - i * 18} L${x + 30} ${150 - i * 18} Z`} fill={isDark ? "rgba(0,0,0,0.16)" : "#E4E4E7"} />
        </g>
      ))}

      <g>
        <path d={`M${motif.cube[0]} ${motif.cube[1]} l34 -20 l34 20 l-34 20 Z`} fill={`url(#${uid}-accent)`} stroke="rgba(250,204,21,0.72)" />
        <path d={`M${motif.cube[0]} ${motif.cube[1]} l34 20 v38 l-34 -20 Z`} fill="rgba(250,204,21,0.18)" />
        <path d={`M${motif.cube[0] + 68} ${motif.cube[1]} l-34 20 v38 l34 -20 Z`} fill={isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)"} />
      </g>

      <polyline
        points={motif.nodes.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke="#FACC15"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        strokeLinecap="round"
        opacity="0.78"
      />
      {motif.nodes.map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r={i % 2 === 0 ? 6 : 4.5} fill={i === 0 ? "#FACC15" : tk.cardBg} stroke="#FACC15" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="13" fill="none" stroke="rgba(250,204,21,0.2)" />
        </g>
      ))}
    </svg>
  );
}

function SectionSeparator({ theme }: { theme: Theme }) {
  const isDark = theme === "dark";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 92,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(250,204,21,0.55), rgba(255,255,255,0.18), transparent)"
            : "linear-gradient(90deg, transparent, rgba(234,179,8,0.55), rgba(15,23,42,0.12), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -34,
          left: "50%",
          width: "min(720px, 80vw)",
          height: 86,
          transform: "translateX(-50%)",
          background: isDark
            ? "radial-gradient(ellipse at center, rgba(250,204,21,0.13), transparent 68%)"
            : "radial-gradient(ellipse at center, rgba(234,179,8,0.16), transparent 68%)",
          filter: "blur(14px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isDark ? 0.18 : 0.12,
          backgroundImage:
            "linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(0deg, currentColor 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          color: isDark ? "#FFFFFF" : "#0F172A",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return DEFAULT_LANG;

    const storedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLang === "en" || storedLang === "pt") return storedLang;

    return window.navigator.language.toLowerCase().startsWith("en") ? "en" : DEFAULT_LANG;
  });
  const [theme, setTheme] = useState<Theme>("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState<ContactFormValues>(initialContactForm);
  const [contactErrors, setContactErrors] = useState<ContactFormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [focusedField, setFocusedField] = useState<keyof ContactFormValues | null>(null);

  const tx = t[lang];
  const tk = themes[theme];
  const isDark = theme === "dark";

  useEffect(() => {
    const locale = LOCALE_CONFIG[lang];

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    document.documentElement.lang = locale.htmlLang;
    document.title = tx.seo.title;

    const setMeta = (selector: string, value: string, attributes?: Record<string, string>) => {
      const tag = document.querySelector<HTMLMetaElement>(selector);
      if (tag) {
        tag.content = value;
        return;
      }

      if (!attributes) return;

      const meta = document.createElement("meta");
      Object.entries(attributes).forEach(([key, attrValue]) => meta.setAttribute(key, attrValue));
      meta.content = value;
      document.head.appendChild(meta);
    };

    setMeta('meta[name="description"]', tx.seo.description);
    setMeta('meta[property="og:title"]', tx.seo.title);
    setMeta('meta[property="og:description"]', tx.seo.description);
    setMeta('meta[property="og:locale"]', locale.locale, { property: "og:locale" });
  }, [lang, tx.seo.description, tx.seo.title]);

  useEffect(() => {
    setContactErrors({});
    setSubmitStatus("idle");
  }, [lang]);

  useEffect(() => {
    const fn = () => {
      const scrollPosition = window.scrollY + 90;
      const currentSection = SECTION_IDS.reduce((current, id) => {
        const section = document.getElementById(id);
        return section && section.offsetTop <= scrollPosition ? id : current;
      }, "hero");

      setScrolled(window.scrollY > 20);
      setActiveSection(currentSection);
    };

    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setMobileOpen(false);
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: tx.nav.services, id: "services" },
    { label: tx.nav.solutions, id: "problems" },
    { label: tx.nav.about, id: "about" },
    { label: tx.nav.contact, id: "cta-section" },
  ];
  const footerLinks = navItems.map((item, index) => ({
    ...item,
    label: tx.footer.links[index] ?? item.label,
  }));
  const socialLinks = [
    {
      label: "WhatsApp",
      href: getWhatsAppUrl(lang),
      Icon: MessageCircle,
      tone: "#25D366",
    },
    {
      label: "LinkedIn",
      href: LINKEDIN_URL,
      Icon: Linkedin,
      tone: "#0A66C2",
    },
    {
      label: "Instagram",
      href: INSTAGRAM_URL,
      Icon: Instagram,
      tone: "#E4405F",
    },
  ];

  const validateContactForm = () => {
    const formTx = tx.cta.form;
    const nextErrors: ContactFormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactForm.name.trim()) nextErrors.name = formTx.requiredError;
    if (!contactForm.email.trim()) {
      nextErrors.email = formTx.requiredError;
    } else if (!emailPattern.test(contactForm.email.trim())) {
      nextErrors.email = formTx.emailError;
    }
    if (contactForm.message.trim().length < 12) nextErrors.message = formTx.messageError;

    return nextErrors;
  };

  const handleContactChange = (field: keyof ContactFormValues, value: string) => {
    setContactForm((current) => ({ ...current, [field]: value }));
    setSubmitStatus("idle");
    setContactErrors((current) => {
      if (!current[field]) return current;
      const remaining = { ...current };
      delete remaining[field];
      return remaining;
    });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validateContactForm();

    if (Object.keys(nextErrors).length > 0) {
      setContactErrors(nextErrors);
      setSubmitStatus("error");
      return;
    }

    const subject = encodeURIComponent(tx.cta.form.emailSubject);
    const body = encodeURIComponent(
      [
        `${tx.cta.form.name}: ${contactForm.name.trim()}`,
        `${tx.cta.form.email}: ${contactForm.email.trim()}`,
        contactForm.company.trim() ? `${tx.cta.form.company}: ${contactForm.company.trim()}` : "",
        "",
        contactForm.message.trim(),
      ].filter(Boolean).join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitStatus("success");
    setContactErrors({});
    setContactForm(initialContactForm);
  };

  // Shared style helpers
  const sectionBorder = `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.11)"}`;
  const sectionSurface: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    background: isDark
      ? "linear-gradient(180deg, rgba(255,255,255,0.012), rgba(255,255,255,0.025))"
      : "linear-gradient(180deg, #FAFAF9, #FFFFFF)",
  };
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
  const getFieldStyle = (field: keyof ContactFormValues): React.CSSProperties => {
    const hasError = Boolean(contactErrors[field]);
    const isFocused = focusedField === field;

    return {
      width: "100%",
      border: `1px solid ${hasError ? "#EF4444" : isFocused ? tk.accentBorder : tk.border}`,
      background: isFocused ? tk.surfaceHover : tk.surface,
      color: tk.text,
      borderRadius: 10,
      padding: "14px 15px",
      fontSize: 14,
      lineHeight: 1.4,
      outline: "none",
      transition: "border-color 0.18s, background 0.18s, box-shadow 0.18s, transform 0.18s",
      boxShadow: isFocused ? `0 0 0 4px ${tk.accentSoft}` : "none",
      transform: isFocused ? "translateY(-1px)" : "translateY(0)",
    };
  };

  const renderContactField = (
    field: keyof ContactFormValues,
    label: string,
    placeholder: string,
    options: { type?: string; multiline?: boolean; required?: boolean } = {},
  ) => (
    <label style={{ display: "block" }}>
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 8,
          fontSize: 12,
          fontWeight: 600,
          color: contactErrors[field] ? "#FCA5A5" : tk.textSub,
        }}
      >
        {label}
        {options.required && <span style={{ color: tk.accent }}>*</span>}
      </span>
      {options.multiline ? (
        <textarea
          value={contactForm[field]}
          placeholder={placeholder}
          rows={5}
          required={options.required}
          onFocus={() => setFocusedField(field)}
          onBlur={() => setFocusedField(null)}
          onChange={(e) => handleContactChange(field, e.currentTarget.value)}
          style={{ ...getFieldStyle(field), resize: "vertical", minHeight: 132 }}
        />
      ) : (
        <input
          value={contactForm[field]}
          type={options.type ?? "text"}
          placeholder={placeholder}
          required={options.required}
          onFocus={() => setFocusedField(field)}
          onBlur={() => setFocusedField(null)}
          onChange={(e) => handleContactChange(field, e.currentTarget.value)}
          style={getFieldStyle(field)}
        />
      )}
      {contactErrors[field] && (
        <span style={{ display: "block", marginTop: 7, fontSize: 12, color: "#FCA5A5" }}>
          {contactErrors[field]}
        </span>
      )}
    </label>
  );

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
            type="button"
            onClick={() => go("hero")}
            aria-label={tx.a11y.goHome}
            style={{
              fontWeight: 800,
              fontSize: "clamp(28px, 3vw, 38px)",
              letterSpacing: "-0.02em",
              color: tk.text,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "color 0.2s, opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = tk.accent;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = tk.text;
              e.currentTarget.style.transform = "translateY(0)";
            }}
            onFocus={(e) => {
              e.currentTarget.style.color = tk.accent;
            }}
            onBlur={(e) => {
              e.currentTarget.style.color = tk.text;
            }}
          >
            maxor
          </button>

          {/* Desktop nav */}
          <nav style={{ alignItems: "center", gap: 28 }} className="hidden md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredNavId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  onMouseEnter={() => setHoveredNavId(item.id)}
                  onMouseLeave={() => setHoveredNavId(null)}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    fontSize: 13.5,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive || isHovered ? tk.text : tk.textSub,
                    background: isActive ? tk.accentSoft : "transparent",
                    border: `1px solid ${isActive ? tk.accentBorder : "transparent"}`,
                    borderRadius: 999,
                    cursor: "pointer",
                    padding: "6px 10px",
                    transition: "color 0.15s, background 0.15s, border-color 0.15s",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Lang */}
            <button
              type="button"
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
              type="button"
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
              {isDark ? <Sun style={{ width: 17, height: 17 }} /> : <Moon style={{ width: 17, height: 17 }} />}
            </button>

            {/* CTA */}
            <button
              type="button"
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
              <ArrowRight style={{ width: 15, height: 15 }} />
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              className="flex md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-controls="mobile-nav"
              aria-expanded={mobileOpen}
              aria-label={
                mobileOpen
                  ? tx.a11y.closeMenu
                  : tx.a11y.openMenu
              }
              style={{
                width: 34,
                height: 34,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                border: `1px solid ${tk.border}`,
                background: "transparent",
                color: tk.textSub,
                cursor: "pointer",
              }}
            >
              {mobileOpen ? <X style={{ width: 18, height: 18 }} /> : <Menu style={{ width: 18, height: 18 }} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="md:hidden"
            role="navigation"
            aria-label={tx.a11y.mainMenu}
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
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 14px",
                    marginBottom: 4,
                    fontSize: 15,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? tk.text : tk.textSub,
                    background: isActive ? tk.accentSoft : "transparent",
                    border: `1px solid ${isActive ? tk.accentBorder : tk.border}`,
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "color 0.15s, background 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = tk.text;
                    e.currentTarget.style.borderColor = isActive ? tk.accentBorder : tk.borderStrong;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive ? tk.text : tk.textSub;
                    e.currentTarget.style.borderColor = isActive ? tk.accentBorder : tk.border;
                  }}
                >
                  {item.label}
                </button>
              );
            })}
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button
                type="button"
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
                type="button"
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
                {isDark ? <Sun style={{ width: 17, height: 17 }} /> : <Moon style={{ width: 17, height: 17 }} />}
              </button>
              <button
                type="button"
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
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
              gap: 64,
              alignItems: "center",
            }}
            className="bg-[#00000000]"
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
                  <ArrowRight style={{ width: 17, height: 17 }} />
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
                  <ChevronRight style={{ width: 17, height: 17 }} />
                </button>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 540,
                justifySelf: "center",
              }}
              className="lg:justify-self-end"
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-18px",
                  borderRadius: 28,
                  background: isDark
                    ? "radial-gradient(circle at 30% 20%, rgba(250,204,21,0.16), transparent 42%)"
                    : "radial-gradient(circle at 30% 20%, rgba(250,204,21,0.2), transparent 42%)",
                  filter: "blur(10px)",
                  opacity: 0.75,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  borderRadius: 24,
                  padding: 10,
                  border: `1px solid ${tk.borderStrong}`,
                  background: isDark
                    ? "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
                    : "linear-gradient(145deg, #FFFFFF, #F8FAFC)",
                  boxShadow: isDark
                    ? "0 28px 80px rgba(0,0,0,0.38)"
                    : "0 28px 80px rgba(15,23,42,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${tk.accentSoft}, transparent 36%)`,
                    pointerEvents: "none",
                  }}
                />
                <img
                  src={HERO_IMAGE_URL}
                  alt="Maxor technology operations visual"
                  loading="eager"
                  decoding="async"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    maxHeight: 620,
                    objectFit: "contain",
                    display: "block",
                    borderRadius: 18,
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
        style={{ ...sectionSurface, padding: "140px 0", borderTop: sectionBorder }}
      >
        <SectionSeparator theme={theme} />
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
              gap: 18,
            }}
          >
            {tx.services.items.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                    gap: 28,
                    alignItems: "center",
                    padding: "clamp(24px, 4vw, 38px)",
                    border: sectionBorder,
                    borderRadius: 18,
                    background: i % 2 === 0 ? "transparent" : tk.surface,
                    overflow: "hidden",
                    direction: i % 2 === 0 ? "ltr" : "rtl",
                    transition: "background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = tk.surface;
                    (e.currentTarget as HTMLElement).style.borderColor = tk.borderStrong;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = isDark
                      ? "0 22px 56px rgba(0,0,0,0.22)"
                      : "0 22px 56px rgba(15,23,42,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "transparent" : tk.surface;
                    (e.currentTarget as HTMLElement).style.borderColor = tk.border;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ direction: "ltr" }}>
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        background: tk.accentSoft,
                        border: `1px solid ${tk.accentBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 24,
                      }}
                    >
                      <Icon style={{ width: 22, height: 22, color: tk.accent }} />
                    </div>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        marginBottom: 12,
                        color: tk.text,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.75, color: tk.textSub, maxWidth: 520 }}>
                      {svc.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: 390,
                      justifySelf: "end",
                      direction: "ltr",
                    }}
                    className="justify-self-start sm:justify-self-end"
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 18,
                        background: `radial-gradient(circle, ${tk.accentSoft}, transparent 64%)`,
                        filter: "blur(8px)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        padding: "14px 14px 10px",
                        borderRadius: 18,
                        border: `1px solid ${tk.border}`,
                        background: isDark
                          ? "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))"
                          : "linear-gradient(145deg, #FFFFFF, #F8FAFC)",
                        boxShadow: isDark
                          ? "0 18px 42px rgba(0,0,0,0.22)"
                          : "0 18px 42px rgba(15,23,42,0.07)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 12,
                          marginBottom: 8,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 750,
                            letterSpacing: "0.09em",
                            textTransform: "uppercase",
                            color: tk.accent,
                          }}
                        >
                          {tx.services.visualTags[i]}
                        </span>
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: tk.accent,
                            boxShadow: "0 0 18px rgba(250,204,21,0.75)",
                            flexShrink: 0,
                          }}
                        />
                      </div>
                      <ServiceVisual index={i} theme={theme} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Problems ────────────────────────────────────────────────────────── */}
      <section
        id="problems"
        style={{ ...sectionSurface, padding: "140px 0", borderTop: sectionBorder }}
      >
        <SectionSeparator theme={theme} />
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
                          width: 18,
                          height: 18,
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
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: tk.accentSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <GitMerge style={{ width: 21, height: 21, color: tk.accent }} />
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
                  {tx.problems.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ─────────────────────────────────────────────────────── */}
      <section
        id="how"
        style={{ ...sectionSurface, padding: "140px 0", borderTop: sectionBorder }}
      >
        <SectionSeparator theme={theme} />
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
        style={{
          ...sectionSurface,
          padding: "140px 0",
          borderTop: sectionBorder,
        }}
      >
        <SectionSeparator theme={theme} />
        {isDark && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 12% 12%, rgba(250,204,21,0.05), transparent 32%), radial-gradient(circle at 88% 72%, rgba(250,204,21,0.035), transparent 28%)",
              pointerEvents: "none",
            }}
          />
        )}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "grid",
                gap: 56,
                alignItems: "end",
                marginBottom: 56,
              }}
              className="lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <p style={{ ...labelStyle, margin: 0 }}>{tx.about.label}</p>
                  <div style={{ flex: 1, height: 1, background: tk.border, maxWidth: 60 }} />
                </div>
                <h2
                  style={{
                    ...headingStyle,
                    fontSize: "clamp(34px, 5vw, 64px)",
                    fontWeight: 750,
                    marginBottom: 22,
                  }}
                >
                  {tx.about.title}
                </h2>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.65,
                    color: tk.text,
                    maxWidth: 560,
                    margin: 0,
                  }}
                >
                  {tx.about.eyebrow}
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  padding: "28px clamp(22px, 3vw, 34px)",
                  borderRadius: 18,
                  border: `1px solid ${tk.borderStrong}`,
                  background: isDark
                    ? "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))"
                    : "linear-gradient(145deg, #FFFFFF, #F8FAFC)",
                  boxShadow: isDark ? "0 26px 70px rgba(0,0,0,0.28)" : "0 26px 70px rgba(15,23,42,0.07)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(90deg, ${tk.accentSoft}, transparent 45%)`,
                    opacity: 0.7,
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative", display: "grid", gap: 20 }}>
                  {tx.about.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      style={{
                        margin: 0,
                        fontSize: 14.5,
                        lineHeight: 1.8,
                        color: index === 0 ? tk.text : tk.textSub,
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                padding: "clamp(24px, 4vw, 34px)",
                borderRadius: 20,
                border: `1px solid ${tk.borderStrong}`,
                background: isDark
                  ? "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))"
                  : "linear-gradient(145deg, #FFFFFF, #F8FAFC)",
                overflow: "hidden",
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, transparent, rgba(250,204,21,0.08), transparent)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative" }}>
                <h3
                  style={{
                    margin: "0 0 22px",
                    color: tk.text,
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {tx.about.dualityTitle}
                </h3>
                <div
                  style={{
                    display: "grid",
                    gap: 16,
                    alignItems: "stretch",
                  }}
                  className="lg:grid-cols-[1fr_auto_1fr]"
                >
                  {tx.about.duality.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <React.Fragment key={item.label}>
                        <div
                          style={{
                            padding: "22px",
                            borderRadius: 16,
                            border: `1px solid ${tk.border}`,
                            background: tk.surface,
                            transition: "border-color 0.2s, transform 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = tk.accentBorder;
                            e.currentTarget.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = tk.border;
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          <div
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 14,
                              background: tk.accentSoft,
                              border: `1px solid ${tk.accentBorder}`,
                              color: tk.accent,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: 16,
                            }}
                          >
                            <Icon style={{ width: 23, height: 23 }} />
                          </div>
                          <h4 style={{ margin: "0 0 9px", color: tk.text, fontSize: 16, fontWeight: 750 }}>
                            {item.label}
                          </h4>
                          <p style={{ margin: 0, color: tk.textSub, fontSize: 13.5, lineHeight: 1.7 }}>
                            {item.desc}
                          </p>
                        </div>
                        {index === 0 && (
                          <div
                            aria-hidden="true"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: tk.accent,
                            }}
                          >
                            <div
                              style={{
                                width: 50,
                                height: 50,
                                borderRadius: 999,
                                border: `1px solid ${tk.accentBorder}`,
                                background: tk.accentSoft,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <GitMerge style={{ width: 21, height: 21 }} />
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 18,
                marginBottom: 18,
              }}
              className="md:grid-cols-3"
            >
              {tx.about.metrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    padding: "22px 24px",
                    borderRadius: 14,
                    border: `1px solid ${tk.border}`,
                    background: tk.surface,
                  }}
                >
                  <div style={{ fontSize: 30, fontWeight: 750, color: tk.text, letterSpacing: "-0.04em" }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: 12, color: tk.textSub, marginTop: 5 }}>{metric.label}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gap: 18,
                marginBottom: 18,
              }}
              className="lg:grid-cols-2"
            >
              {tx.about.founders.map((founder) => {
                const Icon = founder.icon;

                return (
                  <div
                    key={founder.name}
                    style={{
                      position: "relative",
                      padding: "clamp(24px, 4vw, 34px)",
                      borderRadius: 18,
                      border: `1px solid ${tk.border}`,
                      background: tk.cardBg,
                      overflow: "hidden",
                      transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = tk.accentBorder;
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = isDark
                        ? "0 22px 56px rgba(0,0,0,0.28)"
                        : "0 22px 56px rgba(15,23,42,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = tk.border;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: `linear-gradient(90deg, ${tk.accent}, transparent)`,
                      }}
                    />
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 24 }}>
                      <div
                        style={{
                          width: 58,
                          height: 58,
                          borderRadius: 16,
                          background: tk.accentSoft,
                          border: `1px solid ${tk.accentBorder}`,
                          color: tk.accent,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon style={{ width: 26, height: 26 }} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: tk.accent,
                            marginBottom: 7,
                          }}
                        >
                          {tx.about.foundersTitle}
                        </div>
                        <h3 style={{ margin: 0, color: tk.text, fontSize: 22, letterSpacing: "-0.02em" }}>
                          {founder.name}
                        </h3>
                        <p style={{ margin: "6px 0 0", color: tk.textSub, fontSize: 13, fontWeight: 600 }}>
                          {founder.role}
                        </p>
                      </div>
                    </div>
                    <p style={{ margin: "0 0 24px", color: tk.textSub, fontSize: 14, lineHeight: 1.75 }}>
                      {founder.bio}
                    </p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {founder.focus.map((focus) => (
                        <span
                          key={focus}
                          style={{
                            padding: "7px 10px",
                            borderRadius: 999,
                            border: `1px solid ${tk.border}`,
                            background: tk.surface,
                            color: isDark ? "#CBD5E1" : "#475569",
                            fontSize: 11.5,
                            fontWeight: 600,
                          }}
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                display: "grid",
                gap: 0,
                border: sectionBorder,
                borderRadius: 18,
                overflow: "hidden",
              }}
              className="sm:grid-cols-2 lg:grid-cols-4"
            >
              {tx.about.pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.label}
                    style={{
                      padding: "30px 26px",
                      borderRight: sectionBorder,
                      borderBottom: sectionBorder,
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      background: index % 2 === 0 ? tk.surface : "transparent",
                    }}
                  >
                    <Icon
                      style={{
                        width: 22,
                        height: 22,
                        color: tk.accent,
                      }}
                    />
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: tk.text }}>
                      {pillar.label}
                    </h3>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: tk.textSub }}>
                      {pillar.desc}
                    </p>
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
          ...sectionSurface,
          padding: "140px 24px",
          borderTop: sectionBorder,
          textAlign: "center",
        }}
      >
        <SectionSeparator theme={theme} />
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
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gap: 48,
            alignItems: "center",
            textAlign: "left",
          }}
          className="lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <p style={{ ...labelStyle, margin: 0 }}>{tx.nav.contact}</p>
              <div style={{ flex: 1, height: 1, background: tk.border, maxWidth: 60 }} />
            </div>
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
                marginBottom: 32,
                maxWidth: 500,
              }}
            >
              {tx.cta.sub}
            </p>

            <div style={{ display: "grid", gap: 12, marginBottom: 32, maxWidth: 440 }}>
              {tx.cta.trust.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 style={{ width: 18, height: 18, color: tk.accent, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: isDark ? "#CBD5E1" : "#475569" }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                padding: 18,
                borderRadius: 16,
                border: `1px solid ${tk.border}`,
                background: tk.surface,
                maxWidth: 500,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: tk.accentSoft,
                  border: `1px solid ${tk.accentBorder}`,
                  color: tk.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin style={{ width: 25, height: 25 }} />
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px", color: tk.text, fontSize: 16, letterSpacing: "-0.01em" }}>
                  {tx.cta.addressTitle}
                </h3>
                <p style={{ margin: "0 0 10px", color: tk.textSub, fontSize: 13, lineHeight: 1.6 }}>
                  {tx.cta.addressSub}
                </p>
                <address style={{ color: tk.text, fontSize: 13, lineHeight: 1.7, fontStyle: "normal" }}>
                  {COMPANY_ADDRESS}
                </address>
              </div>
            </div>

            <div
              style={{
                padding: 18,
                borderRadius: 16,
                border: `1px solid ${tk.border}`,
                background: tk.surface,
                maxWidth: 500,
              }}
            >
              <h3 style={{ margin: "0 0 6px", color: tk.text, fontSize: 16, letterSpacing: "-0.01em" }}>
                {tx.cta.socialTitle}
              </h3>
              <p style={{ margin: "0 0 18px", color: tk.textSub, fontSize: 13, lineHeight: 1.6 }}>
                {tx.cta.socialSub}
              </p>
              <div style={{ display: "grid", gap: 10 }} className="sm:grid-cols-3">
                {socialLinks.map(({ label, href, Icon, tone }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      tx.a11y.openSocial.replace("{channel}", label)
                    }
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      minHeight: 96,
                      padding: "16px 14px",
                      borderRadius: 14,
                      background: isDark ? "rgba(255,255,255,0.035)" : "#FFFFFF",
                      color: tk.text,
                      border: `1px solid ${tk.border}`,
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 14,
                      transition: "border-color 0.2s, transform 0.2s, background 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = tone;
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 18px 42px ${tone}22`;
                      e.currentTarget.style.background = isDark ? `${tone}12` : `${tone}08`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = tk.border;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.035)" : "#FFFFFF";
                    }}
                  >
                    <span
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 14,
                        background: `${tone}18`,
                        color: tone,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon style={{ width: 28, height: 28 }} />
                    </span>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 700 }}>{label}</span>
                      <ArrowRight style={{ width: 16, height: 16, color: tone }} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleContactSubmit}
            noValidate
            style={{
              position: "relative",
              padding: "clamp(22px, 4vw, 36px)",
              borderRadius: 18,
              border: `1px solid ${tk.borderStrong}`,
              background: isDark
                ? "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))"
                : "linear-gradient(145deg, #FFFFFF, #F8FAFC)",
              boxShadow: isDark ? "0 28px 80px rgba(0,0,0,0.38)" : "0 28px 80px rgba(15,23,42,0.08)",
              backdropFilter: "blur(18px)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 20% 0%, ${tk.accentSoft}, transparent 34%)`,
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 18, marginBottom: 28 }}>
                <div>
                  <h3 style={{ margin: "0 0 8px", color: tk.text, fontSize: 22, letterSpacing: "-0.02em" }}>
                    {tx.cta.form.title}
                  </h3>
                  <p style={{ margin: 0, color: tk.textSub, fontSize: 14, lineHeight: 1.6 }}>
                    {tx.cta.form.sub}
                  </p>
                </div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: tk.accentSoft,
                    border: `1px solid ${tk.accentBorder}`,
                    color: tk.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Shield style={{ width: 22, height: 22 }} />
                </div>
              </div>

              <div style={{ display: "grid", gap: 16 }} className="md:grid-cols-2">
                {renderContactField("name", tx.cta.form.name, tx.cta.form.namePlaceholder, { required: true })}
                {renderContactField("email", tx.cta.form.email, tx.cta.form.emailPlaceholder, { type: "email", required: true })}
              </div>
              <div style={{ marginTop: 16 }}>
                {renderContactField("company", tx.cta.form.companyOptional, tx.cta.form.companyPlaceholder)}
              </div>
              <div style={{ marginTop: 16 }}>
                {renderContactField("message", tx.cta.form.message, tx.cta.form.messagePlaceholder, {
                  multiline: true,
                  required: true,
                })}
              </div>

              {submitStatus !== "idle" && (
                <div
                  role="status"
                  style={{
                    marginTop: 18,
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: `1px solid ${submitStatus === "success" ? tk.accentBorder : "rgba(239,68,68,0.35)"}`,
                    background: submitStatus === "success" ? tk.accentSoft : "rgba(239,68,68,0.08)",
                    color: submitStatus === "success" ? tk.text : "#FCA5A5",
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  {submitStatus === "success" ? tx.cta.form.success : tx.cta.form.error}
                </div>
              )}

              <button
                type="submit"
                style={{
                  width: "100%",
                  marginTop: 22,
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "15px 22px",
                  borderRadius: 10,
                  background: tk.accent,
                  color: "#050505",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 14px 34px rgba(250,204,21,0.16)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.92";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {tx.cta.form.submit}
                <ArrowRight style={{ width: 17, height: 17 }} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer
        style={{
          position: "relative",
          overflow: "hidden",
          borderTop: sectionBorder,
          padding: "64px 24px 34px",
          background: isDark
            ? "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))"
            : "linear-gradient(180deg, #FFFFFF, #FAFAF9)",
        }}
      >
        <SectionSeparator theme={theme} />
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gap: 34,
              paddingBottom: 40,
              borderBottom: sectionBorder,
            }}
            className="lg:grid-cols-[1.25fr_0.8fr_1fr_1fr]"
          >
            <div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: tk.text,
                  marginBottom: 10,
                }}
              >
                maxor
              </div>
              <p style={{ fontSize: 13, color: tk.textSub, lineHeight: 1.7, maxWidth: 280, margin: 0 }}>
                {tx.footer.tagline}
              </p>
            </div>

            <div>
              <h3 style={{ ...labelStyle, margin: "0 0 18px" }}>{tx.footer.navigation}</h3>
              <nav style={{ display: "grid", gap: 12 }} aria-label={tx.footer.navigation}>
                {footerLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => go(link.id)}
                    style={{
                      width: "fit-content",
                      fontSize: 13,
                      color: tk.textSub,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = tk.text;
                      e.currentTarget.style.transform = "translateX(3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = tk.textSub;
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            <div>
              <h3 style={{ ...labelStyle, margin: "0 0 18px" }}>{tx.footer.contact}</h3>
              <div style={{ display: "grid", gap: 12 }}>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  style={{
                    color: tk.textSub,
                    textDecoration: "none",
                    fontSize: 13,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = tk.text)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = tk.textSub)}
                >
                  {CONTACT_EMAIL}
                </a>
                <div style={{ display: "flex", gap: 9, alignItems: "flex-start", color: tk.textSub }}>
                  <MapPin style={{ width: 17, height: 17, color: tk.accent, flexShrink: 0, marginTop: 2 }} />
                  <address style={{ fontSize: 13, lineHeight: 1.6, fontStyle: "normal" }}>
                    {tx.footer.address}
                  </address>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ ...labelStyle, margin: "0 0 18px" }}>{tx.footer.channels}</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {socialLinks.map(({ label, href, Icon, tone }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      tx.a11y.openSocial.replace("{channel}", label)
                    }
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 15,
                      border: `1px solid ${tk.border}`,
                      background: tk.surface,
                      color: tk.textSub,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      transition: "color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = tone;
                      e.currentTarget.style.borderColor = tone;
                      e.currentTarget.style.background = isDark ? `${tone}12` : `${tone}08`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = tk.textSub;
                      e.currentTarget.style.borderColor = tk.border;
                      e.currentTarget.style.background = tk.surface;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon style={{ width: 27, height: 27 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: 18,
              padding: "28px 0",
              borderBottom: sectionBorder,
            }}
            className="lg:grid-cols-[1fr_0.8fr]"
          >
            <div
              style={{
                padding: "clamp(20px, 3vw, 28px)",
                borderRadius: 18,
                border: `1px solid ${tk.border}`,
                background: isDark
                  ? "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))"
                  : "linear-gradient(145deg, #FFFFFF, #F8FAFC)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 8% 0%, ${tk.accentSoft}, transparent 38%)`,
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative" }}>
                <h3 style={{ margin: "0 0 18px", color: tk.text, fontSize: 18, letterSpacing: "-0.02em" }}>
                  {tx.footer.trustTitle}
                </h3>
                <div style={{ display: "grid", gap: 12 }} className="md:grid-cols-3">
                  {tx.footer.trustBadges.map((badge) => {
                    const Icon = badge.icon;

                    return (
                      <div
                        key={badge.label}
                        style={{
                          padding: 16,
                          borderRadius: 14,
                          border: `1px solid ${tk.border}`,
                          background: tk.surface,
                          transition: "border-color 0.2s, transform 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = tk.accentBorder;
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = tk.border;
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <Icon style={{ width: 24, height: 24, color: tk.accent, marginBottom: 12 }} />
                        <div style={{ fontSize: 13, fontWeight: 700, color: tk.text, marginBottom: 6 }}>
                          {badge.label}
                        </div>
                        <p style={{ margin: 0, fontSize: 12, lineHeight: 1.55, color: tk.textSub }}>
                          {badge.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 12,
              }}
              className="sm:grid-cols-3 lg:grid-cols-1"
            >
              {tx.footer.trustMetrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    padding: "18px 20px",
                    borderRadius: 14,
                    border: `1px solid ${tk.border}`,
                    background: tk.surface,
                  }}
                >
                  <div style={{ fontSize: 24, fontWeight: 750, color: tk.text, letterSpacing: "-0.04em" }}>
                    {metric.value}
                  </div>
                  <div style={{ marginTop: 4, fontSize: 12, color: tk.textSub }}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 26,
            }}
            className="md:flex-row"
          >
            <div
              style={{
                height: 1,
                flex: 1,
                background: tk.border,
                width: "100%",
              }}
              className="hidden md:block"
            />
            <div style={{ fontSize: 11, color: tk.textMuted, letterSpacing: "0.01em", textAlign: "center" }}>
              {tx.footer.legal}
            </div>
            <div
                style={{
                height: 1,
                flex: 1,
                background: tk.border,
                width: "100%",
                }}
              className="hidden md:block"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
