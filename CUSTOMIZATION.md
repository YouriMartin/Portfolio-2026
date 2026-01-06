# Customization Guide

This guide will help you personalize the Windows 95-styled portfolio with your own information.

## 📝 Personal Data

All personal data is centralized in `src/constants/data.ts`. Update the following sections:

### CV Data

```typescript
export const CV_DATA: CVData = {
  name: 'Your Name',              // Your full name
  title: 'Your Job Title',        // Your professional title
  contact: {
    email: 'your@email.com',      // Your email
    phone: '+1234567890',         // Optional: Your phone
    location: 'Your City, Country'
  },
  summary: 'Your professional summary...',
  experience: [
    // Add your work experiences
  ],
  education: [
    // Add your education
  ],
  skills: ['Skill1', 'Skill2', ...]
};
```

### Library Data

```typescript
export const LIBRARY_DATA: BookItem[] = [
  {
    id: '1',
    title: 'Book Title',
    author: 'Author Name',
    type: 'book',  // or 'article'
    year: 2024,
    description: 'Book description',
    tags: ['tag1', 'tag2']
  }
];
```

### Skills Data

```typescript
export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Category Name',
    skills: [
      {
        name: 'Skill Name',
        level: 'expert', // 'beginner' | 'intermediate' | 'advanced' | 'expert'
        description: 'Brief description'
      }
    ]
  }
];
```

### Social Links

```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/yourusername',
    username: 'yourusername'
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/yourprofile',
    username: 'yourprofile'
  }
];
```

## 🎨 Styling

### Colors

Edit `src/styles/globals.css` to change the Windows 95 color scheme:

```css
:root {
  --win95-gray: #c0c0c0;        /* Window background */
  --win95-blue: #000080;         /* Title bar, headers */
  --win95-desktop: #008080;      /* Desktop background */
  /* ... more colors */
}
```

### Fonts

The default font is `"MS Sans Serif"`. To change it:

```css
:root {
  --font-system: "Your Font", sans-serif;
}
```

## 🪟 Window Settings

Edit `src/app/page.tsx` to modify default window positions and sizes:

```typescript
const newWindow: WindowState = {
  // ...
  position: { x: 100, y: 100 },    // Initial position
  size: { width: 700, height: 500 }, // Initial size
  // ...
};
```

## 🖼️ Desktop Icons

Edit the `DESKTOP_ICONS` array in `src/app/page.tsx`:

```typescript
const DESKTOP_ICONS = [
  { 
    id: 'myapp', 
    label: 'My App', 
    icon: '🎯',           // Emoji icon
    component: 'myapp'    // Component identifier
  }
];
```

## ➕ Adding New Applications

1. **Create Component**: Add a new file in `src/components/applications/`:

```typescript
// src/components/applications/MyApp.tsx
'use client';

import styles from './MyApp.module.css';

export default function MyApp() {
  return (
    <div className={styles.container}>
      <h2>My Custom Application</h2>
      {/* Your content */}
    </div>
  );
}
```

2. **Create Styles**: Add corresponding CSS module:

```css
/* src/components/applications/MyApp.module.css */
.container {
  padding: 16px;
  font-family: var(--font-system);
}
```

3. **Register in Desktop**: Update `src/app/page.tsx`:

```typescript
// Import your component
import MyApp from '@/components/applications/MyApp';

// Add to DESKTOP_ICONS
const DESKTOP_ICONS = [
  // ... existing icons
  { id: 'myapp', label: 'My App', icon: '🎯', component: 'myapp' }
];

// Add to renderWindowContent function
const renderWindowContent = (component: string) => {
  switch (component) {
    // ... existing cases
    case 'myapp':
      return <MyApp />;
    default:
      return <div>Unknown application</div>;
  }
};
```

## 📄 Metadata

Update site metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Portfolio Title',
  description: 'Your description',
  keywords: ['your', 'keywords'],
  authors: [{ name: 'Your Name' }]
};

export const viewport: Viewport = {
  themeColor: '#008080'  // Desktop color
};
```

## 🔧 Configuration

### Next.js Config

Edit `next.config.js` for advanced configuration:

- Security headers
- Build optimizations
- Image domains
- Redirects

### TypeScript Config

Edit `tsconfig.json` for TypeScript settings:

- Strict mode options
- Path aliases
- Compiler options

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build static files:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Tips

1. **Test Locally**: Always run `npm run dev` to preview changes
2. **Type Safety**: Use TypeScript types for all data structures
3. **Performance**: Keep components small and focused
4. **Security**: Never commit sensitive data to the repository
5. **Accessibility**: Add ARIA labels for better accessibility

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type Errors

```bash
# Run type checking
npm run type-check
```

### Linting Issues

```bash
# Fix auto-fixable issues
npm run lint -- --fix
```

## 📧 Need Help?

Refer to the main README.md or consult the Next.js documentation.
