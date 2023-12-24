// 1) FONTS
// CUSTOM Fonts website ki performance effect kar sakte hain Qyun ke font files ko fetch or load
// hone ki need hoti hai

// HOW NEXT JS Optimize fonts: Next js build banate time hee hamare font files download kar ke build
// bana deta hai or phir build banate waqt assets or images ke sath fonts bh host krdeta ha is se
// website load hone par additional requests nahi jatin

// USAGE : /app/ui/fonts.ts mein is tarah fonts define karte hain
// import { Inter } from 'next/font/google';
// export const inter = Inter({ subsets: ['latin'] });
// or phir layout.tsx me aese use kar lete file import kara kar body inter ke key 'className' as a
// class dedete hain
// /app/layout.tsx
{
  /* <html lang="en">
    <body className={`${inter.className} antialiased`}>{children}</body>
  </html>; */
}
// tailwind class which smooths out the font :  antialiased

// Agar humain or bh fonts use karne hain tw hum aese variable bana dakte hain ui/fonts.ts mein
// export const roboto_mona = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
//   weight: '400',
// });
// Or phir talwind config me extend kar sakte hain aese
// fontFamily: {
//     sans: ['var(--font-inter)'],
//     mono: ['var(--font-roboto-mono)'],
//   },
// or phir use kar sakte hain like : font-sans

// IMAGES
// Agar hum aese image use kareinge tw
/* <img
    src="/hero.png"
    alt="Screenshots of the dashboard project showing desktop version"
  />  */
