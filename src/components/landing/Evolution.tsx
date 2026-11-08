import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { Chip, Reveal, Section, SectionHeading } from "./primitives";

const STEPS = [
  {
    title: "Fundamentos e Prompts",
    description:
      "Domínio do Lovable, modos Plan e Build, economia de créditos e técnicas avançadas de Engenharia de Prompt (Zero/Few-Shot, Chain-of-Thought).",
    stack: ["Lovable", "OpenAI", "Prompt Engineering"],
  },
  {
    title: "Design System e Interfaces",
    description:
      "Aplicação de Tailwind CSS e shadcn/ui, metodologia para extrair design systems de referências e remix ágil de produtos web.",
    stack: ["Tailwind CSS", "shadcn/ui", "Mobbin", "Aura Build"],
  },
  {
    title: "APIs e Conectividade HTTP",
    description:
      "Entendimento profundo de JSON, verbos HTTP, status codes, autenticação e validação prática de coleções no Postman.",
    stack: ["REST APIs", "HTTP", "Postman", "OAuth", "Bearer Token"],
  },
  {
    title: "Banco de Dados e Backend",
    description:
      "Modelagem relacional com PostgreSQL no Supabase, consultas SQL, proteção rigorosa com RLS e lógica de backend com Edge Functions.",
    stack: ["Supabase", "PostgreSQL", "SQL", "RLS", "Edge Functions"],
  },
  {
    title: "Automação com n8n",
    description:
      "Criação de webhooks assíncronos no n8n recebendo eventos do Lovable, estruturação de contratos de dados e orquestração de fluxos.",
    stack: ["n8n", "Webhooks", "JSON Contract", "Automação"],
  },
  {
    title: "Inteligência Artificial e RAG",
    description:
      "Integração de modelos da OpenAI, conversão de arquivos binários, geração de embeddings e consulta semântica a bases vetoriais.",
    stack: ["OpenAI API", "Vector Store", "Embeddings", "RAG"],
  },
  {
    title: "Aplicações Full-Stack e SaaS",
    description:
      "Desenvolvimento de produtos completos com Google OAuth 2.0, dashboards analíticos executivos, SaaS com análise visual e deploy em domínio próprio.",
    stack: ["Google OAuth 2.0", "OpenAI Vision", "Dashboards", "Deploy"],
  },
];

export function Evolution() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <Section id="diferencial">
      <SectionHeading
        eyebrow="Trilha de evolução"
        title={
          <>
            A trilha de aprendizado do{" "}
            <span className="text-gradient font-normal">desenvolvedor com IA</span>
          </>
        }
        description="Uma jornada pedagógica contínua: da concepção visual e do prompt até a arquitetura de banco de dados, fluxos no n8n e publicação de sistemas reais."
      />

      <div ref={ref} className="relative mt-16 pl-10 md:pl-16">
        <div className="absolute top-0 bottom-0 left-3 w-px bg-white/8 md:left-6" />
        <motion.div
          className="absolute top-0 left-3 w-px bg-gradient-to-b from-lovable-pink via-lovable-purple to-transparent md:left-6"
          style={{ height }}
        />

        <div className="flex flex-col gap-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={0.04 * i}>
              <div className="group relative">
                <span className="absolute top-2 -left-[30px] flex h-3 w-3 items-center justify-center md:-left-[46px]">
                  <span className="absolute h-3 w-3 rounded-full bg-lovable-pink/30 blur-[6px] transition-all group-hover:bg-lovable-pink/60" />
                  <span className="relative h-2 w-2 rounded-full bg-lovable-pink" />
                </span>
                <div className="glass rounded-2xl p-6 transition-all duration-500 group-hover:border-lovable-pink/30 group-hover:bg-lovable-pink/[0.04]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-lovable-pink">
                      ETAPA {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-light tracking-tight text-foreground md:text-2xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-secondary">
                    {step.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
