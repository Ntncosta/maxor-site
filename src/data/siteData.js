import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cake,
  CalendarHeart,
  Clock3,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Palette,
  PenLine,
  Sparkles,
  Star,
  UsersRound,
  WandSparkles
} from "lucide-react";

export const contact = {
  phoneLabel: "+55 11 99999-9999",
  whatsappUrl: "https://wa.me/5511999999999",
  instagramLabel: "@caricaturaaovivo",
  instagramUrl: "https://instagram.com/",
  email: "contato@caricaturaaovivo.com",
  location: "Sao Paulo, Brasil"
};

export const navItems = [
  { label: "Trabalhos", href: "#gallery" },
  { label: "Duas maos", href: "#two-hands" },
  { label: "Eventos", href: "#events" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" }
];

export const stats = [
  { label: "ao vivo", value: "8 min" },
  { label: "eventos", value: "300+" },
  { label: "estilo", value: "autor" }
];

export const galleryCategories = [
  "Todos",
  "Caricaturas de rua",
  "Caricaturas estilizadas",
  "Eventos",
  "Desenhos rapidos"
];

export const gallery = [
  {
    title: "Sorriso de Avenida",
    category: "Caricaturas de rua",
    image:
      "https://images.unsplash.com/photo-1529504472001-358df1e0c596?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Personagem de Gala",
    category: "Caricaturas estilizadas",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Noite Corporativa",
    category: "Eventos",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Sketch em Movimento",
    category: "Desenhos rapidos",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Olhar Disney Urbano",
    category: "Caricaturas estilizadas",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Fila Feliz",
    category: "Caricaturas de rua",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=82"
  }
];

export const aboutPoints = [
  {
    title: "Caricaturas feitas na hora",
    text: "Traços rapidos, expressivos e personalizados para cada rosto.",
    icon: Clock3
  },
  {
    title: "Experiencia artistica unica",
    text: "O publico acompanha o desenho nascer ao vivo, com humor e presenca.",
    icon: Sparkles
  },
  {
    title: "Desenhos com duas maos",
    text: "Performance rara que transforma o processo em parte do espetaculo.",
    icon: PenLine
  },
  {
    title: "Estilo moderno estilizado",
    text: "Energia urbana, sketchbook e acabamento premium em cada composicao.",
    icon: Palette
  }
];

export const twoHandsSteps = [
  "Duas linhas nascem ao mesmo tempo",
  "Expressao, humor e proporcao em sincronia",
  "Finalizacao rapida diante do publico"
];

export const events = [
  {
    title: "Casamentos",
    text: "Lembrancas afetivas para convidados, padrinhos e familia.",
    icon: CalendarHeart
  },
  {
    title: "Aniversarios",
    text: "Entretenimento ao vivo com entrega fisica ou digital.",
    icon: Cake
  },
  {
    title: "Empresas",
    text: "Ativacoes de marca, confraternizacoes e brindes personalizados.",
    icon: Building2
  },
  {
    title: "Feiras",
    text: "Performance que atrai publico e cria movimento no estande.",
    icon: UsersRound
  },
  {
    title: "Eventos corporativos",
    text: "Experiencia premium para equipes, clientes e convidados VIP.",
    icon: BriefcaseBusiness
  }
];

export const testimonials = [
  {
    quote:
      "A fila virou parte da atracao. Todo mundo queria ver o desenho acontecendo e sair com a propria caricatura.",
    name: "Marina Duarte",
    role: "Produtora de eventos"
  },
  {
    quote:
      "Elegante, pontual e muito carismatico. As caricaturas ficaram com personalidade sem perder o carinho com os convidados.",
    name: "Rafael Nunes",
    role: "Noivo"
  },
  {
    quote:
      "A performance com duas maos prendeu a feira inteira por alguns minutos. Foi exatamente o impacto que queriamos.",
    name: "Bianca Torres",
    role: "Marketing corporativo"
  }
];

export const socialLinks = [
  { label: "Instagram", href: contact.instagramUrl, icon: Instagram },
  { label: "WhatsApp", href: contact.whatsappUrl, icon: MessageCircle },
  { label: "Localizacao", href: "#contact", icon: MapPin },
  { label: "Trabalhos", href: "#gallery", icon: WandSparkles },
  { label: "Depoimentos", href: "#testimonials", icon: Star },
  { label: "Sobre", href: "#about", icon: BadgeCheck },
  { label: "Contato", href: "#contact", icon: HeartHandshake }
];
