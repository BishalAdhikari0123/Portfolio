# Bishal Adhikari - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, a clean design, and comprehensive sections showcasing backend development expertise.

## ✨ Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all device sizes
- **Smooth Animations**: Framer Motion integration for engaging user interactions
- **Modern UI**: Clean design with custom color scheme and typography
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Contact Integration**: Frontend-only contact form with mailto functionality

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: EB Garamond + Inter (Google Fonts)

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/BishalAdhikari0123/portfolio-website.git
cd portfolio-website
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `pnpm seo:sitemap` - Regenerate `public/sitemap.xml` from current posts/projects slugs

### SEO post batch workflow

After publishing a new batch of posts:

1. Regenerate sitemap via `pnpm seo:sitemap`
2. Deploy the updated build
3. Open Google Search Console → Sitemaps and resubmit:
  - `https://bishaladhikari1.com.np/sitemap.xml`

> Note: Search Console submission requires account access, so it cannot be fully automated from repository code alone.

## 🗄️ Supabase Blog Setup

Posts are now sourced from Supabase (database for posts only), and manual publishing is available at `/blog/new`.

### Required environment variables

Set these in `.env` locally and in your hosting environment:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `BLOG_POSTER_ID`

### Database and storage setup

Run `supabase/blog_posts_setup.sql` in Supabase SQL Editor. It creates:

- `public.blog_posts` table
- indexes + `updated_at` trigger
- a read policy for published posts
- `blog-images` public storage bucket for optional cover images

### Manual publish workflow

1. Visit `/blog/new`.
2. Enter the private poster ID (`BLOG_POSTER_ID`).
3. Fill post fields and optionally attach an image.
4. Publish and get redirected to `/posts/:slug`.

## 📦 Deployment

### GitHub Pages

1. Install GitHub Pages package:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:

```json
{
  "homepage": "https://BishalAdhikari0123.github.io/portfolio-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-website/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
```

4. Deploy:

```bash
npm run deploy
```

### Cloudflare Pages

1. Build the project:

```bash
npm run build
```

2. Connect your GitHub repository to Cloudflare Pages
3. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 18+

4. Deploy automatically on every push to main branch

### Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel --prod
```

Or connect your GitHub repository directly through the Vercel dashboard.

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

- **Primary**: Deep Purple (#5B2C6F)
- **Accent**: Golden Yellow (#F1C40F)

### Content

Update personal information in the respective component files:

- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section content
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Projects.tsx` - Project information and links
- `src/components/Contact.tsx` - Contact information

### Fonts

The website uses:

- **Body text**: EB Garamond (serif)
- **Headings**: Inter (sans-serif)

Fonts are loaded from Google Fonts in `index.html`.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero/landing section
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Technical skills
│   ├── Projects.tsx    # Project showcase
│   └── Contact.tsx     # Contact information
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
├── index.css          # Global styles
└── vite-env.d.ts      # Vite type definitions
```

## 📧 Contact

Feel free to reach out for collaborations or opportunities:

- **Email**: bsaladkari@gmail.com
- **LinkedIn**: [Bishal Adhikari](https://www.linkedin.com/in/bishal-adhikari-051a09296/)
- **GitHub**: [BishalAdhikari0123](https://github.com/BishalAdhikari0123)
- **Location**: Pokhara, Nepal

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Bishal Adhikari
