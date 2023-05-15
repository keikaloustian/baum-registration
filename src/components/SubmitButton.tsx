import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function SubmitButton({ clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className="fixed p-3 rounded-md bg-moss text-white bottom-9 right-12 font-sans text-xl tracking-widest font-normal flex"
    >
      ENVIAR
      <PaperAirplaneIcon className="h-5 w-5 inline-block self-center ml-3" />
    </button>
  );
}
