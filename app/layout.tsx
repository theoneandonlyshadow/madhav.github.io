import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Madhav Nair',
	description:
		'Associate SDE at Aimver',
	keywords: [
		'Web Developer',
		'Backend Developer',
		'React Developer',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'MaxTac',
		'Responsive Design',
		'Web Accessibility',
		'Performance Optimization',
		'Modern Web Development',
		'Progressive Web Apps',
		'Madhav Nair',
		'Plentra Technologies',
		'Aimver Technologies',
		'Madhav Aimver',
		'Madhav MaxTac',
		'Madhav Nair MaxTac'
	],
	authors: [{ name: 'Madhav Nair' }],
	creator: 'Madhav Nair',
	openGraph: {
		title: 'Madhav Nair - Fullstack Developer',
		description: 'Associate SDE at Aimver',
		url: 'https://maxtac.tech',
		siteName: 'Madhav Nair - Fullstack Developer',
		images: [
			{
				url: './madhav.ico',
				width: 1200,
				height: 630,
				alt: 'Madhav Nair - Fullstack Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
