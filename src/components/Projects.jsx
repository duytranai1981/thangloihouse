export function Projects() {
  const projects = [
    { name: "Nhà phố 3 tầng – TP.HCM", image: "https://via.placeholder.com/400x300?text=Du+an+1" },
    { name: "Biệt thự vườn – Đồng Nai", image: "https://via.placeholder.com/400x300?text=Du+an+2" },
    { name: "Cải tạo nhà cấp 4 – Bình Dương", image: "https://via.placeholder.com/400x300?text=Du+an+3" },
  ];

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Dự Án Tiêu Biểu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow p-4">
            <img src={project.image} alt={project.name} className="w-full h-auto mb-2" />
            <h3 className="font-bold">{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
