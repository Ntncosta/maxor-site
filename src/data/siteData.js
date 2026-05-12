import {
  Aperture,
  Building2,
  CalendarDays,
  Clapperboard,
  Film,
  Instagram,
  MessageCircle,
  Mountain,
  Plane,
  Share2,
  Sparkles
} from "lucide-react";

export const contact = {
  phoneLabel: "+55 11 99999-9999",
  whatsappUrl: "https://wa.me/5511999999999",
  instagramLabel: "@dronefilms",
  instagramUrl: "https://instagram.com/",
  email: "contato@dronefilms.com"
};

export const navItems = [
  { label: "Projetos", href: "#projects" },
  { label: "Servicos", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" }
];

export const heroVideo =
  "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4";

export const heroPoster =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85";

export const projects = [
  {
    title: "Golden Residence",
    category: "Real Estate",
    description: "Arquitetura, luz natural e movimentos aereos para vender sensacao de espaco.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=82"
  },
  {
    title: "Serra em Movimento",
    category: "Natureza",
    description: "Planos amplos, textura de montanha e ritmo contemplativo para narrativas visuais.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=82"
  },
  {
    title: "Costa Viva",
    category: "Turismo",
    description: "Imagens imersivas para destinos, pousadas e experiencias de viagem memoraveis.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=82"
  },
  {
    title: "Celebration Film",
    category: "Eventos",
    description: "Cobertura elegante com energia, escala e cortes pensados para emocionar.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=82"
  },
  {
    title: "Vertical Stories",
    category: "Social Media",
    description: "Conteudos curtos, dinamicos e prontos para Reels, TikTok e campanhas pagas.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=82"
  }
];

export const services = [
  {
    title: "Drone Filming",
    text: "Captacao aerea em 4K com movimentos suaves, composicao premium e direcao visual.",
    icon: Plane
  },
  {
    title: "Video Editing",
    text: "Montagem, cor, ritmo e finalizacao para transformar imagens em uma peca cinematografica.",
    icon: Film
  },
  {
    title: "Real Estate Videos",
    text: "Videos para vender imoveis com escala, contexto, fachada, entorno e detalhes internos.",
    icon: Building2
  },
  {
    title: "Tourism Videos",
    text: "Narrativas visuais para hoteis, destinos, experiencias e marcas ligadas a viagem.",
    icon: Mountain
  },
  {
    title: "Event Coverage",
    text: "Cobertura de eventos com planos aereos seguros, elegantes e integrados a filmagem terrestre.",
    icon: CalendarDays
  },
  {
    title: "Social Media Content",
    text: "Pacotes otimizados para redes sociais, com cortes verticais, hooks visuais e entrega agil.",
    icon: Share2
  }
];

export const testimonials = [
  {
    quote:
      "O video mudou completamente a percepcao do imovel. Ficou sofisticado, leve e muito mais facil de apresentar.",
    name: "Marina Duarte",
    role: "Consultora imobiliaria"
  },
  {
    quote:
      "A entrega teve olhar de cinema. As imagens aereas capturaram o destino de um jeito que foto comum nao consegue.",
    name: "Rafael Nunes",
    role: "Operador de turismo"
  },
  {
    quote:
      "Profissionalismo do briefing a edicao final. Recebemos conteudos prontos para campanha, stories e apresentacao.",
    name: "Bianca Torres",
    role: "Diretora criativa"
  }
];

export const stats = [
  { label: "Resolucao", value: "4K" },
  { label: "Drone", value: "FIMI X8 SE" },
  { label: "Formato", value: "Web + Social" }
];

export const socialLinks = [
  { label: "WhatsApp", href: contact.whatsappUrl, icon: MessageCircle },
  { label: "Instagram", href: contact.instagramUrl, icon: Instagram },
  { label: "Portfolio", href: "#projects", icon: Aperture },
  { label: "Studio", href: "#about", icon: Sparkles },
  { label: "Filmes", href: "#projects", icon: Clapperboard }
];
