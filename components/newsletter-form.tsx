"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative z-10">
      {submitted ? (
        <div
          aria-live="polite"
          className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 text-white outline-none backdrop-blur"
          ref={successRef}
          tabIndex={-1}
        >
          <CheckCircle2 aria-hidden="true" className="mt-0.5 text-emerald-300" size={21} />
          <div>
            <p className="font-semibold">Your subscription request is ready.</p>
            <p className="mt-1 text-sm leading-6 text-indigo-100">
              Nothing has been transmitted or stored. Continue in your email app to request signup.
            </p>
            <a
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4"
              href={`mailto:hello@digitalgigz.ai?subject=${encodeURIComponent("Join the Lab Notes")}&body=${encodeURIComponent(`Please add ${email} to the Digital GiGz AI Lab newsletter.`)}`}
            >
              Continue in email
              <ArrowRight aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      ) : (
        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            autoComplete="email"
            className="min-h-[3.35rem] w-full rounded-xl border border-white/15 bg-white/95 px-4 text-sm text-slate-950 outline-none placeholder:text-slate-500 focus:border-violet-300 focus:ring-4 focus:ring-violet-300/20"
            id="newsletter-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
            type="email"
            value={email}
          />
          <button
            className="flex min-h-[3.35rem] w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50"
            type="submit"
          >
            Request newsletter access
            <ArrowRight aria-hidden="true" size={16} />
          </button>
          <p className="text-xs leading-5 text-indigo-100">
            Nothing is stored on this site. Please don’t include clinical or patient information.
          </p>
        </form>
      )}
    </div>
  );
}
