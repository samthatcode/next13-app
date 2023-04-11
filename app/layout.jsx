import { Poppins } from 'next/font/google';
import Header from './components/Header'
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "samthatcode",
  description: "Web development projects & courses",
  keywords:
    "web development, web design, javascript, react, node, angular, vue, html, css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}

{
  /* 
// A custom layout for LogIn or Register Page box
import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <h1>This is the About Layout</h1>
      {children}
    </div>
  );
};

export default AboutLayout;

*/
}
