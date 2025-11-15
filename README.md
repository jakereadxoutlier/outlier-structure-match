# Outlier Structures Website

Outlier Structures connects ultra-luxury custom home projects and commercial developments with elite structural concrete contractors across Ventura County, Conejo Valley, West San Fernando Valley, Malibu, and Topanga.

## Project Stack

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI framework
- **React Router** - Client-side routing
- **shadcn-ui** - High-quality React components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Local Development

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```sh
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

The development server will start at `http://localhost:8080`

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   └── ui/        # shadcn-ui components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   ├── index.css      # Global styles
│   └── main.tsx       # Entry point
├── index.html         # HTML template
└── vite.config.ts     # Vite configuration
```

## Features

- Ultra-luxury structural concrete project matching
- Elite contractor network ($200k-$5M projects)
- Multi-page application with React Router
- HighLevel CRM integration for lead capture
- Responsive design for all devices
- SEO optimized with meta tags
- Custom SVG logo and branding

## Deployment

This project can be deployed to any static hosting service:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

The `vercel.json` file is included for proper SPA routing on Vercel.

## Contact

**Email:** outlierstructures@gmail.com

**Service Areas:** Ventura County, Conejo Valley, West San Fernando Valley, Malibu, Topanga
