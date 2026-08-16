import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus('submitting');
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);
      const { error } = await supabase
        .from('contact_messages')
        .insert({ name: name.trim(), email: email.trim(), message: message.trim() });
      if (error) throw error;
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative z-10 w-full overflow-hidden px-6 py-32 sm:py-40">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — Statement */}
          <div className="lg:col-span-5 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Reach Me
            </p>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-normal text-foreground leading-[1.0]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Let's build
              <br />
              something
              <br />
              <em className="not-italic text-muted-foreground">worth the quiet.</em>
            </h2>

            <div className="mt-12 space-y-3 text-sm">
              <p className="text-muted-foreground">
                Studio — Reykjavík &amp; Lisbon
              </p>
              <a
                href="mailto:hello@kusooo.studio"
                className="block text-foreground hover:text-muted-foreground transition-colors"
              >
                hello@kusooo.studio
              </a>
              <p className="text-muted-foreground">Open to select projects for 2026.</p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={handleSubmit}
              className="liquid-glass rounded-3xl p-8 sm:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-border focus:border-foreground/60 outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@studio.com"
                    className="w-full bg-transparent border-b border-border focus:border-foreground/60 outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell us about the work you have in mind…"
                  className="w-full bg-transparent border-b border-border focus:border-foreground/60 outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground">
                  We reply within two working days.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground inline-flex items-center justify-center gap-2 transition-transform hover:scale-[1.03] cursor-pointer disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === 'submitting' && (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <Check size={16} />
                      Message sent
                    </>
                  )}
                  {(status === 'idle' || status === 'error') && (
                    <>
                      Send message
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>

              {status === 'success' && (
                <p className="text-sm text-foreground/80 pt-2 animate-fade-rise">
                  Thank you — your message has reached us. We'll be in touch
                  shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-foreground/80 pt-2">
                  Something went wrong sending your message. Please try again, or
                  email us directly at hello@kusooo.studio.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
