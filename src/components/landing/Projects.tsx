import { ArrowUpRight } from "lucide-react";

import { REAL_PROJECTS } from "@/data/course";
import { FlowDiagram, GlassCard, Reveal, Section, SectionHeading } from "./primitives";

export function Projects() {
  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="Portfólio na prática"
        title={
          <>
            Projetos <span className="text-gradient font-normal">reais</span> desenvolvidos passo a
            passo
          </>
        }
        description="Cada projeto é construído do planejamento arquitetural à publicação final, integrando front-end moderno, banco de dados e automações com IA."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REAL_PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={Math.min(i * 0.05, 0.3)}>
            <GlassCard className="flex h-full flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-lovable-pink">
                      PROJETO {p.number}
                    </span>
                    <h3 className="mt-1 font-display text-lg leading-snug font-light tracking-tight text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground-muted transition-colors group-hover:text-lovable-pink" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-foreground-secondary">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="mb-2.5 font-mono text-[10px] tracking-wider uppercase text-foreground-muted">
                  Fluxo da aplicação:
                </p>
                <FlowDiagram steps={p.flow} />
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
