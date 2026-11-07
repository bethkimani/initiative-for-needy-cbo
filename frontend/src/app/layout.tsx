import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description:
    'Initiative for the Needy is a registered Community-Based Charity Organization (CBO) empowering orphans, vulnerable children, youth, widows, and older persons across Kiambu County, Kenya.',
  keywords: [
    'Charity Kenya',
    'Community-Based Organization',
    'CBO Kenya',
    'Initiative for the Needy',
    'Thika Charity',
    'Kiambu Non-Profit',
    'Orphan Support Kenya',
    'Youth Vocational Training',
    'Elderly Care Kiambu',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteUrl,
    siteName: site.name,
    title: site.name,
    description: site.mission,
    images: [
      {
        url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.mission,
    images: [`${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['NonprofitOrganization', 'NGO'],
  '@id': `${siteUrl}/#organization`,
  name: site.name,
  legalName: 'Initiative for the Needy Community-Based Organization',
  alternateName: [site.shortName, 'Initiative for the Needy CBO'],
  url: siteUrl,
  logo: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
  description:
    'A registered Community-Based Charity Organization (CBO) empowering orphans, vulnerable children, youth, widows, and older persons across Kiambu County, Kenya.',
  email: site.email,
  telephone: site.phone,
  foundingDate: '2020-01-16',
  nonprofitStatus: 'CommunityBasedOrganization',
  taxID: 'CBO/THK/W/022/2022/1151',
  identifier: 'CBO/THK/W/022/2022/1151',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Kiambu County, Kenya',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kiganjo-Main Road, Corner 3, Kwa Kamande Stage',
    addressLocality: 'Thika',
    addressRegion: 'Kiambu County',
    postalCode: '01000',
    addressCountry: 'KE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: site.phone,
    contactType: 'Community Assistance & Inquiries',
    areaServed: 'KE',
    availableLanguage: ['English', 'Swahili'],
  },
  knowsAbout: [
    'Charity and Relief Initiatives',
    'Community-Based Organization (CBO)',
    'Orphan and Vulnerable Children Support',
    'Youth Vocational Education and Skills',
    'Elderly Care and Social Welfare',
    'Food Security Relief in Informal Settlements',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
