import Link from "next/link";

import loginStyles from "../styles/Others.module.css";

const login = () => {
  return (
    <main className={loginStyles.main}>
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Hello <span className="text-blue-400">L</span>ogin
        </h1>
        <Link href="/">
          <a className="text-blue-400">Go Back</a>
        </Link>
      </div>
    </main>
  );
};

export default login;
