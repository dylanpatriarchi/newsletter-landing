'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info', text: string } | null>(null);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-in',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedPrivacy) {
      setMessage({ type: 'error', text: 'Devi accettare la Privacy Policy.' });
      return;
    }

    // Validazione email frontend
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Inserisci un\'email valida.' });
      return;
    }

    // Rate limiting frontend (max 1 richiesta ogni 5 secondi)
    const lastSubmit = localStorage.getItem('lastNewsletterSubmit');
    if (lastSubmit) {
      const timeDiff = Date.now() - parseInt(lastSubmit);
      if (timeDiff < 5000) {
        setMessage({ type: 'error', text: 'Aspetta qualche secondo prima di riprovare.' });
        return;
      }
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      // Salva timestamp per rate limiting
      localStorage.setItem('lastNewsletterSubmit', Date.now().toString());

      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      
      if (!webhookUrl) {
        throw new Error('Webhook URL non configurato');
      }
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          timestamp: Date.now(),
          source: 'newsletter-landing',
          'cf-turnstile-response': turnstileToken // Token Cloudflare (se presente)
        }),
      });

      const data = await response.json();

      if (data.success === true || data.success === "true") {
        setMessage({ type: 'success', text: 'Iscrizione confermata!' });
        setEmail('');
        setAcceptedPrivacy(false);
      } else {
        setMessage({ type: 'info', text: 'Sei già iscritto.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Errore. Riprova.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />
      <main className="min-h-screen flex flex-col bg-[#F9F9F9] selection:bg-[#FF4F37] selection:text-white">
      
      {/* HERO SECTION */}
      <div ref={mainRef} className="relative w-full min-h-[85vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        
        {/* Background subtle gradient spots */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#FF4F37]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-200/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <span className="animate-in inline-block text-[#FF4F37] font-medium tracking-widest text-sm mb-6 uppercase">
            ( 00-01 ) • Newsletter
          </span>
          
          <h1 className="animate-in font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.95] text-[#1A1A1A] mb-8 -ml-1">
            Rimani aggiornato <br />
            sul mondo dell'AI.
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-12">
            <p className="animate-in text-lg md:text-xl max-w-xl text-[#666666] leading-relaxed font-light">
              Siamo la prima AI Agency di Città di Castello. <br className="hidden md:block" />
              Iscriviti alla newsletter per news e risorse esclusive.
            </p>

            <form onSubmit={handleSubmit} className="animate-in w-full max-w-md">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4F37] to-[#ff8c73] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-white rounded-full p-1.5 flex shadow-sm border border-gray-100 group-hover:border-[#FF4F37]/30 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="La tua email"
                    required
                    className="flex-1 bg-transparent px-6 py-3 text-[#1A1A1A] placeholder-gray-400 outline-none font-medium"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF4F37] transition-colors duration-300 disabled:opacity-50 whitespace-nowrap"
                  >
                    {isSubmitting ? '...' : 'Iscriviti'}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pl-4">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="w-3.5 h-3.5 accent-[#FF4F37] rounded cursor-pointer"
                />
                <label htmlFor="privacy" className="text-xs text-[#666666] cursor-pointer select-none hover:text-[#1A1A1A] transition-colors">
                  Accetto la <button type="button" onClick={() => setShowPrivacy(true)} className="underline decoration-gray-300 hover:text-[#FF4F37]">Privacy Policy</button>
                </label>
              </div>

              {message && (
                <div className={`mt-4 pl-4 text-sm flex items-center gap-2 ${
                  message.type === 'success' ? 'text-green-600' : 
                  message.type === 'error' ? 'text-red-500' : 'text-blue-500'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    message.type === 'success' ? 'bg-green-600' : 
                    message.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  {message.text}
                </div>
              )}

              {/* Cloudflare Turnstile - invisibile, si attiva solo se sospetto */}
              {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                <div 
                  className="cf-turnstile mt-4" 
                  data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  data-theme="light"
                  data-size="invisible"
                />
              )}
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer ref={footerRef} className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-20">
            <div className="relative w-full lg:w-auto">
              <span className="text-[#FF4F37] text-sm font-medium mb-2 block">AI Agency</span>
              <div className="font-sans font-bold text-[18vw] lg:text-[12rem] leading-[0.8] text-[#FF4F37] tracking-tighter -ml-[0.05em]">
                Rayo.
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-right lg:text-left w-full lg:w-auto justify-end">
              <div className="flex flex-col gap-4">
                <span className="text-gray-400 text-xs uppercase tracking-widest">Contatti</span>
                <a href="mailto:info@rayo.consulting" className="text-xl text-[#1A1A1A] hover:text-[#FF4F37] transition-colors font-medium">
                  info@rayo.consulting
                </a>
                <p className="text-lg text-gray-500 font-light">+39 327 174 6038</p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-gray-400 text-xs uppercase tracking-widest">Social</span>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl text-[#1A1A1A] hover:text-[#FF4F37] transition-colors font-medium">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-[#1A1A1A] hover:text-[#FF4F37] transition-colors font-medium">Linkedin</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-500 font-medium gap-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left">
              <span>Rayo Consulting di Patriarchi Dylan</span>
              <span className="hidden sm:block text-gray-300">|</span>
              <span>P.IVA IT03988190546</span>
            </div>
            <Link href="/terms" className="hover:text-[#FF4F37] transition-colors">Termini e Condizioni</Link>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowPrivacy(false)}>
          <div className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-serif text-4xl text-[#1A1A1A]">Privacy Policy</h2>
              <button onClick={() => setShowPrivacy(false)} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-[#FF4F37] transition-all">
                ✕
              </button>
            </div>
            
            <div className="prose prose-sm prose-neutral max-w-none">
              <p className="text-gray-500">Ultimo aggiornamento: 17 Novembre 2025</p>
              
              <div className="my-8 h-px bg-gray-100 w-full"></div>

              <h3 className="text-lg font-medium text-[#1A1A1A]">1. Titolare del Trattamento</h3>
              <p>
                Rayo Consulting di Patriarchi Dylan<br/>
                P.IVA: 03988190546<br/>
                Email: info@rayo.consulting
              </p>

              <h3 className="text-lg font-medium text-[#1A1A1A] mt-8">2. Dati e Finalità</h3>
              <p>
                Raccogliamo il tuo indirizzo email esclusivamente per inviarti la nostra newsletter periodica contenente aggiornamenti su AI, risorse esclusive e offerte dedicate.
              </p>

              <h3 className="text-lg font-medium text-[#1A1A1A] mt-8">3. I Tuoi Diritti</h3>
              <p>
                Puoi disiscriverti in qualsiasi momento cliccando sul link presente in ogni email o contattandoci. I tuoi dati non verranno mai ceduti a terzi.
              </p>
            </div>

            <button 
              onClick={() => setShowPrivacy(false)}
              className="mt-10 w-full bg-[#1A1A1A] text-white py-4 rounded-full hover:bg-[#FF4F37] transition-colors font-medium text-lg"
            >
              Ho Capito
            </button>
          </div>
        </div>
      )}
    </main>
    </>
  );
}
