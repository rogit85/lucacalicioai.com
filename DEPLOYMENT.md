# Deployment Guide for Football Betting Sites UK 2025

## 🚀 Quick Deployment to Vercel

### 1. Connect GitHub Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import from GitHub: `rogit85/lucacalicioai.com`
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### 2. Add Environment Variables
In Vercel Project Settings → Environment Variables, add:

```
POSTGRES_URL=your_vercel_postgres_connection_string
ADMIN_USER=chris
ADMIN_PASS=YourSecurePassword123!
```

### 3. Set Up Vercel Postgres Database
1. In your Vercel project, go to "Storage" tab
2. Create a new Postgres database
3. Copy the `POSTGRES_URL` connection string
4. Add it to your environment variables

### 4. Initialize Database
After deployment, run these commands once:
```bash
npm run db:setup
npm run db:seed
```

Or use the admin panel at `/admin` to reseed data.

## 🔧 Local Development Setup

1. Clone repository:
```bash
git clone https://github.com/rogit85/lucacalicioai.com.git
cd lucacalicioai.com
npm install
```

2. Create `.env.local`:
```
POSTGRES_URL="your_connection_string"
ADMIN_USER="admin"
ADMIN_PASS="password"
```

3. Setup database:
```bash
npm run db:setup
npm run db:seed
```

4. Start development:
```bash
npm run dev
```

## 📧 Contact Information
- **Owner**: Chris Rogers
- **Email**: chris@starsite.digital
- **Company**: Edge Ahead Media Limited

## 🔐 Admin Access
- **URL**: `/admin`
- **Authentication**: Basic Auth using `ADMIN_USER` and `ADMIN_PASS`
- **Features**: View and manage hero links and betting sites

## 📝 Legal Pages
- Terms & Conditions: `/terms`
- Privacy Policy: `/privacy`
- Cookie Policy: `/cookies`

All legal pages reference Edge Ahead Media Limited and chris@starsite.digital for contact.

## 🎨 Features
- ✅ Responsive design with animated background
- ✅ 4 prominent hero cards with external links
- ✅ Filterable betting sites listing
- ✅ Admin CMS with Basic Auth protection
- ✅ Legal compliance pages
- ✅ Database-backed with fallback to static data
- ✅ Modern white theme with colorful animations

## 🚨 Important Notes
- All external links open in new tabs
- Site works without database (static fallback)
- Admin area is password protected
- Optimized for mobile and desktop
- Built with Next.js 15 + TypeScript + Tailwind CSS
