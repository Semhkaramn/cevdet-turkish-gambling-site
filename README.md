# Cevdet - Turkish Gambling Site

Turkish gambling and betting site built with Next.js - Static export with hero slider, VIP sections, and notification system.

## 🎯 Features

- **Hero Slider**: Auto-rotating promotional banners for betting sites
- **VIP Section**: Premium gambling sites with special promotions
- **Diamond Section**: Elite betting platforms with exclusive offers
- **Notification System**: Rotating popup notifications for deals
- **Side Banners**: Fixed promotional banners on left/right sides
- **Turkish Language**: Full Turkish language support and localization
- **Responsive Design**: Mobile-first design for all devices
- **Social Media Links**: Discord, Telegram, Twitch, Instagram, YouTube integration

## 🚀 Getting Started

First, install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Build & Deploy

Build for production:

```bash
bun run build
```

The site is configured for static export and will generate files in the `out` directory.

## 🛠️ Tech Stack

- **Next.js 15** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Bun** - Fast package manager and runtime

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles and Turkish fonts
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Main page component
├── components/
│   ├── Header.tsx      # Navigation and social links
│   ├── HeroSlider.tsx  # Auto-rotating hero banner
│   ├── VipSection.tsx  # VIP gambling sites
│   ├── DiamondSection.tsx # Premium sites
│   ├── SitesGrid.tsx   # Normal sites grid
│   ├── NotificationPopup.tsx # Popup notifications
│   ├── SideBanners.tsx # Fixed side promotions
│   └── Footer.tsx      # Footer with disclaimers
├── data/
│   └── mockData.ts     # Site data and configuration
└── types/
    └── index.ts        # TypeScript interfaces
```

## 🎨 Design Features

- **Dark Theme**: Gaming-oriented dark color scheme
- **Orange Accents**: Brand color for CTAs and highlights
- **Rajdhani Font**: Modern Turkish font family
- **Hover Effects**: Interactive animations and transitions
- **Card Layouts**: Modern card-based design for sites
- **Trust Indicators**: Star ratings and security badges

## 🔧 Configuration

The site uses mock data in `src/data/mockData.ts` for betting sites and promotions. Replace with real API data for production use.

## ⚠️ Disclaimer

This is a demonstration project for educational purposes. Gambling can be addictive. Please gamble responsibly.

## 📄 License

This project is for demonstration purposes only.
