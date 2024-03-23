import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://hamil-dimapanat.com"),

	title: "Hamil Dimapanat",
	authors: {
		name: "Hamil Dimapanat",
	},

	description:
		"New York-Based Fullstack Developer with a passion for creating and continous learning.",
	openGraph: {
		title: "Hamil Dimapanat",
		description:
			"New York-Based Fullstack Developer with a passion for creating and continous learning.",
		url: "https://hamil-dimapanat.com/",
		siteName: "Hamil Dimapanat",
		images: "/og.png",
		type: "website",
	},
	keywords: ["hamil", "hamil dimapanat", "dimapanat"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
		<GoogleAnalytics gaId="G-R3SRH3J9Z5"/>
      </body>
    </html>
  );
}
