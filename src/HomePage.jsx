import { Helmet } from "react-helmet";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { EstimateLinks } from "./components/EstimateLinks";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Công Ty Xây Dựng ABC – Uy tín, chuyên nghiệp</title>
        <meta name="description" content="Thiết kế – Thi công – Xây nhà trọn gói." />
      </Helmet>
      <main className="flex flex-col min-h-screen">
        <Header />
        <HeroSection />
        <EstimateLinks />
        <Services />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
