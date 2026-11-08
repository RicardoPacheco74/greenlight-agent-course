import { Reveal, Section, SectionHeading } from "./primitives";

const TOPICS = [
  {
    title: "Desenvolvimento com Lovable",
    text: "O Lovable permite conceber, prototipar e programar aplicações modernas a partir de linguagem natural, com modos Plan e Build, versionamento no GitHub, suporte a Design System e publicação com domínio próprio.",
  },
  {
    title: "Backend e Dados com Supabase",
    text: "O Supabase e o Lovable Cloud fornecem a infraestrutura de dados da formação: bancos relacionais PostgreSQL, comandos SQL, controle de acesso granular via RLS (Row Level Security) e regras de negócio com Edge Functions.",
  },
  {
    title: "Automação e IA com n8n",
    text: "O n8n conecta-se à aplicação por webhooks para processamento assíncrono de eventos, extração de documentos, chamadas a APIs de modelos da OpenAI e integração com bases vetoriais para buscas semânticas.",
  },
];

export function SeoContext() {
  return (
    <Section id="conceitos" className="pb-16">
      <SectionHeading
        eyebrow="Fundamentos da formação"
        title="Arquitetura de desenvolvimento integrada"
        description="A combinação das três tecnologias líderes do ecossistema moderno para acelerar a criação de produtos digitais."
      />
      <Reveal delay={0.05} className="mt-10">
        <div className="grid gap-5 md:grid-cols-3">
          {TOPICS.map((t) => (
            <article
              key={t.title}
              className="glass rounded-2xl p-6 transition-all hover:border-lovable-pink/30"
            >
              <h3 className="font-display text-lg font-light tracking-tight text-foreground">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">{t.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
