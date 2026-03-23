import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { fontSans, fontDisplay, fontMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://juanisaac.dev'),
  title: {
    default: "Juan Isaac - AI/Web3 Engineer | Secure Agentic Systems",
    template: "%s | Juan Isaac"
  },
  description: "Founder of createPersona.ai and StableShield. AI/Web3 engineer building secure agentic systems with ElizaOS, LangGraph, and Coinbase AgentKit. Smart contract security researcher.",
  keywords: [
    "Juan Isaac",
    "AI Engineer",
    "Web3 Developer",
    "createPersona.ai",
    "StableShield",
    "ElizaOS",
    "LangGraph",
    "Coinbase AgentKit",
    "x402",
    "ERC-8004",
    "Virtuals ACP",
    "MCP Server",
    "Coinbase Smart Wallet",
    "Sherlock",
    "Secure3",
    "Smart Contract Security",
    "AI Agents",
    "Blockchain Developer",
    "Solidity",
    "Next.js",
    "TypeScript",
    "Coinbase Ambassador",
    "Code4rena",
    "AllowMe.ai",
    "PromptQuest",
    "AI Agent Architecture",
    "Technical PM",
    "Security Auditing",
    "Foundry",
    "Web3 Integration",
    "Agentic Systems",
    "Payment Guardrails"
  ],
  authors: [
    {
      name: "Juan Isaac",
      url: "https://juanisaac.dev",
    },
  ],
  creator: "Juan Isaac",
  publisher: "Juan Isaac",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juanisaac.dev",
    title: "Juan Isaac - AI/Web3 Engineer | Secure Agentic Systems",
    description: "Founder of createPersona.ai and StableShield. Building secure AI agents that move money safely onchain. ElizaOS, LangGraph, Coinbase AgentKit, and Solidity expert.",
    siteName: "Juan Isaac Portfolio",
    images: [
      {
        url: "https://juanisaac.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Juan Isaac - AI/Web3 Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Isaac - AI/Web3 Engineer",
    description: "Building secure AI agents with ElizaOS, LangGraph, and Coinbase AgentKit. Smart contract security researcher.",
    creator: "@StableShieldAI",
    site: "@StableShieldAI",
    images: [{
      url: "https://juanisaac.dev/og-image.png",
      alt: "Juan Isaac Portfolio"
    }],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://juanisaac.dev",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://juanisaac.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Juan Isaac",
              "jobTitle": "AI/Web3 Engineer & Technical PM",
              "url": "https://juanisaac.dev",
              "image": "https://juanisaac.dev/profile.jpeg",
              "sameAs": [
                "https://github.com/JdejesusIsaac",
                "https://linkedin.com/in/juandisaac",
                "https://x.com/StableShieldAI"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "AllowMe.ai"
              },
              "knowsAbout": [
                "AI Agents",
                "ElizaOS",
                "LangGraph",
                "Coinbase AgentKit",
                "Smart Contract Security",
                "Solidity",
                "Web3 Development",
                "Blockchain",
                "Security Auditing",
                "Next.js",
                "TypeScript"
              ],
              "description": "Founder of createPersona.ai and StableShield. AI/Web3 engineer building secure agentic systems. Coinbase Developer Platform Ambassador. Smart contract security researcher at Code4rena and Secure3.",
              "foundingOf": [
                {
                  "@type": "Organization",
                  "name": "createPersona.ai",
                  "url": "https://createpersona.xyz"
                },
                {
                  "@type": "Organization", 
                  "name": "StableShield",
                  "url": "https://stableshield.work"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-zinc-900 selection:bg-zinc-900 selection:text-white dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}