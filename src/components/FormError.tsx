import { XMarkIcon } from "@heroicons/react/20/solid";

export default function FormError({ message }: { message: string }) {
  return (
    <div className="flex text-red-600 relative">
      <div className="absolute">
        <XMarkIcon className="h-5 w-5 inline-block self-center" />
        <span className="text-sm  self-center">{message}</span>
      </div>
    </div>
  );
}
