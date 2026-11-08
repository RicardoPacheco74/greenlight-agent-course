import { Database, Layout, Rocket, Workflow } from "lucide-react";

import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const PILLARS = [
  {
    icon: Layout,
    value: "Interfaces",
    label: "Prototipe e crie sites, landing pages e aplicações descrevendo o que você quer.",
    bar: 25,
  },
  {
    icon: Database,
    value: "Dados",
    label: "Conecte banco de dados com Lovable Cloud e Supabase, com segurança via RLS.",
    bar: 50,
  },
  {
    icon: Workflow,
    value: "Automação",
    label: "Integre APIs e fluxos do n8n por webhooks, com agentes de IA.",
    bar: 75,
  },
  {
    icon: Rocket,
    value: "Publicação",
    label: "Publique com GitHub e domínio personalizado: projetos reais no ar.",
    bar: 100,
  },
];

const STAGES = ["Ideia", "Prompt", "Interface", "Dados", "Integração", "IA", "Publicação"];

export function WhyNow() {
  return (
    <Section id="por-que">
      <SectionHeading
        eyebrow="Desenvolvimento com IA"
        title={
          <>
            Por que aprender <span className="text-neon">Lovable</span> agora?
          </>
        }
        description="Com desenvolvimento assistido por IA, uma ideia vira aplicação funcional: interface, banco de dados, integrações e publicação, no mesmo lugar."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((s, i) => (
          <Reveal key={s.value} delay={i * 0.08}>
            <GlassCard className="h-full">
              <s.icon className="h-5 w-5 text-neon" />
              <p className="mt-5 font-display text-3xl font-light tracking-tight">{s.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/8">
                <div className="gradient-neon h-full rounded-full" style={{ width: `${s.bar}%` }} />
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-5">
        <GlassCard interactive={false} className="p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <p className="text-[11px] tracking-[0.18em] uppercase text-neon">Da ideia ao app</p>
              <p className="mt-3 font-display text-2xl leading-snug font-light">
                O curso cobre cada etapa da construção, do primeiro prompt até a aplicação
                publicada.
              </p>
            </div>
            <div className="flex h-40 flex-1 items-stretch gap-3">
              {STAGES.map((label, i) => (
                <div key={label} className="flex h-full min-w-0 flex-1 flex-col gap-2">
                  <div className="flex min-h-0 flex-1 items-end">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-n8n to-neon opacity-90 shadow-[0_0_24px_-6px_var(--neon)] transition-all duration-700 hover:opacity-100"
                      style={{ height: `${14 + i * 14}%`, minHeight: 10 }}
                    />
                  </div>
                  <span className="truncate text-center font-mono text-[9px] text-muted-foreground md:text-[10px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
