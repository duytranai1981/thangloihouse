import { Helmet } from "react-helmet";
import { EstimateLinks } from "./components/EstimateLinks";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Công Ty Xây Dựng ABC – Uy tín, chuyên nghiệp</title>
        <meta name="description" content="Thiết kế – Thi công – Xây nhà trọn gói. Đội ngũ kiến trúc sư và kỹ sư chuyên nghiệp." />
      </Helmet>
      <main className="flex flex-col min-h-screen">
        <EstimateLinks />
      </main>
    </>
  );
}
