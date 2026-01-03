import type { FC, ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
