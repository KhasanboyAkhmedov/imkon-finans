import type { FC, ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import FAQLayout from "../components/faq-currency/faqLayout";
import PartnersCarousel from "../components/partners-carousel/partnersCarousel";
import ContactWithEmail from "../components/contact-with-email/contactWithEmail";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>
        {children}
        <PartnersCarousel />
        <FAQLayout />
        <ContactWithEmail />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
