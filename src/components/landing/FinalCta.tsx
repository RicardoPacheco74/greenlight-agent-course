import { ArrowRight, CreditCard, Infinity as InfinityIcon, ShieldCheck } from "lucide-react";

import logoAcademia from "@/assets/logo-academia-transparente.png.asset.json";
import { MODULES, OFFER, TOTAL_LESSONS_LABEL } from "@/data/course";
import { CtaButton, Reveal, Section } from "./primitives";

export function FinalCta() {
  return (
    <Section id="checkout" className="pb-32">
      <Reveal>
        <div className="glow-ring relative overflow-hidden rounded-[36px] p-[1.5px]">
          <div className="gradient-primary absolute inset-0 opacity-60" />
          <div className="relative overflow-hidden rounded-[35px] bg-surface px-6 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full bg-lovable-pink/20 blur-[120px]" />
            <div className="relative">
              <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] tracking-wide text-lovable-pink">
                <span className="h-1.5 w-1.5 rounded-full bg-lovable-pink shadow-[0_0_8px_var(--lovable-pink)]" />
                Matrículas abertas · Acesso imediato
              </span>

              <h2 className="mx-auto mt-7 max-w-3xl font-display text-3xl leading-[1.12] font-light tracking-tight text-balance text-foreground md:text-5xl">
                Comece hoje a construir suas aplicações com{" "}
                <span className="text-gradient font-normal">Lovable, n8n e Supabase</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-foreground-secondary md:text-base">
                {MODULES.length} módulos completos · {TOTAL_LESSONS_LABEL} aulas práticas · 7
                projetos reais para o seu portfólio e atualizações futuras inclusas.
              </p>

              <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-1">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-foreground-muted">
                  Investimento promocional
                </span>
                <p className="font-display text-4xl font-light tracking-tight text-foreground md:text-5xl">
                  {OFFER.price}
                </p>
                <span className="text-xs text-foreground-muted">
                  Pagamento único · Acesso vitalício
                </span>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <CtaButton href={OFFER.checkoutUrl} className="px-9 py-4 text-base">
                  Garantir minha vaga agora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CtaButton>
                <CtaButton href="#conteudo" variant="ghost" className="px-7 py-4 text-base">
                  Rever o conteúdo programático
                </CtaButton>
              </div>

              <div className="mt-12 grid gap-4 text-left md:grid-cols-3">
                {[
                  {
                    icon: ShieldCheck,
                    title: `Garantia de ${OFFER.guaranteeDays} dias`,
                    text: "Satisfação garantida ou reembolso integral diretamente pela plataforma, sem burocracia.",
                  },
                  {
                    icon: CreditCard,
                    title: "Pagamento seguro",
                    text: "Pagamento processado com segurança via cartão, PIX ou boleto.",
                  },
                  {
                    icon: InfinityIcon,
                    title: "Acesso vitalício",
                    text: "Acesso permanente a todas as aulas, códigos de apoio, prompts e atualizações.",
                  },
                ].map((b) => (
                  <div key={b.title} className="glass rounded-2xl p-5">
                    <b.icon className="h-4.5 w-4.5 text-lovable-pink" />
                    <p className="mt-3 text-sm font-medium text-foreground">{b.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-foreground-secondary">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center gap-4 text-center text-xs text-foreground-muted">
        <p className="font-medium text-foreground-secondary">
          Desenvolvimento com IA: Lovable + n8n + Supabase
        </p>

        <a
          href="https://www.academiadanuvem.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src={logoAcademia.url}
            alt="Academia da Nuvem"
            className="h-10 w-auto md:h-11 object-contain"
            loading="lazy"
          />
        </a>

        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.academiadanuvem.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-lovable-pink"
          >
            Academia da Nuvem
          </a>{" "}
          · Todos os direitos reservados.
        </p>
      </footer>
    </Section>
  );
}
