# Copilot Instructions for Spartanz 300 Website

## Project Overview

This is a static HTML/CSS/JavaScript website for the Spartanz 300 gaming clan. The site is designed to be simple, fast, and easily maintainable.

## Technology Stack

- **HTML5**: Semantic, accessible markup
- **CSS3**: Custom styles with Bootstrap 5 via CDN
- **JavaScript**: Vanilla ES6+ (no frameworks)
- **Icons**: Font Awesome via CDN
- **Hosting**: Digital Ocean with Nginx

## Project Structure

```
spartanz300site/
├── docs/                          # Documentation
│   └── technology-recommendations.md
├── src/                           # Source files
│   ├── index.html                 # Main landing page
│   ├── css/
│   │   └── styles.css             # Custom styles
│   ├── js/
│   │   └── main.js                # Custom JavaScript
│   └── images/                    # Image assets
├── .github/
│   └── copilot-instructions.md    # This file
├── .gitignore
└── README.md
```

## Coding Guidelines

### HTML

- Use semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`)
- Include proper meta tags for SEO and accessibility
- Maintain consistent indentation (4 spaces)
- Use Bootstrap 5 classes for layout and components
- Ensure all images have descriptive `alt` attributes

### CSS

- Use CSS custom properties (variables) for theming
- Follow BEM-like naming conventions for custom classes
- Mobile-first responsive design approach
- Keep specificity low; avoid `!important` except for utilities
- Group related styles with comments

### JavaScript

- Use vanilla JavaScript (ES6+)
- 'use strict' at the top of files
- Use `const` and `let` (never `var`)
- Document functions with JSDoc-style comments
- Handle errors gracefully
- Use event delegation where appropriate

## Design Guidelines

### Color Palette

- Primary (Gold): `#d4af37`
- Secondary (Dark Blue): `#1a1a2e`
- Dark Background: `#16213e`
- Accent (Red): `#e94560`
- Light Text: `#f1f1f1`

### Typography

- Use system fonts for performance
- Main font stack: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Headings should be bold and prominent
- Body text should be readable (16px base)

### Component Patterns

- Cards for member profiles
- Hero sections with gradient backgrounds
- Smooth scroll navigation
- Hover effects on interactive elements

## When Making Changes

1. **Adding new pages**: Copy `index.html` as a template, update content and navigation
2. **Adding new styles**: Add to `src/css/styles.css`, use CSS variables for theming
3. **Adding JavaScript**: Add to `src/js/main.js`, keep functions modular
4. **Adding images**: Place in `src/images/`, optimize for web (use WebP when possible)

## Testing

- Test in Chrome, Firefox, Safari, and Edge
- Verify mobile responsiveness
- Use browser dev tools to check accessibility
- Validate HTML using W3C validator

## Deployment

The site is deployed to Digital Ocean. Files in the `src/` directory are served by Nginx.

## Important Notes

- This is a static site - no server-side processing
- All external resources (Bootstrap, Font Awesome) are loaded via CDN
- Keep bundle size minimal for fast loading
- Prioritize accessibility and performance
