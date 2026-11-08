import {
  BarChart3,
  Bot,
  Database,
  Globe,
  Layout,
  Plug,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import { REAL_PROJECTS } from "@/data/course";
import { Chip, GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const PROJECT_ICONS: Record<string, LucideIcon> = {
  "landing-page": Globe,
  stockflow: Plug,
  "vendas-bd": Database,
  validalegal: Bot,
  "rede-social": Users,
  "veritas-ai": Sparkles,
  dashboard: BarChart3,
};

export function BuildGrid() {
  return (
    <Section id="construir">
      <SectionHeading
        eyebrow="Projetos da formação"
        title={
          <>
            O que você vai <span className="text-gradient font-normal">construir</span> durante o
            curso
          </>
        }
        description="Nenhuma teoria solta. Cada módulo avança na prática para entregar aplicações reais, funcionais e publicadas para compor seu portfólio profissional."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REAL_PROJECTS.map((project, i) => {
          const Icon = PROJECT_ICONS[project.id] ?? Layout;
          return (
            <Reveal key={project.id} delay={Math.min(i * 0.06, 0.35)}>
              <GlassCard className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lovable-pink/30 bg-lovable-pink/10 shadow-[0_0_16px_-4px_var(--lovable-pink)]">
                      <Icon className="h-5 w-5 text-lovable-pink" />
                    </div>
                    <span className="font-mono text-xs tracking-wider text-lovable-purple">
                      PROJETO {project.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl leading-tight font-light tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs font-mono text-lovable-cyan">{project.subtitle}</p>

                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
