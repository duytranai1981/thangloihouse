import { useState } from "react";

export function PriceEstimator() {
  const [area, setArea] = useState(100);
  const [level, setLevel] = useState("basic");

  const getPrice = () => {
    const base = level === "basic" ? 5 : level === "medium" ? 7 : 9;
    return area * base * 1000000;
  };

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Báo Giá Tạm Tính</h2>
      <div className="flex flex-col gap-4 max-w-md">
        <input
          type="number"
          className="border p-2"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Diện tích (m²)"
        />
        <select className="border p-2" value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="basic">Hoàn thiện cơ bản</option>
          <option value="medium">Hoàn thiện trung bình</option>
          <option value="high">Hoàn thiện cao cấp</option>
        </select>
        <div className="bg-white p-4 shadow">Tạm tính: {getPrice().toLocaleString()} VND</div>
      </div>
    </section>
  );
}
