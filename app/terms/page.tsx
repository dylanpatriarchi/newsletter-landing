import Link from 'next/link';

export default function TermsPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">Termini di Servizio</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p><strong>Ultimo aggiornamento: 17 Novembre 2025</strong></p>
            
            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Accettazione dei Termini</h2>
              <p>
                Benvenuto nel servizio di newsletter di Rayo Consulting. Iscrivendoti alla nostra newsletter, 
                accetti di essere vincolato ai presenti Termini di Servizio. Se non accetti questi termini, 
                ti preghiamo di non iscriverti al servizio.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Descrizione del Servizio</h2>
              <p>
                Il servizio di newsletter di Rayo Consulting consiste nell'invio periodico di comunicazioni via email 
                contenenti:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>News e aggiornamenti sull'intelligenza artificiale</li>
                <li>Risorse, guide e contenuti informativi</li>
                <li>Offerte speciali e sconti sui servizi di Rayo Consulting</li>
                <li>Aggiornamenti su eventi e iniziative aziendali</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Iscrizione e Consenso</h2>
              <p>
                L'iscrizione alla newsletter richiede:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La fornitura di un indirizzo email valido</li>
                <li>Il consenso esplicito al trattamento dei dati personali secondo la Privacy Policy</li>
                <li>L'accettazione dei presenti Termini di Servizio</li>
              </ul>
              <p className="mt-4">
                Fornendo il tuo indirizzo email e spuntando la casella di consenso, confermi di:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essere maggiorenne o avere il consenso dei genitori/tutori</li>
                <li>Aver fornito un indirizzo email di tua proprietà</li>
                <li>Desiderare ricevere le comunicazioni newsletter</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Utilizzo del Servizio</h2>
              <p>
                Ti impegni a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornire informazioni accurate e veritiere</li>
                <li>Mantenere riservate le tue credenziali di accesso se applicabili</li>
                <li>Non utilizzare il servizio per scopi illeciti o non autorizzati</li>
                <li>Non inoltrare i contenuti della newsletter senza autorizzazione se contrassegnati come riservati</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Frequenza delle Comunicazioni</h2>
              <p>
                Ci riserviamo il diritto di determinare la frequenza di invio delle newsletter. 
                Ci impegniamo a non inviare comunicazioni spam e a rispettare la tua casella di posta.
              </p>
              <p className="mt-4">
                La frequenza indicativa è di 1-4 newsletter al mese, salvo comunicazioni urgenti o di particolare rilevanza.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Disiscrizione</h2>
              <p>
                Puoi disiscriverti dal servizio di newsletter in qualsiasi momento attraverso:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Il link di disiscrizione presente in ogni email</li>
                <li>Una richiesta via email a: <a href="mailto:info@rayo.consulting" className="text-[#ff4f37] underline">info@rayo.consulting</a></li>
              </ul>
              <p className="mt-4">
                La disiscrizione sarà effettiva entro 48 ore lavorative dalla richiesta.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Proprietà Intellettuale</h2>
              <p>
                Tutti i contenuti inviati tramite newsletter (testi, immagini, loghi, grafiche) sono di proprietà 
                di Rayo Consulting o dei rispettivi titolari e sono protetti dalle leggi sul copyright.
              </p>
              <p className="mt-4">
                È vietato:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copiare, riprodurre o distribuire i contenuti senza autorizzazione</li>
                <li>Modificare o creare opere derivate dai contenuti</li>
                <li>Utilizzare i contenuti per scopi commerciali senza permesso esplicito</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Limitazione di Responsabilità</h2>
              <p>
                Rayo Consulting non sarà responsabile per:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interruzioni temporanee del servizio dovute a manutenzione o problemi tecnici</li>
                <li>Mancata ricezione delle email dovuta a filtri antispam o problemi del provider email</li>
                <li>Danni indiretti derivanti dall'uso o dall'impossibilità di usare il servizio</li>
                <li>Decisioni prese in base ai contenuti informativi delle newsletter</li>
              </ul>
              <p className="mt-4">
                I contenuti della newsletter sono forniti a scopo puramente informativo e non costituiscono 
                consulenza professionale.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Modifiche al Servizio</h2>
              <p>
                Ci riserviamo il diritto di:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modificare, sospendere o interrompere il servizio in qualsiasi momento</li>
                <li>Cambiare il formato, i contenuti o la frequenza delle newsletter</li>
                <li>Aggiornare questi Termini di Servizio</li>
              </ul>
              <p className="mt-4">
                Eventuali modifiche sostanziali saranno comunicate agli iscritti via email.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Anti-Spam Policy</h2>
              <p>
                Rayo Consulting si impegna a rispettare tutte le normative anti-spam, incluso il Regolamento UE 2016/679 (GDPR) 
                e il D.Lgs. 196/2003 e successive modifiche.
              </p>
              <p className="mt-4">
                Non invieremo mai:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email non richieste a indirizzi raccolti senza consenso</li>
                <li>Comunicazioni dopo la richiesta di disiscrizione</li>
                <li>Email con oggetti ingannevoli o fuorvianti</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Privacy e Protezione dei Dati</h2>
              <p>
                Il trattamento dei tuoi dati personali è regolato dalla nostra{' '}
                <Link href="/privacy" className="text-[#ff4f37] underline">Privacy Policy</Link>, 
                che costituisce parte integrante di questi Termini di Servizio.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Legge Applicabile e Foro Competente</h2>
              <p>
                Questi Termini di Servizio sono regolati dalla legge italiana. 
                Per qualsiasi controversia sarà competente il foro del luogo di residenza del consumatore, 
                come previsto dal Codice del Consumo.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Contatti</h2>
              <p>
                Per qualsiasi domanda relativa a questi Termini di Servizio, contattaci:
              </p>
              <p className="mt-4">
                <strong>Rayo Consulting di Patriarchi Dylan</strong><br/>
                Email: <a href="mailto:info@rayo.consulting" className="text-[#ff4f37] underline">info@rayo.consulting</a><br/>
                P.IVA: 03988190546
              </p>
            </section>

            <section className="mt-8 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Clausola di salvaguardia:</strong> Qualora una o più disposizioni dei presenti Termini di Servizio 
                dovessero risultare invalide o inefficaci, ciò non pregiudicherà la validità delle restanti disposizioni.
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

