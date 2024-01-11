import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ReactNode} from "react";
import {Providers} from "./providers";

const inter = Inter({subsets: ['cyrillic']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
