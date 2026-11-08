import { ArrowUpRight } from "lucide-react";

import { FlowDiagram, GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const PROJECTS = [
  {
    title: "Landing Page Profissional",
    result: "Site publicado com knowledge, GitHub e domínio próprio",
    flow: ["Prompt", "Lovable", "GitHub", "Domínio"],
  },
  {
    title: "App com API Externa",
    result: "Interface conectada a uma API, com refinamento e design review",
    flow: ["API", "Lovable", "Interface"],
  },
  {
    title: "Aplicação de Vendas",
    result: "Dados persistidos com SQL, RLS e Edge Functions",
    flow: ["Lovable", "Supabase", "RLS"],
  },
  {
    title: "ValidaLegal",
    result: "Validação de documentos com IA e base vetorial da LGPD",
    flow: ["Lovable", "n8n", "Agente", "Supabase"],
  },
  {
    title: "Rede Social",
    result: "Comunidades, discussões e login com Google",
    flow: ["Google OAuth", "Supabase", "Comunidades"],
  },
  {
    title: "SaaS com IA",
    result: "Análise visual, evidências e relatório com OpenAI",
    flow: ["Upload", "OpenAI", "Relatório"],
  },
  {
    title: "Dashboard",
    result: "Análises e storytelling com dados do World Bank",
    flow: ["Dados", "Análises", "Filtros", "Deploy"],
  },
  {
    title: "Site com Design System",
    result: "Design extraído de uma referência e aplicado em remix",
    flow: ["Referência", "Design System", "Remix"],
  },
];

export function Projects() {
  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="Portfólio"
        title={
          <>
            Projetos <span className="text-neon">reais</span> para o seu portfólio
          </>
        }
        description="Cada projeto é construído do planejamento à publicação, com as mesmas ferramentas usadas no mercado."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={Math.min(i * 0.05, 0.3)}>
            <GlassCard className="flex h-full flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg leading-tight font-light tracking-tight">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-neon" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.result}</p>
              </div>
              <div className="mt-6">
                <FlowDiagram steps={p.flow} />
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
