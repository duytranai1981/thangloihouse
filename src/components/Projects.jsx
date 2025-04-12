export function Projects() {
  const projects = [
    { name: "Nhà phố 3 tầng – TP.HCM", image: "https://via.placeholder.com/400x300?text=Du+an+1" },
    { name: "Biệt thự vườn – Đồng Nai", image: "https://via.placeholder.com/400x300?text=Du+an+2" },
    { name: "Cải tạo nhà cấp 4 – Bình Dương", image: "https://via.placeholder.com/400x300?text=Du+an+3" },
  ];

  return (
    <section className="p-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dự Án Tiêu Biểu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300">
            <img src={project.image} alt={project.name} className="w-full h-auto rounded-t-lg" />
            <div className="p-4 text-center">
              <h3 className="font-bold text-gray-700">{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
