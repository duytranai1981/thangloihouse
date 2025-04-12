import { Helmet } from "react-helmet";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { AboutPage } from "./components/AboutPage";
import { BlogSection } from "./components/BlogSection";
import { PriceEstimator } from "./components/PriceEstimator";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Công Ty Xây Dựng ABC – Uy tín, chuyên nghiệp</title>
        <meta name="description" content="Thiết kế – Thi công – Xây nhà trọn gói. Đội ngũ kiến trúc sư và kỹ sư chuyên nghiệp." />
      </Helmet>
      <main className="flex flex-col min-h-screen">
        <Header />
        <HeroSection />
        <Services />
        <Projects />
        <AboutPage />
        <BlogSection />
        <PriceEstimator />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
