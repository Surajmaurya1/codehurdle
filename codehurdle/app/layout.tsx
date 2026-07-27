import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { BackgroundGrid } from "@/components/ui/background-grid";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false, // Only preload primary font
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

export const metadata: Metadata = {
  title: "CodeHurdle — The #1 Technical Interview Accelerator for Engineers",
  description:
    "Master production-grade system architecture, real-time voice AI mock interviews, and company-specific rubrics designed by principal engineers at Stripe, Vercel, and Linear.",
  keywords: [
    "Software Engineer Interviews",
    "Frontend Staff Engineer",
    "System Design Interview",
    "AI Mock Interview",
    "React 19 Practice",
    "Stripe Interview Prep",
    "Vercel Interview Prep",
  ],
  authors: [{ name: "CodeHurdle Engineering Team" }],
  openGraph: {
    title: "CodeHurdle — Become the Engineer Companies Want to Hire",
    description:
      "Practice. Build. Get Hired. Interactive AI voice mock interviews, algorithmic roadmaps, and recruiter-tested ATS resume diagnostics.",
    url: "https://codehurdle.app",
    siteName: "CodeHurdle",
    images: [
      {
        url: "https://codehurdle.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeHurdle Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeHurdle — Become the Engineer Companies Want to Hire",
    description:
      "Interactive technical interview preparation built for senior and staff engineers.",
    images: ["https://codehurdle.app/og-image.png"],
  },
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
  alternates: {
    canonical: "https://codehurdle.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans antialiased min-h-screen relative selection:bg-[#7B2DFF] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <BackgroundGrid />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
