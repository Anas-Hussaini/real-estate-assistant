# EstateAI - Real Estate AI Assistant

A modern, industry-standard AI-powered assistant for real estate agents. Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

![EstateAI Dashboard](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🤖 AI Assistant
- **Intelligent Chat Interface**: Natural language processing for client queries
- **Property Recommendations**: AI-powered property matching based on client preferences
- **Market Insights**: Real-time market analytics and pricing recommendations
- **Smart Suggestions**: Contextual property suggestions with match scores

### 🏠 Property Management
- **Comprehensive Listings**: Manage all your property listings in one place
- **Advanced Search & Filters**: Search by location, price, bedrooms, property type
- **Property Details**: Detailed property information with images and specifications
- **Status Tracking**: Track Active, Pending, and Sold properties

### 🔍 MLS Integration
- **MLS Search**: Direct access to Multiple Listing Service data
- **Trending Properties**: Identify hot properties in the market
- **Market Statistics**: Average days on market, median prices, YoY growth
- **Listing Details**: Complete MLS information with agent contacts

### 👥 Client Management
- **Client Database**: Comprehensive client information and preferences
- **Budget Tracking**: Track client budgets and requirements
- **Communication History**: Last contact timestamps and interaction logs
- **Status Management**: Active, Pending, and Closed client tracking

### 📊 Analytics Dashboard
- **Revenue Analytics**: Monthly revenue trends and performance metrics
- **Sales Volume**: Track number of properties sold over time
- **Property Type Analysis**: Revenue distribution by property types
- **Neighborhood Insights**: Performance metrics by location
- **Market Trends**: Average price trends and market indicators

### 🎨 Modern UI/UX
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode Ready**: Built-in dark mode support
- **Beautiful Components**: Industry-standard shadcn/ui components
- **Smooth Animations**: Polished transitions and interactions
- **Accessible**: WCAG compliant with proper ARIA labels

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd upwork06
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
upwork06/
├── app/
│   ├── (dashboard)/          # Dashboard routes
│   │   ├── page.tsx          # Main dashboard
│   │   ├── assistant/        # AI chat interface
│   │   ├── properties/       # Property listings
│   │   ├── search/           # MLS search
│   │   ├── clients/          # Client management
│   │   ├── analytics/        # Analytics & reports
│   │   └── layout.tsx        # Dashboard layout
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── page.tsx              # Landing page
├── components/
│   ├── app-sidebar.tsx       # Main navigation sidebar
│   └── ui/                   # shadcn/ui components
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
└── public/                   # Static assets
```

## 🎨 Tech Stack

- **Framework**: [Next.js 16.0.0](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist Sans & Mono](https://vercel.com/font)
- **Deployment**: [Vercel](https://vercel.com)

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

## 🎯 Key Features Explained

### AI Assistant
The AI Assistant uses simulated AI responses to demonstrate how a real estate agent could interact with an AI to:
- Answer client queries about properties
- Get instant property recommendations from MLS data
- Receive market insights and pricing analysis
- Generate property descriptions and marketing content

### Dashboard Analytics
Comprehensive analytics dashboard showing:
- Revenue trends over time
- Sales volume metrics
- Property type distribution
- Neighborhood performance
- Market trends and forecasts

### Property Management
Complete property management system with:
- Grid and list views
- Advanced filtering and search
- Property detail modals
- Status tracking (Active/Pending/Sold)
- Featured property highlighting

## 🔧 Configuration

### Tailwind CSS & Theme
The project uses Tailwind CSS v4 with a custom **Azure Radiance** blue theme defined in `app/globals.css`. The theme includes:
- 🎨 **Azure Radiance Color Palette**: Modern blue gradient theme (#21b9ff, #4bd4ff, #037ae1)
- 🌓 **Dark Mode Support**: Fully functional light/dark theme toggle
- 📱 **Responsive Breakpoints**: Mobile-first responsive design
- ✨ **Custom Animations**: Gradient shifts, pulse effects, hover glows, shimmer effects
- 💎 **Glass Morphism**: Premium glass effects with backdrop blur
- 🔆 **Premium Shadows**: Custom blue-tinted shadow utilities

### shadcn/ui Components
All UI components are from shadcn/ui and can be customized by modifying:
- `components.json` - Component configuration
- `app/globals.css` - Theme colors and variables
- Individual component files in `components/ui/`

## 🚀 Deployment

### Vercel via GitHub (Recommended)

This project is fully configured for seamless deployment on Vercel via GitHub:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)

**Quick Setup:**
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel auto-detects Next.js and deploys! 🎉

📖 **Detailed Instructions**: See [DEPLOYMENT.md](DEPLOYMENT.md) for complete step-by-step guide

**Configuration Files Included:**
- ✅ `vercel.json` - Vercel configuration with optimized settings
- ✅ `.vercelignore` - Excludes unnecessary files
- ✅ `.github/workflows/` - GitHub Actions for automated deployments
- ✅ Security headers configured

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway  
- AWS Amplify
- Digital Ocean

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)
- 🖥️ Large screens (1536px+)

## 🎨 Design Principles

- **Clean & Modern**: Minimalist design focused on content
- **Professional**: Industry-standard UI patterns
- **Intuitive**: Easy navigation and clear information hierarchy
- **Fast**: Optimized performance with Next.js 14
- **Accessible**: WCAG 2.1 AA compliant

## 📄 License

This project is built as a portfolio piece. Feel free to use it as reference or inspiration for your own projects.

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome!

## 📧 Contact

For questions or feedback about this project, please reach out through GitHub issues.

---

**Built with ❤️ using Next.js and shadcn/ui**
