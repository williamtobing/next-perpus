import Link from "next/link";
import Head from "next/head";

import loginStyles from "../styles/Login.module.css";
import Router from "next/router";

const login = () => {
  const toDashboard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Router.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center">
            Hello from <span className="text-blue-400">L</span>ogin
          </h1>

          <div className="w-full mt-4 mb-6 flex justify-center items-center">
            <form onSubmit={toDashboard}>
              <label htmlFor="username" className="block">
                <span>Username</span>
                <input type="text" className={loginStyles.loginInput} />
              </label>

              <label htmlFor="password" className="block">
                <span>Password</span>
                <input type="password" className={loginStyles.loginInput} />
              </label>

              <div className="block text-center">
                <button
                  type="submit"
                  className="bg-blue-400 px-4 py-2 text-white font-bold rounded-lg hover:bg-blue-500 focus:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <Link href="/">
            <a>
              <span className="text-blue-400 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                Go Back
              </span>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default login;
