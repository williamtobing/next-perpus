import Meta from "./Meta";
import Footer from "./Footer";

import layoutStyles from "../styles/Home.module.css";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Meta />
      <div className={layoutStyles.container}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
