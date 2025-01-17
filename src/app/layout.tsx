import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReadHub - AI驱动的信息聚合平台',
  description: '使用AI技术，智能整合RSS、公众号和Newsletter，让信息获取更高效',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white">
          {children}
        </div>
      </body>
    </html>
  )
}