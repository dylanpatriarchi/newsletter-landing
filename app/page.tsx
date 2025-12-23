'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info', text: string } | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieConsent = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowCookieBanner(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      if (!webhookUrl) throw new Error('Config Error');

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'minimal-newsletter' }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage({ type: 'success', text: 'Ti sei iscritto correttamente!' });
        setEmail('');
      } else {
        setMessage({ type: 'info', text: 'Sei già iscritto.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Si è verificato un errore.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6 font-sans">
      <div className="max-w-xl w-full flex flex-col items-center text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Iscriviti alla newsletter
        </h1>
        <p className="text-gray-500 text-lg mb-10 font-light leading-relaxed">
          Ottieni l'accesso a risorse esclusive, approfondimenti sull'AI <br className="hidden md:block" />
          e aggiornamenti diretti dal team di Rayo Consulting.
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="flex-1 border border-gray-200 rounded-lg px-6 py-4 outline-none focus:border-primary transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white px-10 py-4 rounded-lg font-medium hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isSubmitting ? 'Invio...' : 'Iscriviti'}
            </button>
          </div>
          {message && (
            <p className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
              {message.text}
            </p>
          )}
        </form>
      </div>

      <footer className="mt-auto w-full max-w-4xl py-12 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs text-gray-400">
          <div className="space-y-2">
            <p className="font-medium text-black">Rayo Consulting di Patriarchi Dylan</p>
            <p>P.IVA 03988190546</p>
            <p>Vocabolo Marcheggiane 56/C</p>
            <p>Breccione Zona Industriale, Città di Castello (PG)</p>
            <a href="mailto:info@rayo.consulting" className="text-black hover:text-primary transition-colors">info@rayo.consulting</a>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </footer>

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 md:px-12 z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-500 text-center md:text-left">
              Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
              Navigando, accetti la nostra <Link href="/cookie" className="underline">Cookie Policy</Link>.
            </p>
            <button
              onClick={handleCookieConsent}
              className="bg-primary text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-all shrink-0"
            >
              Accetto
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
