import Link from "next/link";

const dashboard = () => {
  return (
    <main className="">
      <div className="flex justify-center items-center">
        <div className="bg-gray-800 p-4 w-full max-w-5xl rounded-xl m-2">
          <h1 className="text-4xl text-white">
            Hello <span className="text-blue-400">D</span>ashboard
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            incidunt asperiores nihil tempore et, quia soluta nesciunt, aliquid
            nemo odit totam dolore reiciendis deleniti. Deserunt veniam quisquam
            quae dolor. Numquam.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <div className="md:flex justify-center">
          <Link href="/genre">
            <a>
              <div className="border p-8 md:w-80 rounded-lg hover:border-blue-400 hover:text-blue-400 m-2 cursor-pointer">
                <h2 className="text-2xl font-bold flex justify-center items-center">
                  Genres &rarr;
                </h2>
              </div>
            </a>
          </Link>

          <Link href="/author">
            <a>
              <div className="border p-8 md:w-80 rounded-lg hover:border-blue-400 hover:text-blue-400 m-2 cursor-pointer">
                <h2 className="text-2xl font-bold flex justify-center items-center">
                  Authors &rarr;
                </h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="md:flex justify-center">
          <Link href="/book">
            <a>
              <div className="border p-8 md:w-80 rounded-lg hover:border-blue-400 hover:text-blue-400 m-2 cursor-pointer">
                <h2 className="text-2xl font-bold flex justify-center items-center">
                  Books &rarr;
                </h2>
              </div>
            </a>
          </Link>

          <Link href="/member">
            <a>
              <div className="border p-8 md:w-80 rounded-lg hover:border-blue-400 hover:text-blue-400 m-2 cursor-pointer">
                <h2 className="text-2xl font-bold flex justify-center items-center">
                  Members &rarr;
                </h2>
              </div>
            </a>
          </Link>
        </div>

        <Link href="/">
          <a>
            <span className="text-blue-400 flex justify-center cursor-pointer">
              Go Back
            </span>
          </a>
        </Link>
      </div>
    </main>
  );
};

export default dashboard;
