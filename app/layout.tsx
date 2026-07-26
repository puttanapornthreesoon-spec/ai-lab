import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Digital GiGz AI Lab | AI for Healthcare Professionals",
    template: "%s | Digital GiGz AI Lab",
  },
  description:
    "Practical AI education, tools, prompts, and evidence-informed resources for nurses, healthcare professionals, researchers, and students.",
  applicationName: "Digital GiGz AI Lab",
  keywords: ["healthcare AI", "nursing AI", "AI education", "prompt library", "nursing research"],
  authors: [{ name: "Digital GiGz AI Lab" }],
  creator: "Digital GiGz AI Lab",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Digital GiGz AI Lab",
    title: "Digital GiGz AI Lab",
    description: "Empowering healthcare professionals with artificial intelligence.",
    images: [
      {
        url: `${siteConfig.url}/og-card.png`,
        width: 1200,
        height: 630,
        alt: "Digital GiGz AI Lab — AI confidence for healthcare professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital GiGz AI Lab",
    description: "Empowering healthcare professionals with artificial intelligence.",
    images: [`${siteConfig.url}/og-card.png`],
  },
  manifest: `${basePath}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    title: "GiGz AI Lab",
    statusBarStyle: "default",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#090b12" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Digital GiGz AI Lab",
  description:
    "AI education and practical resources for healthcare professionals, researchers, and students.",
  url: siteConfig.url,
  knowsAbout: [
    "Artificial intelligence",
    "Nursing education",
    "Healthcare research",
    "Responsible AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{const t=localStorage.getItem("dg-theme");const d=t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=d?"dark":"light"}catch(e){}`}
        </Script>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
