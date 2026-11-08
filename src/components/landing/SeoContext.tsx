import { Reveal, Section, SectionHeading } from "./primitives";

const TOPICS = [
  {
    title: "Lovable",
    text: "O Lovable cria sites e aplicações a partir de prompts, com modos Plan e Build, histórico de versões, conectores, integração com GitHub e publicação com domínio personalizado.",
  },
  {
    title: "Lovable Cloud e Supabase",
    text: "A camada de dados das aplicações: tabelas, comandos SQL, segurança com RLS, Edge Functions para lógica no backend, autenticação e armazenamento.",
  },
  {
    title: "n8n e inteligência artificial",
    text: "O n8n recebe dados do Lovable por webhooks e executa fluxos com agentes de IA da OpenAI e base vetorial no Supabase, como no projeto ValidaLegal.",
  },
];

export function SeoContext() {
  return (
    <Section id="conceitos" className="pb-16">
      <SectionHeading eyebrow="Contexto" title="Entenda os conceitos do curso" />
      <Reveal delay={0.05} className="mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {TOPICS.map((t) => (
            <article key={t.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-light tracking-tight">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
