import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YO-KO（小野 陽広）— 大学生個人開発者',
  description: '公立千歳科学技術大学 3年生。3ヶ月で28本のWebアプリを製作。TypeScript / Next.js / Firebase を軸に、アイデアを最速でプロダクトに変える。',
  metadataBase: new URL('https://yoko-lp.vercel.app'),
  openGraph: {
    title: 'YO-KO（小野 陽広）— 大学生個人開発者',
    description: '3ヶ月で28本のWebアプリを製作した大学3年生。SaaSを作り続けています。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YO-KO（小野 陽広）',
    description: '3ヶ月で28本のWebアプリを作った大学3年生。',
    creator: '@Yoko_ai_dev',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#05080f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
