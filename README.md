# Rayo Consulting - Newsletter Landing Page

Landing page per l'iscrizione alla newsletter di Rayo Consulting, specializzata in AI, risorse e offerte esclusive.

## 🚀 Caratteristiche

- **Design Moderno**: Ispirato al sito principale di Rayo Consulting con gradiente arancione
- **Font Elegante**: Utilizzo di Instrument Serif per un tocco tipografico professionale
- **Animazioni GSAP**: Animazioni fluide e coinvolgenti per un'esperienza utente premium
- **GDPR Compliant**: Completamente conforme alle normative sulla privacy europea
- **Responsive**: Ottimizzato per tutti i dispositivi (desktop, tablet, mobile)
- **Form Sicuro**: Validazione completa e gestione errori

## 🛠️ Tecnologie

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first
- **GSAP** - Animazioni professionali
- **Google Fonts** - Instrument Serif

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia in produzione
npm start
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 🌐 Struttura

```
newsletter-landing/
├── app/
│   ├── layout.tsx          # Layout principale con font
│   ├── page.tsx            # Homepage con form newsletter
│   ├── globals.css         # Stili globali
│   ├── privacy/
│   │   └── page.tsx        # Privacy Policy completa
│   └── terms/
│       └── page.tsx        # Termini di Servizio
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 📧 API Endpoint

Il form invia i dati all'endpoint:
```
POST https://chat.rayo.consulting/webhook/2c009c72-f940-4ab1-a004-a8d289f73237
```

**Payload:**
```json
{
  "email": "user@example.com"
}
```

**Risposte:**
- `{ "success": true }` - Nuova iscrizione confermata
- `{ "success": false }` - Email già iscritta

## 🔒 Privacy & GDPR

- ✅ Consenso esplicito richiesto
- ✅ Privacy Policy dettagliata
- ✅ Termini di Servizio completi
- ✅ Dati salvati in database sicuro
- ✅ Diritti dell'utente chiaramente indicati
- ✅ Possibilità di disiscrizione

## 📱 Funzionalità

### Form Newsletter
- Validazione email
- Checkbox consenso privacy obbligatoria
- Feedback immediato su successo/errore
- Gestione iscrizioni duplicate
- Loading state durante invio

### Animazioni
- Fade-in del titolo
- Slide-up del sottotitolo
- Scale-in del form
- Hover effects sui bottoni

### SEO
- Meta tags ottimizzati
- Titolo e descrizione per newsletter AI
- Struttura semantica HTML5

## 👤 Informazioni

**Azienda:** Rayo Consulting  
**Titolare:** Patriarchi Dylan  
**P.IVA:** 03988190546  
**Email:** info@rayo.consulting  
**Website:** https://rayo.consulting

## 📄 Licenza

© 2025 Rayo Consulting. Tutti i diritti riservati.

