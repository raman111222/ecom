import Image from "next/image";
import { Inter } from "next/font/google";
import MoreInfo from "./MoreInfoButton";
const Mukt = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export default function Carousel(props: {
  name: string;
  desciption: string;
  image: string;
  price: number;
}) {
  return (
    <div className="  w-[20%] mt-[5%] h-[390px] bg-white">
      <div className=" flex justify-center  flex-col text-black">
        <div className="flex items-center pl-1 ">
          <Image
            className="p-2 "
            src={props.image}
            width={300}
            height={200}
            alt="lamp"
          ></Image>
        </div>
        <div className="flex items-center ">
          <div className={Mukt.className + " text-xl font-semibold pl-3"}>
            {props.name}
          </div>
          <div className="text-xl font-medium ml-[30%]">${props.price}</div>
        </div>
        <div className=" flex">
          <MoreInfo />
        </div>
      </div>
    </div>
  );
}
