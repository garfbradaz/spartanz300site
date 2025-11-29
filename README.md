# Spartanz 300 - Gaming Clan Website

[![Static Site](https://img.shields.io/badge/type-static%20site-blue)](https://github.com/garfbradaz/spartanz300site)
[![Bootstrap 5](https://img.shields.io/badge/bootstrap-5.3-purple)](https://getbootstrap.com/)

A static website for the Spartanz 300 gaming clan, built with HTML, CSS, and vanilla JavaScript.

## Overview

This is a responsive, modern website for the Spartanz 300 gaming community. The site features:

- 🎮 Clan introduction and history
- 👥 Member profiles and roster
- 📱 Fully responsive design
- ⚡ Fast loading with CDN resources
- 🎨 Custom gaming-themed styling

## Project Structure

```
spartanz300site/
├── docs/                              # Documentation
│   └── technology-recommendations.md  # Tech stack decisions
├── src/                               # Website source files
│   ├── index.html                     # Main landing page
│   ├── css/
│   │   └── styles.css                 # Custom styles
│   ├── js/
│   │   └── main.js                    # JavaScript functionality
│   └── images/                        # Image assets
├── .github/
│   └── copilot-instructions.md        # GitHub Copilot instructions
├── .gitignore
└── README.md
```

## Technology Stack

| Category | Technology |
|----------|------------|
| Markup | HTML5 |
| Styling | CSS3 + Bootstrap 5 (CDN) |
| JavaScript | Vanilla ES6+ |
| Icons | Font Awesome (CDN) |
| Web Server | Nginx (production) |
| Hosting | Digital Ocean |

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code with Live Server extension (recommended for development)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/garfbradaz/spartanz300site.git
   cd spartanz300site
   ```

2. Open the project in VS Code:
   ```bash
   code .
   ```

3. Start the Live Server extension or open `src/index.html` directly in your browser.

### Directory Structure

- `src/` - Contains all website source files
- `docs/` - Project documentation and technical decisions
- `.github/` - GitHub-specific files including Copilot instructions

## Development

### Making Changes

1. Edit files in the `src/` directory
2. Test locally using Live Server or a simple HTTP server
3. Commit and push changes

### Adding New Pages

1. Copy `src/index.html` as a template
2. Update the page content and title
3. Add navigation links to all pages
4. Create corresponding CSS/JS if needed

### Style Guide

- Use semantic HTML5 elements
- Follow the existing CSS variable naming conventions
- Keep JavaScript modular and well-documented
- Optimize images before adding to the repository

## Deployment

The site is designed to be deployed on Digital Ocean with Nginx. See `docs/technology-recommendations.md` for detailed deployment instructions.

### Quick Deploy

1. Copy contents of `src/` to your web server's document root
2. Configure Nginx to serve the static files
3. Set up SSL with Let's Encrypt

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private to the Spartanz 300 gaming clan.

## Contact

- Discord: [Join our server](#)
- Twitter: [@spartanz300](#)

---

Made with ⚔️ by the Spartanz 300 community
