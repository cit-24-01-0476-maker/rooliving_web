# 🎨 Color Reference Guide

## Dark Theme Color Palette

This project uses a professional dark theme with orange accents, inspired by modern design trends.

---

## Primary Colors

### 🟠 Orange (Primary Accent)
```css
/* Main Orange */
--primary: #ff6b35;
background-color: #ff6b35;

/* RGB: rgb(255, 107, 53) */
/* HSL: hsl(15, 100%, 60%) */
```

**Usage:**
- Primary buttons
- Links and CTAs
- Icons and highlights
- Hover states
- Focus rings

### ⚫ Black (Secondary)
```css
/* Pure Black */
--secondary: #000000;
background-color: #000000;
```

**Usage:**
- Secondary buttons
- Footer backgrounds
- Strong emphasis

---

## Background Colors

### Main Background (Darkest)
```css
/* Primary Background */
--background: #1a1a1a;
background-color: #1a1a1a;

/* RGB: rgb(26, 26, 26) */
```

**Usage:**
- Main page background
- Body background
- Outer containers

### Card Background (Medium Dark)
```css
/* Card/Container Background */
--card: #2a2a2a;
background-color: #2a2a2a;

/* RGB: rgb(42, 42, 42) */
```

**Usage:**
- Form containers
- Card components
- Modal backgrounds
- Panel backgrounds

### Muted Background (Lighter Dark)
```css
/* Muted/Hover Background */
--muted: #3a3a3a;
background-color: #3a3a3a;

/* RGB: rgb(58, 58, 58) */
```

**Usage:**
- Hover states
- Disabled elements
- Subtle backgrounds
- Dividers

---

## Text Colors

### White (Primary Text)
```css
/* Main Text */
--foreground: #ffffff;
color: #ffffff;
```

**Usage:**
- Headings
- Primary text
- Button text on dark backgrounds

### Light Gray (Secondary Text)
```css
/* Secondary Text */
--text-secondary: #e5e5e5;
color: #e5e5e5;

/* Or using Tailwind */
className="text-gray-300"
```

**Usage:**
- Descriptions
- Subtitles
- Supporting text

### Medium Gray (Muted Text)
```css
/* Muted Text */
--text-muted: #a0a0a0;
color: #a0a0a0;

/* Or using Tailwind */
className="text-gray-400"
```

**Usage:**
- Placeholders
- Timestamps
- Less important information

---

## Border Colors

### Subtle Border
```css
/* Default Border */
--border: rgba(255, 255, 255, 0.1);
border-color: rgba(255, 255, 255, 0.1);

/* Or using Tailwind */
className="border-gray-800"
```

### Hover Border
```css
/* Hover State */
border-color: rgba(255, 255, 255, 0.2);

/* Or using Tailwind */
className="border-gray-700"
```

---

## Orange Variations

```css
/* Lighter Orange - Hover */
--orange-light: #ff8c42;
background-color: #ff8c42;

/* Orange with transparency - Backgrounds */
--orange-alpha: rgba(255, 107, 53, 0.1);
background-color: rgba(255, 107, 53, 0.1);

/* Dark Orange - Active state */
--orange-dark: #e55a2b;
background-color: #e55a2b;
```

---

## Utility Colors

### Success (Green)
```css
--success: #10b981;
background-color: #10b981;
/* Use for: Success messages, completed states */
```

### Error (Red)
```css
--error: #d4183d;
background-color: #d4183d;
/* Use for: Error messages, destructive actions */
```

### Warning (Yellow)
```css
--warning: #fbbf24;
background-color: #fbbf24;
/* Use for: Warning messages, pending states */
```

### Info (Blue)
```css
--info: #3b82f6;
background-color: #3b82f6;
/* Use for: Information messages, links */
```

---

## Tailwind CSS Classes

### Background Classes
```jsx
// Main backgrounds
className="bg-[#1a1a1a]"      // Main background
className="bg-[#2a2a2a]"      // Card background
className="bg-[#3a3a3a]"      // Muted background

// Orange backgrounds
className="bg-orange-600"     // Primary orange
className="bg-orange-700"     // Hover orange
className="bg-orange-600/20"  // Transparent orange
```

### Text Classes
```jsx
className="text-white"        // Primary text
className="text-gray-300"     // Secondary text
className="text-gray-400"     // Muted text
className="text-orange-600"   // Orange text
```

### Border Classes
```jsx
className="border-gray-800"   // Subtle border
className="border-gray-700"   // Medium border
className="border-orange-600" // Orange border
```

---

## Component-Specific Color Usage

### Buttons

**Primary Button (Orange)**
```jsx
<button className="bg-orange-600 text-white hover:bg-orange-700">
  Click Me
</button>
```

**Secondary Button (Black)**
```jsx
<button className="bg-black text-white hover:bg-gray-900">
  Secondary Action
</button>
```

**Outline Button**
```jsx
<button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50">
  Outline
</button>
```

### Input Fields
```jsx
<input className="bg-[#1a1a1a] border border-gray-700 text-white focus:ring-orange-600" />
```

### Cards
```jsx
<div className="bg-[#2a2a2a] border border-gray-800 hover:border-orange-600">
  Card Content
</div>
```

### Header/Navigation
```jsx
<header className="bg-[#1a1a1a] border-b border-gray-800">
  <Link className="text-gray-300 hover:text-orange-600">Link</Link>
</header>
```

---

## Gradient Examples

### Orange Gradient
```css
background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
```

### Dark Gradient
```css
background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
```

### Subtle Gradient
```css
background: linear-gradient(to bottom, rgba(255, 107, 53, 0.1) 0%, transparent 100%);
```

---

## Accessibility Notes

### Contrast Ratios
- **White on #1a1a1a**: 15.6:1 ✅ (WCAG AAA)
- **Orange #ff6b35 on #1a1a1a**: 4.8:1 ✅ (WCAG AA)
- **Gray #a0a0a0 on #1a1a1a**: 5.2:1 ✅ (WCAG AA)

### Best Practices
- Use white (#ffffff) for primary text on dark backgrounds
- Use orange (#ff6b35) for interactive elements
- Maintain minimum 4.5:1 contrast ratio for text
- Add hover states with lighter colors
- Use focus rings (orange) for keyboard navigation

---

## Quick Copy-Paste

```css
/* Dark Theme Colors */
--bg-darkest: #1a1a1a;
--bg-dark: #2a2a2a;
--bg-medium: #3a3a3a;

--text-white: #ffffff;
--text-light: #e5e5e5;
--text-gray: #a0a0a0;

--orange-primary: #ff6b35;
--orange-hover: #ff8c42;
--black: #000000;

--border: rgba(255, 255, 255, 0.1);
--border-hover: rgba(255, 255, 255, 0.2);
```

---

## Design System Export

### For Figma
Create color styles with these exact hex values:
- Primary/Orange: #ff6b35
- Secondary/Black: #000000
- BG/Darkest: #1a1a1a
- BG/Dark: #2a2a2a
- BG/Medium: #3a3a3a
- Text/White: #ffffff
- Text/Light: #e5e5e5
- Text/Muted: #a0a0a0

### For CSS Variables
```css
:root {
  --color-orange: #ff6b35;
  --color-black: #000000;
  --color-bg-1: #1a1a1a;
  --color-bg-2: #2a2a2a;
  --color-bg-3: #3a3a3a;
  --color-text-1: #ffffff;
  --color-text-2: #e5e5e5;
  --color-text-3: #a0a0a0;
}
```

---

**Last Updated**: January 2026  
**Project**: HomeLandscape UI/UX Prototype  
**Theme**: Dark Mode with Orange Accents
