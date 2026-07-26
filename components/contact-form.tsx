"use client";

import { ArrowRight, CheckCircle2, Mail, RotateCcw, ShieldAlert } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  organization: "",
  reason: "General question",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [prepared, setPrepared] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prepared) successRef.current?.focus();
  }, [prepared]);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`[${form.reason}] Message from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Organization / team: ${form.organization || "Not provided"}`,
        `Reason: ${form.reason}`,
        "",
        form.message,
      ].join("\n"),
    );
    return `mailto:hello@digitalgigz.ai?subject=${subject}&body=${body}`;
  }, [form]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(true);
  }

  if (prepared) {
    return (
      <div className="content-card !p-8 outline-none" ref={successRef} role="status" tabIndex={-1}>
        <span className="icon-shell !bg-emerald-100 !text-emerald-700 dark:!bg-emerald-300/10 dark:!text-emerald-300">
          <CheckCircle2 aria-hidden="true" size={21} />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">Your message is ready.</h2>
        <p className="mt-4 leading-7 text-[var(--ink-muted)]">
          Continue in your email app to review and send it. Nothing has been transmitted from this
          website.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a className="button-primary" href={mailto}>
            <Mail aria-hidden="true" size={16} />
            Continue in email
          </a>
          <button className="button-secondary" onClick={() => setPrepared(false)} type="button">
            <RotateCcw aria-hidden="true" size={16} />
            Edit message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="content-card !p-6 sm:!p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="contact-name">
            Name
          </label>
          <input
            autoComplete="name"
            className="field"
            id="contact-name"
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            required
            value={form.name}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="contact-email">
            Email address
          </label>
          <input
            autoComplete="email"
            className="field"
            id="contact-email"
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
            type="email"
            value={form.email}
          />
        </div>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-semibold" htmlFor="contact-organization">
          Organization, school, or team{" "}
          <span className="font-normal text-[var(--ink-soft)]">(optional)</span>
        </label>
        <input
          autoComplete="organization"
          className="field"
          id="contact-organization"
          onChange={(event) => setForm({ ...form, organization: event.target.value })}
          value={form.organization}
        />
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-semibold" htmlFor="contact-reason">
          I’m contacting you about
        </label>
        <select
          className="field"
          id="contact-reason"
          onChange={(event) => setForm({ ...form, reason: event.target.value })}
          value={form.reason}
        >
          {[
            "General question",
            "Education or workshop",
            "Research collaboration",
            "Product feedback",
            "Partnership",
            "Media inquiry",
          ].map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </select>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-semibold" htmlFor="contact-message">
          Message
        </label>
        <textarea
          aria-describedby="contact-message-safety"
          className="field min-h-40 resize-y"
          id="contact-message"
          minLength={20}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Tell us what you are working toward…"
          required
          value={form.message}
        />
        <div
          className="mt-3 flex gap-2 text-xs leading-5 text-[var(--ink-muted)]"
          id="contact-message-safety"
        >
          <ShieldAlert
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-[var(--danger)]"
            size={15}
          />
          Please do not include patient information, health records, passwords, credentials, or
          other confidential data.
        </div>
      </div>
      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl bg-[var(--surface-muted)] p-4 text-sm leading-6">
        <input
          checked={form.consent}
          className="mt-1 h-4 w-4 accent-violet-600"
          onChange={(event) => setForm({ ...form, consent: event.target.checked })}
          required
          type="checkbox"
        />
        <span>
          I understand this form prepares an email on my device and I have not included sensitive
          information.
        </span>
      </label>
      <button className="button-primary mt-7 w-full !min-h-[3.2rem]" type="submit">
        Prepare message
        <ArrowRight aria-hidden="true" size={16} />
      </button>
    </form>
  );
}
