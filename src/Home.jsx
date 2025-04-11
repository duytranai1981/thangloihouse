import React from "react";

const Header = () => <header style={{ padding: '1rem', background: '#fff', boxShadow: '0 2px 4px #ccc' }}>Kiệt Design - Header Demo</header>;
const HeroSection = () => <section id="hero" style={{ height: '200px', background: '#eee' }} />;
const Services = () => <section id="services" style={{ height: '200px', background: '#f0f0f0' }}>Dịch vụ</section>;
const Projects = () => <section id="projects" style={{ height: '200px', background: '#f9f9f9' }}>Dự án</section>;
const Pricing = () => <section id="pricing" style={{ height: '200px', background: '#eee' }}>Báo giá</section>;
const News = () => <section id="news" style={{ height: '200px', background: '#f0f0f0' }}>Tin tức</section>;
const Footer = () => <footer id="contact" style={{ padding: '1rem', background: '#333', color: '#fff' }}>Footer</footer>;

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Services />
      <Projects />
      <Pricing />
      <News />
      <Footer />
    </main>
  );
}