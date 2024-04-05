export default function Button(props: { text: string }) {
  return (
    <div className=" w-[90px] h-10 text-white bg-black border-white border-2 rounded-3xl flex items-center justify-center">
      {props.text}
    </div>
  );
}
