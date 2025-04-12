export function BlogSection() {
  const blogs = [
    {
      title: "Xu hướng xây nhà năm 2025",
      excerpt: "Khám phá các phong cách thiết kế được ưa chuộng nhất năm nay.",
      date: "10/04/2025",
      image: "https://via.placeholder.com/400x200?text=Blog+1"
    },
    {
      title: "5 lưu ý khi thi công móng nhà",
      excerpt: "Móng là phần quan trọng nhất quyết định độ bền công trình.",
      date: "05/04/2025",
      image: "https://via.placeholder.com/400x200?text=Blog+2"
    }
  ];

  return (
    <section className="p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Tin Tức & Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-50 shadow p-4">
            <img src={blog.image} alt={blog.title} className="mb-2 w-full h-auto" />
            <h3 className="text-lg font-bold">{blog.title}</h3>
            <p className="text-sm text-gray-500">{blog.date}</p>
            <p className="mt-2">{blog.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
