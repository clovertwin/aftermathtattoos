import PageNav from "./PageNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="delbarocks">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#delbarocks)"></rect>
      </svg>
      <PageNav />
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
