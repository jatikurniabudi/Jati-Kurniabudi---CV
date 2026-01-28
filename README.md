# Sejati Kurniabudi - Personal CV Website

A modern, responsive personal CV website built with Next.js 16.0.10, featuring Turbopack for blazing-fast development and Tailwind CSS for elegant styling.

## 🚀 Features

- **Next.js 16.0.10** with Turbopack for ultra-fast development
- **Static Site Generation** - Exports to static HTML/CSS/JS
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Tailwind CSS** - Clean, elegant, and customizable styling
- **Dark Mode Support** - Automatic dark mode based on system preferences
- **SEO Optimized** - Proper meta tags and semantic HTML

## 📦 Tech Stack

- **Framework**: Next.js 16.0.10
- **Build Tool**: Turbopack
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Static Export

## 🛠️ Installation

Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Server (with Turbopack)

Start the development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

Build the static website for production:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npx serve out
```

## 📁 Project Structure

```
cv-website/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main CV page with all sections
│   └── globals.css      # Global styles and Tailwind config
├── out/                 # Static export output (after build)
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Sections Included

- **Hero Section** - Name, title, contact information, and professional summary
- **Work Experience** - Detailed work history with responsibilities
- **Education** - Academic background and achievements
- **Skills** - Soft skills and hard skills with visual tags
- **Certifications** - Professional certifications and licenses

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy:

```bash
vercel
```

### Deploy to Netlify or Other Platforms

Build the static site and deploy the `out/` directory:

```bash
npm run build
```

Then upload the contents of the `out/` directory to your hosting provider.

## 🎨 Customization

To customize the content:

1. Edit `app/page.tsx` to update your CV information
2. Modify `app/globals.css` to change colors and styling
3. Update `app/layout.tsx` to change metadata (title, description)

## 👤 Author

**Sejati Kurniabudi**
- Email: jatikurniabudi4@gmail.com
- Phone: 085876878711

---

Built with ❤️ using Next.js 16.0.10 and Tailwind CSS
