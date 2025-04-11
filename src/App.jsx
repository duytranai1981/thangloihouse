import React from "react";

const projects = [
  { src: "/mau-nha-cap-4-mai-thai-don-gian.jpg", title: "Nhà cấp 4 mái Thái", pdf: "/MB1.pdf" },
  { src: "/z6493123248080_4f072b1f7416a979230f5f9ef4c8b795.jpg", title: "Biệt thự sân vườn 2 tầng", pdf: "/MB6.pdf" }
];

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Dự án tiêu biểu</h2>
      <div className="gallery">
        {projects.map((p, idx) => (
          <div className="card" key={idx}>
            <img src={p.src} alt={p.title} />
            <div className="card-content">
              <h3>{p.title}</h3>
              {p.pdf && <a className="button" href={p.pdf} target="_blank">Xem mặt bằng</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}