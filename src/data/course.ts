export const OFFER = {
  price: "R$ 24,90",
  checkoutUrl: "https://www.udemy.com/course/draft/7325535/?couponCode=NOV2026",
  guaranteeDays: 30,
};

export type LessonMaterial = {
  label: string;
  url?: string;
  note?: string;
};

export type Lesson = {
  number: string;
  title: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
  materials?: LessonMaterial[];
  description?: string;
};

export type ModuleCategory =
  | "Lovable"
  | "Engenharia de Prompt"
  | "Design System"
  | "APIs"
  | "Supabase"
  | "n8n"
  | "Inteligência Artificial"
  | "Projetos";

export type Module = {
  id: string;
  number: number;
  icon: string;
  category: ModuleCategory;
  title: string;
  tagline: string;
  objective: string;
  lessons: Lesson[];
  stack: string[];
  flow: string[];
  project: string;
  outcomes: string[];
};

export const MODULES: Module[] = [
  {
    id: "introducao",
    number: 1,
    icon: "Sparkles",
    category: "Lovable",
    title: "Introdução",
    tagline: "Conheça o Lovable e domine a interface de ponta a ponta",
    objective:
      "Entender o que é o Lovable e para quem é mais adequado, cadastro, planos, workspaces, configurações, conectores, modos Plan e Build, economia de créditos e publicação do primeiro projeto.",
    lessons: [
      { number: "1.1", title: "Bem-vindo ao curso", level: "Iniciante" },
      { number: "1.2", title: "Roteiro do curso", level: "Iniciante" },
      { number: "1.3", title: "O que é o Lovable e pra quem é mais adequado", level: "Iniciante" },
      { number: "1.4", title: "Cadastro da conta e primeiras impressões", level: "Iniciante" },
      { number: "1.5", title: "Planos do Lovable", level: "Iniciante" },
      { number: "1.6", title: "Biblioteca de templates do Lovable", level: "Iniciante" },
      { number: "1.7", title: "Entendendo o que é Workspace no Lovable", level: "Iniciante" },
      { number: "1.8", title: "Configurações do Lovable", level: "Iniciante" },
      { number: "1.9", title: "Mudando o idioma no Lovable", level: "Iniciante" },
      { number: "1.10", title: "Conectores do Lovable", level: "Iniciante" },
      { number: "1.11", title: "Criando o primeiro projeto no Lovable", level: "Iniciante" },
      { number: "1.12", title: "Como avaliar os gastos no prompt", level: "Iniciante" },
      {
        number: "1.13",
        title: "Visão geral das configurações de projeto no Lovable",
        level: "Iniciante",
      },
      { number: "1.14", title: "Modos Plan e Build, quando usar cada um", level: "Iniciante" },
      { number: "1.15", title: "Histórico de modificações", level: "Iniciante" },
      {
        number: "1.16",
        title: "Floating Toolbar para economizar pontos com isso",
        level: "Iniciante",
      },
      { number: "1.17", title: "Seção de navegação de recursos do projeto", level: "Iniciante" },
      { number: "1.18", title: "Recursos da interface e responsividade", level: "Iniciante" },
      { number: "1.19", title: "Publicação e compartilhamento do projeto", level: "Iniciante" },
    ],
    stack: ["Lovable", "Templates", "Workspace", "Conectores", "Plan & Build"],
    flow: ["Cadastro", "Workspace", "Primeiro Projeto", "Plan vs Build", "Deploy"],
    project: "Primeira aplicação criada, configurada e compartilhada no Lovable",
    outcomes: [
      "Domínio completo da interface e configurações do Lovable",
      "Economia de créditos usando a Floating Toolbar e modos certos",
      "Publicação e compartilhamento instantâneo de projetos",
    ],
  },
  {
    id: "landing-page",
    number: 2,
    icon: "Layout",
    category: "Projetos",
    title: "Criação de uma Landing Page profissional",
    tagline: "Do projeto em branco ao domínio personalizado com GitHub",
    objective:
      "Criar uma landing page de alta conversão usando Lovable, knowledge, screenshots, imagens e skills, conectar ao GitHub e publicar com domínio próprio.",
    lessons: [
      { number: "2.1", title: "Criação de uma Landing Page com Lovable", level: "Iniciante" },
      {
        number: "2.2",
        title: "Criação do projeto em branco",
        level: "Iniciante",
        materials: [{ label: "Projeto em branco" }],
      },
      { number: "2.3", title: "Adição da knowledge do projeto", level: "Iniciante" },
      { number: "2.4", title: "Tirar um screenshot para o projeto", level: "Iniciante" },
      { number: "2.5", title: "Criação do projeto usando imagens", level: "Iniciante" },
      { number: "2.6", title: "Skills no Lovable", level: "Iniciante" },
      {
        number: "2.7",
        title: "Criação de uma conta no Github e instalação do github",
        level: "Iniciante",
      },
      { number: "2.8", title: "Adição de um domínio personalizado", level: "Iniciante" },
      { number: "2.9", title: "Como publicar o projeto e conectar no github", level: "Iniciante" },
    ],
    stack: ["Lovable", "Knowledge", "Skills", "GitHub", "Domínio Personalizado"],
    flow: ["Knowledge", "Prompt + Imagens", "Skills", "GitHub", "Domínio Próprio"],
    project: "Projeto 01 — Landing Page profissional publicada em domínio próprio",
    outcomes: [
      "Criação orientada a referências visuais e imagens de apoio",
      "Configuração de knowledge e skills personalizadas",
      "Versionamento profissional no GitHub e apontamento de DNS",
    ],
  },
  {
    id: "prompt",
    number: 3,
    icon: "Bot",
    category: "Engenharia de Prompt",
    title: "Engenharia de Prompt",
    tagline: "LLMs, tokens, técnicas avançadas e frameworks de prompt",
    objective:
      "Dominar fundamentos de LLMs, tokenização, embeddings, janela de contexto, técnicas Zero/One/Few-Shot, Chain-of-Thought e estruturas em Markdown, XML e JSON.",
    lessons: [
      { number: "3.1", title: "Introdução a Engenharia de Prompt", level: "Intermediário" },
      { number: "3.2", title: "O que é um LLM e quais as limitações", level: "Intermediário" },
      {
        number: "3.3",
        title: "Modelos de LLMs mais conhecidos no mercado",
        level: "Intermediário",
      },
      {
        number: "3.4",
        title: "Tokenização e Embedding",
        level: "Intermediário",
        materials: [
          { label: "Token Calculator", url: "https://www.token-calculator.com/" },
          { label: "OpenAI Tokenizer", url: "https://platform.openai.com/tokenizer" },
          {
            label: "TensorFlow Embedding Projector",
            url: "https://projector.tensorflow.org/",
            note: "Álgebra linear demonstrando o processo de embedding",
          },
        ],
      },
      { number: "3.5", title: "Diretrizes para criação de prompts", level: "Intermediário" },
      { number: "3.6", title: "Janela de contexto para Prompt", level: "Intermediário" },
      {
        number: "3.7",
        title: "Técnicas para melhorar o prompt – parte 1",
        level: "Intermediário",
        materials: [{ label: "Técnicas", note: "Zero-Shot, One-Shot e Few-Shot" }],
      },
      {
        number: "3.8",
        title: "Técnicas para melhorar o prompt – parte 2",
        level: "Intermediário",
        materials: [
          { label: "Técnicas", note: "Chain-of-Thought (Cadeia de pensamentos) e Prompt Chaining" },
        ],
      },
      {
        number: "3.9",
        title: "Framework para um bom prompt",
        level: "Intermediário",
        materials: [
          {
            label: "Framework",
            note: "Emotion Prompt, você é muito bom em vendas e muito persuasivo",
          },
        ],
      },
      {
        number: "3.10",
        title: "Análise da estrutura de um site e como adaptar o Prompt",
        level: "Intermediário",
      },
      {
        number: "3.11",
        title: "Documentação da OpenAI para Engenharia de Prompt",
        level: "Intermediário",
        materials: [
          {
            label: "OpenAI Prompt Engineering Guide (6 estratégias)",
            url: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api",
          },
        ],
      },
      {
        number: "3.12",
        title: "Visão geral da plataforma da API da OpenAI",
        level: "Intermediário",
        materials: [{ label: "OpenAI Pricing", url: "https://openai.com/pt-BR/api/pricing/" }],
      },
      { number: "3.13", title: "Markdown e XML no prompt", level: "Intermediário" },
      { number: "3.14", title: "JSON Prompt", level: "Intermediário" },
      {
        number: "3.15",
        title: "Criação de conta na API da OpenAI",
        level: "Intermediário",
        materials: [{ label: "OpenAI Platform", url: "https://platform.openai.com/home" }],
      },
    ],
    stack: ["LLMs", "OpenAI", "Embeddings", "Tokens", "Markdown", "XML", "JSON"],
    flow: [
      "Contexto",
      "Técnicas Zero/Few-Shot",
      "Chain-of-Thought",
      "Formatação Estruturada",
      "API OpenAI",
    ],
    project: "Framework de prompts estruturados para construção acelerada de software com IA",
    outcomes: [
      "Compreensão de tokenização, espaço vetorial e limites de contexto",
      "Domínio de técnicas Zero-Shot, Few-Shot e Chain-of-Thought",
      "Construção de prompts precisos em formatos Markdown, XML e JSON",
    ],
  },
  {
    id: "design-system",
    number: 4,
    icon: "Palette",
    category: "Design System",
    title: "Design System",
    tagline: "Tailwind CSS, shadcn/ui, extração visual e remix de projetos",
    objective:
      "Aprender o que é um Design System, dominar Tailwind CSS e shadcn/ui, encontrar e baixar sites de referência, extrair componentes e criar remixes de alto nível no Lovable.",
    lessons: [
      { number: "4.1", title: "Apresentação da seção", level: "Intermediário" },
      { number: "4.2", title: "O que é um Design System", level: "Intermediário" },
      {
        number: "4.3",
        title: "Conhecendo o Tailwind CSS e o shadcn/ui",
        level: "Intermediário",
        materials: [{ label: "shadcn/ui", url: "https://ui.shadcn.com/" }],
      },
      {
        number: "4.4",
        title: "Onde encontrar modelos de site para se inspirar",
        level: "Intermediário",
        materials: [
          { label: "Aura Build", url: "https://www.aura.build/" },
          { label: "Mobbin", url: "https://mobbin.com/" },
          { label: "Taskade", url: "https://www.taskade.com/" },
        ],
      },
      { number: "4.5", title: "Como baixar um site", level: "Intermediário" },
      { number: "4.6", title: "Instalação do Visual Studio Code", level: "Intermediário" },
      { number: "4.7", title: "Como extrair o Design System", level: "Intermediário" },
      { number: "4.8", title: "Adição de um design system ao Lovable", level: "Intermediário" },
      {
        number: "4.9",
        title: "Criação de um site utilizando o design system",
        level: "Intermediário",
      },
      {
        number: "4.10",
        title: "Remix de projetos existentes aproveitando o design system",
        level: "Intermediário",
      },
    ],
    stack: ["Tailwind CSS", "shadcn/ui", "Aura Build", "Mobbin", "VS Code"],
    flow: [
      "Referência",
      "Download e Inspeção",
      "Extração de Tokens",
      "Integração Lovable",
      "Remix",
    ],
    project: "Design System proprietário extraído e aplicado na criação de nova aplicação",
    outcomes: [
      "Metodologia para desconstruir qualquer design de referência",
      "Aplicação de tokens de cores, tipografia e componentes shadcn/ui",
      "Remix ágil de interfaces mantendo padrão visual profissional",
    ],
  },
  {
    id: "apis",
    number: 5,
    icon: "Plug",
    category: "APIs",
    title: "Integração com APIs e requisições HTTP",
    tagline: "JSON, verbos HTTP, Postman e o projeto StockFlow",
    objective:
      "Aprender arquitetura de APIs, códigos HTTP, autenticação (API Key, OAuth, Bearer Token, Basic Auth), testes com Postman, separação front/back e construir a aplicação integrada a APIs externas.",
    lessons: [
      { number: "5.1", title: "Introdução a seção", level: "Intermediário" },
      {
        number: "5.2",
        title: "Conceitos de JSON, APIs e verbos HTTP",
        level: "Intermediário",
        description:
          "Verbos HTTP (GET, POST, PUT, DELETE, PATCH), códigos de retorno/erro e segurança da API com autenticação.",
        materials: [
          {
            label: "Métodos de Autenticação",
            note: "API Key, OAuth, Bearer Token e Basic Auth",
          },
        ],
      },
      { number: "5.3", title: "Como instalar o Postman", level: "Intermediário" },
      {
        number: "5.4",
        title: "Configuração de uma coleção no Postman",
        level: "Intermediário",
        materials: [{ label: "Fake Store API", url: "https://fakestoreapi.com/products" }],
      },
      {
        number: "5.5",
        title: "Entendendo o conceito de Back-end e Front-end",
        level: "Intermediário",
      },
      {
        number: "5.6",
        title: "Criação de um projeto conectando em uma API externa",
        level: "Intermediário",
        materials: [
          { label: "DummyJSON API", url: "https://dummyjson.com/" },
          {
            label: "APIs Públicas Complementares",
            note: "Weather, News, Books, Gallery e Sports APIs",
          },
        ],
      },
      {
        number: "5.7",
        title: "Criação do projeto no Lovable e adição da knowledge",
        level: "Intermediário",
      },
      { number: "5.8", title: "Criação da interface do Projeto", level: "Intermediário" },
      {
        number: "5.9",
        title: "Integração com a API e outras funcionalidades",
        level: "Intermediário",
      },
      { number: "5.10", title: "Refinamento da experiência do usuário", level: "Intermediário" },
      { number: "5.11", title: "Refatoração e design review", level: "Intermediário" },
      { number: "5.12", title: "Publicando o projeto e Desafio final", level: "Intermediário" },
    ],
    stack: ["REST APIs", "HTTP", "JSON", "Postman", "Bearer Token", "OAuth", "API Key"],
    flow: [
      "Análise de API",
      "Testes no Postman",
      "Knowledge no Lovable",
      "Interface",
      "Integração",
    ],
    project: "Projeto 02 — Aplicação com API Externa (StockFlow)",
    outcomes: [
      "Tratamento de status codes, payloads JSON e autenticação",
      "Separação clara entre camada visual e consumo de dados remotos",
      "Construção e publicação de uma aplicação conectada a APIs reais",
    ],
  },
  {
    id: "banco-de-dados",
    number: 6,
    icon: "Database",
    category: "Supabase",
    title: "Banco de dados",
    tagline: "Lovable Cloud vs Supabase, SQL, RLS e Edge Functions",
    objective:
      "Dominar bancos relacionais, comparar Lovable Cloud com Supabase, modelar tabelas, executar SQL, aplicar RLS (Row Level Security), Edge Functions para backend e rotinas anti-arquivamento.",
    lessons: [
      { number: "6.1", title: "Visão geral da seção", level: "Intermediário" },
      { number: "6.2", title: "Banco de dados relacional", level: "Intermediário" },
      {
        number: "6.3",
        title: "Criação de uma aplicação de vendas com banco de dados",
        level: "Intermediário",
      },
      { number: "6.4", title: "O que é o Lovable cloud", level: "Intermediário" },
      { number: "6.5", title: "Supabase x Lovable cloud", level: "Intermediário" },
      { number: "6.6", title: "Criação de uma conta no Supabase", level: "Intermediário" },
      { number: "6.7", title: "Como criar uma tabela no Supabase", level: "Intermediário" },
      { number: "6.8", title: "Utilização de comandos SQL no Supabase", level: "Intermediário" },
      { number: "6.9", title: "Segurança no banco de dados: o que é RLS", level: "Intermediário" },
      {
        number: "6.10",
        title: "Edge Functions: executando lógica no backend",
        level: "Intermediário",
      },
      {
        number: "6.11",
        title: "Como evitar que o Supabase arquive seu banco de dados",
        level: "Intermediário",
        materials: [{ label: "Rotina Cron", note: "Configuração: 0 0 */6 * *" }],
      },
      { number: "6.12", title: "Conectando o Lovable no Supabase", level: "Intermediário" },
      {
        number: "6.13",
        title: "Como usar o Supabase em um projeto Lovable",
        level: "Intermediário",
      },
      { number: "6.14", title: "Teste final do projeto e publicação", level: "Intermediário" },
    ],
    stack: ["Supabase", "Lovable Cloud", "PostgreSQL", "SQL", "RLS", "Edge Functions", "Cron"],
    flow: ["Modelagem", "Tabelas e SQL", "Políticas RLS", "Edge Functions", "Integração Lovable"],
    project: "Projeto 03 — Aplicação de Vendas com Banco de Dados e RLS",
    outcomes: [
      "Criação e manipulação de tabelas relacionais com SQL no Supabase",
      "Proteção de dados com políticas RLS (Row Level Security)",
      "Automação de backend com Edge Functions e prevenção de inatividade",
    ],
  },
  {
    id: "n8n-webhooks",
    number: 7,
    icon: "Workflow",
    category: "n8n",
    title: "Integração a Webhooks no n8n",
    tagline: "O projeto ValidaLegal: Lovable + n8n + Supabase + IA",
    objective:
      "Integrar Lovable ao n8n por webhooks e construir o ValidaLegal: extração de documentos em base64, agente de IA com OpenAI, base vetorial da LGPD no Supabase e contrato completo de dados.",
    lessons: [
      { number: "7.1", title: "Visão geral da seção", level: "Avançado" },
      {
        number: "7.2",
        title: "O que é o n8n e como criar um ambiente de avaliação",
        level: "Avançado",
      },
      { number: "7.3", title: "Como funciona o webhook", level: "Avançado" },
      { number: "7.4", title: "Teste do webhook no postman", level: "Avançado" },
      { number: "7.5", title: "Tipos de webhook no n8n e tipos de resposta", level: "Avançado" },
      { number: "7.6", title: "Respond to Webhook", level: "Avançado" },
      { number: "7.7", title: "Autenticação no webhook", level: "Avançado" },
      { number: "7.8", title: "Criação do webhook do ValidaLegal", level: "Avançado" },
      {
        number: "7.9",
        title: "Criando a aplicação do ValidaLegal no Lovable",
        level: "Avançado",
        materials: [
          { label: "Material Oficial", note: "Prompt 1 — Construção da interface no Lovable" },
        ],
      },
      {
        number: "7.10",
        title: "Conectando o ValidaLegal ao Supabase e ao Webhook",
        level: "Avançado",
        materials: [{ label: "Material Oficial", note: "Prompt 2 — Conexão Supabase + Webhook" }],
      },
      { number: "7.11", title: "Teste de integração Lovable → n8n", level: "Avançado" },
      {
        number: "7.12",
        title: "Definir o contrato de dados recebidos no webhook",
        level: "Avançado",
        materials: [{ label: "Material Oficial", note: "Prompt 3 — Contrato e payload de dados" }],
      },
      { number: "7.13", title: "Conexão do n8n com o Supabase", level: "Avançado" },
      { number: "7.14", title: "Conversão do base64 para documento", level: "Avançado" },
      { number: "7.15", title: "Extração e conversão do documento no fluxo", level: "Avançado" },
      {
        number: "7.16",
        title: "Criação de conta na API da OpenAI",
        level: "Avançado",
        materials: [
          { label: "Recurso em Vídeo", note: "6.12.Criação de conta na API da OpenAI.mp4" },
        ],
      },
      { number: "7.17", title: "Criação do agente de validação", level: "Avançado" },
      { number: "7.18", title: "Análise do Prompt do agente", level: "Avançado" },
      {
        number: "7.19",
        title: "Criação do fluxo para a fonte de dados da LGPD",
        level: "Avançado",
      },
      { number: "7.20", title: "Extração do documento para a base vetorial", level: "Avançado" },
      { number: "7.21", title: "Criação da vector store no supabase", level: "Avançado" },
      { number: "7.22", title: "Adição da base vetorial ao agente do n8n", level: "Avançado" },
      { number: "7.23", title: "Estruturando a saída do documento analisado", level: "Avançado" },
      { number: "7.24", title: "Envio dos dados finais para o banco de dados", level: "Avançado" },
      {
        number: "7.25",
        title: "Completar o desenvolvimento do valida legal",
        level: "Avançado",
        materials: [
          { label: "Material Oficial", note: "Prompt 4 — Finalização de funcionalidades" },
        ],
      },
      {
        number: "7.26",
        title: "Validação do projeto e correção de bugs",
        level: "Avançado",
        materials: [{ label: "Material Oficial", note: "Prompt 5 — Validação e debug final" }],
      },
    ],
    stack: ["Lovable", "n8n", "Webhooks", "Supabase", "OpenAI", "Vector Store", "Base LGPD"],
    flow: [
      "Upload no Lovable",
      "Webhook n8n",
      "Base64 para Doc",
      "Agente RAG LGPD",
      "Gravação Supabase",
    ],
    project: "Projeto 04 — ValidaLegal (Validação de Documentos com n8n, Supabase e OpenAI)",
    outcomes: [
      "Comunicação bidirecional segura entre Lovable e n8n por Webhook",
      "Processamento de arquivos binários, base64 e extração de texto",
      "Agente de IA alimentado por base vetorial RAG no Supabase",
    ],
  },
  {
    id: "rede-social",
    number: 8,
    icon: "Users",
    category: "Projetos",
    title: "Criação de uma rede social com Lovable",
    tagline: "Google OAuth 2.0, Supabase externo, comunidades e discussões",
    objective:
      "Construir uma rede social do zero com Lovable: arquitetura visual, autenticação Google OAuth 2.0 via Google Cloud, conexão segura ao Supabase externo, comunidades, discussões e interações.",
    lessons: [
      { number: "8.1", title: "Entender o projeto e preparar o ambiente", level: "Avançado" },
      { number: "8.2", title: "Criar identidade visual, landing e Hero", level: "Avançado" },
      { number: "8.3", title: "Configurar o projeto no Supabase", level: "Avançado" },
      { number: "8.4", title: "Google OAuth 2.0 no Google Cloud", level: "Avançado" },
      { number: "8.5", title: "Conectar o Supabase externo com segurança", level: "Avançado" },
      { number: "8.6", title: "Construir comunidades, discussões e interações", level: "Avançado" },
      {
        number: "8.7",
        title: "Concluir navegação, edição e estados de interface",
        level: "Avançado",
      },
    ],
    stack: ["Lovable", "Supabase", "Google OAuth 2.0", "Google Cloud Console", "Comunidades"],
    flow: [
      "Identidade Visual",
      "Google Cloud OAuth",
      "Supabase Externo",
      "Feed e Discussões",
      "Estados de UI",
    ],
    project: "Projeto 05 — Rede Social Completa com Comunidades e Login Google",
    outcomes: [
      "Autenticação corporativa com Google OAuth 2.0 no Google Cloud",
      "Estrutura relacional para feeds, posts, tópicos e interações de usuários",
      "Navegação refinada, estados vazios e edição de perfis",
    ],
  },
  {
    id: "saas-ia",
    number: 9,
    icon: "Cpu",
    category: "Inteligência Artificial",
    title: "SaaS com inteligência artificial",
    tagline: "O projeto Veritas AI: Análise visual com OpenAI, evidências e relatórios",
    objective:
      "Planejar e implementar um software como serviço (SaaS): autenticação, banco de dados, storage, consumo seguro da API da OpenAI, motor de análise visual, geração de evidências e relatórios.",
    lessons: [
      {
        number: "9.1",
        title: "Planejamento do projeto e preparação do ambiente",
        level: "Avançado",
      },
      { number: "9.2", title: "Interface, identidade visual e navegação", level: "Avançado" },
      { number: "9.3", title: "Autenticação, banco de dados e armazenamento", level: "Avançado" },
      {
        number: "9.4",
        title: "Uma chave da OpenAI e integrar a API com segurança",
        level: "Avançado",
      },
      {
        number: "9.5",
        title: "Motor de análise visual, evidências e relatório",
        level: "Avançado",
      },
      { number: "9.6", title: "Histórico, testes, segurança e finalização", level: "Avançado" },
    ],
    stack: ["Lovable", "OpenAI Vision", "Supabase Storage", "Auth", "Relatórios"],
    flow: [
      "Upload de Mídia",
      "Storage Seguro",
      "Chamada OpenAI",
      "Motor de Evidências",
      "Relatório e Histórico",
    ],
    project:
      "Projeto 06 — SaaS Veritas AI (Análise Visual e Evidências com Inteligência Artificial)",
    outcomes: [
      "Arquitetura de microsserviço SaaS com plano de uso e autenticação",
      "Processamento e análise de imagens com modelos multimodais da OpenAI",
      "Geração de relatórios analíticos com histórico persistido",
    ],
  },
  {
    id: "dashboard",
    number: 10,
    icon: "BarChart3",
    category: "Projetos",
    title: "Dashboard no Lovable",
    tagline: "Dados reais do Banco Mundial, storytelling analítico, filtros e deploy",
    objective:
      "Construir um dashboard analítico executivo: ingestão de dados públicos do World Bank, arquitetura de indicadores, storytelling com gráficos interativos, filtros dinâmicos e deploy final.",
    lessons: [
      {
        number: "10.1",
        title: "Apresentação do projeto",
        level: "Avançado",
        materials: [
          {
            label: "World Bank DataBank — Acesso à Eletricidade",
            url: "https://databank.worldbank.org/source/2?series=EG.ELC.ACCS.ZS#",
          },
        ],
      },
      { number: "10.2", title: "Arquitetura e preparação dos dados", level: "Avançado" },
      { number: "10.3", title: "Identidade visual e primeiras telas", level: "Avançado" },
      { number: "10.4", title: "Análises e storytelling", level: "Avançado" },
      { number: "10.5", title: "Validação e correção", level: "Avançado" },
      { number: "10.6", title: "Adição de filtros e testes finais", level: "Avançado" },
      { number: "10.7", title: "Deploy da aplicação", level: "Avançado" },
    ],
    stack: ["Lovable", "World Bank Data", "Recharts", "Filtros Multidimensionais", "Storytelling"],
    flow: [
      "Base World Bank",
      "Tratamento de Dados",
      "Layout Executivo",
      "Gráficos Interativos",
      "Deploy",
    ],
    project: "Projeto 07 — Dashboard Executivo Analítico com Dados do Banco Mundial",
    outcomes: [
      "Transformação de dados brutos complexos em visualizações executivas",
      "Storytelling com métricas de impacto, séries temporais e filtros",
      "Deploy e entrega de uma solução de Business Intelligence funcional",
    ],
  },
];

export const TOTAL_MODULES = MODULES.length;
export const TOTAL_LESSONS = MODULES.reduce((n, m) => n + m.lessons.length, 0);
export const TOTAL_LESSONS_LABEL = String(TOTAL_LESSONS);

export const TECHS = [
  "Lovable",
  "Lovable Cloud",
  "n8n",
  "Supabase",
  "OpenAI",
  "Tailwind CSS",
  "shadcn/ui",
  "Postman",
  "GitHub",
  "Webhooks",
  "Edge Functions",
  "RLS",
  "Google OAuth 2.0",
  "Vector Store",
  "World Bank Data",
];

export const REAL_PROJECTS = [
  {
    id: "landing-page",
    number: "01",
    title: "Landing Page Profissional",
    subtitle: "Do projeto em branco ao domínio próprio",
    description:
      "Construção completa de uma landing page com Lovable utilizando knowledge, screenshots de inspiração, skills, versionamento no GitHub e configuração de domínio personalizado.",
    stack: ["Lovable", "Knowledge", "Skills", "GitHub", "Domínio"],
    flow: ["Prompt & Imagens", "Knowledge", "Skills", "GitHub", "Domínio"],
  },
  {
    id: "stockflow",
    number: "02",
    title: "Aplicação com API Externa (StockFlow)",
    subtitle: "Consumo de dados remotos e design refinado",
    description:
      "Integração do Lovable com APIs externas e verbos HTTP, testada previamente no Postman, com arquitetura front/back, tratamento de erros e desafio prático.",
    stack: ["REST APIs", "HTTP", "JSON", "Postman", "Lovable"],
    flow: ["Postman", "Mock API", "Knowledge", "Interface", "Refinamento"],
  },
  {
    id: "vendas-bd",
    number: "03",
    title: "Aplicação de Vendas com Banco de Dados",
    subtitle: "Persistência relacional, SQL e segurança",
    description:
      "Aplicação comercial completa utilizando Lovable Cloud e Supabase com tabelas relacionais, comandos SQL, políticas RLS e automação com Edge Functions.",
    stack: ["Supabase", "PostgreSQL", "SQL", "RLS", "Edge Functions"],
    flow: ["Modelagem", "SQL Supabase", "Segurança RLS", "Edge Functions", "Publicação"],
  },
  {
    id: "validalegal",
    number: "04",
    title: "ValidaLegal — Validação com IA e n8n",
    subtitle: "Lovable + n8n + Supabase + Base Vetorial LGPD",
    description:
      "Sistema avançado para envio de documentos via Webhook para o n8n, conversão de base64, agente de IA com OpenAI e consulta semântica a base vetorial da LGPD.",
    stack: ["Lovable", "n8n", "Webhooks", "OpenAI", "Supabase Vector"],
    flow: ["Upload Lovable", "Webhook n8n", "Agente OpenAI", "RAG LGPD", "Gravação"],
  },
  {
    id: "rede-social",
    number: "05",
    title: "Rede Social com Lovable",
    subtitle: "Login Google, comunidades e discussões",
    description:
      "Construção de uma comunidade completa conectada a um Supabase externo, com autenticação Google OAuth 2.0 via Google Cloud, feed, tópicos e interações de usuários.",
    stack: ["Lovable", "Google OAuth 2.0", "Google Cloud", "Supabase", "Comunidades"],
    flow: ["OAuth Google", "Supabase Externo", "Feed", "Comunidades", "Estados de UI"],
  },
  {
    id: "veritas-ai",
    number: "06",
    title: "SaaS com Inteligência Artificial (Veritas AI)",
    subtitle: "Análise visual, motor de evidências e relatórios",
    description:
      "Produto SaaS completo com autenticação, storage, motor de análise visual com IA da OpenAI, relatórios técnicos automatizados e histórico de consultas.",
    stack: ["Lovable", "OpenAI Vision", "Supabase Storage", "Auth", "Relatórios"],
    flow: ["Upload", "Storage Seguro", "OpenAI Vision", "Evidências", "Relatório"],
  },
  {
    id: "dashboard",
    number: "07",
    title: "Dashboard Executivo no Lovable",
    subtitle: "Dados do Banco Mundial com storytelling analítico",
    description:
      "Dashboard analítico desenvolvido com dados públicos reais do World Bank, preparando arquitetura dos indicadores, gráficos dinâmicos, filtros avançados e deploy.",
    stack: ["Lovable", "World Bank Data", "Recharts", "Filtros", "Storytelling"],
    flow: ["Ingestão de Dados", "Métricas", "Gráficos Interativos", "Filtros", "Deploy"],
  },
];

export const FAQ = [
  {
    q: "Preciso saber programar para acompanhar o curso?",
    a: "Não. A formação foi desenhada para levar qualquer pessoa do absoluto zero até a publicação de aplicações completas. Você aprende desenvolvimento visual assistido por inteligência artificial com o Lovable, avançando de forma prática para banco de dados, APIs e automações.",
  },
  {
    q: "Quais tecnologias e ferramentas são ensinadas?",
    a: "Você dominará Lovable, Lovable Cloud, n8n, Supabase (SQL, RLS, Edge Functions e Vetores), OpenAI (Engenharia de Prompt, Modelos e APIs), Postman, GitHub, Tailwind CSS, shadcn/ui e Google OAuth 2.0.",
  },
  {
    q: "Quais projetos reais vou construir durante as aulas?",
    a: "Você construirá 7 projetos completos para o seu portfólio: uma Landing Page profissional com domínio próprio, uma aplicação conectada a API externa (StockFlow), uma aplicação de vendas com banco de dados e RLS, o ValidaLegal (Lovable + n8n + IA + RAG), uma Rede Social com login Google, o SaaS Veritas AI com visão computacional e um Dashboard Executivo com dados do Banco Mundial.",
  },
  {
    q: "Como funciona a integração entre Lovable, n8n e Supabase?",
    a: "O Lovable atua na criação acelerada das interfaces e regras do front-end; o Supabase funciona como backend relacional, autenticação e armazenamento com segurança; e o n8n opera os fluxos de automação, webhooks assíncronos e orquestração de agentes de IA.",
  },
  {
    q: "O curso oferece garantia?",
    a: `Sim, você conta com ${OFFER.guaranteeDays} dias de garantia incondicional na plataforma. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso integral.`,
  },
  {
    q: "Como tenho acesso às aulas e atualizações?",
    a: "O acesso é imediato após a confirmação do pagamento, com direito a todas as aulas gravadas, materiais complementares, referências de prompts e futuras atualizações da formação.",
  },
];
