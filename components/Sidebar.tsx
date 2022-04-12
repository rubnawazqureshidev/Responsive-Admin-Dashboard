import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  const navbarLinks = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <AiOutlineDashboard />,
    },
    {
      title: "Database",
      path: "/database",
      icon: <GoDatabase />,
    },
    {
      title: "Logout",
      path: "/",
      icon: <AiOutlineLogout />,
    },
  ];
  let simpleLink =
    "rounded-md py-2 mx-1 my-2 hover:bg-green-600 hover:text-white hover:shadow-lg text-center ";
  const activeLink = simpleLink + " bg-green-600 text-white shadow-lg";

  return (
    <>
      <div className="bg-slate-100">
        <div className="flex justify-center items-center">
          <Link href="/dashboard">
            <a>
              <div className="pt-3 mb-1">
                <Image
                  src="/favicon.ico"
                  width="50"
                  height="50"
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <ul className="flex flex-col text-sm text-center text-slate-400 h-2/3 overflow-y-auto">
        {navbarLinks.map((link) => (
          <li
            key={link.title}
            className={router.pathname === link.path ? activeLink : simpleLink}
          >
            <Link href={link.path} passHref>
              <a>
                <div className="mx-auto w-16 text-2xl justify-center flex mb-1">
                  {link.icon}
                </div>
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
