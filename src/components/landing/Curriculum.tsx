import { useState } from "react";
import {
  BadgeCheck,
  ExternalLink,
  Gauge,
  Layers,
  Paperclip,
  Rocket,
  Target,
  Wrench,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MODULES,
  TOTAL_LESSONS_LABEL,
  TOTAL_MODULES,
  type Lesson,
  type Module,
  type ModuleCategory,
} from "@/data/course";
import {
  Callout,
  Chip,
  FlowDiagram,
  GlassCard,
  Reveal,
  Section,
  SectionHeading,
  moduleIcon,
} from "./primitives";

const LEVEL_STYLES: Record<string, string> = {
  Iniciante: "text-lovable-cyan border-lovable-cyan/30 bg-lovable-cyan/10",
  Intermediário: "text-lovable-pink border-lovable-pink/30 bg-lovable-pink/10",
  Avançado: "text-lovable-purple border-lovable-purple/30 bg-lovable-purple/10",
};

const CATEGORY_COLORS: Record<ModuleCategory, string> = {
  Lovable: "border-lovable-pink/40 bg-lovable-pink/10 text-lovable-pink",
  "Engenharia de Prompt": "border-lovable-orange/40 bg-lovable-orange/10 text-lovable-orange",
  "Design System": "border-lovable-magenta/40 bg-lovable-magenta/10 text-lovable-magenta",
  APIs: "border-lovable-blue/40 bg-lovable-blue/10 text-lovable-blue",
  Supabase: "border-lovable-cyan/40 bg-lovable-cyan/10 text-lovable-cyan",
  n8n: "border-lovable-purple/40 bg-lovable-purple/10 text-lovable-purple",
  "Inteligência Artificial": "border-lovable-pink/40 bg-lovable-pink/10 text-lovable-pink",
  Projetos: "border-lovable-violet/40 bg-lovable-violet/10 text-lovable-violet",
};

function LessonItem({ lesson }: { lesson: Lesson }) {
  return (
    <div className="group/lesson flex flex-col gap-2 rounded-2xl border border-border bg-white/[0.02] p-3.5 transition-all hover:border-lovable-pink/30 hover:bg-white/[0.04] sm:p-4">
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 font-mono text-[11px] font-medium text-lovable-pink sm:h-8 sm:w-8">
          {lesson.number}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] leading-snug font-medium text-foreground sm:text-sm">
            {lesson.title}
          </p>

          {lesson.description ? (
            <p className="mt-1 text-xs text-foreground-secondary leading-relaxed">
              {lesson.description}
            </p>
          ) : null}

          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] ${
                LEVEL_STYLES[lesson.level] ?? LEVEL_STYLES["Iniciante"]
              }`}
            >
              <Gauge className="mr-1 inline h-3 w-3" />
              {lesson.level}
            </span>

            {lesson.materials && lesson.materials.length > 0
              ? lesson.materials.map((mat) =>
                  mat.url ? (
                    <a
                      key={mat.label}
                      href={mat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-lovable-blue/30 bg-lovable-blue/10 px-2 py-0.5 font-mono text-[10px] text-lovable-blue transition-colors hover:bg-lovable-blue/20 hover:text-white"
                      title={mat.note || mat.label}
                    >
                      <Paperclip className="h-2.5 w-2.5" />
                      {mat.label}
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  ) : (
                    <span
                      key={mat.label}
                      className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-foreground-secondary"
                      title={mat.note}
                    >
                      <Paperclip className="h-2.5 w-2.5 text-lovable-orange" />
                      {mat.label}
                      {mat.note ? (
                        <span className="text-foreground-muted">({mat.note})</span>
                      ) : null}
                    </span>
                  ),
                )
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleBody({ module: mod }: { module: Module }) {
  return (
    <div className="grid gap-6 pt-2 lg:grid-cols-12">
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-7">
        <Callout icon={Target} label="Objetivo do módulo">
          {mod.objective}
        </Callout>

        <div className="flex items-center justify-between px-1">
          <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
            Aulas ({mod.lessons.length})
          </p>
          <span className="font-mono text-[11px] text-lovable-pink">Sequência oficial</span>
        </div>

        <div className="grid max-h-[460px] gap-2.5 overflow-y-auto pr-1 sm:max-h-[520px] md:gap-3">
          {mod.lessons.map((lesson) => (
            <LessonItem key={lesson.number} lesson={lesson} />
          ))}
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
        <GlassCard interactive={false} className="min-w-0 rounded-2xl p-4 sm:p-5">
          <p className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-foreground-muted">
            <Wrench className="h-3.5 w-3.5 shrink-0 text-lovable-pink" /> Tecnologias utilizadas
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {mod.stack.map((t) => (
              <Chip key={t} className="max-w-full break-words">
                {t}
              </Chip>
            ))}
          </div>
        </GlassCard>

        <GlassCard interactive={false} className="min-w-0 rounded-2xl p-4 sm:p-5">
          <p className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-foreground-muted">
            <Layers className="h-3.5 w-3.5 shrink-0 text-lovable-purple" /> O que será desenvolvido
          </p>
          <div className="mt-4 min-w-0">
            <FlowDiagram steps={mod.flow} />
          </div>
        </GlassCard>

        <div className="relative min-w-0 overflow-hidden rounded-2xl border border-lovable-pink/30 bg-gradient-to-br from-lovable-pink/15 to-transparent p-4 sm:p-5 shadow-[0_0_24px_-8px_var(--lovable-pink)]">
          <p className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-lovable-pink font-semibold">
            <Rocket className="h-3.5 w-3.5 shrink-0" /> Projeto prático do módulo
          </p>
          <p className="mt-2 text-[13px] leading-relaxed break-words text-foreground font-medium sm:text-sm">
            {mod.project}
          </p>
        </div>

        <GlassCard interactive={false} className="min-w-0 rounded-2xl p-4 sm:p-5">
          <p className="text-[11px] tracking-[0.16em] uppercase text-foreground-muted">
            Conhecimentos adquiridos
          </p>
          <ul className="mt-3 space-y-2.5">
            {mod.outcomes.map((o) => (
              <li
                key={o}
                className="flex items-start gap-2.5 text-[13px] break-words text-foreground/90 sm:text-sm"
              >
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-lovable-cyan" />
                <span className="min-w-0">{o}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}

export function Curriculum() {
  const [open, setOpen] = useState<string[]>([MODULES[0]!.id]);

  const progress = Math.round((open.length / MODULES.length) * 100);

  return (
    <Section id="conteudo">
      <SectionHeading
        eyebrow="Conteúdo programático oficial"
        title={
          <>
            {TOTAL_MODULES} módulos,{" "}
            <span className="text-gradient font-normal">{TOTAL_LESSONS_LABEL} aulas</span> — explore
            capítulo por capítulo
          </>
        }
        description="Cada módulo é estruturado com objetivo pedagógico, aulas numeradas, materiais complementares, links de documentação, tecnologias e o projeto real desenvolvido."
      />

      <Reveal delay={0.05} className="mt-12">
        <div className="glass flex flex-col gap-4 rounded-2xl p-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-foreground-muted">
              Progresso da exploração:
            </span>
            <span className="font-mono text-xs text-lovable-pink font-medium">
              {open.length}/{MODULES.length} módulos abertos
            </span>
          </div>

          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5 md:max-w-md">
            <div
              className="gradient-primary h-full rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button
            type="button"
            onClick={() => setOpen(open.length === MODULES.length ? [] : MODULES.map((m) => m.id))}
            className="self-start rounded-full border border-border px-4 py-1.5 text-xs text-foreground-secondary transition-colors hover:border-lovable-pink/40 hover:text-lovable-pink md:self-auto"
          >
            {open.length === MODULES.length ? "Recolher todos" : "Expandir todos"}
          </button>
        </div>
      </Reveal>

      <Accordion
        type="multiple"
        value={open}
        onValueChange={setOpen}
        className="mt-6 flex flex-col gap-4"
      >
        {MODULES.map((mod, i) => {
          const Icon = moduleIcon(mod.icon);
          const isOpen = open.includes(mod.id);
          const categoryStyle = CATEGORY_COLORS[mod.category] ?? CATEGORY_COLORS["Lovable"];

          return (
            <Reveal key={mod.id} delay={Math.min(i * 0.04, 0.2)}>
              <AccordionItem
                value={mod.id}
                className={`glass overflow-hidden rounded-3xl border-b-0 transition-all duration-500 ${
                  isOpen
                    ? "glow-ring border-lovable-pink/40 bg-surface/90"
                    : "hover:border-lovable-pink/25 hover:bg-surface/50"
                }`}
              >
                <AccordionTrigger className="items-start gap-3 px-4 py-4 text-left hover:no-underline sm:gap-4 sm:px-5 sm:py-5 md:px-7 md:py-6 [&>svg]:mt-1.5 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0 [&>svg]:text-lovable-pink sm:[&>svg]:mt-2 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
                  <span className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border transition-colors sm:h-11 sm:w-11 ${
                        isOpen
                          ? "border-lovable-pink/50 bg-lovable-pink/20 text-lovable-pink shadow-[0_0_16px_var(--lovable-pink)]"
                          : "border-border bg-white/5 text-foreground-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] tracking-[0.18em] text-lovable-pink sm:text-[11px]">
                          MÓDULO {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] ${categoryStyle}`}
                        >
                          {mod.category}
                        </span>
                      </div>

                      <span className="mt-1.5 block font-display text-base leading-tight font-light tracking-tight break-words sm:text-lg md:text-2xl text-foreground">
                        {mod.title}
                      </span>

                      <span className="mt-1.5 block text-xs break-words text-foreground-secondary md:text-sm">
                        {mod.tagline}
                      </span>

                      <span className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <Chip className="border-lovable-pink/30 bg-lovable-pink/10 text-lovable-pink">
                          {mod.lessons.length} aulas
                        </Chip>
                        {mod.stack.slice(0, 3).map((t, idx) => (
                          <Chip key={t} className={idx > 1 ? "hidden sm:inline-flex" : ""}>
                            {t}
                          </Chip>
                        ))}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-4 pb-6 sm:px-5 sm:pb-7 md:px-7">
                  <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-lovable-pink/40 to-transparent" />
                  <ModuleBody module={mod} />
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          );
        })}
      </Accordion>
    </Section>
  );
}
