import { BookOpen, Code2, Database, Layers, Rocket, Workflow } from "lucide-react";

import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";

const DIFFERENTIALS = [
  {
    icon: Rocket,
    title: "Do zero à publicação com domínio",
    text: "Você inicia pelo cadastro e configurações essenciais do Lovable e finaliza com aplicações completas versionadas no GitHub e com domínio próprio.",
  },
  {
    icon: BookOpen,
    title: "Engenharia de Prompt na prática",
    text: "Compreenda tokens, embeddings, limites de contexto, técnicas Zero-Shot, Few-Shot, Chain-of-Thought e estruturas em Markdown, XML e JSON.",
  },
  {
    icon: Layers,
    title: "Design System e shadcn/ui",
    text: "Aprenda a inspecionar e extrair design systems de sites reais de referência e aplicar componentes Tailwind CSS e shadcn/ui com consistência visual.",
  },
  {
    icon: Database,
    title: "Banco de dados e backend no Supabase",
    text: "Vá além de telas estáticas: modele tabelas relacionais, execute SQL, implemente segurança RLS e crie lógica de backend com Edge Functions.",
  },
  {
    icon: Workflow,
    title: "Integração poderosa com n8n",
    text: "Conecte o front-end Lovable aos fluxos de automação do n8n por webhooks, processando arquivos em base64 e agentes de IA com bases vetoriais.",
  },
  {
    icon: Code2,
    title: "7 projetos reais de portfólio",
    text: "Construa Landing Page, app com API externa (StockFlow), vendas com BD, ValidaLegal (RAG LGPD), rede social com OAuth, SaaS Veritas AI e dashboard analítico.",
  },
];

export function Testimonials() {
  return (
    <Section id="diferenciais">
      <SectionHeading
        eyebrow="Diferenciais da formação"
        title={
          <>
            O que torna esta formação{" "}
            <span className="text-gradient font-normal">única no mercado</span>
          </>
        }
        description="Uma formação completa e prática que une a agilidade da IA com a robustez da engenharia de software tradicional."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {DIFFERENTIALS.map((t, i) => (
          <Reveal key={t.title} delay={Math.min(i * 0.06, 0.3)}>
            <GlassCard className="flex h-full flex-col">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-lovable-pink/30 bg-lovable-pink/10 text-lovable-pink shadow-[0_0_12px_-4px_var(--lovable-pink)]">
                <t.icon className="h-4.5 w-4.5" />
              </span>
              <p className="mt-5 text-base font-medium text-foreground">{t.title}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-secondary">
                {t.text}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
