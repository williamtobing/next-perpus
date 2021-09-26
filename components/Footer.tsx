import Link from "next/link";

import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="flex items-center h-full">
        <a
          href="https://williamsl.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Powered by <span className="text-blue-400">Sayap Suci</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
