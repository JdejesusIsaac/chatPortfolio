# Portfolio Setup Guide

## 🎯 Quick Setup Checklist

### 1. Add Your Profile Photo
Replace the profile picture at:
```
/public/profile.jpeg
```
- **Recommended size:** 400x400px or larger
- **Format:** JPEG or PNG
- **Note:** The image should be square for best results

### 2. Set Up Google Gemini API for AI Chatbot
1. Visit https://aistudio.google.com/
2. Sign in and create an API key
3. Open `.env.local` and add your key:
```
GOOGLE_GENERATIVE_AI_API_KEY=your_actual_api_key_here
```

### 3. Add Project Screenshots
Add images for your three main projects in `/public/projects/`:
- `allowme-cover.png` (1200x800px recommended)
- `promptquest-cover.png` (1200x800px recommended)
- `windsurf-cover.png` (1200x800px recommended)

### 4. Create OG Image for Social Sharing
Add a social media preview image:
```
/public/og-image.png
```
- **Recommended size:** 1200x630px
- **Content:** Your name + title + key visual

### 5. Set Up Calendly (Optional)
To integrate meeting scheduling:
1. Create a Calendly account at https://calendly.com
2. Get your inline embed code
3. Replace the placeholder in `/src/app/contact/page.tsx` (line ~100)

### 6. Update Social Links
Edit `portfolio-config.json` to update your actual social profiles:
```json
"social": {
  "linkedin": "https://linkedin.com/in/yourusername",
  "github": "https://github.com/yourusername",
  "twitter": "https://x.com/yourusername",
  "securityProfile": "https://code4rena.com/@yourusername"
}
```

## 🚀 Running the Portfolio

### Development
```bash
pnpm dev
```
Opens at http://localhost:3000 (or 3001/3002 if port is busy)

### Production Build
```bash
pnpm build
pnpm start
```

## 📄 New Pages Created

Your portfolio now includes:

- **Home** (`/`) - Main portfolio with chatbot
- **Project Details** (`/projects/[slug]`) - Individual project case studies
  - `/projects/allowme` - AllowMe.ai detailed view
  - `/projects/promptquest` - PromptQuest detailed view
  - `/projects/windsurf-competition` - Windsurf competition write-up
- **Contact** (`/contact`) - Contact form and scheduler
- **Privacy Policy** (`/legal/privacy`) - Privacy policy with education safety note
- **Terms of Service** (`/legal/terms`) - Terms with AI chatbot usage terms

## 🤖 AI Chatbot ("Digital Juan")

The chatbot is now configured as "Digital Juan" and will:
- Only answer portfolio-related questions
- Politely decline off-topic requests
- Use your project data from `portfolio-config.json`

## 🔒 Legal & Safety

The legal pages include:
- Privacy Policy with COPPA/FERPA notes for educational projects
- Terms of Service with AI chatbot usage guidelines
- Child safety disclaimer for AllowMe.ai
- Data security and third-party service disclosures

## 📝 Customization

All content is driven by `portfolio-config.json`. To update:
1. Edit the JSON file
2. The site will automatically rebuild
3. No code changes needed!

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repo on Vercel
3. Add environment variable: `GOOGLE_GENERATIVE_AI_API_KEY`
4. Deploy!

### Other Platforms
The app is a standard Next.js 15 application and can be deployed to:
- Netlify
- Railway
- AWS
- Any platform supporting Node.js

## 📧 Support

For questions: juandejesusisaac@gmail.com

