import Link from "next/link";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Results({
  correctAnswers = 0,
}: {
  correctAnswers: number;
}) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center">
      <div className="self-center bg-white rounded relative overflow-hidden">
        <div className="bg-elime h-full w-full absolute clip-diagonal"></div>
        <div className="p-8 relative z-10">
          <h1 className="text-4xl tracking-widest mt-4 mb-6">
            Registro <span className="font-semibold">completado_</span>
          </h1>
          <p className="text-2xl tracking-widest my-2">
            Acertaste {correctAnswers} de las 5 preguntas
          </p>
          {correctAnswers === 5 && (
            <span className="text-2xl tracking-widest">
              ¡Entras a concursar por tu beca en{" "}
              <span className="font-semibold">Baum Music School!</span>
            </span>
          )}
        </div>
        <div className="flex justify-center mb-8 mt-4 relative z-10">
          <a href="/" className="flex flex-col">
            <ArrowPathIcon className="h-16 w-16 self-center" />
            <p className="text-lg tracking-wide ">REINICIAR</p>
          </a>
        </div>
      </div>
    </div>
  );
}
