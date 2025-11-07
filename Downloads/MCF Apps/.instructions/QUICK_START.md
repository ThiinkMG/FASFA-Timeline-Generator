# MCF Apps - Quick Start Guide

**For Developers:** Get a new MCF app branded and running in 30 minutes.

---

## Overview

This quick start guide helps you rapidly implement MCF branding in new or existing apps. For comprehensive details, see [BRANDING_GUIDE.md](./BRANDING_GUIDE.md).

---

## Step 1: Project Setup (5 minutes)

### Create New Project
```bash
# Create Vite + React + TypeScript project
npm create vite@latest my-app-name -- --template react-ts
cd my-app-name
npm install
```

### Install MCF Dependencies
```bash
# Core dependencies
npm install tailwindcss postcss autoprefixer
npm install -D @types/node

# Initialize Tailwind
npx tailwindcss init -p

# Install shadcn/ui
npx shadcn@latest init

# Select these options:
# - Style: New York
# - Base color: Neutral
# - CSS variables: Yes
# - Would you like to use React Server Components: No
```

---

## Step 2: Configure Brand Theme (5 minutes)

### Update `client/src/index.css`
Add MCF brand colors:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* MCF Brand Colors */
    --brand-blue: hsl(218, 99%, 30%);      /* #012699 */
    --brand-green: hsl(115, 93%, 47%);     /* #26e011 */
    --brand-amber: hsl(45, 98%, 50%);      /* #fdc003 */
    --brand-black: hsl(235, 95%, 4%);      /* #000516 */

    /* shadcn/ui variables */
    --primary: 213 71% 33%;
    --primary-foreground: 211 100% 99%;
    --secondary: 60 4.8% 95.9%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 220 76% 40%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 213 71% 33%;
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --radius: 0.5rem;

    /* Chart colors */
    --chart-1: 213 71% 33%;
    --chart-2: 262 83% 58%;
    --chart-3: 142 71% 45%;
    --chart-4: 0 84% 60%;
    --chart-5: 260 95% 65%;

    /* Transitions */
    --transition: all 0.3s ease;
  }

  .dark {
    --brand-blue: hsl(218, 99%, 40%);
    --brand-green: hsl(115, 93%, 57%);
    --brand-amber: hsl(45, 98%, 60%);
    --brand-black: hsl(235, 95%, 94%);

    /* Optimized dark mode colors for readability */
    --background: 220 20% 10%;           /* #141a21 - Blue-gray to reduce eye strain */
    --foreground: 0 0% 92%;              /* #ebebeb - Softer than pure white */
    --card: 220 18% 16%;                 /* #222a34 - Card backgrounds */
    --card-foreground: 0 0% 92%;
    --popover: 220 20% 14%;
    --popover-foreground: 0 0% 92%;
    --muted: 220 15% 18%;
    --muted-foreground: 0 0% 70%;        /* #b3b3b3 - Better readability */

    --primary: 218 88% 55%;              /* #2678ff - Lightened MCF blue */
    --primary-foreground: 0 0% 100%;

    /* Link colors for readable blue text in dark mode */
    --link: 210 80% 75%;                 /* #a3c9ff - Use for all blue links/text */
    --link-hover: 210 80% 85%;           /* #c9e0ff - Lighter on hover */

    --secondary: 220 15% 20%;
    --secondary-foreground: 0 0% 92%;
    --accent: 220 18% 22%;
    --accent-foreground: 0 0% 96%;
    --destructive: 0 75% 55%;
    --destructive-foreground: 0 0% 100%;
    --border: 220 15% 25%;
    --input: 220 15% 30%;
    --ring: 218 88% 65%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    transition: var(--transition);
  }
}
```

**Important:** When using blue text or links in your app, always use the `--link` variable for dark mode:
```tsx
// Links
<a className="text-blue-600 dark:text-[hsl(var(--link))]" href="...">Link</a>

// Headings
<h2 className="text-blue-600 dark:text-[hsl(var(--link))]">Title</h2>

// Gradients (use lighter shades)
<h1 className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
  Hero Title
</h1>
```

### Update `tailwind.config.ts`
Extend with MCF brand colors:

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MCF Brand Colors
        "brand-blue": "var(--brand-blue)",
        "brand-green": "var(--brand-green)",
        "brand-amber": "var(--brand-amber)",
        "brand-black": "var(--brand-black)",

        // shadcn/ui colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      screens: {
        xs: "475px", // MCF custom breakpoint
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
```

---

## Step 3: Add MCF Favicon (1 minute)

### Update `index.html`
Replace the default Vite favicon with the official MCF logo:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="https://static.wixstatic.com/media/c24a60_577eb503a3c1402b846b9ec4a2afd46e~mv2.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your App Name - My College Finance</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**What Changed:**
- ✅ Replaced `/vite.svg` with official MCF favicon URL
- ✅ Changed type from `image/svg+xml` to `image/png`
- ✅ Updated title to include "My College Finance" branding

**Standard Title Formats:**
- Main page: `"App Name - My College Finance"`
- Sub-pages: `"Page Name | App Name - My College Finance"`

---

## Step 7: Add MCF Logo Component (3 minutes)

Create `src/components/OwlLogo.tsx`:

```tsx
import React from "react";

interface OwlLogoProps {
  size?: number;
  className?: string;
}

export const OwlLogo: React.FC<OwlLogoProps> = ({
  size = 60,
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle - Brand Blue */}
      <circle cx="100" cy="100" r="100" fill="#012699" />

      {/* Owl Body - White */}
      <ellipse cx="100" cy="120" rx="45" ry="55" fill="white" />

      {/* Owl Head - White */}
      <circle cx="100" cy="80" r="35" fill="white" />

      {/* Eyes - Brand Blue */}
      <circle cx="90" cy="75" r="8" fill="#012699" />
      <circle cx="110" cy="75" r="8" fill="#012699" />

      {/* Eye Highlights - White */}
      <circle cx="92" cy="73" r="3" fill="white" />
      <circle cx="112" cy="73" r="3" fill="white" />

      {/* Beak - Brand Amber */}
      <polygon points="100,85 95,95 105,95" fill="#fdc003" />

      {/* Wing Details - Semi-transparent Brand Blue */}
      <ellipse
        cx="75" cy="130" rx="15" ry="25"
        fill="#012699" opacity="0.3"
      />
      <ellipse
        cx="125" cy="130" rx="15" ry="25"
        fill="#012699" opacity="0.3"
      />

      {/* Graduation Cap - Black */}
      <rect x="70" y="50" width="60" height="8" fill="#000516" />
      <polygon points="65,50 135,50 125,40 75,40" fill="#000516" />

      {/* Graduation Cap Tassel - Brand Amber */}
      <line
        x1="130" y1="45" x2="140" y2="35"
        stroke="#fdc003" strokeWidth="2"
      />
      <circle cx="140" cy="35" r="3" fill="#fdc003" />
    </svg>
  );
};
```

---

## Step 7: Create Brand Header Component (5 minutes)

### Install required components:
```bash
npx shadcn@latest add button
npm install lucide-react
```

### Create `src/components/BrandHeader.tsx`:

```tsx
import { OwlLogo } from "./OwlLogo";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function BrandHeader() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        {/* Logo Section */}
        <a
          href="https://www.mycollegefinance.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
        >
          <OwlLogo
            size={70}
            className="w-[50px] sm:w-[65px] transition-transform group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold">
              MY COLLEGE FINANCE
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground">
              EDUCATE • MOTIVATE • ELEVATE
            </span>
          </div>
        </a>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="transition-all"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-brand-amber rotate-0 transition-all hover:rotate-45" />
          ) : (
            <Moon className="h-5 w-5 rotate-0 transition-all hover:-rotate-12" />
          )}
        </Button>
      </div>
    </header>
  );
}
```

---

## Step 7: Create Brand Footer Component (5 minutes)

Create `src/components/BrandFooter.tsx`:

```tsx
import { OwlLogo } from "./OwlLogo";

export function BrandFooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-background to-muted/50 border-t mt-16">
      <div className="container py-12">
        {/* Brand Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <OwlLogo size={60} className="mb-4" />
          <h3 className="text-lg font-bold mb-2">MY COLLEGE FINANCE</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Empowering students with financial literacy and tools to
            achieve their financial goals.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://www.mycollegefinance.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-brand-amber transition-colors"
          >
            Main Website
          </a>
          <a
            href="https://www.mycollegefinance.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-brand-amber transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.mycollegefinance.com/terms-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-brand-amber transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="https://linktr.ee/mycollegefinance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-brand-amber transition-colors"
          >
            Social Media
          </a>
        </div>

        {/* Tagline & Copyright */}
        <div className="flex flex-col items-center border-t pt-8">
          <p className="text-sm font-semibold text-muted-foreground mb-2">
            EDUCATE • MOTIVATE • ELEVATE
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} My College Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## Step 7: Update App Layout (3 minutes)

Update `src/App.tsx`:

```tsx
import { BrandHeader } from "./components/BrandHeader";
import { BrandFooter } from "./components/BrandFooter";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrandHeader />

      <main className="flex-1 container max-w-7xl mx-auto px-4 py-8">
        {/* Your app content goes here */}
        <h1 className="text-3xl font-bold text-foreground">
          Welcome to Your MCF App
        </h1>
      </main>

      <BrandFooter />
    </div>
  );
}

export default App;
```

---

## Step 7: Update Meta Tags (2 minutes)

Update `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Page Title -->
    <title>Your App Name - My College Finance</title>

    <!-- Meta Description -->
    <meta
      name="description"
      content="Brief description of your MCF app"
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://your-app-url.com/" />
    <meta property="og:title" content="Your App Name - My College Finance" />
    <meta property="og:description" content="Brief description of your MCF app" />
    <meta property="og:image" content="https://mycollegefinance.com/assets/logo-social.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://your-app-url.com/" />
    <meta property="twitter:title" content="Your App Name - My College Finance" />
    <meta property="twitter:description" content="Brief description of your MCF app" />
    <meta property="twitter:image" content="https://mycollegefinance.com/assets/logo-social.jpg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## Step 8: Test Your Setup (2 minutes)

```bash
npm run dev
```

### Verify Checklist:
- [ ] Logo appears in header with MCF branding
- [ ] Tagline "EDUCATE • MOTIVATE • ELEVATE" is visible
- [ ] Theme toggle works (light/dark mode)
- [ ] Footer shows all MCF links
- [ ] Brand colors are applied
- [ ] Hover effects work on logo and links
- [ ] Responsive on mobile (test at 375px width)

---

## Common Commands

### Add shadcn/ui Components
```bash
# Essential components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add select
npx shadcn@latest add dialog
npx shadcn@latest add toast
npx shadcn@latest add tabs
npx shadcn@latest add progress
```

### Install Common Dependencies
```bash
# Forms
npm install react-hook-form zod @hookform/resolvers

# Icons
npm install lucide-react

# Charts
npm install recharts chart.js react-chartjs-2

# Animations
npm install framer-motion

# Routing
npm install wouter

# Data Fetching
npm install @tanstack/react-query
```

---

## Brand Color Usage Reference

### Primary Actions
```tsx
<Button className="bg-brand-blue hover:bg-brand-blue/90">
  Primary Action
</Button>
```

### Success States
```tsx
<div className="text-brand-green">
  Success! Goal completed.
</div>
```

### Warnings
```tsx
<Badge className="bg-brand-amber text-brand-black">
  Warning
</Badge>
```

### Links
```tsx
<a className="text-primary hover:text-brand-amber transition-colors">
  Link
</a>
```

---

## Path Aliases (Optional but Recommended)

Update `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
```

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    // ... other options
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Next Steps

1. **Add Your App Logic:** Build your app features
2. **Install Components:** Add shadcn/ui components as needed
3. **Test Responsively:** Check mobile, tablet, desktop
4. **Review Accessibility:** Ensure WCAG AA compliance
5. **Optimize Performance:** Run Lighthouse audit

---

## Need Help?

- **Full Documentation:** [BRANDING_GUIDE.md](./BRANDING_GUIDE.md)
- **Reference Apps:**
  - Budget Calculator: `50-30-20-budget-calculator-v3/`
  - Savings Calculator: `Savings-Goal-Calculator/`

---

## Troubleshooting

### Dark Mode Not Working?
- Check that `dark` class is toggled on `<html>` element
- Verify CSS variables are defined for both `:root` and `.dark`

### Logo Not Showing?
- Verify `OwlLogo.tsx` is in `src/components/`
- Check import path in `BrandHeader.tsx`

### Colors Not Applied?
- Run `npm run dev` to rebuild Tailwind
- Verify `tailwind.config.ts` includes brand color extensions
- Check `index.css` has brand color variables

### Theme Not Persisting?
- Check localStorage in browser DevTools
- Verify `useEffect` hook in `BrandHeader` is running

---

**You're all set!** 🎉

Your MCF-branded app is ready for development. Happy coding!
