export const OFFER = {
  price: "R$ 24,90",
  checkoutUrl: "https://www.udemy.com/course/draft/7325535/?couponCode=NOV2026",
  guaranteeDays: 30,
};

export type Lesson = {
  title: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
};

export type Module = {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  objective: string;
  lessons: Lesson[];
  stack: string[];
  flow: string[];
  project: string;
  outcomes: string[];
};

type Level = Lesson["level"];

const lessons = (level: Level, titles: string[]): Lesson[] =>
  titles.map((title) => ({ title, level }));

export const MODULES: Module[] = [
  {
    id: "introducao",
    icon: "Sparkles",
    title: "Introdução",
    tagline: "Conheça o Lovable e crie o seu primeiro projeto",
    objective:
      "Entender o que é o Lovable e para quem ele é mais adequado, dominar a interface, os planos, workspaces, conectores e configurações, e publicar o primeiro projeto.",
    lessons: lessons("Iniciante", [
      "Bem-vindo ao curso",
      "Roteiro do curso",
      "O que é o Lovable e pra quem é mais adequado",
      "Cadastro da conta e primeiras impressões",
      "Planos do Lovable",
      "Biblioteca de templates do Lovable",
      "Entendendo o que é Workspace no Lovable",
      "Configurações do Lovable",
      "Mudando o idioma no Lovable",
      "Conectores do Lovable",
      "Criando o primeiro projeto no Lovable",
      "Como avaliar os gastos no prompt",
      "Visão geral das configurações de projeto no Lovable",
      "Modos Plan e Build, quando usar cada um",
      "Histórico de modificações",
      "Floating Toolbar para economizar pontos com isso",
      "Seção de navegação de recursos do projeto",
      "Recursos da interface e responsividade",
      "Publicação e compartilhamento do projeto",
    ]),
    stack: ["Lovable", "Templates", "Workspace", "Conectores", "Plan & Build"],
    flow: ["Conta", "Primeiro projeto", "Plan & Build", "Publicação"],
    project: "Primeiro projeto criado e publicado no Lovable",
    outcomes: [
      "Interface e configurações do Lovable",
      "Uso consciente dos créditos",
      "Publicação e compartilhamento",
    ],
  },
  {
    id: "landing-page",
    icon: "Layout",
    title: "Criação de uma Landing Page profissional",
    tagline: "Do projeto em branco ao domínio personalizado",
    objective:
      "Criar uma landing page com Lovable usando knowledge, screenshots, imagens e skills, conectar ao GitHub e publicar com domínio personalizado.",
    lessons: lessons("Iniciante", [
      "Criação de uma Landing Page com Lovable",
      "Criação do projeto em branco",
      "Adição da knowledge do projeto",
      "Tirar um screenshot para o projeto",
      "Criação do projeto usando imagens",
      "Skills no Lovable",
      "Criação de uma conta no Github e instalação do github",
      "Adição de um domínio personalizado",
      "Como publicar o projeto e conectar no github",
    ]),
    stack: ["Lovable", "Knowledge", "Skills", "GitHub", "Domínio"],
    flow: ["Knowledge", "Prompt + imagens", "GitHub", "Domínio"],
    project: "Landing page profissional publicada em domínio próprio",
    outcomes: [
      "Uso de knowledge e skills",
      "Projeto versionado no GitHub",
      "Domínio personalizado configurado",
    ],
  },
  {
    id: "prompt",
    icon: "Bot",
    title: "Engenharia de Prompt",
    tagline: "LLMs, tokens, técnicas e frameworks de prompt",
    objective:
      "Entender o que é um LLM e suas limitações, tokenização e embedding, janela de contexto, técnicas de prompt e formatos estruturados como Markdown, XML e JSON.",
    lessons: lessons("Intermediário", [
      "Introdução a Engenharia de Prompt",
      "O que é um LLM e quais as limitações",
      "Modelos de LLMs mais conhecidos no mercado",
      "Tokenização e Embedding",
      "Diretrizes para criação de prompts",
      "Janela de contexto para Prompt",
      "Técnicas para melhorar o prompt – parte 1 (Zero-Shot, One-Shot, Few-Shot)",
      "Técnicas para melhorar o prompt – parte 2 (Chain-of-Thought e Prompt Chaining)",
      "Framework para um bom prompt",
      "Análise da estrutura de um site e como adaptar o Prompt",
      "Documentação da OpenAI para Engenharia de Prompt",
      "Visão geral da plataforma da API da OpenAI",
      "Markdown e XML no prompt",
      "JSON Prompt",
      "Criação de conta na API da OpenAI",
    ]),
    stack: ["LLMs", "OpenAI", "Markdown", "XML", "JSON"],
    flow: ["Objetivo", "Técnica de prompt", "LLM", "Resultado"],
    project: "Prompts estruturados para construir e adaptar sites",
    outcomes: [
      "Tokenização, embedding e contexto",
      "Zero/Few-Shot e Chain-of-Thought",
      "Prompts em Markdown, XML e JSON",
    ],
  },
  {
    id: "design-system",
    icon: "Palette",
    title: "Design System",
    tagline: "Tailwind CSS, shadcn/ui e remix de projetos",
    objective:
      "Entender o que é um Design System, conhecer Tailwind CSS e shadcn/ui, extrair o design de um site de referência e aplicá-lo em novos projetos e remixes no Lovable.",
    lessons: lessons("Intermediário", [
      "Apresentação da seção",
      "O que é um Design System",
      "Conhecendo o Tailwind CSS e o shadcn/ui",
      "Onde encontrar modelos de site para se inspirar",
      "Como baixar um site",
      "Instalação do Visual Studio Code",
      "Como extrair o Design System",
      "Adição de um design system ao Lovable",
      "Criação de um site utilizando o design system",
      "Remix de projetos existentes aproveitando o design system",
    ]),
    stack: ["Tailwind CSS", "shadcn/ui", "VS Code", "Aura", "Mobbin"],
    flow: ["Referência", "Extração", "Design System", "Novo site"],
    project: "Site criado a partir de um Design System extraído",
    outcomes: [
      "Extração de Design System",
      "Tailwind CSS e shadcn/ui",
      "Remix de projetos existentes",
    ],
  },
  {
    id: "apis",
    icon: "Plug",
    title: "Integração com APIs e requisições HTTP",
    tagline: "JSON, verbos HTTP, Postman e um projeto com API externa",
    objective:
      "Entender JSON, APIs, verbos HTTP e autenticação, testar no Postman, separar front-end e back-end e construir no Lovable um projeto conectado a uma API externa.",
    lessons: lessons("Intermediário", [
      "Introdução a seção",
      "Conceitos de JSON, APIs e verbos HTTP",
      "Como instalar o Postman",
      "Configuração de uma coleção no Postman",
      "Entendendo o conceito de Back-end e Front-end",
      "Criação de um projeto conectando em uma API externa",
      "Criação do projeto no Lovable e adição da knowledge",
      "Criação da interface do Projeto",
      "Integração com a API e outras funcionalidades",
      "Refinamento da experiência do usuário",
      "Refatoração e design review",
      "Publicando o projeto e Desafio final",
    ]),
    stack: ["HTTP", "JSON", "Postman", "API Key", "OAuth", "Bearer Token"],
    flow: ["API externa", "Postman", "Lovable", "Publicação"],
    project: "Aplicação Lovable integrada a uma API externa, com desafio final",
    outcomes: [
      "Verbos HTTP e códigos de retorno",
      "Autenticação de APIs",
      "Front-end e back-end na prática",
    ],
  },
  {
    id: "banco-de-dados",
    icon: "Database",
    title: "Banco de dados",
    tagline: "Lovable Cloud, Supabase, SQL, RLS e Edge Functions",
    objective:
      "Entender bancos relacionais, comparar Lovable Cloud e Supabase, criar tabelas, usar SQL, aplicar segurança com RLS, Edge Functions e conectar o Supabase ao Lovable.",
    lessons: lessons("Intermediário", [
      "Visão geral da seção",
      "Banco de dados relacional",
      "Criação de uma aplicação de vendas com banco de dados",
      "O que é o Lovable cloud",
      "Supabase x Lovable cloud",
      "Criação de uma conta no Supabase",
      "Como criar uma tabela no Supabase",
      "Utilização de comandos SQL no Supabase",
      "Segurança no banco de dados: o que é RLS",
      "Edge Functions: executando lógica no backend",
      "Como evitar que o Supabase arquive seu banco de dados",
      "Conectando o Lovable no Supabase",
      "Como usar o Supabase em um projeto Lovable",
      "Teste final do projeto e publicação",
    ]),
    stack: ["Lovable Cloud", "Supabase", "SQL", "RLS", "Edge Functions"],
    flow: ["Lovable", "Supabase", "Tabelas + RLS", "Publicação"],
    project: "Aplicação de vendas com banco de dados",
    outcomes: [
      "Modelagem relacional e SQL",
      "Segurança com RLS",
      "Lógica de backend com Edge Functions",
    ],
  },
  {
    id: "n8n-webhooks",
    icon: "Workflow",
    title: "Integração a Webhooks no n8n",
    tagline: "O projeto ValidaLegal: Lovable + n8n + Supabase + IA",
    objective:
      "Integrar o Lovable ao n8n por webhooks e construir o ValidaLegal, com Supabase, agente de validação com OpenAI e base vetorial da LGPD.",
    lessons: lessons("Avançado", [
      "Visão geral da seção",
      "O que é o n8n e como criar um ambiente de avaliação",
      "Como funciona o webhook",
      "Teste do webhook no postman",
      "Tipos de webhook no n8n e tipos de resposta",
      "Respond to Webhook",
      "Autenticação no webhook",
      "Criação do webhook do ValidaLegal",
      "Criando a aplicação do ValidaLegal no Lovable",
      "Conectando o ValidaLegal ao Supabase e ao Webhook",
      "Teste de integração Lovable → n8n",
      "Definir o contrato de dados recebidos no webhook",
      "Conexão do n8n com o Supabase",
      "Conversão do base64 para documento",
      "Extração e conversão do documento no fluxo",
      "Criação de conta na API da OpenAI",
      "Criação do agente de validação",
      "Análise do Prompt do agente",
      "Criação do fluxo para a fonte de dados da LGPD",
      "Extração do documento para a base vetorial",
      "Criação da vector store no supabase",
      "Adição da base vetorial ao agente do n8n",
      "Estruturando a saída do documento analisado",
      "Envio dos dados finais para o banco de dados",
      "Completar o desenvolvimento do valida legal",
      "Validação do projeto e correção de bugs",
    ]),
    stack: ["n8n", "Webhook", "Supabase", "OpenAI", "Vector Store", "Lovable"],
    flow: ["Lovable", "Webhook n8n", "Agente + base LGPD", "Supabase"],
    project: "ValidaLegal: validação de documentos com IA e base da LGPD",
    outcomes: [
      "Integração Lovable → n8n por webhook",
      "Agente de IA com base vetorial",
      "Fluxo completo com Supabase",
    ],
  },
  {
    id: "rede-social",
    icon: "Users",
    title: "Criação de uma rede social com Lovable",
    tagline: "Comunidades, discussões e login com Google",
    objective:
      "Construir uma rede social com identidade visual própria, Supabase externo, Google OAuth 2.0, comunidades, discussões e interações.",
    lessons: lessons("Avançado", [
      "Entender o projeto e preparar o ambiente",
      "Criar identidade visual, landing e Hero",
      "Configurar o projeto no Supabase",
      "Google OAuth 2.0 no Google Cloud",
      "Conectar o Supabase externo com segurança",
      "Construir comunidades, discussões e interações",
      "Concluir navegação, edição e estados de interface",
    ]),
    stack: ["Lovable", "Supabase", "Google OAuth 2.0", "Google Cloud"],
    flow: ["Login Google", "Supabase", "Comunidades", "Interações"],
    project: "Rede social com comunidades e login Google",
    outcomes: [
      "Autenticação com Google OAuth",
      "Supabase externo com segurança",
      "Estados de interface completos",
    ],
  },
  {
    id: "saas-ia",
    icon: "Cpu",
    title: "SaaS com inteligência artificial",
    tagline: "Análise visual com IA, relatório e histórico",
    objective:
      "Planejar e construir um SaaS com autenticação, banco de dados, armazenamento e integração segura com a API da OpenAI para análise visual e relatórios.",
    lessons: lessons("Avançado", [
      "Planejamento do projeto e preparação do ambiente",
      "Interface, identidade visual e navegação",
      "Autenticação, banco de dados e armazenamento",
      "Uma chave da OpenAI e integrar a API com segurança",
      "Motor de análise visual, evidências e relatório",
      "Histórico, testes, segurança e finalização",
    ]),
    stack: ["Lovable", "OpenAI", "Autenticação", "Storage", "Banco de dados"],
    flow: ["Upload", "Análise com IA", "Relatório", "Histórico"],
    project: "SaaS de análise visual com IA",
    outcomes: [
      "Integração segura com a OpenAI",
      "Autenticação e armazenamento",
      "Produto SaaS finalizado",
    ],
  },
  {
    id: "dashboard",
    icon: "BarChart3",
    title: "Dashboard no Lovable",
    tagline: "Dados, storytelling, filtros e deploy",
    objective:
      "Construir um dashboard a partir de dados públicos do World Bank: arquitetura dos dados, identidade visual, análises com storytelling, filtros e deploy.",
    lessons: lessons("Avançado", [
      "Apresentação do projeto",
      "Arquitetura e preparação dos dados",
      "Identidade visual e primeiras telas",
      "Análises e storytelling",
      "Validação e correção",
      "Adição de filtros e testes finais",
      "Deploy da aplicação",
    ]),
    stack: ["Lovable", "World Bank Data", "Gráficos", "Filtros"],
    flow: ["Dados", "Preparação", "Análises", "Deploy"],
    project: "Dashboard analítico publicado",
    outcomes: [
      "Preparação de dados",
      "Storytelling com dados",
      "Filtros e deploy",
    ],
  },
];

export const TOTAL_LESSONS = MODULES.reduce((n, m) => n + m.lessons.length, 0);
export const TOTAL_LESSONS_LABEL = String(TOTAL_LESSONS);

export const TECHS = [
  "Lovable",
  "Lovable Cloud",
  "Supabase",
  "n8n",
  "OpenAI",
  "GitHub",
  "Tailwind CSS",
  "shadcn/ui",
  "Postman",
  "Webhooks",
  "RLS",
  "Edge Functions",
  "Google OAuth",
  "Vector Store",
];

export const FAQ = [
  {
    q: "Preciso saber programar?",
    a: "Não. O curso começa do zero, pela interface do Lovable, e avança passo a passo até projetos com banco de dados, APIs e n8n.",
  },
  {
    q: "Quais ferramentas vou usar?",
    a: "Lovable, Lovable Cloud, Supabase, n8n, OpenAI, GitHub, Postman, Tailwind CSS e shadcn/ui, todas apresentadas ao longo dos módulos.",
  },
  {
    q: "Quais projetos vou construir?",
    a: "Uma landing page profissional, uma aplicação com API externa, uma aplicação de vendas com banco de dados, o ValidaLegal (Lovable + n8n + Supabase + IA), uma rede social, um SaaS com IA e um dashboard.",
  },
  {
    q: "Quanto custa e onde compro?",
    a: `O curso custa ${OFFER.price} na Udemy, com o cupom aplicado no botão de compra.`,
  },
  {
    q: "E se eu não gostar?",
    a: `Você tem ${OFFER.guaranteeDays} dias de garantia. Basta pedir reembolso.`,
  },
];
