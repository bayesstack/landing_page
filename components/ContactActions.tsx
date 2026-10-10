'use client';

import { Check, Copy, Mail } from 'lucide-react';
import { useState } from 'react';

const email = 'hello@bayesstack.com';

export default function ContactActions() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="contact-actions">
      <a className="button primary" href="mailto:hello@bayesstack.com?subject=Institutional%20partnership%20enquiry"><Mail size={16} /> Start an email <span>→</span></a>
      <button className="button secondary" type="button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Email copied' : 'Copy email'}</button>
    </div>
  );
}
