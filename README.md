# Chump Fun Countdown

A fun, colorful countdown timer built with Next.js that matches the design from your image.

## Features

- 🐒 Animated monkey with juggling bananas
- 🌈 Colorful "LAUNCH COUNTDOWN!" text with rainbow letters
- ⏰ Live countdown timer showing days, hours, and minutes
- 📱 Responsive design that works on all devices
- 🚀 Ready for deployment

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

To set your own countdown target date, edit the `targetDate` in `pages/index.tsx`:

```javascript
const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 30) // Change 30 to your desired days
```

## Deployment

This project is configured for static export and can be deployed to:

- **Vercel**: Just connect your GitHub repo
- **Netlify**: Drag and drop the `out` folder after running `npm run build`
- **GitHub Pages**: Push the `out` folder to a `gh-pages` branch
- **Any static hosting**: The `out` folder contains all static files

### Build for production:
```bash
npm run build
```

The built files will be in the `out` folder.

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS3 with animations
