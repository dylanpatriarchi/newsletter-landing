'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info', text: string } | null>(null);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.6, ease: 'back.out(1.2)' }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedPrivacy) {
      setMessage({ type: 'error', text: 'Devi accettare la Privacy Policy per continuare.' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('https://chat.rayo.consulting/webhook/2c009c72-f940-4ab1-a004-a8d289f73237', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success === true || data.success === "true") {
        setMessage({ 
          type: 'success', 
          text: 'Perfetto! Controlla la tua email per confermare l\'iscrizione.' 
        });
        setEmail('');
        setAcceptedPrivacy(false);
      } else {
        setMessage({ 
          type: 'info', 
          text: 'Risulti già iscritto alla nostra newsletter!' 
        });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Si è verificato un errore. Riprova più tardi.' 
      });
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#ff4f37] via-[#ff6347] to-[#ffa07a] relative overflow-hidden">
        {/* Background animation circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-6 py-8 md:px-12">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl font-serif">RAYO CONSULTING</div>
            <div className="flex gap-6 text-white text-sm font-medium">
              <a href="https://rayo.consulting" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">HOME</a>
              <Link href="/privacy" className="hover:opacity-80 transition-opacity">PRIVACY</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              ref={titleRef}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
            >
              Rimani aggiornato sul mondo dell'AI
            </h1>

            <p 
              ref={subtitleRef}
              className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            >
              Iscriviti alla newsletter di Rayo Consulting e ricevi news esclusive sull'intelligenza artificiale, 
              risorse utili e sconti speciali sui nostri servizi.
            </p>

            {/* Form */}
            <div ref={formRef} className="max-w-xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Unisciti alla Community
                </h2>
                <p className="text-gray-600 mb-8">
                  Newsletter a scopo informativo con contenuti esclusivi
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="La tua email"
                      required
                      className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#ff4f37] focus:outline-none text-gray-900 placeholder-gray-400 transition-colors"
                    />
                  </div>

                  <div className="flex items-start gap-3 text-left">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={acceptedPrivacy}
                      onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                      className="mt-1 w-5 h-5 accent-[#ff4f37]"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                      Accetto la{' '}
                      <button
                        type="button"
                        onClick={() => setShowPrivacy(true)}
                        className="text-[#ff4f37] underline hover:opacity-80"
                      >
                        Privacy Policy
                      </button>
                      {' '}e acconsento al trattamento dei miei dati personali secondo il GDPR. 
                      Le email saranno salvate in un database sicuro e protetto.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ff4f37] to-[#ff6347] text-white font-semibold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti Ora'}
                  </button>
                </form>

                {message && (
                  <div className={`mt-6 p-4 rounded-xl flex items-start gap-3 ${
                    message.type === 'success' ? 'bg-green-50 text-green-800' :
                    message.type === 'info' ? 'bg-blue-50 text-blue-800' :
                    'bg-red-50 text-red-800'
                  }`}>
                    {message.type === 'success' && (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {message.type === 'info' && (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {message.type === 'error' && (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span>{message.text}</span>
                  </div>
                )}

                {/* Features */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="mb-3">
                      <svg className="w-8 h-8 text-[#ff4f37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">News AI</h3>
                    <p className="text-sm text-gray-600">Le ultime novità dal mondo dell'intelligenza artificiale</p>
                  </div>
                  <div>
                    <div className="mb-3">
                      <svg className="w-8 h-8 text-[#ff4f37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Risorse</h3>
                    <p className="text-sm text-gray-600">Guide, tutorial e strumenti esclusivi</p>
                  </div>
                  <div>
                    <div className="mb-3">
                      <svg className="w-8 h-8 text-[#ff4f37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sconti</h3>
                    <p className="text-sm text-gray-600">Offerte speciali riservate agli iscritti</p>
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="mt-8 text-white/80 text-sm">
                <p className="mb-2">
                  <strong>Rayo Consulting</strong> di Patriarchi Dylan
                </p>
                <p className="mb-2">P.IVA 03988190546</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@rayo.consulting" className="underline hover:opacity-80">
                    info@rayo.consulting
                  </a>
                </p>
                <div className="mt-4 flex gap-4 justify-center text-xs">
                  <Link href="/privacy" className="underline hover:opacity-80">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="underline hover:opacity-80">
                    Termini di Servizio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowPrivacy(false)}>
          <div className="bg-white rounded-2xl max-w-2xl max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-serif text-3xl text-gray-900">Privacy Policy</h2>
              <button onClick={() => setShowPrivacy(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                ×
              </button>
            </div>
            <div className="prose prose-sm text-gray-700 space-y-4">
              <p><strong>Ultimo aggiornamento: 17 Novembre 2025</strong></p>
              
              <h3 className="font-semibold text-lg mt-6">1. Titolare del Trattamento</h3>
              <p>
                Il Titolare del trattamento dei dati personali è:<br/>
                <strong>Rayo Consulting di Patriarchi Dylan</strong><br/>
                P.IVA: 03988190546<br/>
                Email: info@rayo.consulting
              </p>

              <h3 className="font-semibold text-lg mt-6">2. Dati Raccolti</h3>
              <p>
                Raccogliamo esclusivamente il tuo indirizzo email per l'invio della newsletter.
              </p>

              <h3 className="font-semibold text-lg mt-6">3. Finalità del Trattamento</h3>
              <p>
                I dati raccolti vengono utilizzati per:
              </p>
              <ul className="list-disc pl-6">
                <li>Invio di newsletter periodiche su AI, risorse e contenuti esclusivi</li>
                <li>Comunicazioni di offerte speciali e sconti riservati</li>
                <li>Informazioni sui servizi di Rayo Consulting</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6">4. Base Giuridica</h3>
              <p>
                Il trattamento è basato sul consenso esplicito dell'interessato (Art. 6, comma 1, lett. a) GDPR).
              </p>

              <h3 className="font-semibold text-lg mt-6">5. Conservazione dei Dati</h3>
              <p>
                I tuoi dati sono conservati in un database sicuro e protetto. Verranno mantenuti fino alla revoca del consenso 
                o alla richiesta di cancellazione.
              </p>

              <h3 className="font-semibold text-lg mt-6">6. I Tuoi Diritti</h3>
              <p>
                Hai diritto a:
              </p>
              <ul className="list-disc pl-6">
                <li>Accedere ai tuoi dati personali</li>
                <li>Richiedere la rettifica o la cancellazione</li>
                <li>Opporti al trattamento</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Presentare reclamo all'Autorità Garante</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6">7. Sicurezza</h3>
              <p>
                Adottiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati 
                da accessi non autorizzati, perdita o divulgazione.
              </p>

              <h3 className="font-semibold text-lg mt-6">8. Contatti</h3>
              <p>
                Per esercitare i tuoi diritti o per qualsiasi domanda, contattaci a: info@rayo.consulting
              </p>
            </div>
            <button 
              onClick={() => setShowPrivacy(false)}
              className="mt-6 w-full bg-[#ff4f37] text-white py-3 rounded-full hover:bg-[#ff6347] transition-colors"
            >
              Ho Capito
            </button>
          </div>
        </div>
      )}
    </>
  );
}

