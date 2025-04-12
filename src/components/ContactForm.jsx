export function ContactForm() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Liên Hệ</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input className="border p-2" placeholder="Họ và tên" />
        <input className="border p-2" placeholder="Email" />
        <textarea className="border p-2" placeholder="Nội dung"></textarea>
        <button className="bg-blue-600 text-white p-2">Gửi</button>
      </form>
    </section>
  );
}
