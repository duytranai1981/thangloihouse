export function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">CÔNG TY XÂY DỰNG ABC</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Trang chủ</a>
          <a href="#du-an" className="hover:underline">Dự án</a>
          <a href="#lien-he" className="hover:underline">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}
