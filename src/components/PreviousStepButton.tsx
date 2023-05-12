import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function NextStepButton({ clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className="fixed bottom-8 left-8 h-12 w-12 rounded-full bg-dpink"
    >
      <ChevronLeftIcon className="text-white" />
    </button>
  );
}
