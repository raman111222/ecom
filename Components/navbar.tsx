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
    <div
      className={
        " p-10 flex font-semibold text-white h-[60px] w-screen border-b-1 border-white justify-between items-center"
      }
    >
      <div className="flex gap-10">
        <div>
          <Link href={"/"}>Home</Link>
        </div>
        <div>
          {" "}
          <Link href={"/Shop"}>Shop</Link>
        </div>
        <div>
          <Link href={"/Contact"}>Contact us</Link>
        </div>
      </div>
      <div className={inter.className + " text-3xl"}>
        <Link href={"/"}>
          <Image alt="logo" src={"/ll.png"} width={200} height={200} />
        </Link>
      </div>
      <div className="flex gap-7">
        <div className=" flex items-center justify-center">Login</div>
        <div>
          <Button text="Sign-up" />
        </div>
      </div>
    </div>
  );
}
