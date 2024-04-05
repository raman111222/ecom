import Button from "./button";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";

const inter = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Navbar() {
  return (
    <nav
      className=" p-10 flex font-semibold text-white h-[60px] w-screen border-b-1 border-white justify-between items-center"
      role="navigation"
      aria-label="Main"
    >
      <div className="flex gap-10" role="menubar">
        <div role="none">
          <Link href={"/"}>Home</Link>
        </div>
        <div role="none">
          <Link href={"/Shop"}>Shop</Link>
        </div>
        <div role="none">
          <Link href={"/Contact"}>Contact us</Link>
        </div>
      </div>
      <div className={inter.className + " text-3xl"}>
        <Link href={"/"}>
          <Image alt="Company logo" src={"/ll.png"} width={200} height={200} />
        </Link>
      </div>
      <div className="flex gap-7 items-center" role="menubar">
        <div role="none">
          <Link href={"/Login"}>
            <div className="flex items-center justify-center">Login</div>
          </Link>
        </div>
        <div role="none" className="flex items-center justify-center">
          <Button text="Sign-up" />
        </div>
      </div>
    </nav>
  );
}
