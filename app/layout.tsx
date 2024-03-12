import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Crafting Digital Excellence: Web Developer Portfolio Showcase",
  description: `Welcome to my digital realm, where innovation meets
  functionality and creativity sparks life into pixels. As a passionate web
  developer, I specialize in crafting immersive digital experiences that
  resonate with users and drive results. Take a journey through my portfolio,
  where each project reflects my dedication to excellence and my commitment to
  pushing the boundaries of web development. Explore a diverse array of projects
  ranging from responsive websites to dynamic web applications, each
  meticulously crafted to meet the unique needs of clients across various
  industries. From sleek and minimalist designs to robust e-commerce platforms,
  my portfolio showcases the versatility and depth of my expertise. Driven by a
  relentless pursuit of perfection, I leverage the latest technologies and
  frameworks to deliver cutting-edge solutions that exceed expectations. With a
  keen eye for design, a strong grasp of user experience principles, and a
  passion for clean, efficient code, I bring ideas to life in the digital realm
  with precision and flair. Whether you're seeking a partner for your next
  digital venture or simply browsing for inspiration, I invite you to explore my
  portfolio and discover the possibilities that await. Let's collaborate to turn
  your vision into reality and create something truly extraordinary together.
  Welcome to the future of web development.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta property="og:title" content="Crafting Digital Excellence: Web Developer Portfolio Showcase" />
        <meta property="og:description" content="A web developer from India. Passionate about web apps, I love turning ideas into digital reality with sleek designs and powerful functionality." />
        <meta property="og:image" content="/ogmetaimage.jpg" />
        <meta property="og:url" content="https://akashsiddamshetty.in" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags (optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crafting Digital Excellence: Web Developer Portfolio Showcase" />
        <meta name="twitter:description" content="A web developer from India. Passionate about web apps, I love turning ideas into digital reality with sleek designs and powerful functionality." />
        <meta name="twitter:image" content="/ogmetaimage.jpg" />


        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative ">
        {children}
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
