import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata
export const metadata = {
  title: "Yeti Racing",
  description: "Yeti Racing is the official Formula Student team of the School of Engineering at Cochin University of Science and Technology (CUSAT).",
  icons: {
    icon: "/assets/logo1.png", // Path to favicon/logo
  },
  openGraph: {
    title: "Yeti Racing",
    description: "Yeti Racing is the official Formula Student team of the School of Engineering at Cochin University of Science and Technology (CUSAT).",
    url: "https://yetiracing.cusat.co.in/",
    siteName: "Yeti Racing",
    images: [
      {
        url: "https://yetiracing.cusat.co.in/assets/logo2.webp", // Ensure this image is accessible
        width: 1200,
        height: 630,
        alt: "Yeti Racing Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeti Racing",
    description: "Yeti Racing is the official Formula Student team of the School of Engineering at Cochin University of Science and Technology (CUSAT).",
    images: ["https://yetiracing.cusat.co.in/assets/logo2.webp"], // Twitter preview image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/assets/logo2.webp" />

        {/* Meta Title & Description */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
