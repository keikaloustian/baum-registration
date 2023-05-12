"use client";

import { SyntheticEvent, useState } from "react";
import logo from "../../../public/Logo-White-Vertical.png";
import Image from "next/image";
import Form from "@/components/Form";
import fiveRandomNumsBetween from "@/utils/fiveRandomNums";

const questionBank = [
  {
    prompt: "QUESTION 1",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "c",
  },
  {
    prompt: "QUESTION 2",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "c",
  },
  {
    prompt: "QUESTION 3",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "c",
  },
  {
    prompt: "QUESTION 4",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "c",
  },
  {
    prompt: "QUESTION 5",
    alternatives: { a: "this", b: "is", c: "test" },
    answer: "c",
  },
];

interface FormTypes {}

const validateForm = () => {};

const formHandler = (e: SyntheticEvent) => {
  e.preventDefault();
  alert("submitted");
};

export default function FormAndQs() {
  const questionIndices = fiveRandomNumsBetween(0, 4);

  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    email: "",
    opcion: "",
  });

  return (
    <main className="grid grid-cols-10 min-h-screen bg-white">
      {/* FIRST STEP: FORM */}
      {step === 1 && (
        <>
          <div className="bg-moss col-span-6 flex overflow-hidden">
            <Image
              src={logo}
              alt="Baum Music School Logo"
              className="self-center"
              priority
            ></Image>
          </div>
          <Form formData={formData} setFormData={setFormData}></Form>
          <button onClick={nextStep}>next</button>
        </>
      )}

      {/* Q1 */}
      {step === 2 && <p>{questionBank[questionIndices[step - 2]]}</p>}

      {/* Q2 */}
      {step === 3 && <p>{questionIndices[step - 2]}</p>}

      {/* Q3 */}
      {step === 4 && <p>{questionIndices[step - 2]}</p>}

      {/* Q4 */}
      {step === 5 && <p>{questionIndices[step - 2]}</p>}

      {/* Q5 */}
      {step === 6 && <p>{questionIndices[step - 2]}</p>}
    </main>
  );
}
