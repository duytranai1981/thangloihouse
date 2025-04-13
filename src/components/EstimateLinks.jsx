export function EstimateLinks() {
  const links = [
    { label: "Báo Giá Thiết Kế Kiến Trúc", icon: "🖊️", href: "#bao-gia-thiet-ke" },
    { label: "Báo Giá Xây Dựng Phần Thô", icon: "🏗️", href: "#bao-gia-tho" },
    { label: "Báo Giá Xây Dựng Phần Hoàn Thiện", icon: "🏠", href: "#bao-gia-hoan-thien" },
  ];

  return (
    <section className="bg-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center px-4">
        {links.map((link, index) => (
          <a key={index}
             href={link.href}
             className="flex items-center justify-center px-6 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition duration-200 shadow-md text-center w-full md:w-auto">
            <span className="mr-2 text-xl">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
