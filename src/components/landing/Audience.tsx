import {
  Briefcase,
  Code2,
  LineChart,
  Palette,
  Rocket,
  Sprout,
  type LucideIcon,
} from "lucide-react";

import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const AUDIENCE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sprout,
    title: "Iniciantes em tecnologia",
    description:
      "Aprenda do zero a construir aplicações completas guiadas por inteligência artificial, sem a barreira inicial da sintaxe de programação.",
  },
  {
    icon: Code2,
    title: "Desenvolvedores de software",
    description:
      "Multiplique sua velocidade de entrega construindo front-end no Lovable, modelando bancos no Supabase e integrando fluxos no n8n.",
  },
  {
    icon: Palette,
    title: "Designers e criadores",
    description:
      "Vá além de protótipos estáticos e transforme layouts do Figma ou sites de referência em aplicações web reais e operacionais.",
  },
  {
    icon: LineChart,
    title: "Analistas e profissionais de TI",
    description:
      "Construa dashboards executivos, automatize fluxos repetitivos e integre dados corporativos com segurança.",
  },
  {
    icon: Briefcase,
    title: "Empreendedores e founders",
    description:
      "Lance MVPs funcionais, crie produtos SaaS com inteligência artificial e valide novas soluções digitais com agilidade.",
  },
  {
    icon: Rocket,
    title: "Freelancers e agências",
    description:
      "Apresente uma oferta moderna de desenvolvimento acelerado por IA, reduzindo o tempo de entrega e ampliando sua margem.",
  },
];

export function Audience() {
  return (
    <Section id="para-quem">
      <SectionHeading
        eyebrow="Público-alvo"
        title={
          <>
            Para quem é <span className="text-gradient font-normal">esta formação</span>
          </>
        }
        description="A metodologia passo a passo atende desde quem está começando até quem já atua no mercado e deseja dominar as principais ferramentas de desenvolvimento com IA."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {AUDIENCE.map((a, i) => (
          <Reveal key={a.title} delay={Math.min(i * 0.06, 0.3)}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-lovable-pink/30 bg-lovable-pink/10 text-lovable-pink shadow-[0_0_12px_-4px_var(--lovable-pink)]">
                  <a.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-display text-lg font-light tracking-tight text-foreground">
                  {a.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                {a.description}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
