# ⚡ Quick Start Guide

## 🚀 5-Minute Setup

### 1. **Clone & Install**
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd upwork06

# Install dependencies
npm install
```

### 2. **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - Done! 🎉

## 📁 Project Overview

```
app/
├── (dashboard)/          # 🏠 Main application pages
│   ├── page.tsx         # Dashboard with stats & analytics
│   ├── assistant/       # 🤖 AI chat interface
│   ├── properties/      # 🏘️ Property listings
│   ├── search/          # 🔍 MLS search
│   ├── clients/         # 👥 Client management
│   ├── analytics/       # 📊 Reports & charts
│   ├── calendar/        # 📅 Appointments
│   ├── documents/       # 📄 File management
│   └── settings/        # ⚙️ User settings
```

## 🎨 Customization

### Change Theme Colors
Edit `app/globals.css`:
```css
:root {
  --primary: oklch(0.71 0.18 245); /* Azure blue */
  /* Change to your brand colors */
}
```

### Modify Sidebar Navigation
Edit `components/app-sidebar.tsx` - Update the `navigation` array

### Add New Pages
```bash
# Create new route
mkdir app/(dashboard)/your-page
echo "export default function YourPage() { return <div>Your Page</div> }" > app/(dashboard)/your-page/page.tsx
```

## 📦 Key Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Check code quality
```

## 🎯 Next Steps

1. ✅ Explore the dashboard
2. ✅ Try the AI assistant
3. ✅ Browse property listings
4. ✅ Toggle dark mode (button in header)
5. ✅ Check out analytics page
6. 🚀 Deploy to Vercel (see [DEPLOYMENT.md](DEPLOYMENT.md))

## 🆘 Common Issues

### Port Already in Use
```bash
# Use different port
PORT=3001 npm run dev
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 💡 Pro Tips

- 🌙 **Dark Mode**: Click the moon/sun icon in the header
- 📱 **Mobile View**: Resize browser or use DevTools device mode
- 🎨 **Components**: All UI components in `components/ui/`
- 🔧 **Config**: Tailwind config in `app/globals.css`

## 📖 Documentation

- 📋 Full deployment guide: [DEPLOYMENT.md](DEPLOYMENT.md)
- 📝 Complete README: [README.md](README.md)
- 📚 Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- 🎨 shadcn/ui docs: [ui.shadcn.com](https://ui.shadcn.com)

---

**Need Help?** Open an issue on GitHub!

