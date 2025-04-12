import React from "react";

const Hero = () => (
  <section style={{
    backgroundImage: "url('/banner-kietdesign.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: "0 2px 5px rgba(0,0,0,0.5)"
  }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
      Xây tổ ấm cùng Kiệt Design
    </h1>
  </section>
);

const About = () => (
  <section style={{ padding: "2rem" }}>
    <h2 style={{ textAlign: "center" }}>Giới thiệu</h2>
    <p style={{ maxWidth: "720px", margin: "auto", textAlign: "center" }}>
      Kiệt Design chuyên tư vấn – thiết kế – thi công nhà ở hiện đại, tối ưu công năng và chi phí. Mỗi công trình là một dấu ấn tâm huyết.
    </p>
  </section>
);

const Projects = () => (
  <section style={{ padding: "2rem" }}>
    <h2 style={{ textAlign: "center" }}>Dự án tiêu biểu</h2>
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
      <img src="/project1.jpg" width="300" />
      <img src="/project1.jpg" width="300" />
      <img src="/project1.jpg" width="300" />
    </div>
  </section>
);

const Video = () => (
  <section style={{ padding: "2rem" }}>
    <h2 style={{ textAlign: "center" }}>Video công trình</h2>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1La4QzGeaaQ" title="Video công trình"
        frameBorder="0" allowFullScreen></iframe>
    </div>
  </section>
);

const News = () => (
  <section style={{ padding: "2rem" }}>
    <h2 style={{ textAlign: "center" }}>Tin tức mới</h2>
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
      <img src="/news1.jpg" width="300" />
      <img src="/news2.jpg" width="300" />
      <img src="/news3.jpg" width="300" />
    </div>
  </section>
);

const Guide = () => (
  <section style={{ padding: "2rem" }}>
    <h2 style={{ textAlign: "center" }}>Cẩm nang xây nhà</h2>
    <ul style={{ maxWidth: "720px", margin: "auto" }}>
      <li>📌 5 bước chuẩn bị xây nhà</li>
      <li>📌 Lưu ý pháp lý khi xin giấy phép</li>
      <li>📌 Dự toán chi phí xây dựng</li>
      <li>📌 Các lỗi thường gặp & cách tránh</li>
    </ul>
  </section>
);

const AppSection = () => (
  <section style={{ padding: "2rem", textAlign: "center" }}>
    <h2>Ứng dụng Kiệt Design</h2>
    <img src="/app-preview.jpg" width="240" /><br />
    <button className="button">Tải App</button>
  </section>
);

const ContactForm = () => (
  <section style={{ padding: "2rem" }}>
    <h2 style={{ textAlign: "center" }}>Liên hệ tư vấn</h2>
    <form style={{ maxWidth: "480px", margin: "auto", display: "flex", flexDirection: "column", gap: "12px" }}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thông tin đã được gửi!");
      }}>
      <input type="text" placeholder="Họ tên" required />
      <input type="tel" placeholder="Số điện thoại" required />
      <textarea placeholder="Nội dung cần tư vấn" rows="4" required></textarea>
      <button type="submit" className="button">Gửi liên hệ</button>
    </form>
  </section>
);

const Footer = () => (
  <footer style={{ background: "#333", color: "#fff", padding: "1rem", textAlign: "center" }}>
    <img src="/logo.png" alt="logo" width="100" /><br />
    © 2025 Kiệt Design – 123 Đường Biển, Khánh Hòa
  </footer>
);

export default function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Video />
      <News />
      <Guide />
      <AppSection />
      <ContactForm />
      <Footer />
    </div>
  );
}