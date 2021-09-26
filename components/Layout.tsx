import Footer from "./Footer";

import layoutStyles from "../styles/Home.module.css";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <main>
        <div className={layoutStyles.container}>
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
