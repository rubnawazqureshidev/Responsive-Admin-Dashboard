import Sidebar from "./Sidebar";
import Link from "next/link";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex">
        <div className="w-28 shadow h-screen max-h-screen fixed left-0">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="ml-28">
            <div className="bg-white flex justify-between items-center w-full p-2 shadow-sm">
              <div className="flex items-center">
                <img
                  src="/burger.png"
                  width="19"
                  height="10"
                  className="mr-5 ml-5"
                />

                <p className="text-sm md:text-lg xl:text-2xl text-slate-500 poppines font-bold">
                  Admin Dashboard
                </p>

                <div className="searchbox ml-10 hidden xl:block">
                  <div className="relative text-gray-600 focus-within:text-gray-400 border-b-2 border-gray-300">
                    <span className="absolute inset-y-0 left-0 flex items-center">
                      <button
                        type="submit"
                        className="px-1 focus:outline-none focus:shadow-outline"
                      >
                        <img src="search-icon.svg" />
                      </button>
                    </span>
                    <input
                      type="search"
                      name="q"
                      className="px-2 pb-1 text-sm text-slate-800 placeholder-gray-600 w-80 rounded-md pl-8 focus:outline-none focus:bg-white focus:text-gray-900"
                      placeholder="Search"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center mr-4">
                <img src="/avatar.png" className="w-14 h-14 cursor-pointer" />
                <p className="ml-1 text-slate-300 hidden md:block">Rubnawaz</p>
              </div>
            </div>
            <div className="ml-5 mt-5">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
