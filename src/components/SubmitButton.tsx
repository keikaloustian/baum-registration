import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function SubmitButton({ clickHandler, submitting }) {
  return (
    <button
      onClick={clickHandler}
      className={`fixed p-3 rounded-md  text-white bottom-9 right-12 font-sans text-xl tracking-widest font-normal flex ${
        !submitting ? "bg-moss" : "bg-moss/50"
      }`}
      disabled={submitting}
    >
      {!submitting ? (
        <>
          ENVIAR
          <PaperAirplaneIcon className="h-5 w-5 inline-block self-center ml-3" />
        </>
      ) : (
        "ENVIANDO..."
      )}
    </button>
  );
}
