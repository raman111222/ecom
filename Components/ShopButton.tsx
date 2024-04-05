import { FaArrowRight } from "react-icons/fa";
export default function ShopButton(props: { text: string }) {
  return (
    <div className=" w-[180px] h-10 gap-2 text-white bg-black border-white border-2 rounded-3xl flex items-center justify-center">
      {props.text} <FaArrowRight />
    </div>
  );
}
