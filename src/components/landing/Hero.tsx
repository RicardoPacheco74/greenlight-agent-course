import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Bot,
  ChevronsDown,
  Database,
  Layers,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/imagem-curso-lovable.png";
import { OFFER, TECHS, TOTAL_LESSONS_LABEL, TOTAL_MODULES } from "@/data/course";
import { CtaButton, Eyebrow } from "./primitives";

function TechMarquee() {
  const items = [...TECHS, ...TECHS];
  return (
    <div className="relative mt-16 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="animate-marquee flex w-max gap-3">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="glass flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs whitespace-nowrap text-foreground-secondary transition-colors hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lovable-pink shadow-[0_0_8px_var(--lovable-pink)]" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-16 md:pt-28">
      <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col items-start lg:col-span-7">
          <Eyebrow icon={Sparkles}>Desenvolvimento com IA</Eyebrow>

          <h1 className="mt-7 max-w-2xl font-display text-4xl leading-[1.08] font-light tracking-tight text-balance md:text-6xl lg:text-[64px]">
            Transforme suas ideias em{" "}
            <span className="text-gradient font-normal">aplicações reais</span> com{" "}
            <span className="text-gradient font-normal">Lovable, n8n e Supabase.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground-secondary md:text-lg">
            Aprenda a construir interfaces profissionais, conectar bancos de dados, integrar APIs,
            automatizar processos e desenvolver aplicações completas utilizando inteligência
            artificial.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CtaButton href={OFFER.checkoutUrl} className="px-8 py-4 text-base">
              Conhecer a formação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CtaButton>
            <CtaButton href="#conteudo" variant="ghost" className="px-7 py-4 text-base">
              Explorar conteúdo programático
              <ChevronsDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </CtaButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-foreground-muted">
            <span className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-lovable-pink" /> {OFFER.price} · pagamento único
            </span>
            <span className="flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-lovable-purple" /> {TOTAL_MODULES} módulos ·{" "}
              {TOTAL_LESSONS_LABEL} aulas
            </span>
            <span className="flex items-center gap-2">
              <Bot className="h-3.5 w-3.5 text-lovable-cyan" /> 7 projetos práticos
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-lovable-orange" /> Acesso vitalício
            </span>
          </div>
        </div>

        <motion.div
          className="lg:col-span-5"
          initial={reduced ? false : { opacity: 0, scale: 0.94, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
        >
          <div className="glow-ring relative rounded-[34px] p-[1.5px]">
            <div className="gradient-primary absolute inset-0 rounded-[34px] opacity-75 blur-[1px]" />
            <div className="relative overflow-hidden rounded-[32px] bg-surface">
              <img
                src={heroImage}
                alt="Ambiente de desenvolvimento Lovable integrado com n8n e Supabase para criação rápida de software com IA"
                width={1502}
                height={845}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Tag com os 3 pilares visuais da imagem oficial */}
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-t from-background via-background/85 to-transparent p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] text-foreground-secondary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lovable-pink opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lovable-pink" />
                  </span>
                  Idea to app. Instantly.
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="flex items-center gap-1 text-lovable-purple">
                    <Workflow className="h-3 w-3" /> n8n
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-1 text-lovable-cyan">
                    <Database className="h-3 w-3" /> Supabase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <TechMarquee />
    </section>
  );
}
