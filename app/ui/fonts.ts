import { Inter, Lusitana, Roboto_Mono } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: '400',
});

export const roboto_mona = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: '400',
});
