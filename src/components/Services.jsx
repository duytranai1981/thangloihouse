export function Services() {
  return (
    <section className="p-10 bg-slate-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dịch Vụ</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          'Thiết kế kiến trúc',
          'Thi công xây dựng',
          'Trang trí nội thất'
        ].map((service, i) => (
          <li key={i} className="bg-white shadow-md rounded-xl p-6 text-center text-lg font-medium text-gray-700">
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}
