import Link from "next/link";

import dashboardStyles from "../styles/Others.module.css";

const dashboard = () => {
  return (
    <main className={dashboardStyles.main}>
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Hello <span className="text-blue-400">D</span>ashboard
        </h1>
        <Link href="/">
          <a className="text-blue-400">Go Back</a>
        </Link>
      </div>
    </main>
  );
};

export default dashboard;
