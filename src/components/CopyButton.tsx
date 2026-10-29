"use client";

import { useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
  copiedLabel: string;
};

export function CopyButton({ value, label, copiedLabel }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-md border border-[var(--color-navy)]/20 bg-white px-3 py-1.5 text-sm font-medium text-[var(--color-navy)] transition hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
