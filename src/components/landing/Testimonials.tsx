import { BookOpen, Code2, Database, Layers, Rocket, Workflow } from "lucide-react";

import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const DIFFERENTIALS = [
  {
    icon: Rocket,
    title: "Do zero à publicação",
    text: "Começa na criação da conta e termina com projetos publicados, conectados ao GitHub e com domínio personalizado.",
  },
  {
    icon: BookOpen,
    title: "Engenharia de Prompt",
    text: "LLMs, tokenização, janela de contexto, Few-Shot, Chain-of-Thought e prompts em Markdown, XML e JSON.",
  },
  {
    icon: Layers,
    title: "Design System",
    text: "Tailwind CSS, shadcn/ui e como extrair o design de uma referência para remixar projetos.",
  },
  {
    icon: Database,
    title: "Banco de dados de verdade",
    text: "Lovable Cloud e Supabase com SQL, RLS e Edge Functions.",
  },
  {
    icon: Workflow,
    title: "Lovable + n8n",
    text: "Webhooks, agente de validação com OpenAI e base vetorial no projeto ValidaLegal.",
  },
  {
    icon: Code2,
    title: "Sete projetos completos",
    text: "Landing page, app com API, vendas, ValidaLegal, rede social, SaaS com IA e dashboard.",
  },
];

export function Testimonials() {
  return (
    <Section id="diferenciais">
      <SectionHeading
        eyebrow="Diferenciais"
        title={
          <>
            O que torna esta formação <span className="text-neon">diferente</span>
          </>
        }
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {DIFFERENTIALS.map((t, i) => (
          <Reveal key={t.title} delay={Math.min(i * 0.06, 0.3)}>
            <GlassCard className="flex h-full flex-col">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neon/25 bg-neon/10 text-neon">
                <t.icon className="h-4.5 w-4.5" />
              </span>
              <p className="mt-5 text-base font-medium">{t.title}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">{t.text}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
