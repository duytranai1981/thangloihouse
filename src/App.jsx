import React from "react";

const Menu = () => {
  const sections = ["services", "projects", "pricing", "news", "contact"];
  const labels = {
    services: "Dịch vụ",
    projects: "Dự án",
    pricing: "Báo giá",
    news: "Tin tức",
    contact: "Liên hệ"
  };
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "white",
      padding: "1rem",
      boxShadow: "0 2px 5px #ccc",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "20px", color: "#15803d" }}>
        Kiệt Design
      </div>
      <nav>
        {sections.map(id => (
          <a key={id} href={`#${id}`} style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}>
            {labels[id]}
          </a>
        ))}
      </nav>
    </header>
  );
};

const Section = ({ id, title, color }) => (
  <section id={id} style={{ background: color, minHeight: "200px" }}>
    <h2 style={{ color: "#15803d" }}>{title}</h2>
    <p>Nội dung đang được cập nhật...</p>
  </section>
);

export default function App() {
  return (
    <main>
      <Menu />
      <Section id="services" title="Dịch vụ của chúng tôi" color="#f1f5f9" />
      <Section id="projects" title="Dự án tiêu biểu" color="#fff" />
      <Section id="pricing" title="Bảng báo giá" color="#f1f5f9" />
      <Section id="news" title="Tin tức & Sự kiện" color="#fff" />
      <Section id="contact" title="Liên hệ" color="#f1f5f9" />
    </main>
  );
}