# Rayo Consulting - Newsletter Landing Page

Landing page for Rayo Consulting newsletter subscription, featuring AI news, resources, and exclusive offers.

## 🚀 Features

- **Modern Design**: Inspired by Rayo Consulting's main site with orange gradient
- **Elegant Typography**: Instrument Serif font for a professional typographic touch
- **GSAP Animations**: Smooth and engaging animations for a premium user experience
- **GDPR Compliant**: Fully compliant with European privacy regulations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Secure Form**: Complete validation and error handling

## 🛠️ Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **GSAP** - Professional animations
- **Google Fonts** - Instrument Serif

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start in production
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## 🌐 Project Structure

```
newsletter-landing/
├── app/
│   ├── layout.tsx          # Main layout with fonts
│   ├── page.tsx            # Homepage with newsletter form
│   ├── globals.css         # Global styles
│   ├── privacy/
│   │   └── page.tsx        # Complete Privacy Policy
│   └── terms/
│       └── page.tsx        # Terms of Service
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 📧 API Endpoint

The form sends data to the endpoint:
```
POST https://chat.rayo.consulting/webhook/2c009c72-f940-4ab1-a004-a8d289f73237
```

**Payload:**
```json
{
  "email": "user@example.com"
}
```

**Responses:**
- `{ "success": true }` - New subscription confirmed
- `{ "success": false }` - Email already subscribed

## 🔒 Privacy & GDPR

- ✅ Explicit consent required
- ✅ Detailed Privacy Policy
- ✅ Complete Terms of Service
- ✅ Data stored in secure database
- ✅ User rights clearly stated
- ✅ Unsubscribe option available

## 📱 Functionality

### Newsletter Form
- Email validation
- Mandatory privacy consent checkbox
- Immediate success/error feedback
- Duplicate subscription handling
- Loading state during submission

### Animations
- Title fade-in
- Subtitle slide-up
- Form scale-in
- Button hover effects

### SEO
- Optimized meta tags
- Title and description for AI newsletter
- Semantic HTML5 structure

## 👤 Information

**Company:** Rayo Consulting  
**Owner:** Patriarchi Dylan  
**VAT:** 03988190546  
**Email:** info@rayo.consulting  
**Website:** https://rayo.consulting

## 📄 License

© 2025 Rayo Consulting. All rights reserved.

