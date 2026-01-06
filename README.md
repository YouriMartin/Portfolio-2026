# Portfolio-2026

A Windows 95-styled portfolio website built with Next.js and TypeScript.

## 🎨 Features

- **Nostalgic Windows 95 UI**: Authentic retro desktop experience with draggable windows, taskbar, and desktop icons
- **Four Applications**:
  - 📄 **CV**: Professional resume and experience
  - 📚 **Library**: Collection of books and articles
  - ⚡ **Skills**: Technical competencies and expertise
  - 🔗 **Links**: Professional social media profiles (GitHub, LinkedIn)
- **Fully Type-Safe**: Built with TypeScript in strict mode
- **Secure**: Comprehensive security headers and CSP
- **Performant**: Static site generation with optimized Next.js configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YouriMartin/Portfolio-2026.git

# Navigate to the project directory
cd Portfolio-2026

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
Portfolio-2026/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main desktop page
│   ├── components/
│   │   ├── applications/      # Application components
│   │   │   ├── CVApp.tsx
│   │   │   ├── LibraryApp.tsx
│   │   │   ├── SkillsApp.tsx
│   │   │   └── LinksApp.tsx
│   │   └── ui/                # UI components
│   │       ├── Window.tsx
│   │       ├── Taskbar.tsx
│   │       └── DesktopIcon.tsx
│   ├── constants/             # Data and constants
│   │   └── data.ts
│   ├── styles/                # Global styles
│   │   └── globals.css
│   └── types/                 # TypeScript type definitions
│       └── index.ts
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## 🎯 Customization

To customize the portfolio with your own information:

1. **Update personal data**: Edit `src/constants/data.ts`
2. **Modify styles**: Edit CSS modules in component directories
3. **Add new applications**: Create new components in `src/components/applications/`

## 🔒 Security

This project implements multiple security measures:

- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- XSS Protection
- Referrer Policy
- Permissions Policy

## 📦 Technologies

- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **CSS Modules** - Scoped styling
- **ESLint** - Code quality and consistency

## 🌐 Deployment

The site can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static site and deploy the `out` directory:

```bash
npm run build
```

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Your Name

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!