import ShopButton from "@/Components/ShopButton";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/Components/navbar";
export default function Home() {
  return (
    <div className="overflow-hidden  h-screen ">
      <Navbar />
      <div>
        <div className=" overflow-hidden">
          <div className="absolute gap-15 top-1/4 left-1/2 translate-x-[-50%] items-center flex flex-row text-white  overflow-y-hidden ">
            <div className=" mr-10">
              <div className=" text-4xl w-[600px] mb-10">
                "Discover the happiness that awaits with every click in our
                world of simple, joyful shopping. Your satisfaction is our
                promise."
              </div>
              <Link href={"/Shop"}>
                <ShopButton text="Shop now" />
              </Link>
            </div>
            <div className=" w-[90%]">
              <div className=" w-[400px] h-[400px] ">
                <Image
                  src="/cart.png"
                  width={1000}
                  height={1000}
                  alt="Shopping Cart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
