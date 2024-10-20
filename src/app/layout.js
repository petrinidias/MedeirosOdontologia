import localFont from "next/font/local";
import "./globals.css";

const Inter = localFont({
  src: [
    {
      path: './fonts/inter/Inter-Light.ttf',
      weight: '400',
      style: 'light',
    },
    {
      path: './fonts/inter/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/inter/Inter-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/inter/Inter-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/inter/Inter-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
  ],
  variable: '--font-inter',  
});


export const metadata = {
  title: "Medeiros Odontologia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Inter.variable} font-Inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
