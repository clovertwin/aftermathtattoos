import PageNav from "./PageNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <PageNav />
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
