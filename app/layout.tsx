import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { ThemeSwitch } from './footer'
import { Analytics } from "@vercel/analytics/next"


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://toddcaron.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Todd Caron - Personal Website',
    template: '%s | Todd Caron - Personal Website',
  },
  description:  'Todd Caron is a software engineering manager passionate about building high-performing teams and shipping products that matter.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-white tracking-tight antialiased dark:bg-zinc-950"
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-sans">
            <div className="relative mx-auto w-full max-w-screen-lg flex-1 px-4 pt-20">
              <div className='py-2 justify-end flex'>
               <ThemeSwitch/>
              </div>
              <Header />
              {children}
              <Analytics />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
