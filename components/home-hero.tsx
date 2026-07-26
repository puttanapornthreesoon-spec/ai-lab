"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  LockKeyhole,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function HomeHero() {
  const reducedMotion = useReducedMotion();
  const float = reducedMotion
    ? {}
    : {
        y: [0, -8, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <section className="site-container hero-grid" aria-labelledby="hero-title">
      <div className="relative z-10">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">
            <Sparkles aria-hidden="true" size={15} />
            Intelligence with intention
          </span>
        </motion.div>
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="hero-title mt-7"
          id="hero-title"
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          transition={{ delay: 0.06, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          Better healthcare starts with <span className="gradient-text">AI confidence.</span>
        </motion.h1>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mt-7 max-w-2xl text-lg leading-8 text-[var(--ink-muted)] sm:text-xl"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          transition={{ delay: 0.12, duration: 0.62 }}
        >
          Practical education, responsible tools, and research guidance that help nurses and
          healthcare professionals use artificial intelligence with skill—and with care.
        </motion.p>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          transition={{ delay: 0.18, duration: 0.6 }}
        >
          <Link className="button-primary !min-h-[3.2rem] !px-5" href="/learn">
            Start learning
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
          <Link className="button-secondary !min-h-[3.2rem] !px-5" href="/tools">
            <PlayCircle aria-hidden="true" size={18} />
            Explore the lab
          </Link>
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          className="trust-row mt-9"
          initial={reducedMotion ? false : { opacity: 0 }}
          transition={{ delay: 0.28, duration: 0.7 }}
        >
          <span>
            <ShieldCheck aria-hidden="true" className="text-[var(--success)]" size={15} />
            Responsible AI guidance
          </span>
          <span>
            <LockKeyhole aria-hidden="true" className="text-[var(--success)]" size={15} />
            Privacy-aware workflows
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" className="text-[var(--success)]" size={15} />
            Human review first
          </span>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        aria-label="Abstract AI learning workspace"
        className="hero-stage"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
        transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div aria-hidden="true" className="hero-orb" />
        <motion.div animate={float} className="glass-card signal-float">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
              Learning path
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,.12)]" />
          </div>
          <div className="mt-4 flex items-end gap-1.5" aria-hidden="true">
            {[45, 62, 54, 78, 66, 92, 84].map((height, index) => (
              <span
                className="w-full rounded-full bg-gradient-to-t from-violet-500 to-sky-400"
                key={index}
                style={{
                  height: `${height * 0.55}px`,
                  opacity: 0.42 + index * 0.07,
                }}
              />
            ))}
          </div>
          <p className="mt-4 text-xs font-semibold text-[var(--ink)]">Foundation complete</p>
        </motion.div>
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -8, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7,
                  },
                }
          }
          className="glass-card prompt-float"
        >
          <div className="flex items-center gap-3">
            <span className="icon-shell !h-10 !w-10 !rounded-xl">
              <BrainCircuit aria-hidden="true" size={19} />
            </span>
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                Prompt companion
              </p>
              <p className="mt-1 text-sm font-semibold">Patient education draft</p>
            </div>
          </div>
          <p className="mt-4 rounded-xl bg-[var(--surface-muted)] p-3 text-xs leading-5 text-[var(--ink-muted)]">
            “Explain this care plan in plain language, preserving the clinician’s instructions and
            flagging anything that needs verification…”
          </p>
          <div className="mt-3 flex items-center justify-between text-[0.68rem]">
            <span className="font-semibold text-[var(--success)]">Human review required</span>
            <span className="text-[var(--ink-soft)]">Education</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
