# MY COLLEGE FINANCE - Developer Branding Guide

**Version:** 1.0.0
**Last Updated:** 2025-11-06
**Maintained By:** ThiinkMG Development Team

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Logo System](#4-logo-system)
5. [UI Component Patterns](#5-ui-component-patterns)
6. [Layout Standards](#6-layout-standards)
7. [Technology Stack](#7-technology-stack)
8. [Responsive Design](#8-responsive-design)
9. [External Links & Social Media](#9-external-links--social-media)
10. [Animations & Interactions](#10-animations--interactions)
11. [Guardrails & Quality Standards](#11-guardrails--quality-standards)
12. [Implementation Checklist](#12-implementation-checklist)
13. [Context Enhancement Rules](#13-context-enhancement-rules)

---

## 1. Brand Identity

### Core Brand Values
- **Education First**: Empowering students with financial knowledge
- **Motivation**: Inspiring positive financial habits
- **Elevation**: Helping students achieve financial success

### Brand Name
- **Full Name**: MY COLLEGE FINANCE
- **Abbreviation**: MCF
- **Tagline**: EDUCATE • MOTIVATE • ELEVATE

### Brand Voice
- Educational but accessible
- Encouraging and supportive
- Professional yet friendly
- Student-focused and empathetic

### Visual Identity
- **Mascot**: Owl with graduation cap (symbol of wisdom and education)
- **Style**: Modern, clean, tech-forward
- **Mood**: Professional, trustworthy, optimistic

---

## 2. Color System

### Primary Brand Colors ("Space Dust Theme")

#### Brand Blue (Primary) - `#012699`
```css
/* CSS Variables */
--brand-blue: hsl(218, 99%, 30%);
--brand-blue-dark: hsl(218, 99%, 40%); /* Dark mode variant */

/* Hex */
#012699

/* RGB */
rgb(1, 38, 153)

/* HSL */
hsl(218, 99%, 30%)
```

**Usage:**
- Primary call-to-action buttons
- Links and interactive elements
- Logo background circle
- Primary focus states
- Header accents
- Progress bars (primary indicator)

---

#### Brand Green (Success) - `#26e011`
```css
/* CSS Variables */
--brand-green: hsl(115, 93%, 47%);
--brand-green-dark: hsl(115, 93%, 57%); /* Dark mode variant */

/* Hex */
#26e011

/* RGB */
rgb(38, 224, 17)

/* HSL */
hsl(115, 93%, 47%)
```

**Usage:**
- Success messages and states
- Goal completion indicators
- Positive feedback elements
- Savings progress (on-track status)
- Checkmarks and confirmation icons

---

#### Brand Amber (Accent) - `#fdc003`
```css
/* CSS Variables */
--brand-amber: hsl(45, 98%, 50%);
--brand-amber-dark: hsl(45, 98%, 60%); /* Dark mode variant */

/* Hex */
#fdc003

/* RGB */
rgb(253, 192, 3)

/* HSL */
hsl(45, 98%, 50%)
```

**Usage:**
- Warning states
- Special highlights and badges
- Graduation cap tassel (logo)
- Owl beak (logo)
- Important notifications
- Premium features or highlights
- Footer link hover states

---

#### Brand Black - `#000516`
```css
/* CSS Variables */
--brand-black: hsl(235, 95%, 4%);
--brand-black-dark: hsl(235, 95%, 94%); /* Dark mode - inverted to light */

/* Hex */
#000516

/* RGB */
rgb(0, 5, 22)

/* HSL */
hsl(235, 95%, 4%)
```

**Usage:**
- Dark mode backgrounds
- Text on light backgrounds
- Logo graduation cap
- Footer backgrounds
- High-contrast text
- Card shadows and borders

---

### Extended Color Palette (Tailwind CSS Variables)

#### Light Mode
```css
:root {
  /* Tailwind shadcn/ui Variables */
  --primary: 213 71% 33%;           /* #336bff - Blue variant */
  --primary-foreground: 211 100% 99%;
  --secondary: 60 4.8% 95.9%;       /* Light gray */
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 220 76% 40%;             /* Bright blue */
  --accent-foreground: 210 40% 98%;
  --destructive: 0 84.2% 60.2%;     /* Red for errors */
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
}
```

#### Dark Mode
```css
.dark {
  /* ===== BACKGROUNDS - Reduced eye strain with blue-gray tint ===== */
  --background: 220 20% 10%;           /* #141a21 - Main dark background */
  --card: 220 18% 16%;                 /* #222a34 - Card backgrounds */
  --popover: 220 20% 14%;              /* #1a2129 - Popover/modal backgrounds */

  /* ===== TEXT COLORS - Optimized readability ===== */
  --foreground: 0 0% 92%;              /* #ebebeb - Main text (softer than pure white) */
  --card-foreground: 0 0% 92%;         /* #ebebeb - Card text */
  --popover-foreground: 0 0% 92%;      /* #ebebeb - Popover text */
  --muted-foreground: 0 0% 70%;        /* #b3b3b3 - Muted text (improved readability) */

  /* ===== PRIMARY (MCF Blue lightened for dark mode) ===== */
  --primary: 218 88% 55%;              /* #2678ff - Brighter blue for visibility */
  --primary-foreground: 0 0% 100%;     /* #ffffff - White text on blue */

  /* ===== LINK COLORS (Readable blue-gray for dark mode) ===== */
  --link: 210 80% 75%;                 /* #a3c9ff - Light blue-gray for links */
  --link-hover: 210 80% 85%;           /* #c9e0ff - Lighter on hover */

  /* ===== SECONDARY ===== */
  --secondary: 220 15% 20%;            /* #2b3441 - Secondary backgrounds */
  --secondary-foreground: 0 0% 92%;    /* #ebebeb - Text on secondary */

  /* ===== ACCENT (Hover states) ===== */
  --accent: 220 18% 22%;               /* #2f3a48 - Visible hover background */
  --accent-foreground: 0 0% 96%;       /* #f5f5f5 - Text on accent */

  /* ===== MUTED ===== */
  --muted: 220 15% 18%;                /* #272f3c - Muted backgrounds */

  /* ===== DESTRUCTIVE (Enhanced for visibility) ===== */
  --destructive: 0 75% 55%;            /* #e03838 - Brighter red */
  --destructive-foreground: 0 0% 100%; /* #ffffff - White text */

  /* ===== BORDERS & INPUTS (More visible) ===== */
  --border: 220 15% 25%;               /* #363f4d - Visible borders */
  --input: 220 15% 30%;                /* #424d5f - Clearer input borders */

  /* ===== FOCUS RING (High visibility) ===== */
  --ring: 218 88% 65%;                 /* #4e7fff - Bright blue focus ring */
}
```

**Dark Mode Best Practices:**
- **Background Colors:** Use blue-gray tints (#141a21) instead of pure black to reduce eye strain
- **Text Colors:** Use 92% lightness (#ebebeb) instead of pure white for softer contrast
- **Muted Text:** Use 70% lightness (#b3b3b3) for better readability than standard 63.9%
- **Link Colors:** Always use `--link` variable (#a3c9ff) for readable blue links in dark mode
- **Brand Blue Adaptation:** Lighten MCF blue from #012699 to #2678ff for dark mode visibility
- **Contrast Requirements:** All text must meet WCAG AA standards (4.5:1 minimum contrast ratio)

---

### Chart Colors (Data Visualization)
```css
:root {
  --chart-1: 213 71% 33%;   /* Primary Blue */
  --chart-2: 262 83% 58%;   /* Purple */
  --chart-3: 142 71% 45%;   /* Green */
  --chart-4: 0 84% 60%;     /* Red */
  --chart-5: 260 95% 65%;   /* Light Purple */
}
```

**Usage Guidelines:**
- Use `chart-1` (blue) for primary data series
- Use `chart-3` (green) for positive metrics (savings, progress)
- Use `chart-4` (red) for negative metrics (expenses, overspending)
- Reserve `chart-2` and `chart-5` for secondary comparison data

---

### Color Usage Guardrails

#### ✅ DO
- Use brand blue for all primary actions (buttons, links, CTA) **in light mode**
- Use `--link` variable (#a3c9ff) for **all text links and blue text in dark mode**
- Use brand green for success states and positive progress
- Use brand amber sparingly for warnings and special highlights
- Maintain sufficient contrast ratios (WCAG AA: 4.5:1 for text, AAA: 7:1 preferred)
- Use CSS variables for all color references (e.g., `var(--brand-blue)` not `#012699`)
- Test all colors in both light and dark modes
- Use semantic color names (`--primary`, `--success`) for component styling
- Use `dark:text-[hsl(var(--link))]` pattern for links that need dark mode readability

#### ❌ DON'T
- Don't use raw hex values directly in components
- Don't create new brand colors without consulting this guide
- Don't use brand amber for error states (use destructive/red)
- Don't use brand green for anything other than positive states
- Don't override brand colors with arbitrary values
- Don't use low-contrast color combinations
- Don't use more than 3 brand colors in a single UI element

---

### Dark Mode Link Implementation Examples

**Standard Link (Footer, Navigation, Body Text):**
```tsx
<a
  href="https://www.mycollegefinance.com/"
  className="text-blue-600 dark:text-[hsl(var(--link))] hover:text-blue-700 dark:hover:text-[hsl(var(--link-hover))]"
>
  My College Finance
</a>
```

**Title/Heading with Brand Blue:**
```tsx
<h2 className="text-2xl font-bold text-blue-600 dark:text-[hsl(var(--link))]">
  Create Your Timeline
</h2>
```

**Icon/Symbol with Blue:**
```tsx
<span className="text-blue-600 dark:text-[hsl(var(--link))]">✓</span>
```

**Gradient Title (Main Headlines):**
```tsx
<h1 className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
  FAFSA Timeline Generator
</h1>
```

**When to Use `--link` Variable:**
- All text links (anchor tags with href)
- Section titles/headings that use brand blue
- Text-based icons or symbols (checkmarks, bullets)
- Any blue text that needs to be readable in dark mode
- Card titles that use brand blue color

**When NOT to Use `--link` Variable:**
- Button backgrounds (use `--primary` instead)
- Large colored sections/banners
- Timeline dots or status indicators (use specific timeline colors)
- Charts and data visualizations (use chart color variables)

---

## 3. Typography

### Font Families

#### Primary Font Stack (System Fonts)
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
```

**Rationale:** System fonts provide optimal performance, accessibility, and native look-and-feel across all platforms.

#### Alternative: Poppins (Google Fonts)
Used in Budget Calculator v3 for enhanced brand personality:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
font-family: 'Poppins', sans-serif;
```

**When to Use:**
- Marketing pages with heavier brand focus
- Hero sections and landing pages
- Headlines that need extra personality
- Apps where performance trade-off is acceptable

**When to Use System Fonts:**
- Data-heavy applications
- Performance-critical apps
- Apps with extensive text content
- Mobile-first applications

---

### Typography Scale

#### Heading Styles
```css
/* H1 - Page Title */
.text-h1 {
  font-size: 2.25rem;      /* 36px */
  font-weight: 900;
  line-height: 2.5rem;
  letter-spacing: -0.025em;
}

/* H2 - Section Title */
.text-h2 {
  font-size: 1.875rem;     /* 30px */
  font-weight: 700;
  line-height: 2.25rem;
  letter-spacing: -0.02em;
}

/* H3 - Subsection Title */
.text-h3 {
  font-size: 1.5rem;       /* 24px */
  font-weight: 600;
  line-height: 2rem;
}

/* H4 - Card/Component Title */
.text-h4 {
  font-size: 1.25rem;      /* 20px */
  font-weight: 600;
  line-height: 1.75rem;
}
```

#### Body Text Styles
```css
/* Large Body */
.text-lg {
  font-size: 1.125rem;     /* 18px */
  font-weight: 400;
  line-height: 1.75rem;
}

/* Body (Default) */
.text-base {
  font-size: 1rem;         /* 16px */
  font-weight: 400;
  line-height: 1.5rem;
}

/* Small Text */
.text-sm {
  font-size: 0.875rem;     /* 14px */
  font-weight: 400;
  line-height: 1.25rem;
}

/* Caption/Helper Text */
.text-xs {
  font-size: 0.75rem;      /* 12px */
  font-weight: 400;
  line-height: 1rem;
}
```

---

### Font Weight Scale
```css
--font-normal: 400;        /* Body text, paragraphs */
--font-medium: 500;        /* Emphasized text, labels */
--font-semibold: 600;      /* Subheadings, buttons */
--font-bold: 700;          /* Headings, important text */
--font-black: 900;         /* Hero text, major headings */
```

---

### Typography Guardrails

#### ✅ DO
- Use font-black (900) only for H1 and hero sections
- Use font-bold (700) for H2 and important CTAs
- Use font-semibold (600) for H3, H4, and button text
- Maintain consistent line-height (1.5x font size minimum)
- Use negative letter-spacing for large headings (-0.025em)
- Use responsive text sizing (e.g., `text-2xl md:text-3xl lg:text-4xl`)
- Ensure text has sufficient contrast against backgrounds

#### ❌ DON'T
- Don't use font weights outside the defined scale
- Don't use font-black (900) for body text
- Don't use excessive letter-spacing on body text
- Don't mix Poppins and system fonts in the same app
- Don't use custom fonts without performance testing
- Don't set line-height below 1.4 for body text
- Don't use all-caps for long text blocks (max 3-4 words)

---

## 4. Logo System

### Official Logo (All Apps & Webapps)

**⚠️ OFFICIAL LOGO - USE THIS FOR ALL MCF APPS AND WEBAPPS**

The official My College Finance logo is hosted on Wix Static CDN and must be used in all applications:

**Official Logo URL:**
```
https://static.wixstatic.com/media/c24a60_2b6231b666214539ae22ebd2dffe7a09~mv2.png
```

**Standard Implementation:**
```html
<img 
  src="https://static.wixstatic.com/media/c24a60_2b6231b666214539ae22ebd2dffe7a09~mv2.png" 
  alt="My College Finance Logo" 
  class="mcf-logo"
/>
```

**React/JSX Implementation:**
```tsx
<img
  src="https://static.wixstatic.com/media/c24a60_2b6231b666214539ae22ebd2dffe7a09~mv2.png"
  alt="My College Finance Logo"
  className="mcf-logo w-16 h-16 object-contain"
/>
```

**CSS Styling:**
```css
.mcf-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}
```

**Important Notes:**
- This is the **official logo** for all My College Finance apps and webapps
- Always use this URL - do not download and host locally unless absolutely necessary
- The logo is transparent PNG format, suitable for any background
- Always include proper `alt` text: "My College Finance Logo"
- Maintain aspect ratio when resizing
- Minimum size: 40px × 40px for accessibility

### Official Favicon (Browser Tab Icon)

**⚠️ OFFICIAL FAVICON - USE THIS FOR ALL MCF APPS AND WEBAPPS**

The official My College Finance favicon is also hosted on Wix Static CDN and must be used in all applications:

**Official Favicon URL:**
```
https://static.wixstatic.com/media/c24a60_577eb503a3c1402b846b9ec4a2afd46e~mv2.png
```

**HTML Implementation:**
```html
<!-- In your index.html <head> section -->
<link rel="icon" type="image/png" href="https://static.wixstatic.com/media/c24a60_577eb503a3c1402b846b9ec4a2afd46e~mv2.png" />
```

**Complete Head Section Example:**
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
    <!-- Your app content -->
  </body>
</html>
```

**Important Notes:**
- This favicon will appear in browser tabs, bookmarks, and history
- Always use this URL - browsers will cache it automatically
- The favicon is square format, optimized for browser display
- Update your `<title>` tag to include "My College Finance" for brand consistency
- This replaces any default Vite, React, or framework icons

**Standard Title Format:**
- Primary app page: `"App Name - My College Finance"`
- Sub-pages: `"Page Name | App Name - My College Finance"`
- Example: `"Federal School Directory Search Tool - My College Finance"`

---

### Logo Design

**Visual Elements:**
- Circular background in brand blue (`#012699`)
- White owl with graduation cap (symbol of wisdom + education)
- Amber-colored beak and graduation cap tassel
- Clean, modern illustration style

### Logo Implementations

#### SVG Component (Preferred)
**File:** `client/src/assets/owl-logo.tsx`

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

**Usage:**
```tsx
import { OwlLogo } from "@/assets/owl-logo";

// Default size (60px)
<OwlLogo />

// Custom size
<OwlLogo size={80} />

// With Tailwind classes
<OwlLogo
  size={70}
  className="hover:scale-110 transition-transform"
/>
```

---

#### Image-Based Logo (Alternative)

**Note:** The official logo URL (above) is preferred. Use local assets only if:
- You need offline functionality
- You're building a static site generator
- CDN access is restricted

**Local File Path (if needed):**
`attached_assets/Updated Final - My College Finace Logo w New Oliver 2 - Thiink Media Graphics (Transparent).png`

**Local Implementation:**
```tsx
import logo from "@/assets/logo.png";

<img
  src={logo}
  alt="My College Finance Logo"
  className="w-16 h-16 object-contain"
/>
```

**⚠️ Always prefer the official CDN URL when possible.**

---

### Logo Sizing Guidelines

| Context | Size | Class Example |
|---------|------|---------------|
| Header (Mobile) | 50px | `w-[50px] h-[50px]` |
| Header (Desktop) | 70px | `w-[65px] sm:w-[70px]` |
| Footer | 60px | `w-15 h-15` |
| Favicon | 40px | `w-10 h-10` |
| Large Hero | 120px | `w-30 h-30` |
| Minimum Size | 40px | `w-10 h-10` |

---

### Logo Link Configuration

**Standard Header Implementation:**
```tsx
<a
  href="https://www.mycollegefinance.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 group"
>
  <OwlLogo
    size={70}
    className="w-[50px] sm:w-[65px] transition-transform group-hover:scale-110"
  />
  <div className="flex flex-col">
    <span className="text-sm sm:text-base font-bold text-foreground">
      MY COLLEGE FINANCE
    </span>
    <span className="text-[10px] sm:text-xs text-muted-foreground">
      EDUCATE • MOTIVATE • ELEVATE
    </span>
  </div>
</a>
```

---

### Logo Guardrails

#### ✅ DO
- **ALWAYS use the official logo URL** for all apps and webapps: `https://static.wixstatic.com/media/c24a60_2b6231b666214539ae22ebd2dffe7a09~mv2.png`
- Always link logo to `https://www.mycollegefinance.com/`
- Use `target="_blank"` with `rel="noopener noreferrer"` for security
- Maintain aspect ratio (1:1 square)
- Include proper alt text: "My College Finance Logo"
- Use minimum size of 40px × 40px for accessibility
- Add hover animations (scale: 1.05-1.1)
- Ensure logo is visible in both light and dark modes
- Use `object-fit: contain` or `object-contain` to preserve logo quality
- Use SVG component for scalability and customization (if building custom components)

#### ❌ DON'T
- **Don't use different logo URLs** - always use the official CDN URL
- Don't download and re-host the logo unless absolutely necessary
- Don't distort or stretch the logo
- Don't change logo colors (use original brand colors only)
- Don't rotate or flip the logo
- Don't add effects that obscure the logo
- Don't place logo on backgrounds with poor contrast
- Don't use compressed/low-quality image versions
- Don't remove the graduation cap or alter the owl design
- Don't use the logo without linking to main website
- Don't use `object-fit: cover` (use `contain` instead)

---

## 5. UI Component Patterns

### Component Library Stack

**Foundation:** Radix UI + shadcn/ui + Tailwind CSS

#### shadcn/ui Configuration
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "client/src/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

---

### Core UI Components

#### Layout Components
- **Accordion** - Collapsible content sections
- **Dialog** - Modal overlays for focused interactions
- **Drawer** - Slide-in panels for additional content
- **Tabs** - Tabbed navigation for content organization
- **Collapsible** - Expandable/collapsible sections

#### Form Components
- **Input** - Text input fields with validation
- **Select** - Dropdown selection menus
- **Checkbox** - Multi-select checkboxes
- **Radio Group** - Single-select radio buttons
- **Toggle** - Binary on/off switches
- **Slider** - Range input sliders
- **Switch** - Toggle switches for settings

#### Data Display
- **Progress** - Visual progress indicators
- **Badge** - Status labels and tags
- **Avatar** - User profile images
- **Breadcrumb** - Navigation hierarchy
- **Card** - Contained content blocks

#### Navigation
- **Navigation Menu** - Top-level navigation
- **Dropdown Menu** - Contextual menus
- **Context Menu** - Right-click menus

#### Feedback
- **Alert** - Inline notifications
- **Alert Dialog** - Critical confirmation dialogs
- **Toast** - Temporary notification popups
- **Tooltip** - Hover information
- **Hover Card** - Rich hover content

---

### Custom Component Patterns

#### BrandHeader Component
Standard header across all MCF apps:

```tsx
import { OwlLogo } from "@/assets/owl-logo";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function BrandHeader() {
  const { theme, toggleTheme } = useTheme();

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
            className="w-[50px] sm:w-[65px] transition-transform group-hover:scale-110"
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

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-brand-amber" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
```

---

#### BrandFooter Component
Standard footer template:

```tsx
import { OwlLogo } from "@/assets/owl-logo";

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

**Alternative Footer Background (Non-Tailwind Projects):**

For projects using custom CSS instead of Tailwind, use the dark gradient background:

```css
.mcf-footer {
  background: linear-gradient(to bottom, #111827, #000000);
  color: white;
  padding: 3rem 0;
  margin-top: 4rem;
}
```

**Gradient Details:**
- **From:** `#111827` (Dark gray-blue)
- **To:** `#000000` (Pure black)
- **Direction:** Top to bottom
- **Text Color:** White for contrast

This gradient provides a professional, sophisticated look while maintaining excellent text contrast for accessibility (WCAG AAA compliant).

**Example Implementation:**
See `Federal-School-Directory-Search-Tool/webapp/` for a complete reference implementation using custom CSS with the dark gradient footer.

---

### Component Style Patterns

#### Card Pattern
```tsx
<Card className="border-2 hover:border-primary transition-colors">
  <CardHeader>
    <CardTitle className="text-2xl font-bold">Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Card content */}
  </CardContent>
  <CardFooter className="flex justify-between">
    {/* Card actions */}
  </CardFooter>
</Card>
```

#### Button Variants
```tsx
// Primary Action (Brand Blue)
<Button variant="default" size="default">
  Primary Action
</Button>

// Secondary Action
<Button variant="secondary" size="default">
  Secondary Action
</Button>

// Success Action (Brand Green - custom)
<Button className="bg-brand-green hover:bg-brand-green/90 text-white">
  Success Action
</Button>

// Warning Action (Brand Amber - custom)
<Button className="bg-brand-amber hover:bg-brand-amber/90 text-brand-black">
  Warning Action
</Button>

// Destructive Action
<Button variant="destructive" size="default">
  Delete
</Button>

// Ghost (Minimal)
<Button variant="ghost" size="icon">
  <Icon className="h-5 w-5" />
</Button>
```

---

### Component Guardrails

#### ✅ DO
- Use shadcn/ui components as the foundation
- Extend components with Tailwind classes for customization
- Maintain consistent spacing (padding: 4, 6, 8; gap: 2, 4, 6)
- Use semantic variants (`default`, `secondary`, `destructive`)
- Add proper `aria-label` for icon buttons
- Use responsive sizing (`sm:`, `md:`, `lg:` breakpoints)
- Add hover states with `transition-colors` or `transition-transform`

#### ❌ DON'T
- Don't create custom components when shadcn/ui provides one
- Don't use inline styles (use Tailwind classes)
- Don't override component internal structure
- Don't use custom colors outside the brand palette
- Don't forget accessibility (keyboard nav, screen readers)
- Don't use buttons for non-interactive elements

---

## 6. Layout Standards

### Container & Spacing

#### Container Pattern
```tsx
<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

#### Spacing Scale (Tailwind)
```css
/* Spacing values based on 0.25rem (4px) increments */
space-1: 0.25rem   /* 4px */
space-2: 0.5rem    /* 8px */
space-4: 1rem      /* 16px */
space-6: 1.5rem    /* 24px */
space-8: 2rem      /* 32px */
space-12: 3rem     /* 48px */
space-16: 4rem     /* 64px */
```

**Standard Patterns:**
- Component padding: `p-4` (16px) or `p-6` (24px)
- Section spacing: `py-8` or `py-12` (32-48px vertical)
- Element gaps: `gap-2`, `gap-4`, or `gap-6`
- Page margins: `my-8` or `my-12`

---

### Grid & Flexbox Patterns

#### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

#### Flex Patterns
```tsx
{/* Horizontal layout with space between */}
<div className="flex items-center justify-between">
  <div>Left content</div>
  <div>Right content</div>
</div>

{/* Vertical stack with gap */}
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

{/* Centered content */}
<div className="flex items-center justify-center min-h-screen">
  <div>Centered content</div>
</div>
```

---

### Page Layout Structure

#### Standard App Layout
```tsx
<div className="min-h-screen flex flex-col">
  {/* Header */}
  <BrandHeader />

  {/* Main Content */}
  <main className="flex-1 container max-w-7xl mx-auto px-4 py-8">
    {children}
  </main>

  {/* Footer */}
  <BrandFooter />
</div>
```

#### Two-Column Layout
```tsx
<div className="container max-w-7xl mx-auto px-4 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Main Content (2/3) */}
    <div className="lg:col-span-2">
      {mainContent}
    </div>

    {/* Sidebar (1/3) */}
    <aside className="lg:col-span-1">
      {sidebar}
    </aside>
  </div>
</div>
```

---

### Z-Index Scale

```css
/* Z-Index hierarchy */
z-0: 0              /* Base layer */
z-10: 10            /* Raised elements (cards) */
z-20: 20            /* Dropdowns, popovers */
z-30: 30            /* Fixed elements (header) */
z-40: 40            /* Modals backdrop */
z-50: 50            /* Modals content */
z-60: 60            /* Toasts, notifications */
z-999: 999          /* Critical overlays (rare) */
```

**Standard Assignments:**
- Header: `z-50`
- Sticky navigation: `z-40`
- Modals/Dialogs: `z-50`
- Dropdown menus: `z-20`
- Tooltips: `z-30`
- Toast notifications: `z-60`

---

### Layout Guardrails

#### ✅ DO
- Use consistent container widths (`max-w-7xl`)
- Maintain responsive breakpoints (sm, md, lg, xl)
- Use semantic HTML5 elements (`header`, `main`, `footer`, `aside`)
- Add padding to prevent edge-to-edge content
- Use flexbox for one-dimensional layouts
- Use grid for two-dimensional layouts
- Test layouts on mobile (320px), tablet (768px), desktop (1280px+)

#### ❌ DON'T
- Don't use fixed pixel widths for containers
- Don't nest containers inside containers
- Don't use `position: absolute` without careful consideration
- Don't create horizontal scroll on mobile
- Don't use excessive nesting (max 3-4 levels)
- Don't use inline styles for layout

---

## 7. Technology Stack

### Required Dependencies

#### Frontend Core
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.6.3",
  "vite": "^5.4.11",
  "tailwindcss": "^3.4.17"
}
```

#### UI Components
```json
{
  "@radix-ui/react-accordion": "^1.2.2",
  "@radix-ui/react-alert-dialog": "^1.1.4",
  "@radix-ui/react-dialog": "^1.1.4",
  "@radix-ui/react-dropdown-menu": "^2.1.4",
  "@radix-ui/react-progress": "^1.1.1",
  "@radix-ui/react-select": "^2.1.4",
  "@radix-ui/react-slot": "^1.1.1",
  "@radix-ui/react-tabs": "^1.1.1",
  "@radix-ui/react-toast": "^1.2.4",
  "@radix-ui/react-tooltip": "^1.1.5",
  "lucide-react": "^0.453.0"
}
```

#### Forms & Validation
```json
{
  "react-hook-form": "^7.54.2",
  "zod": "^3.24.1",
  "@hookform/resolvers": "^3.9.1"
}
```

#### State & Data
```json
{
  "@tanstack/react-query": "^5.60.5",
  "wouter": "^3.3.5"
}
```

#### Backend Core
```json
{
  "express": "^4.21.2",
  "drizzle-orm": "^0.39.1",
  "@neondatabase/serverless": "^0.10.5",
  "passport": "^0.7.0",
  "express-session": "^1.18.1"
}
```

#### Utilities
```json
{
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0",
  "class-variance-authority": "^0.7.1",
  "framer-motion": "^12.0.0",
  "chart.js": "^4.4.9",
  "recharts": "^2.15.2"
}
```

---

### Build Configuration

#### Vite Config Pattern
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import cartographer from "@replit/vite-plugin-cartographer";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    cartographer({ includeServer: true })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});
```

#### Tailwind Config Pattern
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "./client/index.html"
  ],
  theme: {
    extend: {
      colors: {
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
```

#### TypeScript Config Pattern
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./client/src/*"],
      "@shared/*": ["./shared/*"],
      "@assets/*": ["./attached_assets/*"]
    }
  },
  "include": ["client/src", "shared"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

### Stack Guardrails

#### ✅ DO
- Use React 18.3+ for latest features
- Use TypeScript for all new code
- Use Vite for fast build times
- Use Tailwind CSS for styling (no CSS-in-JS)
- Use Radix UI + shadcn/ui for component foundation
- Use React Hook Form + Zod for form handling
- Use TanStack Query for server state
- Use Express.js for backend services
- Use PostgreSQL (Neon) for database
- Use Drizzle ORM for type-safe database access

#### ❌ DON'T
- Don't use Create React App (use Vite)
- Don't use CSS Modules (use Tailwind)
- Don't use styled-components or emotion (use Tailwind)
- Don't use Redux (use React Query + Context)
- Don't use class components (use functional + hooks)
- Don't use PropTypes (use TypeScript)
- Don't use outdated dependencies
- Don't mix different UI libraries

---

## 8. Responsive Design

### Breakpoint System

```css
/* Tailwind CSS Breakpoints */
xs: 475px   /* Custom - Extra small phones */
sm: 640px   /* Small devices (phones in landscape) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

**Usage in Tailwind:**
```tsx
<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

---

### Mobile-First Approach

**Philosophy:** Design and build for mobile first, then enhance for larger screens.

#### Example Pattern
```tsx
{/* Mobile: Stack vertically, Desktop: Two columns */}
<div className="flex flex-col lg:flex-row gap-4">
  <div className="flex-1">{/* Column 1 */}</div>
  <div className="flex-1">{/* Column 2 */}</div>
</div>

{/* Mobile: Hidden, Desktop: Visible */}
<div className="hidden md:block">
  Desktop-only content
</div>

{/* Mobile: Visible, Desktop: Hidden */}
<div className="block md:hidden">
  Mobile-only content
</div>
```

---

### Touch & Mobile Optimizations

#### Touch Targets
Minimum touch target size: **44px × 44px** (Apple HIG standard)

```tsx
{/* Button with adequate touch target */}
<Button
  size="default"
  className="min-h-[44px] min-w-[44px]"
>
  Click Me
</Button>

{/* Icon button with touch padding */}
<Button
  variant="ghost"
  size="icon"
  className="h-11 w-11"  // 44px
>
  <Icon className="h-5 w-5" />
</Button>
```

#### Mobile Header Pattern
```tsx
<header className="sticky top-0 z-50 h-14 sm:h-16 border-b">
  <div className="container flex items-center justify-between h-full">
    {/* Logo - smaller on mobile */}
    <OwlLogo
      size={70}
      className="w-[50px] sm:w-[65px]"
    />

    {/* Actions - icon-only on mobile */}
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10"
      >
        <Settings className="h-5 w-5" />
        <span className="sr-only">Settings</span>
      </Button>
    </div>
  </div>
</header>
```

---

### Responsive Typography

```tsx
{/* Heading scales from mobile to desktop */}
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>

{/* Body text with responsive line height */}
<p className="text-sm sm:text-base leading-relaxed sm:leading-loose">
  Responsive paragraph text
</p>

{/* Card title with responsive sizing */}
<h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
  Card Title
</h3>
```

---

### Responsive Images

```tsx
{/* Full width on mobile, constrained on desktop */}
<img
  src={imageUrl}
  alt="Description"
  className="w-full md:w-auto md:max-w-2xl h-auto object-cover rounded-lg"
/>

{/* Logo with responsive sizing */}
<OwlLogo
  size={100}
  className="w-16 sm:w-20 md:w-24 lg:w-28"
/>

{/* Background image with responsive positioning */}
<div
  className="h-48 sm:h-64 md:h-80 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Content */}
</div>
```

---

### Responsive Spacing

```tsx
{/* Container padding scales with screen size */}
<div className="container px-4 sm:px-6 md:px-8 lg:px-12">
  {/* Content */}
</div>

{/* Section spacing increases on larger screens */}
<section className="py-8 sm:py-12 md:py-16 lg:py-20">
  {/* Content */}
</section>

{/* Gap between elements scales responsively */}
<div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
  {/* Items */}
</div>
```

---

### Testing Checklist

Test all layouts at these viewport widths:
- **320px** - iPhone SE (smallest)
- **375px** - iPhone 12/13 Mini
- **390px** - iPhone 12/13/14 Pro
- **428px** - iPhone 12/13/14 Pro Max
- **768px** - iPad Portrait
- **1024px** - iPad Landscape / Small Desktop
- **1280px** - Standard Desktop
- **1920px** - Large Desktop

---

### Responsive Guardrails

#### ✅ DO
- Design mobile-first, enhance for desktop
- Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
- Test on real devices, not just browser DevTools
- Ensure touch targets are at least 44px × 44px
- Use responsive typography scales
- Hide non-essential content on mobile
- Use `min-h-screen` for full-height layouts
- Test horizontal and vertical orientations

#### ❌ DON'T
- Don't use fixed pixel widths
- Don't assume mouse/hover interactions on mobile
- Don't create horizontal scroll
- Don't use tiny touch targets (<40px)
- Don't hide critical functionality on mobile
- Don't use desktop-only features without fallbacks
- Don't forget to test on actual devices

---

## 9. External Links & Social Media

### Primary Brand Website

**Main Website:** https://www.mycollegefinance.com/

**Standard Link Implementation:**
```tsx
<a
  href="https://www.mycollegefinance.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary hover:text-brand-amber transition-colors"
>
  My College Finance
</a>
```

---

### Legal & Policy Links

**Privacy Policy:**
```tsx
<a
  href="https://www.mycollegefinance.com/privacy-policy"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-muted-foreground hover:text-brand-amber transition-colors"
>
  Privacy Policy
</a>
```

**Terms of Service:**
```tsx
<a
  href="https://www.mycollegefinance.com/terms-policy"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-muted-foreground hover:text-brand-amber transition-colors"
>
  Terms of Service
</a>
```

---

### Social Media Hub

**Linktree:**
```tsx
<a
  href="https://linktr.ee/mycollegefinance"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-muted-foreground hover:text-brand-amber transition-colors"
>
  Social Media
</a>
```

---

### Open Graph Metadata

Include in `index.html` for social sharing:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://[your-app-url].com/" />
<meta property="og:title" content="App Name - My College Finance" />
<meta property="og:description" content="Brief description of your app" />
<meta property="og:image" content="https://mycollegefinance.com/assets/logo-social.jpg" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://[your-app-url].com/" />
<meta property="twitter:title" content="App Name - My College Finance" />
<meta property="twitter:description" content="Brief description of your app" />
<meta property="twitter:image" content="https://mycollegefinance.com/assets/logo-social.jpg" />
```

---

### Link Guardrails

#### ✅ DO
- Always use `target="_blank"` for external links
- Always include `rel="noopener noreferrer"` for security
- Add hover states with brand amber color
- Include descriptive link text (avoid "click here")
- Test all links before deployment
- Use consistent link styling across the app

#### ❌ DON'T
- Don't link to external sites without security attributes
- Don't use generic link text
- Don't forget to update links if URLs change
- Don't use `javascript:void(0)` for links
- Don't open internal navigation in new tabs

---

## 10. Animations & Interactions

### Transition Standards

#### CSS Transitions
```css
/* Standard transition timing */
--transition: all 0.3s ease;

/* Apply to interactive elements */
.button {
  transition: all 0.3s ease;
}

/* Specific property transitions */
.link {
  transition: color 0.3s ease;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

#### Tailwind Transition Classes
```tsx
{/* Standard transition */}
<div className="transition-all duration-300 ease-in-out">

{/* Color transition only */}
<div className="transition-colors duration-300">

{/* Transform transition only */}
<div className="transition-transform duration-300">

{/* Multiple properties */}
<div className="transition-[color,transform] duration-300">
```

---

### Hover & Focus States

#### Button Interactions
```tsx
{/* Scale on hover */}
<Button className="hover:scale-105 transition-transform">
  Hover Me
</Button>

{/* Darken on hover */}
<Button className="bg-brand-blue hover:bg-brand-blue/90 transition-colors">
  Click Me
</Button>

{/* Focus ring for accessibility */}
<Button className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
  Keyboard Accessible
</Button>
```

#### Link Interactions
```tsx
<a
  href="#"
  className="text-primary hover:text-brand-amber underline-offset-4 hover:underline transition-colors"
>
  Hover Link
</a>
```

#### Card Interactions
```tsx
<Card className="hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all">
  {/* Card content */}
</Card>
```

---

### Logo Animation (BrandHeader)

```tsx
<a
  href="https://www.mycollegefinance.com/"
  className="flex items-center gap-2 group"
>
  <OwlLogo
    size={70}
    className="w-[50px] sm:w-[65px] transition-transform group-hover:scale-110 group-hover:rotate-1"
  />
  <div className="flex flex-col transition-colors">
    <span className="text-sm sm:text-base font-bold group-hover:text-brand-blue">
      MY COLLEGE FINANCE
    </span>
    <span className="text-[10px] sm:text-xs text-muted-foreground">
      EDUCATE • MOTIVATE • ELEVATE
    </span>
  </div>
</a>
```

**Effects:**
- Logo scales to 110% on hover
- Subtle rotation (1deg)
- Text color changes to brand blue
- Smooth transitions (300ms)

---

### Theme Toggle Animation

```tsx
<Button
  variant="ghost"
  size="icon"
  onClick={toggleTheme}
  className="transition-all hover:bg-accent"
>
  {theme === "dark" ? (
    <Sun className="h-5 w-5 text-brand-amber rotate-0 transition-all hover:rotate-45" />
  ) : (
    <Moon className="h-5 w-5 rotate-0 transition-all hover:-rotate-12" />
  )}
</Button>
```

**Effects:**
- Sun icon rotates 45deg on hover
- Moon icon rotates -12deg on hover
- Color highlight for dark mode (amber)
- Smooth icon transitions

---

### Loading States

#### Spinner Component
```tsx
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
```

#### Skeleton Loading
```tsx
<div className="space-y-4">
  <div className="h-4 bg-muted animate-pulse rounded" />
  <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
  <div className="h-4 bg-muted animate-pulse rounded w-4/6" />
</div>
```

#### Progress Animation
```tsx
<Progress
  value={progress}
  className="transition-all duration-500 ease-out"
/>
```

---

### Framer Motion Advanced Animations

#### Page Transitions
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  {/* Page content */}
</motion.div>
```

#### Card Entrance Animation
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  <Card>
    {/* Card content */}
  </Card>
</motion.div>
```

#### Staggered List Animation
```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

### Animation Guardrails

#### ✅ DO
- Use CSS transitions for simple state changes
- Keep animations under 300-500ms for snappiness
- Use `ease-in-out` or `ease-out` easing functions
- Add hover states to all interactive elements
- Include focus states for keyboard accessibility
- Use Framer Motion for complex animations
- Test animations on lower-end devices
- Respect `prefers-reduced-motion` media query

#### ❌ DON'T
- Don't use animations longer than 500ms for UI transitions
- Don't animate layout properties excessively (use `transform`)
- Don't use `ease-in` for exit animations (feels sluggish)
- Don't forget to add loading states
- Don't animate without `will-change` for complex animations
- Don't use too many animations on one page (overwhelming)
- Don't ignore accessibility (motion sickness considerations)

---

### Accessibility: Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Or in React:**
```tsx
import { useReducedMotion } from "framer-motion";

function Component() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ scale: shouldReduceMotion ? 1 : 1.1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
    >
      {/* Content */}
    </motion.div>
  );
}
```

---

## 11. Guardrails & Quality Standards

### Code Quality

#### TypeScript Strict Mode
All projects must have strict TypeScript enabled:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### ESLint Rules
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-debugger": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
}
```

---

### Accessibility Standards

#### WCAG 2.1 Level AA Compliance
All apps must meet WCAG 2.1 Level AA standards:

1. **Color Contrast:**
   - Normal text: 4.5:1 minimum
   - Large text (18pt+): 3:1 minimum
   - UI components: 3:1 minimum

2. **Keyboard Navigation:**
   - All interactive elements must be keyboard accessible
   - Focus indicators must be visible
   - Tab order must be logical

3. **Screen Reader Support:**
   - Semantic HTML5 elements
   - ARIA labels for icon buttons
   - Alt text for images
   - Proper heading hierarchy

4. **Form Accessibility:**
   - Labels for all inputs
   - Error messages linked to fields
   - Required field indicators

---

### Performance Standards

#### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

#### Bundle Size Guidelines
- **Initial bundle:** < 200KB (gzipped)
- **Total bundle:** < 500KB (gzipped)
- **Images:** Optimized, lazy-loaded, WebP preferred
- **Fonts:** System fonts preferred, or font-display: swap

#### Optimization Checklist
- ✅ Code splitting with dynamic imports
- ✅ Lazy loading for routes and heavy components
- ✅ Image optimization (WebP, responsive images)
- ✅ Tree shaking enabled in Vite
- ✅ Production builds minified
- ✅ React Query for efficient data fetching
- ✅ Debouncing for search inputs
- ✅ Virtualization for long lists

---

### Security Standards

#### Authentication & Authorization
- Use secure session management (express-session)
- Store passwords with bcrypt (min 10 rounds)
- Implement CSRF protection
- Use HTTPS in production
- Sanitize user inputs
- Validate all form data with Zod

#### Data Protection
- Never log sensitive data (passwords, tokens)
- Use environment variables for secrets
- Implement rate limiting for APIs
- Use prepared statements for database queries
- Encrypt sensitive data at rest

#### External Link Security
Always use secure link patterns:
```tsx
<a
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"
>
  External Link
</a>
```

---

### Testing Standards

#### Unit Testing
- Test utility functions
- Test custom hooks
- Test form validation logic
- Minimum 70% code coverage

#### Integration Testing
- Test user flows (form submission, navigation)
- Test API endpoints
- Test database operations

#### E2E Testing (Recommended)
- Test critical user journeys
- Test cross-browser compatibility
- Test responsive layouts

---

### Git & Version Control

#### Branch Naming
- `main` - Production-ready code
- `develop` - Development branch
- `feature/feature-name` - New features
- `bugfix/bug-description` - Bug fixes
- `hotfix/critical-fix` - Production hotfixes

#### Commit Message Format
```
type(scope): brief description

- Detailed explanation (if needed)
- Reference issue numbers

Types: feat, fix, docs, style, refactor, test, chore
```

**Examples:**
```
feat(auth): add password reset functionality
fix(calculator): correct savings calculation logic
docs(readme): update installation instructions
style(header): improve mobile responsiveness
```

---

## 12. Implementation Checklist

### New App Setup Checklist

#### 1. Project Initialization
- [ ] Create project with Vite + React + TypeScript
- [ ] Install required dependencies (see Technology Stack)
- [ ] Configure Tailwind CSS with MCF theme
- [ ] Set up shadcn/ui with "new-york" style
- [ ] Configure path aliases (@/, @shared/, @assets/)
- [ ] Set up ESLint and TypeScript strict mode

#### 2. Branding Implementation
- [ ] Copy OwlLogo component to `client/src/assets/owl-logo.tsx`
- [ ] Add brand colors to `client/src/index.css` (CSS variables)
- [ ] Configure Tailwind with brand color extensions
- [ ] Create BrandHeader component with logo and theme toggle
- [ ] Create BrandFooter component with MCF links
- [ ] Update document title and meta tags

#### 3. Layout & Styling
- [ ] Set up main layout structure (Header, Main, Footer)
- [ ] Configure responsive breakpoints (including xs: 475px)
- [ ] Implement dark mode with ThemeProvider
- [ ] Test responsive layouts at all breakpoints
- [ ] Add smooth transitions and hover states

#### 4. Component Development
- [ ] Install required shadcn/ui components
- [ ] Create custom components following MCF patterns
- [ ] Use brand colors (blue, green, amber) appropriately
- [ ] Add proper accessibility attributes
- [ ] Test keyboard navigation

#### 5. Features & Functionality
- [ ] Implement core app features
- [ ] Set up form handling with React Hook Form + Zod
- [ ] Add loading states and error handling
- [ ] Implement data persistence (localStorage or database)
- [ ] Add export/share functionality (if applicable)

#### 6. Quality Assurance
- [ ] Test on mobile devices (320px, 375px, 390px, 428px)
- [ ] Test on tablets (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] Verify color contrast ratios (WCAG AA)
- [ ] Test keyboard navigation
- [ ] Test dark mode thoroughly
- [ ] Run Lighthouse audit (aim for 90+ scores)

#### 7. Pre-Launch
- [ ] Verify all external links work correctly
- [ ] Test analytics integration (if applicable)
- [ ] Review and update Open Graph metadata
- [ ] Compress and optimize all images
- [ ] Run production build and test
- [ ] Set up error tracking (Sentry, etc.)

---

### Brand Consistency Audit Checklist

Use this checklist to audit existing apps or ensure new apps meet MCF brand standards:

#### Visual Identity
- [ ] **Official logo URL is used:** `https://static.wixstatic.com/media/c24a60_2b6231b666214539ae22ebd2dffe7a09~mv2.png`
- [ ] Logo uses correct owl design with graduation cap
- [ ] Logo links to https://www.mycollegefinance.com/
- [ ] Brand tagline "EDUCATE • MOTIVATE • ELEVATE" is present
- [ ] Colors match brand palette (blue, green, amber, black)
- [ ] Typography uses system fonts or Poppins
- [ ] Dark mode implemented and tested

#### UI Components
- [ ] Uses Radix UI + shadcn/ui component foundation
- [ ] Button styles follow brand patterns
- [ ] Cards have consistent padding and borders
- [ ] Form inputs styled consistently
- [ ] Icons from Lucide React
- [ ] Hover states use brand amber color

#### Layout & Responsiveness
- [ ] Header is sticky with backdrop blur
- [ ] Footer includes all MCF links
- [ ] Container max-width is 7xl (1280px)
- [ ] Mobile breakpoint at 640px (sm)
- [ ] Tablet breakpoint at 768px (md)
- [ ] Desktop breakpoint at 1024px (lg)

#### Accessibility
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] All buttons have aria-labels (if icon-only)
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Semantic HTML5 elements used

#### Technical Implementation
- [ ] React 18.3+
- [ ] TypeScript with strict mode
- [ ] Vite for build tool
- [ ] Tailwind CSS for styling
- [ ] Path aliases configured (@/, @shared/, @assets/)
- [ ] Environment variables properly configured

---

## 13. Context Enhancement Rules

### When Creating Apps with Different Design Elements

The MCF brand is flexible within defined boundaries. When creating new apps that require unique design elements, follow these context enhancement rules:

---

### Rule 1: Core Brand Elements are Non-Negotiable

**MUST ALWAYS BE CONSISTENT:**
- Brand logo (owl with graduation cap)
- Brand name "MY COLLEGE FINANCE"
- Tagline "EDUCATE • MOTIVATE • ELEVATE"
- Link to main website (https://www.mycollegefinance.com/)
- Brand colors (blue, green, amber, black) for primary actions

**Why:** These elements define the MCF brand identity and must remain consistent for brand recognition.

---

### Rule 2: Extended Color Palettes Are Allowed

**You MAY:**
- Add additional colors for specific features
- Use different shades for data visualization
- Create domain-specific color scales (e.g., budget categories)

**You MUST:**
- Keep brand blue for primary actions
- Keep brand green for success states
- Keep brand amber for warnings/highlights
- Document new colors in a `THEME_EXTENSIONS.md` file
- Ensure new colors meet accessibility contrast ratios

**Example:**
```css
/* Budget-specific colors (acceptable addition) */
:root {
  --category-needs: hsl(210, 100%, 50%);      /* Blue variant */
  --category-wants: hsl(270, 100%, 60%);      /* Purple */
  --category-savings: hsl(115, 93%, 47%);     /* Brand Green */
}
```

---

### Rule 3: Typography Can Be Customized for Context

**You MAY:**
- Use Poppins for marketing-heavy apps
- Use system fonts for data-heavy apps
- Adjust font scale for specific use cases (e.g., dashboards)

**You MUST:**
- Maintain consistent font weights (400, 500, 600, 700, 900)
- Keep minimum font size at 12px (0.75rem)
- Document font choice rationale in app README

**Example Use Cases:**
- **Budget Calculator:** Poppins for friendly, approachable feel
- **Data Dashboard:** System fonts for performance and readability
- **Marketing Landing Page:** Poppins for brand personality

---

### Rule 4: Unique Features Can Have Custom Components

**You MAY:**
- Create feature-specific components (e.g., BudgetBreakdownChart, SavingsProgressRing)
- Add domain-specific UI patterns
- Use unique illustrations or icons

**You MUST:**
- Build on shadcn/ui foundation
- Use Tailwind CSS for styling (no CSS-in-JS)
- Follow MCF spacing and border radius standards
- Maintain consistent interaction patterns (hover, focus states)

**Example:**
A Savings Goal Tracker app might have:
- Custom progress rings with brand colors
- Unique countdown timer component
- Goal-specific illustrations
- All built with Tailwind + Radix UI, following MCF patterns

---

### Rule 5: Layout Variations Are Permitted for Different App Types

**You MAY:**
- Use sidebar layouts for complex dashboards
- Use full-width layouts for calculators
- Use multi-column layouts for content-heavy apps

**You MUST:**
- Include BrandHeader at the top
- Include BrandFooter at the bottom
- Keep logo and tagline visible on all pages
- Maintain responsive breakpoints

**Approved Layout Patterns:**
- Single-column (default for simple apps)
- Two-column (sidebar + main)
- Three-column (sidebar + main + aside)
- Dashboard grid (cards in grid)

---

### Rule 6: Animation Styles Can Vary by App Purpose

**You MAY:**
- Use minimal animations for professional/serious tools
- Use playful animations for educational/onboarding experiences
- Adjust animation timing for app context

**You MUST:**
- Keep logo hover animation (scale + rotate)
- Keep theme toggle animation
- Maintain 300ms standard transition timing
- Respect `prefers-reduced-motion`

**Example Contexts:**
- **Financial Calculator:** Minimal, professional animations
- **Onboarding Tutorial:** More playful, educational animations
- **Progress Tracking:** Celebratory animations for milestones

---

### Rule 7: Data Visualizations Can Use Extended Palettes

**You MAY:**
- Use extended color palettes for charts
- Add gradients for visual interest
- Use color-coded categories

**You MUST:**
- Start with brand colors (blue, green, amber)
- Ensure charts are readable in dark mode
- Maintain accessibility (don't rely on color alone)
- Use consistent chart styling across the app

**Recommended Chart Colors:**
```css
/* Primary data series */
--chart-1: hsl(218, 99%, 30%);  /* Brand Blue */
--chart-2: hsl(115, 93%, 47%);  /* Brand Green */
--chart-3: hsl(45, 98%, 50%);   /* Brand Amber */

/* Extended series */
--chart-4: hsl(262, 83%, 58%);  /* Purple */
--chart-5: hsl(142, 71%, 45%);  /* Teal */
--chart-6: hsl(0, 84%, 60%);    /* Red */
```

---

### Rule 8: Content Tone Can Vary by Audience

**You MAY:**
- Use casual, friendly tone for student-focused apps
- Use professional tone for career/finance tools
- Adjust reading level for target audience

**You MUST:**
- Maintain brand voice: Educational, Motivating, Elevating
- Keep brand tagline visible
- Avoid jargon without explanations
- Include educational content where relevant

**Tone Guidelines by App Type:**
- **Budgeting Tools:** Encouraging, non-judgmental, actionable
- **Career Tools:** Professional, aspirational, empowering
- **Educational Content:** Clear, accessible, supportive

---

### Rule 9: Documentation Standards for New Apps

When creating a new app with custom design elements, create a `DESIGN_DECISIONS.md` file:

```markdown
# [App Name] - Design Decisions

## Overview
Brief description of the app and its purpose.

## Design Customizations

### Color Extensions
- **Custom Color 1:** #hex - Used for [purpose]
- **Custom Color 2:** #hex - Used for [purpose]
- **Rationale:** Why these colors were chosen

### Typography
- **Font:** Poppins / System Fonts
- **Rationale:** Why this font choice

### Layout
- **Layout Pattern:** Single-column / Dashboard / etc.
- **Rationale:** Why this layout fits the use case

### Unique Components
- **Component 1:** Description and purpose
- **Component 2:** Description and purpose

### Animation Style
- **Approach:** Minimal / Moderate / Playful
- **Rationale:** How it fits the app's purpose

## Brand Compliance
- [x] Logo implemented correctly
- [x] Tagline visible
- [x] Brand colors used for primary actions
- [x] External links point to mycollegefinance.com
- [x] Responsive design tested
- [x] Dark mode implemented
- [x] Accessibility standards met
```

---

### Rule 10: Approval Process for Major Deviations

**Minor Deviations (No Approval Needed):**
- Adding feature-specific colors (documented)
- Custom components built on shadcn/ui
- Layout adjustments for specific use cases
- Animation timing adjustments

**Major Deviations (Requires Review):**
- Changing logo design
- Removing tagline
- Using different brand colors for primary actions
- Complete redesign of header/footer
- Changing brand name or messaging

**When in Doubt:**
1. Consult this branding guide
2. Review existing MCF apps for precedent
3. Document your decision with rationale
4. Test with users for feedback

---

### Common Scenarios & Solutions

#### Scenario 1: App Requires Industry-Specific Colors
**Problem:** Building a stock market tracker; need red/green for up/down.

**Solution:**
- Use industry-standard red/green for stock indicators
- Keep MCF brand blue for primary buttons
- Keep MCF brand green for success states (account growth)
- Document color usage in DESIGN_DECISIONS.md

---

#### Scenario 2: Target Audience is Different (Parents, Not Students)
**Problem:** Creating a parent-focused app; needs different tone.

**Solution:**
- Adjust content tone to be parent-focused
- Keep brand identity (logo, colors, tagline)
- Emphasize "helping your student" messaging
- Maintain core brand values (educate, motivate, elevate)

---

#### Scenario 3: App Needs Dark Theme as Default
**Problem:** Building a nighttime study planner; dark theme preferred.

**Solution:**
- Set dark mode as default
- Still provide light mode toggle
- Ensure brand colors work in dark mode
- Test all components in dark mode thoroughly

---

#### Scenario 4: App is Mobile-Only
**Problem:** Creating a mobile app; desktop not needed.

**Solution:**
- Focus design on mobile breakpoints
- Still include BrandHeader and BrandFooter (scaled for mobile)
- Test at 320px, 375px, 390px, 428px
- Consider PWA features for app-like experience

---

### Summary: Design Decision Framework

When making design decisions for new MCF apps, ask:

1. **Does it maintain brand recognition?**
   - Is the logo visible and correct?
   - Is the tagline present?
   - Do primary actions use brand blue?

2. **Does it serve the user?**
   - Does the design improve user experience?
   - Is it accessible and inclusive?
   - Does it fit the app's purpose?

3. **Is it consistent with MCF values?**
   - Does it educate?
   - Does it motivate?
   - Does it elevate students?

4. **Is it documented?**
   - Are deviations documented in DESIGN_DECISIONS.md?
   - Is the rationale clear?
   - Can future developers understand the choices?

**If all answers are YES, proceed with the design.**

---

## Conclusion

This branding guide ensures consistency across all My College Finance applications while allowing flexibility for unique use cases. By following these standards, you'll create apps that:

- Are instantly recognizable as MCF products
- Provide excellent user experiences
- Meet accessibility and performance standards
- Maintain brand integrity while serving diverse needs

---

## Quick Reference

### Essential Files to Copy
1. `/Savings-Goal-Calculator/client/src/assets/owl-logo.tsx` - Logo component (optional, for custom SVG)
2. `/Savings-Goal-Calculator/client/src/index.css` - Brand CSS variables
3. This guide: `.instructions/BRANDING_GUIDE.md`

### Essential Links
- **Official Logo URL:** https://static.wixstatic.com/media/c24a60_2b6231b666214539ae22ebd2dffe7a09~mv2.png
- Main Website: https://www.mycollegefinance.com/
- Privacy Policy: https://www.mycollegefinance.com/privacy-policy
- Terms: https://www.mycollegefinance.com/terms-policy
- Social: https://linktr.ee/mycollegefinance

### Brand Colors (Hex)
- Blue: `#012699`
- Green: `#26e011`
- Amber: `#fdc003`
- Black: `#000516`

### Support
For questions about this branding guide, contact the ThiinkMG development team.

---

**Version History:**
- v1.0.0 (2025-11-06): Initial comprehensive branding guide created

**Last Updated:** 2025-11-06
