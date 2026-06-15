# Only Roses - Design System & Brand Guidelines

## Overview
Only Roses is a luxury floral e-commerce brand with a warm, sophisticated aesthetic. The design system balances elegance with approachability, using botanical inspirations and warm metallics to create a premium yet inviting experience.

---

## 🎨 Color Palette

### Primary Colors
| Name | Hex | RGB | Use Case |
|------|-----|-----|----------|
| **Primary Pink** | `#F2425E` | `242, 66, 94` | CTA buttons, highlights, brand accent |
| **Soft Pink** | `#F4E0ED` | `244, 224, 237` | Background tints, subtle accents |
| **Sage Green** | `#8BA870` | `139, 168, 112` | Section labels, natural elements, secondary accent |
| **Olive Dark** | `#4B633A` | `75, 99, 58` | Dark accents, deep botanical elements |

### Metallics & Neutrals
| Name | Hex | RGB | Use Case |
|------|-----|-----|----------|
| **Gold Champagne** | `#B59A5D` | `181, 154, 93` | Luxury accents, borders, decorative elements |
| **Gold Gradient** | `linear-gradient(135deg, #B59A5D 0%, #F5E6AD 50%, #B59A5D 100%)` | — | Premium sections, featured areas |

### Neutral Palette
| Name | Hex | RGB | Use Case |
|------|-----|-----|----------|
| **Black** | `#162119` | `22, 33, 25` | Primary text, dark overlays |
| **Black Soft** | `#2C362F` | `44, 54, 47` | Secondary text, body copy |
| **Stone** | `#44403C` | `68, 64, 60` | Tertiary text, disabled states |
| **White** | `#FFFFFF` | `255, 255, 255` | Backgrounds, primary surface |
| **Off-White** | `#E9E3D6` | `233, 227, 214` | Subtle backgrounds, cards |

### Color Psychology
- **Pink** - Femininity, elegance, romance (perfect for floral brand)
- **Sage Green** - Nature, growth, balance (botanical connection)
- **Gold** - Luxury, premium, celebration
- **Neutral Tones** - Sophistication, readability, elegance

---

## 📐 Typography System

### Font Families
```css
--font-display: 'Cormorant Garamond', serif;
--font-body: 'Jost', sans-serif;
```

**Cormorant Garamond** - Elegant serif for headings and display text
- Weights: 300, 400, 500, 600, 700
- Perfect for luxury, editorial feel
- Used in h1-h3, section titles

**Jost** - Clean geometric sans-serif for body and UI
- Weights: 200, 300, 400, 500, 600, 700
- High readability, modern feel
- Used for body text, buttons, labels, navigation

### Typography Scale

| Level | Font | Size | Weight | Line Height | Use Case |
|-------|------|------|--------|------------|----------|
| **H1** | Cormorant Garamond | 48px | 700 | 1.2 | Page hero titles |
| **H2** | Cormorant Garamond | 36px | 600 | 1.3 | Section headings |
| **H3** | Cormorant Garamond | 28px | 500 | 1.4 | Component titles |
| **H4** | Cormorant Garamond | 22px | 500 | 1.5 | Small section titles |
| **Body** | Jost | 16px | 400 | 1.6 | Main content text |
| **Body Small** | Jost | 14px | 400 | 1.5 | Secondary text |
| **Caption** | Jost | 12px | 400 | 1.4 | Labels, metadata |
| **Label** | Jost | 11px | 500 | 1.3 | Tags, badges |
| **Button** | Jost | 14px | 600 | 1.4 | CTA text |

### Text Colors
```css
/* Text Primary - Main content */
color: var(--black-soft); /* #2C362F */

/* Text Secondary - Supporting info */
color: var(--stone); /* #44403C */

/* Text Accent - Labels, highlights */
color: var(--sage-green); /* #8BA870 */

/* Text Inverse - On dark backgrounds */
color: var(--white); /* #FFFFFF */
```

---

## 📏 Spacing System

Consistent spacing using 8px base unit:

```css
--space-xs: 4px;      /* Extra tight spacing */
--space-sm: 8px;      /* Small padding/margin */
--space-md: 16px;     /* Default padding */
--space-lg: 24px;     /* Large padding */
--space-xl: 32px;     /* Extra large spacing */
--space-2xl: 48px;    /* Double spacing */
--space-3xl: 64px;    /* Triple spacing */
--space-4xl: 80px;    /* Quad spacing */
```

### Common Spacing Patterns
- **Button padding**: 12px 24px (space-md)
- **Card padding**: 24px (space-lg)
- **Section padding**: 64px 0 (space-3xl)
- **Grid gap**: 24px-32px (space-lg to space-xl)
- **Text spacing**: 16px (space-md)

---

## 🎯 Component Design System

### Buttons

#### Primary Button
```
Background: #F2425E (Primary Pink)
Text: #FFFFFF (White)
Padding: 12px 32px
Border Radius: 4px
Font: Jost 600, 14px
Hover: Opacity 0.9, slight scale (1.02)
Transition: 200ms ease-out-quart
```

#### Secondary Button
```
Background: Transparent
Border: 2px solid #8BA870 (Sage Green)
Text: #8BA870
Padding: 12px 32px
Hover: Background #8BA870, Text #FFFFFF
```

#### Tertiary Button
```
Background: #E9E3D6 (Off-White)
Text: #162119 (Black)
Padding: 12px 24px
Hover: Background #B59A5D (Gold)
```

### Cards

```css
background: var(--white);
border: 1px solid #E5DFD8;
border-radius: 8px;
padding: 24px;
box-shadow: 0 2px 8px rgba(22, 33, 25, 0.08);
transition: all 200ms var(--ease-out-quart);

/* Hover State */
&:hover {
  box-shadow: 0 8px 24px rgba(22, 33, 25, 0.12);
  border-color: #B59A5D;
}
```

### Input Fields

```css
background: var(--white);
border: 1px solid #E5DFD8;
border-radius: 4px;
padding: 10px 16px;
font-family: var(--font-body);
font-size: 14px;
color: var(--black-soft);
transition: border-color 200ms ease;

/* Focus State */
&:focus {
  outline: none;
  border-color: #F2425E;
  box-shadow: 0 0 0 3px rgba(242, 66, 94, 0.1);
}

/* Placeholder */
&::placeholder {
  color: var(--stone);
  opacity: 0.6;
}
```

### Badge/Tag

```css
background: #F4E0ED (Soft Pink);
color: #F2425E (Primary Pink);
padding: 4px 12px;
border-radius: 20px;
font-family: var(--font-body);
font-size: 12px;
font-weight: 500;
```

### Section Label

```css
display: block;
font-family: var(--font-body);
font-size: 0.7rem;
font-weight: 500;
letter-spacing: 0.2em;
text-transform: uppercase;
color: var(--sage-green);
margin-bottom: 12px;
```

---

## 🎬 Animation & Motion

### Easing Functions
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
```

### Duration Standards
- **Quick interactions**: 150ms (button hover)
- **Standard transitions**: 200ms (default)
- **Slower transitions**: 300ms (page transitions)
- **Long animations**: 500ms+ (scroll reveals)

### Common Animations

#### Fade In on Scroll
```
Opacity: 0 → 1
Duration: 600ms
Delay: Staggered (100ms between elements)
Easing: ease-out-expo
```

#### Hover Scale
```
Transform: scale(1) → scale(1.02)
Duration: 200ms
Easing: ease-out-quart
```

#### Button Hover
```
Opacity: 1 → 0.9
Transform: translateY(0) → translateY(-2px)
Duration: 150ms
Easing: ease-out-quart
```

#### Image Hover (Product Cards)
```
Transform: scale(1) → scale(1.05)
Duration: 300ms
Easing: ease-out-quart
```

### Framer Motion Configuration
```javascript
// Page transitions
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.3, ease: "easeOut" }}

// Staggered list animations
variants={{
  container: { staggerChildren: 0.1 },
  item: { opacity: 1, y: 0 }
}}
```

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📐 Layout Specifications

### Container
```css
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
```

### Section Heights
- **Hero**: 100vh (full viewport)
- **Standard Section**: 600px - 800px
- **Compact Section**: 400px - 500px

### Grid System
- **Desktop**: 12-column grid, 24px gap
- **Tablet**: 8-column grid, 16px gap
- **Mobile**: Single column, 16px gap

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (min-width: 769px) { }

/* Large Desktop */
@media (min-width: 1200px) { }
```

---

## 🖼️ Imagery Guidelines

### Photo Style
- **Aesthetic**: Editorial, high-end, naturally lit
- **Mood**: Warm, inviting, sophisticated
- **Lighting**: Golden hour preferred, soft shadows
- **Composition**: Asymmetric, generous negative space
- **Color Grading**: Warm tones, slight vintage feel

### Image Specifications
- **Hero Images**: 1920×1080px minimum
- **Section Images**: 800×600px (varies with layout)
- **Product Images**: 500×500px (square format)
- **Thumbnail Images**: 300×300px
- **Format**: JPEG (photos), PNG (graphics), WebP (modern browsers)
- **Optimization**: Compressed with next-gen formats

### Image Overlay
```css
/* Subtle overlay on hover */
background: rgba(242, 66, 94, 0.15);
```

---

## 🎨 Color Combination Examples

### Recommended Pairings

#### Pink + Sage (Primary combination)
```
Background: #FFFFFF
Heading: #162119 (Cormorant)
Accent: #F2425E
Supporting: #8BA870
```

#### Gold + Neutral (Luxury feel)
```
Background: #FFFFFF
Text: #2C362F
Accent: #B59A5D
Border: #E9E3D6
```

#### Dark Mode (Optional future feature)
```
Background: #162119
Text: #E9E3D6
Accent: #F2425E
Secondary: #B59A5D
```

---

## 📱 Responsive Design Patterns

### Navigation
- **Desktop**: Horizontal nav bar, fixed or sticky
- **Tablet**: Horizontal nav with reduced spacing
- **Mobile**: Hamburger menu, collapse into drawer

### Hero
- **Desktop**: Side-by-side image and text
- **Tablet**: Stacked, image full width
- **Mobile**: Full width stacked, image optimized

### Grid
- **Desktop**: 3-4 column grid
- **Tablet**: 2 column grid
- **Mobile**: Single column stack

### Form
- **Desktop**: Multi-column layout
- **Mobile**: Single column, full width inputs

---

## 🎯 Accessibility Standards

### Color Contrast
- **Primary text**: 9:1 ratio (AAA compliant)
- **Secondary text**: 7:1 ratio (AA compliant)
- **UI elements**: 4.5:1 minimum

### Focus States
```css
/* Visible focus indicator */
outline: 2px solid #F2425E;
outline-offset: 2px;
```

### Alt Text
All images require descriptive alt text:
- Product images: "[Product name], [color], [arrangement type]"
- Hero images: "[Scene description]"
- Decorative elements: "" (empty for screen readers)

### Font Sizing
- Minimum 14px for body text
- Minimum 12px for secondary text
- Never scale below 16px on mobile

### Touch Targets
- Minimum 44×44px for interactive elements
- 8px padding around buttons
- Avoid small clickable targets

---

## 🔧 Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --primary-pink: #F2425E;
  --soft-pink: #F4E0ED;
  --sage-green: #8BA870;
  --olive-dark: #4B633A;
  --gold-champagne: #B59A5D;
  --gold: #B59A5D;
  --black: #162119;
  --black-soft: #2C362F;
  --stone: #44403C;
  --white: #FFFFFF;
  --off-white: #E9E3D6;
  --gold-gradient: linear-gradient(135deg, #B59A5D 0%, #F5E6AD 50%, #B59A5D 100%);

  /* Typography */
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Jost', sans-serif;

  /* Animations */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);

  /* Spacing (8px base) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 50%;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(22, 33, 25, 0.08);
  --shadow-md: 0 4px 16px rgba(22, 33, 25, 0.1);
  --shadow-lg: 0 8px 24px rgba(22, 33, 25, 0.12);
  --shadow-xl: 0 12px 32px rgba(22, 33, 25, 0.15);
}
```

---

## 📋 Component Checklist

- [x] Primary Button (Pink, hover state)
- [x] Secondary Button (Sage outline)
- [x] Card (White, subtle shadow)
- [x] Form Input (Bordered, focus state)
- [x] Navigation (Responsive, fixed)
- [x] Footer (Multi-column, links)
- [x] Hero Section (Full viewport)
- [x] Product Grid (Responsive columns)
- [x] Carousel (Framer Motion, touch-enabled)
- [x] Modal/Overlay (Dark overlay, centered content)
- [x] Breadcrumb (Navigation hierarchy)
- [x] Tabs (Underline active, smooth transition)

---

## 🚀 Brand Voice & Tone

### Tone of Voice
- **Sophisticated yet approachable**
- **Warm and inviting**
- **Authentic and genuine**
- **Elegant without being cold**
- **Helpful and knowledgeable**

### Copy Guidelines
- Use short, punchy headlines
- Write in second person ("You deserve...")
- Focus on emotions and experiences
- Use botanical/floral metaphors subtly
- Keep body copy concise (60-80 chars per line)

### CTAs
- "Explore Our Collections"
- "Discover Premium Arrangements"
- "Shop Now"
- "Learn More"
- "Get in Touch"

---

## 📸 Visual Examples

### Color Palette Visual
```
#F2425E ████ Primary Pink
#F4E0ED ████ Soft Pink
#8BA870 ████ Sage Green
#4B633A ████ Olive Dark
#B59A5D ████ Gold Champagne
#162119 ████ Black
#FFFFFF ████ White
```

---

## 🔄 Design Consistency Checklist

Before launching any page or component:

- [ ] Uses correct color palette (no arbitrary colors)
- [ ] Typography follows scale (h1-h6, body, captions)
- [ ] Spacing follows 8px grid
- [ ] Buttons have hover/active states
- [ ] Forms have focus and error states
- [ ] Images are optimized and high quality
- [ ] Animations use standard easing and duration
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Accessibility standards met (contrast, focus, alt text)
- [ ] Smooth scroll behavior enabled
- [ ] Reduced motion preferences respected

---

## 📚 Resources & Tools

- **Font Source**: Google Fonts (Cormorant Garamond, Jost)
- **Color Tool**: Use CSS variables (no hardcoded colors)
- **Animation Library**: Framer Motion
- **Design Files**: [Link to Figma/Adobe XD]
- **Component Library**: React components in `src/components/`

---

*Last Updated: 2026-06-14*  
*Design System Version: 1.0*
