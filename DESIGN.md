---
name: Industrial Integrity
colors:
  surface: '#faf8ff'
  surface-dim: '#dad9e1'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3fa'
  surface-container: '#eeedf4'
  surface-container-high: '#e9e7ef'
  surface-container-highest: '#e3e1e9'
  on-surface: '#1a1b21'
  on-surface-variant: '#444651'
  inverse-surface: '#2f3036'
  inverse-on-surface: '#f1f0f7'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#4f1700'
  on-tertiary: '#ffffff'
  tertiary-container: '#742600'
  on-tertiary-container: '#ff8d5e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#faf8ff'
  on-background: '#1a1b21'
  surface-variant: '#e3e1e9'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
  container-max: 1280px
---

## Brand & Style
The design system is engineered for a polythene packaging business, emphasizing reliability, durability, and manufacturing precision. The target audience includes B2B procurement managers and logistics operators who value efficiency over ornamentation.

The visual style is **Corporate / Modern** with a slight **Brutalist** influence in its structural rigidity. It utilizes high contrast, clear boundaries, and functional whitespace to ensure data density is manageable and actionable. The emotional response should be one of "industrial strength"—a digital reflection of the robust materials the business produces.

## Colors
The palette is rooted in industrial utility. **Industrial Blue** serves as the primary anchor, conveying stability and institutional trust. **Clean Teal** is used for material-specific callouts, drawing a visual connection to poly-resin and technical manufacturing.

**Safety Orange** is reserved strictly for primary conversions (e.g., "Get Custom Quote") to ensure maximum visibility against the cooler primary tones. The neutral scale is vast, providing clear distinction between background surfaces and structural containers.

## Typography
Legibility is the highest priority. This design system uses **Inter** for all primary communication due to its exceptional clarity at all sizes. To reinforce the industrial/technical nature of the business, **JetBrains Mono** is introduced for labels, product codes, and technical specifications, providing a clear "data-first" aesthetic.

Headlines should be set with tight letter spacing and high weights to feel substantial. Body copy maintains generous line heights for readability in dense technical documentation or product listings.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain a controlled, professional presentation. A 12-column grid is utilized with 24px gutters. 

Spacing is strictly based on a 4px baseline shift to ensure mathematical harmony. Elements should use 16px (4 units) or 24px (6 units) as the standard padding for containers. On mobile, the grid collapses to a single column with 16px side margins to maximize the horizontal real estate for technical charts and product images.

## Elevation & Depth
This design system avoids excessive shadows to maintain a "flat and functional" look. Depth is primarily achieved through **Tonal Layers** and **Low-contrast outlines**.

- **Surface Level 0:** Background (`#F3F4F6`).
- **Surface Level 1:** White containers with a 1px solid border (`#E5E7EB`).
- **Interaction Depth:** Only the primary buttons use a subtle, sharp 2px "block shadow" (0px 2px 0px `#111827`) when hovered to simulate physical displacement, similar to industrial control panels. 
- **Modals:** Use a dark, semi-transparent backdrop (`rgba(17, 24, 39, 0.5)`) to focus attention without using heavy blurs.

## Shapes
The shape language is **Soft (0.25rem)**, leaning toward a more utilitarian and rigid appearance. Sharp corners are avoided for better eye-flow, but large "pill" shapes are restricted only to secondary status indicators (chips). Industrial containers, input fields, and primary buttons should strictly adhere to the `rounded-sm` (4px) or `rounded-md` (8px) rules to maintain a structured, blueprint-like feel.

## Components
- **Buttons:** Primary buttons use a solid Industrial Blue fill. The "Get Quote" button uses Safety Orange with white text. All buttons feature a 1px inset border to increase their "mechanical" look.
- **Input Fields:** High-contrast borders (1px solid `#9CA3AF`) that darken to Industrial Blue on focus. Use JetBrains Mono for placeholder text and data entry to emphasize technical precision.
- **Cards:** White backgrounds, 1px border (`#E5E7EB`), no shadows. Use a Teal header strip for product categories.
- **Chips/Status Labels:** Use a monospaced font. For manufacturing statuses (e.g., "In Production", "Shipped"), use low-saturation background tints with high-saturation text.
- **Data Tables:** Dense layout with alternating row stripes (`#F9FAFB`). Vertical borders are omitted; only horizontal dividers are used to emphasize row scanning.
- **Technical Specs List:** Use a "key-value" pair layout where the key is in JetBrains Mono (Grey 600) and the value is Inter Bold (Grey 900).