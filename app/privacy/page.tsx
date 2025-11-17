import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff4f37] via-[#ff6347] to-[#ffa07a]">
      <nav className="px-6 py-8 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl font-serif hover:opacity-80 transition-opacity">
            ← RAYO CONSULTING
          </Link>
        </div>
      </nav>

      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p><strong>Ultimo aggiornamento: 17 Novembre 2025</strong></p>
            
            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali è:<br/>
                <strong>Rayo Consulting di Patriarchi Dylan</strong><br/>
                Sede legale: Italia<br/>
                P.IVA: 03988190546<br/>
                Email: <a href="mailto:info@rayo.consulting" className="text-[#ff4f37] underline">info@rayo.consulting</a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Dati Personali Raccolti</h2>
              <p>
                Attraverso il servizio di newsletter, raccogliamo esclusivamente il seguente dato personale:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Indirizzo email</strong>: necessario per l'invio delle comunicazioni newsletter</li>
              </ul>
              <p className="mt-4">
                Non raccogliamo altri dati sensibili o particolari categorie di dati personali.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Finalità del Trattamento</h2>
              <p>I dati raccolti vengono trattati per le seguenti finalità:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Invio di newsletter periodiche contenenti informazioni su intelligenza artificiale, news tecnologiche e risorse utili</li>
                <li>Comunicazioni relative a offerte speciali, sconti e promozioni sui servizi di Rayo Consulting</li>
                <li>Informazioni sui nostri servizi, eventi e aggiornamenti aziendali</li>
                <li>Gestione delle richieste di cancellazione e dei diritti degli interessati</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Base Giuridica del Trattamento</h2>
              <p>
                Il trattamento dei tuoi dati personali è basato sul <strong>consenso esplicito</strong> che fornisci al momento dell'iscrizione 
                alla newsletter (Art. 6, comma 1, lett. a) del Regolamento UE 2016/679 - GDPR).
              </p>
              <p className="mt-4">
                Il consenso può essere revocato in qualsiasi momento senza pregiudicare la liceità del trattamento 
                basata sul consenso prestato prima della revoca.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Modalità di Trattamento</h2>
              <p>
                I dati personali sono trattati con strumenti informatici e telematici. Sono adottate 
                misure di sicurezza tecniche e organizzative appropriate per garantire:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La protezione dei dati da accessi non autorizzati</li>
                <li>La prevenzione di perdita, distruzione o danneggiamento dei dati</li>
                <li>La confidenzialità e integrità delle informazioni</li>
                <li>La disponibilità e resilienza dei sistemi</li>
              </ul>
              <p className="mt-4">
                I dati sono conservati in <strong>database sicuri e protetti</strong>, con accesso limitato al personale autorizzato.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Conservazione dei Dati</h2>
              <p>
                I tuoi dati personali saranno conservati per il tempo strettamente necessario a conseguire le finalità 
                per le quali sono stati raccolti, ovvero:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fino alla revoca del consenso da parte dell'interessato</li>
                <li>Fino alla richiesta di cancellazione dei dati</li>
                <li>Fino alla cessazione del servizio di newsletter</li>
              </ul>
              <p className="mt-4">
                Al termine del periodo di conservazione, i dati saranno cancellati o resi anonimi in modo permanente.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Comunicazione e Diffusione dei Dati</h2>
              <p>
                I tuoi dati personali non saranno:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ceduti, venduti o condivisi con terze parti per scopi commerciali</li>
                <li>Trasferiti al di fuori dell'Unione Europea senza adeguate garanzie</li>
                <li>Utilizzati per finalità diverse da quelle dichiarate</li>
              </ul>
              <p className="mt-4">
                I dati potrebbero essere trattati da fornitori di servizi tecnici (ad esempio, provider di hosting o servizi email) 
                che agiscono come responsabili del trattamento secondo le nostre istruzioni e nel rispetto del GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Diritti dell'Interessato</h2>
              <p>
                In conformità al GDPR, hai i seguenti diritti:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Diritto di accesso (Art. 15)</strong>: ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
                <li><strong>Diritto di rettifica (Art. 16)</strong>: richiedere la correzione di dati inesatti o incompleti</li>
                <li><strong>Diritto alla cancellazione (Art. 17)</strong>: richiedere la cancellazione dei tuoi dati ("diritto all'oblio")</li>
                <li><strong>Diritto di limitazione (Art. 18)</strong>: richiedere la limitazione del trattamento</li>
                <li><strong>Diritto alla portabilità (Art. 20)</strong>: ricevere i dati in formato strutturato</li>
                <li><strong>Diritto di opposizione (Art. 21)</strong>: opporti al trattamento dei tuoi dati</li>
                <li><strong>Diritto di revoca del consenso</strong>: revocare il consenso in qualsiasi momento</li>
              </ul>
              <p className="mt-4">
                Per esercitare questi diritti, puoi contattarci all'indirizzo: <a href="mailto:info@rayo.consulting" className="text-[#ff4f37] underline">info@rayo.consulting</a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Diritto di Reclamo</h2>
              <p>
                Hai il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali se ritieni 
                che il trattamento dei tuoi dati violi il GDPR.
              </p>
              <p className="mt-4">
                <strong>Garante per la Protezione dei Dati Personali</strong><br/>
                Piazza Venezia, 11 - 00187 Roma<br/>
                Tel: +39 06.696771<br/>
                Email: garante@gpdp.it<br/>
                Web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#ff4f37] underline">www.garanteprivacy.it</a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Cookie e Tecnologie di Tracciamento</h2>
              <p>
                Questo sito non utilizza cookie di profilazione o tracciamento. Potrebbero essere utilizzati 
                solo cookie tecnici strettamente necessari per il funzionamento del servizio.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Modifiche alla Privacy Policy</h2>
              <p>
                Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. 
                Eventuali modifiche saranno pubblicate su questa pagina con l'indicazione della data di ultimo aggiornamento.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contatti</h2>
              <p>
                Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
              </p>
              <p className="mt-4">
                <strong>Rayo Consulting di Patriarchi Dylan</strong><br/>
                Email: <a href="mailto:info@rayo.consulting" className="text-[#ff4f37] underline">info@rayo.consulting</a><br/>
                P.IVA: 03988190546
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-[#ff4f37] to-[#ff6347] text-white font-semibold py-3 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Torna alla Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

